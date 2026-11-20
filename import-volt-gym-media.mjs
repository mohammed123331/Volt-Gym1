#!/usr/bin/env node
/**
 * VOLT GYM Apify media importer
 * Run from the Bolt project root: node import-volt-gym-media.mjs
 * Downloads original Facebook CDN media to public/images/volt-gym/source/.
 * Signed Facebook URLs may expire; run this as soon as the file is added.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const assets = JSON.parse((await import('node:fs/promises')).readFile(new URL('./volt-media-assets.json', import.meta.url), 'utf8'));

const outDir = path.resolve('public/images/volt-gym/source');
const report = [];
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128 Safari/537.36',
  'Accept': '*/*',
  'Referer': 'https://www.facebook.com/'
};

async function download(urls, filename) {
  let lastError = 'No source URL';
  for (const url of (urls || [])) {
    try {
      const response = await fetch(url, { headers, signal: AbortSignal.timeout(60000), redirect: 'follow' });
      if (!response.ok) { lastError = `HTTP ${response.status}`; continue; }
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 1200) { lastError = `Unexpectedly small response (${buffer.length} bytes)`; continue; }
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) { lastError = 'Got HTML instead of media'; continue; }
      await writeFile(path.join(outDir, filename), buffer);
      return { ok: true, bytes: buffer.length, contentType };
    } catch (error) { lastError = error?.message || String(error); }
  }
  return { ok: false, error: lastError };
}

await mkdir(outDir, { recursive: true });
console.log(`Importing ${assets.length} media items to ${outDir}`);
for (let start = 0; start < assets.length; start += 3) {
  const batch = assets.slice(start, start + 3);
  const results = await Promise.all(batch.map(async asset => {
    const main = await download(asset.urls, asset.filename);
    let poster = null;
    if (asset.type === 'video' && asset.posterFilename) poster = await download(asset.posterUrls, asset.posterFilename);
    const result = {
      id: asset.id, type: asset.type, filename: asset.filename,
      localPath: `public/images/volt-gym/source/${asset.filename}`,
      downloaded: main.ok, bytes: main.bytes || 0, contentType: main.contentType || null,
      error: main.error || null,
      posterFilename: asset.posterFilename || null,
      posterDownloaded: poster?.ok ?? null,
      posterError: poster?.error || null,
      date: asset.date, width: asset.width, height: asset.height,
      postUrl: asset.postUrl, postText: asset.postText, ocrText: asset.ocrText
    };
    console.log(`${result.downloaded ? 'OK' : 'FAILED'} ${asset.id} ${asset.filename} ${result.bytes ? `(${result.bytes} bytes)` : result.error}`);
    return result;
  }));
  report.push(...results);
}
const manifest = { generatedAt: new Date().toISOString(), source: 'VOLT GYM Facebook page posts collected with Apify', assets: report };
await writeFile(path.join(outDir, 'import-report.json'), JSON.stringify(manifest, null, 2), 'utf8');
const success = report.filter(x => x.downloaded).length;
console.log(`\nFinished: ${success}/${report.length} main media files downloaded.`);
console.log(`Report: ${path.join(outDir, 'import-report.json')}`);
if (success === 0) process.exitCode = 1;

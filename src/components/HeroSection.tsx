import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play } from 'lucide-react';
import { voltConfig } from '@/data/voltConfig';
import VoltImage from '@/components/VoltImage';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Only attempt playback when the user allows motion — the poster stays
  // otherwise, keeping mobile data usage and CPU low.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.play().catch(() => {
      /* autoplay blocked — poster fallback is already in place */
    });
  }, [reducedMotion]);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background: real VOLT promo video when supplied, branded poster otherwise.
          The video file lives at /public/images/volt-gym/hero.mp4 — drop it in
          and it plays automatically; no code change needed. */}
      <div className="absolute inset-0" aria-hidden="true">
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster={voltConfig.assets.heroPoster}
          >
            <source src={voltConfig.assets.heroVideo} type="video/mp4" />
          </video>
        )}
        {reducedMotion && (
          <VoltImage
            src={voltConfig.assets.heroPoster}
            alt=""
            decorative
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Cinematic dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-volt-black/80 via-volt-black/60 to-volt-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.55)_100%)]" />
      </div>

      <div className="volt-container relative z-10 pb-24 pt-32 text-center lg:pb-32 lg:pt-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <p className="animate-fadeUp text-xs font-bold uppercase tracking-[0.35em] text-volt-red [animation-delay:100ms]">
            SOHAG · EGYPT
          </p>

          <h1 className="animate-fadeUp text-4xl font-black leading-[1.15] sm:text-5xl lg:text-6xl [animation-delay:200ms]">
            {voltConfig.heroHeadline}
          </h1>

          <p className="animate-fadeUp max-w-xl text-base leading-relaxed text-volt-gray sm:text-lg [animation-delay:300ms]">
            {voltConfig.heroSubtext}
          </p>

          <div className="animate-fadeUp flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row [animation-delay:400ms]">
            <Link to="/#join" className="volt-btn-primary w-full sm:w-auto">
              استفسر عن الاشتراك
            </Link>
            <Link to="/#programs" className="volt-btn-outline w-full sm:w-auto">
              اكتشف برامجنا
            </Link>
          </div>

          <a
            href="#about"
            className="animate-fadeUp mt-6 inline-flex items-center gap-2 text-xs font-semibold text-volt-gray transition-colors hover:text-volt-red [animation-delay:500ms]"
          >
            <ChevronDown size={16} className="animate-bounce" />
            اعرف أكتر عن VOLT
          </a>
        </div>
      </div>

      {/* Bottom marquee strip — brand rhythm without noise */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-volt-line/50 bg-volt-black/70 py-3 backdrop-blur-sm" aria-hidden="true">
        <div className="flex w-[200%] animate-marquee gap-8" dir="ltr">
          {[0, 1].map((half) => (
            <div key={half} className="flex w-1/2 shrink-0 items-center justify-around gap-8">
              {['طلّع البطل اللي جواك', 'VOLT GYM', 'جيم · كلاسات · كاراتيه أطفال', 'سوهاج — الزهراء'].map(
                (word, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.25em] text-volt-gray/70"
                  >
                    {word}
                    <Play size={10} className="text-volt-red" fill="currentColor" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

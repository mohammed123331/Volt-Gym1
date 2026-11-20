import { useState, useEffect } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  className?: string;
  label?: string;
}

/**
 * Shareable-profile helper: native share when the device supports it,
 * otherwise copies the link with visible confirmation — no silent failures.
 */
export default function ShareButton({ title, text, className = '', label = 'مشاركة الصفحة' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator.share === 'function'), []);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('انسخ الرابط من هنا:', url);
    }
  };

  return (
    <button type="button" onClick={share} className={className || 'volt-btn-outline'}>
      {copied ? <Check size={16} /> : canShare ? <Share2 size={16} /> : <Copy size={16} />}
      {copied ? 'تم نسخ الرابط' : label}
    </button>
  );
}

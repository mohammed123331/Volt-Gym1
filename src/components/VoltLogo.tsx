import { useState } from 'react';
import { Zap } from 'lucide-react';
import { voltConfig } from '@/data/voltConfig';

interface VoltLogoProps {
  className?: string;
  compact?: boolean;
}

export default function VoltLogo({ className = '', compact = false }: VoltLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={voltConfig.assets.logo}
        alt="شعار VOLT GYM"
        onError={() => setFailed(true)}
        className={className}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="شعار VOLT GYM">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-volt-red text-white shadow-[0_8px_20px_-8px_rgba(229,36,48,0.8)]">
        <Zap size={21} fill="currentColor" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-black tracking-[0.14em] text-white">VOLT</span>
        {!compact && <span className="mt-0.5 text-[9px] font-bold tracking-[0.38em] text-volt-red">GYM</span>}
      </span>
    </span>
  );
}

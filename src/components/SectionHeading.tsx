interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
}

/** Consistent editorial section header used across all homepage sections. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-start';
  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-volt-red">
        <span className="h-px w-6 bg-volt-red" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-6 bg-volt-red" aria-hidden="true" />
      </span>
      <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-volt-gray sm:text-base">{description}</p>
      )}
    </div>
  );
}

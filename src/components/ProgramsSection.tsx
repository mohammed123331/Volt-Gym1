import { Link } from 'react-router-dom';
import { ArrowLeft, Dumbbell, HeartPulse, MessageCircle, Scale, ShieldPlus, Swords, Trophy, Users } from 'lucide-react';
import { programs, type Program } from '@/data/programs';
import { whatsappUrl, membershipLink } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';
import VoltImage from '@/components/VoltImage';

const visualMap = {
  strength: { icon: Dumbbell, label: 'قوة · تركيز · تقدم', tone: 'from-volt-red/30 via-volt-red/5' },
  fitness: { icon: HeartPulse, label: 'طاقة · حركة · لياقة', tone: 'from-white/15 via-white/5' },
  weight: { icon: Scale, label: 'توازن · عادة · نتيجة', tone: 'from-volt-red/20 via-transparent' },
  rehab: { icon: ShieldPlus, label: 'تدرّج · أمان · عودة', tone: 'from-white/10 via-transparent' },
  group: { icon: Users, label: 'طاقة جماعية · التزام', tone: 'from-volt-red/20 via-transparent' },
  sports: { icon: Trophy, label: 'تحدي · مهارة · ثقة', tone: 'from-white/10 via-transparent' },
  karate: { icon: Swords, label: 'انضباط · ثقة · حركة', tone: 'from-volt-red/25 via-transparent' },
} as const;

function ProgramCard({ program }: { program: Program }) {
  const visual = visualMap[program.id as keyof typeof visualMap];
  const Icon = visual.icon;

  return (
    <article className="volt-card group flex flex-col">
      <div className="relative overflow-hidden">
        {program.image ? (
          <VoltImage
            src={program.image}
            alt={program.imageAlt ?? program.name}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-volt-charcoal2 bg-gradient-to-br ${visual.tone} to-transparent`}>
            <div className="absolute -left-10 -top-12 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -right-12 h-48 w-48 rounded-full border-[18px] border-volt-red/10" />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-volt-red/50 bg-volt-black/70 text-volt-red shadow-[0_12px_30px_-16px_rgba(229,36,48,0.8)]">
                <Icon size={27} strokeWidth={1.7} />
              </span>
              <span className="text-[11px] font-bold tracking-wide text-volt-gray">{visual.label}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-volt-charcoal via-transparent to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-extrabold">{program.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-volt-gray">{program.description}</p>
        <Link
          to={membershipLink(program.name)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-volt-red transition-all hover:gap-2.5"
          aria-label={`استفسر عن برنامج ${program.name}`}
        >
          استفسر عن البرنامج
          <ArrowLeft size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 bg-volt-charcoal/40 py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="البرامج"
          title="اختار البرنامج اللي يناسب هدفك"
          description="من تمارين الحديد للكلاسات الجماعية لكاراتيه الأطفال — في VOLT GYM كل واحد يلاقي برنامجه."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl('السلام عليكم، عايز أستفسر عن البرامج المتاحة في VOLT GYM.')}
            target="_blank"
            rel="noopener noreferrer"
            className="volt-btn-outline"
          >
            <MessageCircle size={16} />
            اسأل عن البرنامج المناسب لك على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}

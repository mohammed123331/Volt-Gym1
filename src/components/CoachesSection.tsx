import { Link } from 'react-router-dom';
import { BadgeCheck, MessageCircle, Zap } from 'lucide-react';
import { coaches } from '@/data/coaches';
import { whatsappUrl } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';

export default function CoachesSection() {
  return (
    <section id="coaches" className="scroll-mt-24 bg-volt-charcoal/40 py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="الكباتن"
          title="الكباتن المعتمدين في VOLT"
          description="معلومات مؤكدة فقط — من غير صور أو مؤهلات أو تفاصيل غير معتمدة."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <article key={coach.slug} className="volt-card group flex flex-col">
              <div className="relative flex min-h-[220px] items-end overflow-hidden bg-volt-charcoal2 p-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-volt-red/25' : 'from-white/10'} via-transparent to-volt-black`} />
                <div className="absolute -left-8 top-8 h-36 w-36 rounded-full border border-white/10" />
                <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full border-[18px] border-volt-red/10" />
                <div className="relative z-10">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-volt-red/50 bg-volt-black/60 text-volt-red"><Zap size={24} fill="currentColor" /></span>
                  <p className="font-display text-xs font-bold tracking-[0.3em] text-volt-gray/70">VOLT COACH</p>
                  <h3 className="mt-1 text-xl font-black text-white">{coach.name}</h3>
                </div>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-volt-black/80 px-2.5 py-1 text-[10px] font-bold text-volt-red backdrop-blur-sm"><BadgeCheck size={11} />معلومات مؤكدة</span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm leading-relaxed text-volt-gray">{coach.intro}</p>
                {coach.specialties.length > 0 && <div className="flex flex-wrap gap-1.5">{coach.specialties.map((specialty) => <span key={specialty} className="volt-chip !border-volt-red/40 !bg-volt-redSoft !text-[10px] !text-volt-red">{specialty}</span>)}</div>}
                {coach.attendance && <p className="rounded-lg border border-volt-line bg-volt-black/50 px-3 py-2 text-xs font-semibold text-volt-gray">{coach.attendance.label}</p>}
                <div className="mt-auto flex flex-col gap-2 pt-1 sm:flex-row">
                  <Link to={`/coaches/${coach.slug}`} className="volt-btn-outline flex-1 !px-3 !py-2.5 text-xs">صفحة الكابتن</Link>
                  <a href={whatsappUrl(`السلام عليكم، عايز أستفسر عن ${coach.name}.`)} target="_blank" rel="noopener noreferrer" className="volt-btn-primary flex-1 !px-3 !py-2.5 text-xs"><MessageCircle size={15} />واتساب</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

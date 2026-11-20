import { useState } from 'react';
import { CalendarDays, Clock3, MessageCircle, UserRound } from 'lucide-react';
import { classes, dayLabels, type ClassDay } from '@/data/classes';
import { whatsappUrl } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';

const filters: Array<{ value: 'all' | ClassDay; label: string }> = [
  { value: 'all', label: 'كل الأيام' },
  { value: 'sunday', label: 'الأحد' },
  { value: 'monday', label: 'الاثنين' },
  { value: 'tuesday', label: 'الثلاثاء' },
  { value: 'wednesday', label: 'الأربعاء' },
  { value: 'thursday', label: 'الخميس' },
];

export default function ScheduleSection() {
  const [day, setDay] = useState<'all' | ClassDay>('all');
  const visible = day === 'all' ? classes : classes.filter((gymClass) => gymClass.days.includes(day));

  return (
    <section id="classes" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="الكلاسات"
          title="جدول الكلاسات الأسبوعي"
          description="المواعيد المعتمدة للكلاسات الجماعية — اختار اليوم واعرف الكلاس والكابتن والميعاد."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="تصفية الكلاسات باليوم">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setDay(filter.value)}
              aria-pressed={day === filter.value}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${day === filter.value ? 'bg-volt-red text-white' : 'border border-volt-line bg-volt-charcoal text-volt-gray hover:text-white'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {visible.map((gymClass) => (
            <article key={gymClass.id} className="volt-card flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-volt-red/60">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-volt-redSoft text-volt-red">
                  <CalendarDays size={22} />
                </span>
                <span className="rounded-full border border-volt-red/40 bg-volt-redSoft px-3 py-1 text-[11px] font-bold text-volt-red">معتمد</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-relaxed">{gymClass.category}</h3>
              <div className="mt-5 space-y-3 border-t border-volt-line pt-4 text-sm">
                <p className="flex items-start gap-3 text-volt-gray"><CalendarDays size={17} className="mt-0.5 shrink-0 text-volt-red" /><span><strong className="text-white">الأيام:</strong> {gymClass.days.map((classDay) => dayLabels[classDay]).join('، ')}</span></p>
                <p className="flex items-center gap-3 text-volt-gray"><Clock3 size={17} className="shrink-0 text-volt-red" /><span><strong className="text-white">الميعاد:</strong> {gymClass.time}</span></p>
                <p className="flex items-center gap-3 text-volt-gray"><UserRound size={17} className="shrink-0 text-volt-red" /><span><strong className="text-white">الكابتن:</strong> {gymClass.coachName}</span></p>
              </div>
              <a
                href={whatsappUrl(`السلام عليكم، عايز أستفسر عن كلاس ${gymClass.category} مع ${gymClass.coachName}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="volt-btn-outline mt-6 w-full !py-2.5 text-xs"
              >
                <MessageCircle size={16} />
                استفسر عن الكلاس
              </a>
            </article>
          ))}
        </div>

        {visible.length === 0 && <p className="mt-10 text-center text-sm text-volt-gray">مفيش كلاس مسجل في اليوم ده.</p>}
      </div>
    </section>
  );
}

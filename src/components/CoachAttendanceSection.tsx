import { Clock3, MessageCircle, SunMedium, UserRound } from 'lucide-react';
import { coaches } from '@/data/coaches';
import { whatsappUrl } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';

export default function CoachAttendanceSection() {
  const attendingCoaches = coaches.filter((coach) => coach.attendance);

  return (
    <section id="attendance" className="scroll-mt-24 bg-volt-black py-20 lg:py-24">
      <div className="volt-container">
        <SectionHeading
          eyebrow="التواجد"
          title="مواعيد تواجد الكباتن"
          description="دي مواعيد تواجد الكباتن في النادي، ومش بالضرورة تكون مواعيد كلاسات."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {attendingCoaches.map((coach) => (
            <article key={coach.slug} className="volt-card relative overflow-hidden p-6 sm:p-7">
              <SunMedium className="absolute -left-4 -top-5 text-volt-red/10" size={110} />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-volt-red/40 bg-volt-redSoft text-volt-red"><UserRound size={22} /></span>
                  <div>
                    <h3 className="text-lg font-extrabold">{coach.name}</h3>
                    <p className="mt-1 text-xs text-volt-gray">{coach.attendance?.label}</p>
                  </div>
                </div>
                {coach.attendance?.days && (
                  <p className="mt-6 flex items-start gap-3 text-sm text-volt-gray"><UserRound size={17} className="mt-0.5 shrink-0 text-volt-red" /><span><strong className="text-white">الأيام:</strong> {coach.attendance.days}</span></p>
                )}
                {coach.attendance?.time && (
                  <p className="mt-3 flex items-center gap-3 text-sm text-volt-gray"><Clock3 size={17} className="shrink-0 text-volt-red" /><span><strong className="text-white">التواجد:</strong> {coach.attendance.time}</span></p>
                )}
                <a href={whatsappUrl(`السلام عليكم، عايز أستفسر عن مواعيد تواجد ${coach.name}.`)} target="_blank" rel="noopener noreferrer" className="volt-btn-outline mt-6 w-full !py-2.5 text-xs">
                  <MessageCircle size={16} />
                  استفسر عن التواجد
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { BadgeCheck, Clock3, MessageCircle, Shield, Trophy } from 'lucide-react';
import { getCoach } from '@/data/coaches';
import { whatsappUrl } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';
import VoltImage from '@/components/VoltImage';

export default function KarateSection() {
  const coach = getCoach('malak-ali');
  const karate = coach?.karate;
  if (!coach || !karate) return null;

  return (
    <section id="karate" className="scroll-mt-24 bg-volt-charcoal/40 py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading eyebrow="الكاراتيه" title="كاراتيه الأطفال مع كابتن ملك" description="تدريب متخصص للأطفال من سن 5 سنوات، مع تجهيز بدني ومهاري للبطولات." />
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-volt-line bg-volt-charcoal lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[320px] overflow-hidden">
            <VoltImage src="/images/volt-gym/karate-program.jpg" alt="تدريب كاراتيه للأطفال داخل VOLT GYM" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-volt-black via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between gap-4">
              <div><p className="text-xs font-bold text-volt-red">VOLT KARATE</p><p className="mt-1 text-xl font-black">كابتن ملك علي أحمد علي</p></div>
              <BadgeCheck className="shrink-0 text-volt-red" size={28} />
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-2"><span className="volt-chip !border-volt-red/40 !bg-volt-redSoft !text-volt-red">حزام أسود</span><span className="volt-chip !border-volt-red/40 !bg-volt-redSoft !text-volt-red">خبرة 10 سنين</span><span className="volt-chip !border-volt-red/40 !bg-volt-redSoft !text-volt-red">حكم منطقة</span></div>
            <p className="mt-4 text-sm leading-relaxed text-volt-gray">حاصلة على العديد من البطولات.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {karate.details.map((detail) => <div key={detail} className="flex items-center gap-2 rounded-lg border border-volt-line bg-volt-black/50 px-3 py-3 text-sm font-semibold"><Shield size={17} className="shrink-0 text-volt-red" />{detail}</div>)}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-volt-line bg-volt-black/50 p-4"><Clock3 size={19} className="text-volt-red" /><p className="mt-2 text-sm font-bold leading-relaxed">{karate.schedule}</p></div>
              <div className="rounded-xl border border-volt-red/40 bg-volt-redSoft p-4"><Trophy size={19} className="text-volt-red" /><p className="mt-2 text-xs text-volt-gray">الاشتراك</p><p className="text-2xl font-black text-white">{karate.fee}</p></div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl('السلام عليكم، عايز أستفسر عن تدريب كاراتيه الأطفال مع كابتن ملك علي أحمد علي.')} target="_blank" rel="noopener noreferrer" className="volt-btn-primary flex-1"><MessageCircle size={16} />استفسر على واتساب</a><Link to="/coaches/malak-ali" className="volt-btn-outline flex-1">صفحة الكابتن</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Clock3, Dumbbell, MessageCircle, Shield, UserRound, Zap } from 'lucide-react';
import { getCoach } from '@/data/coaches';
import { classes, dayLabels } from '@/data/classes';
import { whatsappUrl } from '@/data/voltConfig';
import ShareButton from '@/components/ShareButton';
import { useEffect } from 'react';

export default function CoachProfile() {
  const { slug } = useParams<{ slug: string }>();
  const coach = getCoach(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (coach) document.title = `${coach.name} | VOLT GYM سوهاج`;
    return () => {
      document.title = 'VOLT GYM سوهاج | طلّع البطل اللي جواك';
    };
  }, [coach]);

  if (!coach) {
    return (
      <main className="volt-container flex min-h-[70vh] flex-col items-center justify-center gap-4 pt-24 text-center">
        <h1 className="text-2xl font-extrabold">مفيش صفحة كابتن بالرابط ده</h1>
        <p className="text-sm text-volt-gray">يمكن الرابط قديم أو فيه خطأ في الكتابة.</p>
        <Link to="/#coaches" className="volt-btn-primary mt-2"><ArrowRight size={16} />رجوع لصفحة الكباتن</Link>
      </main>
    );
  }

  const coachClasses = classes.filter((gymClass) => gymClass.coachSlug === coach.slug);
  const inquiryMsg = `السلام عليكم، شفت صفحة ${coach.name} على موقع VOLT GYM وعايز أستفسر عن خدمات الكابتن.`;

  return (
    <main className="pt-16 lg:pt-20">
      <header className="relative overflow-hidden border-b border-volt-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(229,36,48,0.26),transparent_34%),linear-gradient(135deg,#1c1c1c,#080808)]" aria-hidden="true" />
        <Dumbbell className="absolute bottom-10 left-10 text-white/10" size={180} strokeWidth={0.8} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-volt-black/30 via-volt-black/70 to-volt-black" aria-hidden="true" />
        <div className="volt-container relative z-10 py-12 lg:py-16">
          <Link to="/#coaches" className="inline-flex items-center gap-1.5 text-xs font-bold text-volt-gray transition-colors hover:text-volt-red"><ArrowRight size={14} />كل الكباتن</Link>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-end">
            <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl border-2 border-volt-red/60 bg-volt-charcoal2 shadow-[0_16px_48px_-12px_rgba(229,36,48,0.4)] sm:h-44 sm:w-44"><Zap className="text-volt-red" size={58} fill="currentColor" strokeWidth={1.5} /></div>
            <div className="text-center sm:text-start"><span className="volt-chip mb-3 !border-volt-red/40 !text-volt-red"><BadgeCheck size={12} />معلومات مؤكدة</span><h1 className="text-2xl font-black sm:text-3xl lg:text-4xl">{coach.name}</h1><p className="mt-2 max-w-md text-sm leading-relaxed text-volt-gray">{coach.intro}</p></div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl(inquiryMsg)} target="_blank" rel="noopener noreferrer" className="volt-btn-primary"><MessageCircle size={16} />استفسر على واتساب</a><ShareButton title={coach.name} text={`صفحة ${coach.name} — VOLT GYM سوهاج`} /></div>
        </div>
      </header>

      <div className="volt-container grid gap-8 py-12 lg:grid-cols-2 lg:py-16">
        <section aria-labelledby="coach-specialties" className="volt-card p-6 sm:p-8">
          <h2 id="coach-specialties" className="text-lg font-extrabold">التخصصات والمعلومات</h2>
          {coach.specialties.length > 0 ? <ul className="mt-4 flex flex-wrap gap-2">{coach.specialties.map((specialty) => <li key={specialty} className="volt-chip !border-volt-red/40 !bg-volt-redSoft !text-volt-red"><Shield size={13} />{specialty}</li>)}</ul> : <p className="mt-4 text-sm text-volt-gray">لم يتم اعتماد تخصصات إضافية لهذا الكابتن.</p>}
          {coach.karate && <div className="mt-6 space-y-3 border-t border-volt-line pt-5"><p className="flex items-start gap-3 text-sm text-volt-gray"><UserRound size={17} className="mt-0.5 shrink-0 text-volt-red" />{coach.karate.age}</p><p className="flex items-start gap-3 text-sm text-volt-gray"><Clock3 size={17} className="mt-0.5 shrink-0 text-volt-red" />{coach.karate.schedule}</p><p className="text-2xl font-black text-white">{coach.karate.fee}</p>{coach.karate.details.map((detail) => <p key={detail} className="text-sm text-volt-gray">{detail}</p>)}</div>}
        </section>

        <section aria-labelledby="coach-schedule" className="volt-card p-6 sm:p-8">
          <h2 id="coach-schedule" className="text-lg font-extrabold">الكلاسات ومواعيد التواجد</h2>
          {coachClasses.length > 0 && <ul className="mt-4 divide-y divide-volt-line">{coachClasses.map((gymClass) => <li key={gymClass.id} className="py-3"><div className="flex items-start justify-between gap-3"><span className="text-sm font-bold">{gymClass.category}</span><span className="shrink-0 text-xs text-volt-gray">{gymClass.time}</span></div><p className="mt-1 text-xs text-volt-gray">{gymClass.days.map((classDay) => dayLabels[classDay]).join('، ')}</p></li>)}</ul>}
          {coach.attendance && <div className="mt-4 rounded-xl border border-volt-line bg-volt-black/50 p-4"><p className="text-sm font-bold">{coach.attendance.label}</p>{coach.attendance.days && <p className="mt-2 text-xs text-volt-gray">{coach.attendance.days}</p>}{coach.attendance.time && <p className="mt-1 text-xs text-volt-gray">{coach.attendance.time}</p>}</div>}
          {coachClasses.length === 0 && !coach.attendance && <p className="mt-4 text-sm text-volt-gray">لا توجد مواعيد إضافية مسجلة لهذا الكابتن.</p>}
        </section>
      </div>

      <div className="volt-container pb-20"><div className="flex flex-col items-center gap-4 rounded-2xl border border-volt-line bg-volt-charcoal/60 p-8 text-center"><p className="text-lg font-extrabold">عايز تستفسر عن {coach.name}؟</p><p className="max-w-md text-sm text-volt-gray">تواصل مع فريق VOLT مباشرة برسالة واتساب جاهزة.</p><div className="flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl(inquiryMsg)} target="_blank" rel="noopener noreferrer" className="volt-btn-primary"><MessageCircle size={16} />تواصل على واتساب</a><Link to="/#classes" className="volt-btn-outline">جدول الكلاسات</Link></div></div></div>
    </main>
  );
}

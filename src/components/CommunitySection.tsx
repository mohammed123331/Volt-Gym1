import { Link } from 'react-router-dom';
import { Flame, Facebook, Lightbulb, Megaphone, Target, Zap } from 'lucide-react';
import { announcements, challenges, tips } from '@/data/announcements';
import { voltConfig } from '@/data/voltConfig';
import SectionHeading from '@/components/SectionHeading';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function CommunitySection() {
  return (
    <section id="community" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="مجتمع VOLT"
          title="مش عميل... إنت من النادي"
          description="إعلانات النادي، التحديات، نصايح التمرين — كل اللي يخلي تجربتك في VOLT أكمل، زي ما بيقولوا: طلّع البطل اللي جواك."
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-lg font-extrabold"><Megaphone size={20} className="text-volt-red" aria-hidden="true" />آخر الإعلانات</h3>
            {announcements.map((a) => (
              <article key={a.id} className="volt-card p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="volt-chip !text-[10px] !text-volt-red">{a.tag}</span>
                  <time dateTime={a.date} className="text-[11px] text-volt-gray/70">{formatDate(a.date)}</time>
                </div>
                <h4 className="mt-3 text-sm font-extrabold">{a.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-volt-gray">{a.body}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-lg font-extrabold"><Target size={20} className="text-volt-red" aria-hidden="true" />التحديات</h3>
            {challenges.map((c) => (
              <article key={c.id} className="volt-card group relative">
                <div className="relative">
                  {c.video ? (
                    <video className="aspect-[16/9] w-full object-cover" controls muted playsInline preload="metadata" poster={c.image} aria-label={c.imageAlt}>
                      <source src={c.video} type="video/mp4" />
                    </video>
                  ) : c.image ? (
                    <img src={c.image} alt={c.imageAlt} className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-volt-charcoal2">
                      <div className="absolute h-40 w-40 rounded-full border-[18px] border-volt-red/10" />
                      <Target className="relative text-volt-red/80" size={52} strokeWidth={1.2} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-volt-charcoal to-transparent" aria-hidden="true" />
                  {c.active && <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-volt-red px-2.5 py-1 text-[10px] font-bold"><Flame size={11} />شغال حاليًا</span>}
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-extrabold">{c.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-volt-gray">{c.body}</p>
                  <Link to="/#join" className="mt-3 inline-block text-xs font-bold text-volt-red hover:underline">شارك في التحدي — استفسر هنا</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-lg font-extrabold"><Lightbulb size={20} className="text-volt-red" aria-hidden="true" />نصايح التمرين</h3>
            <div className="relative overflow-hidden rounded-2xl border border-volt-line bg-volt-charcoal p-6">
              <Zap className="absolute -left-2 -top-3 text-volt-red/10" size={100} fill="currentColor" />
              <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-volt-red">VOLT MINDSET</p>
              <p className="relative mt-3 text-xl font-black leading-snug">الاستمرارية أقوى من الحماس</p>
              <p className="relative mt-2 text-xs leading-relaxed text-volt-gray">نصايح عملية تخليك تتمرن بذكاء وتبني عادة تكمّل معاك.</p>
            </div>
            {tips.map((t) => (
              <article key={t.id} className="volt-card p-5">
                <span className="volt-chip !text-[10px] !text-volt-red">{t.category}</span>
                <h4 className="mt-3 text-sm font-extrabold">{t.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-volt-gray">{t.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-volt-line bg-volt-charcoal/60 p-8 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/#classes" className="volt-btn-outline !px-5 !py-2.5 !text-xs">جدول الكلاسات</Link>
            <Link to="/#coaches" className="volt-btn-outline !px-5 !py-2.5 !text-xs">الكباتن</Link>
            <Link to="/#programs" className="volt-btn-outline !px-5 !py-2.5 !text-xs">البرامج</Link>
            <Link to="/#contact" className="volt-btn-outline !px-5 !py-2.5 !text-xs">مكان النادي</Link>
            <a href={`https://wa.me/${voltConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="volt-btn-primary !px-5 !py-2.5 !text-xs">واتساب النادي</a>
          </div>
          <a href={voltConfig.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-volt-gray transition-colors hover:text-volt-red"><Facebook size={18} />تابع صفحة VOLT GYM الرسمية على فيسبوك — كل التحديثات الأول أول بتنزل هناك</a>
        </div>
      </div>
    </section>
  );
}

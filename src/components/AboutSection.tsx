import { Link } from 'react-router-dom';
import { Dumbbell, Flame, HeartPulse, LineChart, Medal, Users, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const pillars = [
  { icon: LineChart, title: 'تطورك هدفنا', body: 'كل متدرب له نقطة بداية مختلفة — إحنا بنقيس تقدمك خطوة بخطوة، وبنحتفل بكل إنجاز مهما كان صغير.' },
  { icon: Dumbbell, title: 'تمرين صح ومظبوط', body: 'الأداء الصح الأول: الكباتن بيقفوا معاك عشان تتعلم الأداء السليم قبل الوزن التقيل، عشان تتمرن آمن وبذكاء.' },
  { icon: Flame, title: 'أهداف واضحة', body: 'سواء هدفك خسارة وزن، بناء عضلات، زيادة اللياقة، أو لعب رياضة بتحبها — في VOLT في برنامج لكل هدف.' },
  { icon: Users, title: 'جو ترحيبي', body: 'في VOLT مفيش مكان للحرج — الجو عائلي، وكل عضو بيتعامل كأنه جزء من النادي من أول يوم.' },
  { icon: HeartPulse, title: 'دعم الكباتن', body: 'كباتن النادي معاك في كل خطوة — من أول يوم تعريف حتى ما توصل لهدفك وتكمّل بعده.' },
  { icon: Medal, title: 'بيئة تحفّزك', body: 'أجهزة ومساحات تدريب مصممة عشان تحب التمرين، وطاقة المكان نفسها بتشدك ترجع تاني.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <SectionHeading
          eyebrow="عن VOLT"
          title="مش مجرد جيم... دي بداية تغيير."
          description="في VOLT GYM صدقنا إن كل واحد فينا جواه بطل مستني الفرصة. مش بنبيع اشتراكات — إحنا بنصاحبك في رحلة تغيير حقيقي: جسم أقوى، لياقة أحسن، وثقة أعلى."
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-volt-line bg-volt-charcoal p-6 sm:p-8">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[34px] border-volt-red/10" />
            <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full border-[50px] border-white/[0.04]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-display text-xs font-bold tracking-[0.35em] text-volt-gray/60">EST. VOLT GYM</span>
                <Zap className="text-volt-red" size={28} fill="currentColor" />
              </div>
              <div className="py-12 text-center">
                <p className="font-display text-7xl font-black leading-none text-white sm:text-8xl">VOLT</p>
                <p className="mt-3 text-sm font-bold tracking-[0.4em] text-volt-red">طلّع البطل اللي جواك</p>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-volt-line pt-5 text-center">
                {[
                  ['01', 'هدفك'],
                  ['02', 'تمرينك'],
                  ['03', 'تطورك'],
                ].map(([number, label]) => (
                  <div key={number}>
                    <p className="font-display text-xl font-bold text-volt-red">{number}</p>
                    <p className="mt-1 text-[11px] font-semibold text-volt-gray">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-base leading-loose text-volt-gray sm:text-lg">
              من قلب سوهاج، في الزهراء على شارع الكرنك، <strong className="text-white">VOLT GYM</strong> مش مجرد مكان فيه أجهزة — ده النادي اللي بيدرب فيه أبطال، بيبدأ فيه المبتدئين رحلتهم، وبيلاقي فيه كل عضو الدعم اللي بيخليه يرجع يمرّن كل يوم.
            </p>
            <p className="mt-4 text-base leading-loose text-volt-gray sm:text-lg">
              عندنا برامج لكل مستوى: من الجيم وتمارين المقاومة، للكلاسات الجماعية بطاقتها العالية، لبرامج التأهيل بعد الإصابات، وكاراتيه الأطفال. والمهم — كباتن بيقفوا جنبك في كل تمرين.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="group rounded-xl border border-volt-line bg-volt-charcoal p-4 transition-colors duration-300 hover:border-volt-red/60">
                  <p.icon size={22} className="text-volt-red transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-extrabold">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-volt-gray">{p.body}</p>
                </div>
              ))}
            </div>

            <Link to="/#join" className="volt-btn-primary mt-8">ابدأ رحلتك معانا</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

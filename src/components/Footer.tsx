import { Link } from 'react-router-dom';
import { Facebook, MapPin, Phone } from 'lucide-react';
import { voltConfig } from '@/data/voltConfig';
import VoltLogo from '@/components/VoltLogo';

const quickLinks = [
  { label: 'الرئيسية', to: '/#home' },
  { label: 'عن VOLT', to: '/#about' },
  { label: 'البرامج', to: '/#programs' },
  { label: 'الكلاسات', to: '/#classes' },
  { label: 'الكباتن', to: '/#coaches' },
  { label: 'مجتمع VOLT', to: '/#community' },
];

export default function Footer() {
  return (
    <footer className="border-t border-volt-line bg-volt-charcoal/60 pb-28 pt-14 lg:pb-14">
      <div className="volt-container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <VoltLogo className="h-12 w-auto" />
            <p className="mt-3 text-sm font-bold text-volt-red">{voltConfig.slogan}</p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-volt-gray">
              جيم VOLT في سوهاج — الزهراء، شارع الكرنك. برامج تدريب لكل المستويات، كلاسات جماعية، وكباتن بيقفوا
              جنبك خطوة بخطوة.
            </p>
          </div>

          <nav aria-label="روابط سريعة">
            <h2 className="text-sm font-extrabold">روابط سريعة</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs font-semibold text-volt-gray transition-colors hover:text-volt-red">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-extrabold">تواصل</h2>
            <ul className="mt-4 space-y-3 text-xs text-volt-gray">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-volt-red" aria-hidden="true" />
                {voltConfig.addressShort}
              </li>
              <li>
                <a href={`tel:${voltConfig.phoneIntl}`} className="flex items-center gap-2 transition-colors hover:text-volt-red">
                  <Phone size={14} className="shrink-0 text-volt-red" aria-hidden="true" />
                  <span dir="ltr">{voltConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={voltConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-volt-red"
                >
                  <Facebook size={14} className="shrink-0 text-volt-red" aria-hidden="true" />
                  تابعنا على فيسبوك
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-volt-line pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-[11px] text-volt-gray/70">
            © {new Date().getFullYear()} VOLT GYM — سوهاج، مصر. جميع الحقوق محفوظة.
          </p>
          <p className="text-[11px] text-volt-gray/50">طلّع البطل اللي جواك</p>
        </div>
      </div>
    </footer>
  );
}

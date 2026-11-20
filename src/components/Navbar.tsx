import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import VoltLogo from '@/components/VoltLogo';

const navItems = [
  { label: 'الرئيسية', to: '/#home' },
  { label: 'عن VOLT', to: '/#about' },
  { label: 'البرامج', to: '/#programs' },
  { label: 'الكلاسات', to: '/#classes' },
  { label: 'الكباتن', to: '/#coaches' },
  { label: 'الكاراتيه', to: '/#karate' },
  { label: 'مجتمع VOLT', to: '/#community' },
  { label: 'تواصل معنا', to: '/#contact' },
];

const sectionIds = ['home', 'about', 'programs', 'classes', 'coaches', 'karate', 'community', 'contact'];

/** Fix core browser/Safari RTL quirk: translateX direction for the mobile drawer. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-section highlighting only while the homepage is visible.
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  // Close the drawer on route change and lock body scroll while open.
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (item: (typeof navItems)[number]) => {
    const id = item.to.split('#')[1];
    return onHome && activeSection === id;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-volt-line/60 bg-volt-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="volt-container flex h-16 items-center justify-between gap-3 lg:h-20">
        <Link to="/#home" className="flex shrink-0 items-center gap-3" aria-label="VOLT GYM — الرئيسية">
          <VoltLogo className="h-10 w-auto lg:h-12" />
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive: linkActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive(item) || (linkActive && item.to === '/#home' && activeSection === 'home')
                    ? 'text-volt-red'
                    : 'text-volt-gray hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/#join" className="volt-btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            ابدأ رحلتك
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-volt-line text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-volt-line/60 bg-volt-black/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[80vh]' : 'max-h-0 border-t-0'
        }`}
      >
        <nav aria-label="قائمة الموبايل" className="volt-container flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive: linkActive }) =>
                `rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(item) || linkActive ? 'bg-volt-redSoft text-volt-red' : 'text-volt-gray hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/#join" className="volt-btn-primary mt-2 w-full">
            ابدأ رحلتك
          </Link>
        </nav>
      </div>
    </header>
  );
}

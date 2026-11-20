import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Sticky membership CTA for mobile — hides once the user reaches the
 * inquiry form itself (or leaves the homepage), so it never covers the form.
 */
export default function MobileBottomCTA() {
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const join = document.getElementById('join');
      if (!join) {
        setHidden(false);
        return;
      }
      const { top } = join.getBoundingClientRect();
      setHidden(top < window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  if (location.pathname !== '/') return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-volt-line/70 bg-volt-black/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <Link to="/#join" className="volt-btn-primary w-full !py-3.5 text-base">
        <MessageCircle size={18} />
        استفسر عن الاشتراك
      </Link>
    </div>
  );
}

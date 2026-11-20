import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ScheduleSection from '@/components/ScheduleSection';
import CoachesSection from '@/components/CoachesSection';
import CoachAttendanceSection from '@/components/CoachAttendanceSection';
import KarateSection from '@/components/KarateSection';
import CommunitySection from '@/components/CommunitySection';
import MembershipInquiryForm from '@/components/MembershipInquiryForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MobileBottomCTA from '@/components/MobileBottomCTA';
import CoachProfile from '@/components/CoachProfile';

/**
 * Scrolls to the #anchor in the URL on load/navigation
 * (react-router does not handle hash targets by itself).
 */
function useHashScroll() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = location.hash.slice(1);
    // Wait a frame so the target section is mounted before scrolling.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location]);
}

function Home() {
  useHashScroll();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ScheduleSection />
      <CoachesSection />
      <CoachAttendanceSection />
      <KarateSection />
      <CommunitySection />
      <MembershipInquiryForm />
      <ContactSection />
    </>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-volt-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-volt-red focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        تخطى للمحتوى
      </a>
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaches/:slug" element={<CoachProfile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}

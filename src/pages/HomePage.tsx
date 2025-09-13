import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import TeamSection from '../components/TeamSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import CallToActionSection from '../components/CallToActionSection';
import TermsModal from '../components/TermsModal';

const HomePage = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);

  useEffect(() => {
    // Check if terms modal has been shown before
    const termsModalShown = localStorage.getItem('termsModalShown');
    
    if (!termsModalShown) {
      // Show terms modal after a short delay when page loads for first time
      const timer = setTimeout(() => {
        setShowTermsModal(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseTermsModal = () => {
    // Set flag in localStorage to prevent showing modal again
    localStorage.setItem('termsModalShown', 'true');
    setShowTermsModal(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <TeamSection />
        <TestimonialsCarousel />
        <CallToActionSection />
      </main>
      
      <TermsModal 
        isOpen={showTermsModal} 
        onClose={handleCloseTermsModal} 
      />
    </div>
  );
};

export default HomePage;
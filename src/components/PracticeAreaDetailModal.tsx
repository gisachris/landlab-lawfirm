import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface DetailedPracticeAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
}

interface PracticeAreaDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  practiceArea: DetailedPracticeAreaProps | null;
}

const PracticeAreaDetailModal: React.FC<PracticeAreaDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  practiceArea 
}) => {
  // Handle scroll to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      onClose();
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, onClose]);

  // Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !practiceArea) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up flex flex-col">
        {/* Header */}
        <div className="bg-secondary text-white p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              {practiceArea.icon}
            </div>
            <h2 className="text-2xl font-bold">{practiceArea.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors focus-ring"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">Overview</h3>
            <p className="text-text-light leading-relaxed text-lg">
              {practiceArea.description}
            </p>
          </div>

          {/* Enhanced Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">Why Choose Our {practiceArea.title} Services?</h3>
            <p className="text-text-light leading-relaxed mb-4">
              Our experienced legal team brings decades of combined expertise to every {practiceArea.title.toLowerCase()} matter. 
              We understand that each case is unique and requires a personalized approach tailored to your specific needs and circumstances.
            </p>
            <p className="text-text-light leading-relaxed">
              We pride ourselves on clear communication, aggressive representation, and achieving the best possible outcomes for our clients. 
              Our track record speaks for itself, with numerous successful cases and satisfied clients who trust us with their most important legal matters.
            </p>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary mb-6">Our Comprehensive Services Include:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {practiceArea.services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-text font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-semibold text-secondary mb-3">Ready to Get Started?</h3>
            <p className="text-text-light mb-4">
              Don't wait to get the legal help you need. Contact our experienced {practiceArea.title.toLowerCase()} team today 
              for a free consultation and let us help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus-ring">
                Schedule Free Consultation
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors focus-ring">
                Call Now: (+250) 788-306-700
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaDetailModal;
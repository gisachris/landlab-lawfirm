import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import content from '../content.json';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          {content.homePage.callToActionSection.title}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-xl text-text-light mb-8 leading-relaxed">
          {content.homePage.callToActionSection.description}
        </p>
        
        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus-ring shadow-lg hover:shadow-xl"
        >
          {content.homePage.callToActionSection.ctaButtonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <p className="text-sm text-text-light mt-4">
          {content.homePage.callToActionSection.note}
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
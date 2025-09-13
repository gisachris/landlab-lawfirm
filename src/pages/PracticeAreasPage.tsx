import React, { useState } from 'react';
import Header from '../components/Header';
import PracticeAreaDetailModal from '../components/PracticeAreaDetailModal';
import { Briefcase, Shield, Users, Building, FileText, Scale, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import content from '../content.json';
import { getIconComponent } from '../utils/iconMap';

interface DetailedPracticeAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
}

interface DetailedPracticeAreaCardProps extends DetailedPracticeAreaProps {
  onLearnMore: (area: DetailedPracticeAreaProps) => void;
}

const DetailedPracticeAreaCard: React.FC<DetailedPracticeAreaCardProps> = ({ 
  icon, title, description, services, onLearnMore 
}) => {
  const practiceArea = { icon, title, description, services };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-secondary">{title}</h3>
      </div>
      
      <p className="text-text-light mb-6 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-secondary">Our Services Include:</h4>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2 text-text-light">
              <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        onClick={() => onLearnMore(practiceArea)}
        className="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus-ring flex items-center gap-2"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const PracticeAreasPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<DetailedPracticeAreaProps | null>(null);

  const handleLearnMoreClick = (area: DetailedPracticeAreaProps) => {
    setSelectedArea(area);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArea(null);
  };

  const detailedPracticeAreas = content.practiceAreasPage.areas;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[400px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-hero-image-1 bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content.practiceAreasPage.heroSection.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {content.practiceAreasPage.heroSection.description}
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus-ring flex items-center gap-3 mx-auto">
            <Phone className="w-5 h-5" />
            {content.practiceAreasPage.heroSection.ctaButtonText}
          </button>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedPracticeAreas.map((area, index) => (
              <DetailedPracticeAreaCard
                key={index}
                icon={getIconComponent(area.icon, { className: "w-8 h-8" })}
                title={area.title}
                description={area.description}
                services={area.services}
                onLearnMore={handleLearnMoreClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            {content.practiceAreasPage.ctaSection.title}
          </h2>
          <p className="text-xl text-text-light mb-8">
            {content.practiceAreasPage.ctaSection.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-text">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-lg">{content.global.contactPhone}</span>
            </div>
            <div className="flex items-center gap-3 text-text">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-lg">{content.global.contactEmail}</span>
            </div>
          </div>
          
          <button className="mt-8 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus-ring">
            {content.practiceAreasPage.ctaSection.ctaButtonText}
          </button>
        </div>
      </section>

      {/* Practice Area Detail Modal */}
      <PracticeAreaDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        practiceArea={selectedArea}
      />
    </div>
  );
};

export default PracticeAreasPage;
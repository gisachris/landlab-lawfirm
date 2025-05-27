import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Shield, Users, Building, FileText, Scale, ArrowRight } from 'lucide-react';
import content from '../content.json';
import { getIconComponent } from '../utils/iconMap';

interface PracticeAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const PracticeAreaCard: React.FC<PracticeAreaProps> = ({ icon, title, description, position }) => {
  return (
    <div className={`flex items-start gap-6 ${position === 'right' ? 'flex-row-reverse text-right' : ''}`}>
      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
        <p className="text-text-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const PracticeAreas = () => {
  const practiceAreas = content.homePage.practiceAreasSection.areas;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            {content.homePage.practiceAreasSection.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-8">
            {content.homePage.practiceAreasSection.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/80 transition-colors focus-ring"
            >
              {content.homePage.practiceAreasSection.ctaConsultation}
            </Link>
            <Link 
              to="/practice-areas"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/80 transition-colors focus-ring flex items-center gap-2 justify-center"
            >
              {content.homePage.practiceAreasSection.ctaAllAreas}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="relative">
          {/* Practice Areas Cards */}
          <div className="grid lg:grid-cols-3 gap-2 lg:gap-16">
            {/* Left Column - First 2 practice areas */}
            <div className="space-y-16">
              {practiceAreas
                .filter(area => area.position === 'left')
                .map((area, index) => (
                  <PracticeAreaCard
                    key={area.title}
                    icon={getIconComponent(area.icon, { className: "w-8 h-8" })}
                    title={area.title}
                    description={area.description}
                    position={area.position}
                  />
                ))}
            </div>
            
            {/* Middle Column - Image */}
            <div className="hidden lg:flex max-w-[] items-center justify-center">
              <img 
                src={content.homePage.practiceAreasSection.centerImage} 
                alt="Legal practice" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            
            {/* Right Column - Last 2 practice areas */}
            <div className="space-y-16">
              {practiceAreas
                .filter(area => area.position === 'right')
                .map((area, index) => (
                  <PracticeAreaCard
                    key={area.title}
                    icon={getIconComponent(area.icon, { className: "w-8 h-8" })}
                    title={area.title}
                    description={area.description}
                    position={area.position}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Mobile Justice Icon */}
        <div className="lg:hidden flex justify-center mt-16">
          <div className="w-32 h-32 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full shadow-lg flex items-center justify-center">
            <Scale className="w-16 h-16 text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
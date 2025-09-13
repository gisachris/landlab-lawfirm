import React from 'react';
import Header from '../components/Header';
import { Users, Award, Clock, Target, CheckCircle, Scale } from 'lucide-react';
import content from '../content.json';
import { getIconComponent } from '../utils/iconMap';

const AboutPage = () => {
  const stats = content.aboutPage.statsSection.stats;
  const values = content.aboutPage.ourValuesSection.values;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[400px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-hero-image-1 bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content.aboutPage.heroSection.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {content.aboutPage.heroSection.description}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                {content.aboutPage.ourStorySection.title}
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="space-y-6 text-text-light leading-relaxed">
                {content.aboutPage.ourStorySection.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={content.aboutPage.ourStorySection.image} 
                  alt="Law office interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              {content.aboutPage.ourValuesSection.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              {content.aboutPage.ourValuesSection.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  {getIconComponent(value.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {value.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.aboutPage.missionStatementSection.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            "{content.aboutPage.missionStatementSection.statement}"
          </p>
          <div className="flex justify-center">
            <Scale className="w-16 h-16 text-primary" />
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
            {content.aboutPage.founderSection.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={content.aboutPage.founderSection.image} 
                  alt="Damascene Munyangaju - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Column - Text */}
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">{content.aboutPage.founderSection.name}</h3>
              <p className="text-text-light leading-relaxed item-start">
                {content.aboutPage.founderSection.bio}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              {content.aboutPage.whyChooseUsSection.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.aboutPage.whyChooseUsSection.reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-light">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
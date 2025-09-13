import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import content from '../content.json';

const TeamSection = () => {
  const featuredTeamMembers = content.homePage.teamSection.featuredMembers;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            {content.homePage.teamSection.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-8">
            {content.homePage.teamSection.description}
          </p>
          
          <Link 
            to="/team"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus-ring"
          >
            {content.homePage.teamSection.ctaButtonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredTeamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <p className="text-text-light leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
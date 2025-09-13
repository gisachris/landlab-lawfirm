import React from 'react';
import Header from '../components/Header';
import { Mail, Phone, Linkedin, Award, GraduationCap, Briefcase } from 'lucide-react';
import content from '../content.json';

interface TeamMemberProps {
  name: string;
  position: string;
  specialization: string;
  experience: string;
  education: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  achievements: string[];
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ 
  name, position, specialization, experience, education, email, phone, image, bio, achievements 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-3 aspect-h-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover"
        />
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-secondary mb-2">{name}</h3>
        <p className="text-primary font-semibold mb-1">{position}</p>
        <p className="text-text-light mb-4">{specialization}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-text-light">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{experience}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-light">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span>{education}</span>
          </div>
        </div>
        
        <p className="text-text-light leading-relaxed mb-6">{bio}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-secondary mb-3">Key Achievements:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text-light">
                <Award className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">{email}</span>
          </a>
          <a 
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">{phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const teamMembers = content.teamPage.teamMembers;

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
            {content.teamPage.heroSection.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {content.teamPage.heroSection.description}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            {content.teamPage.ctaSection.title}
          </h2>
          <p className="text-xl text-text-light mb-8">
            {content.teamPage.ctaSection.description}
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus-ring flex items-center gap-3 mx-auto">
            <Phone className="w-5 h-5" />
            {content.teamPage.ctaSection.ctaButtonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
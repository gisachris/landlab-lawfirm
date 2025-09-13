import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import content from '../content.json';
import { getIconComponent } from '../utils/iconMap';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      {/* Middle Section: Information Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Company Description */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">
                {content.global.companyName}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {content.footer.companyDescription}
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/practice-areas" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Practice Areas
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a 
                    href={`tel:${content.global.contactPhone.replace(/[^+\d]/g, '')}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {content.global.contactPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href={`mailto:${content.global.contactEmail}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {content.global.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Find Us
              </h4>
              <div className="flex gap-4">
                <a 
                  href={content.global.socialMedia.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {getIconComponent('Linkedin', { className: "w-5 h-5 text-white" })}
                </a>
                <a 
                  href={content.global.socialMedia.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {getIconComponent('Phone', { className: "w-5 h-5 text-white" })}
                </a>
                <Link 
                  to="/contact"
                  className="hover:opacity-80 transition-opacity"
                >
                  {getIconComponent('Globe', { className: "w-5 h-5 text-white" })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright and Attribution */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {content.footer.copyright}
          </p>
          <p className="text-gray-400 text-sm">
            {content.footer.builtBy}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone, Mail } from 'lucide-react';
import content from '../content.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Hide top bar on contact page when scrolled
  const showTopBar = !(location.pathname === '/contact' || location.pathname === '/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      {showTopBar && (
        <div className="bg-secondary text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{content.global.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{content.global.contactEmail}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>{content.header.scheduleConsultationText}</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-xl font-bold ${isScrolled ? 'text-secondary' : 'text-white'} transition-colors flex flex-row max-w-[150px] max-h-[75px] no-underline`}>
              <p>{content.global.companyName}</p>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium click:border-0 transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : isScrolled ? 'text-text' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors focus-ring"
            >
              {content.header.getConsultationButtonText}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus-ring ${
              isScrolled ? 'text-text hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-medium transition-colors focus-ring ${
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'text-text hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors focus-ring text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.header.getConsultationButtonText}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
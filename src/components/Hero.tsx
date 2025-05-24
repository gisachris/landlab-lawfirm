import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import content from '../content.json';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselTexts = content.homePage.heroSection.carouselTexts;

  const carouselImages = content.global.heroImages.map((_, index) => `bg-hero-image-${index + 1}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change both text and image every 6 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className={`absolute inset-0 ${carouselImages[currentIndex]} bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out`}>
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-8 py-32">
        <div className="max-w-4xl">
          {/* Top Label */}
          <div className="mb-4 animate-fade-in-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              {content.homePage.heroSection.topLabel}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up">
            {content.homePage.heroSection.title}
          </h1>

          {/* Carousel Text */}
          <div className="mb-8 min-h-[120px] flex items-start animate-fade-in-up">
            <p 
              key={currentIndex}
              className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl animate-fade-in"
            >
              {carouselTexts[currentIndex]}
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up mb-6">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 focus-ring shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              {content.homePage.heroSection.ctaButtonText}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 animate-fade-in-up">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus-ring ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
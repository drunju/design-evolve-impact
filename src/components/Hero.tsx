
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation for text reveal
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.classList.add('animate-fade-in');
      heading.style.opacity = '1';
    }
    
    setTimeout(() => {
      if (subheading) {
        subheading.classList.add('animate-fade-in');
        subheading.style.opacity = '1';
      }
    }, 500);

    setTimeout(() => {
      if (cta) {
        cta.classList.add('animate-fade-in');
        cta.style.opacity = '1';
      }
    }, 1000);
  }, []);

  return (
    <section className="hero-container">
      {/* Image Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?q=80&w=1932&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Overlay with Text Content */}
      <div className="video-overlay">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
          style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}
        >
          Designing Change.<br/>
          Coaching Transformation.<br/>
          Empowering People.
        </h1>
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl mb-8 max-w-2xl opacity-0"
          style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}
        >
          Human-Centered Design & Executive Coaching For Transformational Growth
        </p>
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0"
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

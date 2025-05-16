
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Emmanuel</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src="/lovable-uploads/8d55b351-0fb0-48ae-8955-7f93a11f569d.png"
                alt="Emmanuel Nandokha"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-light rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-light rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div 
              className={cn(
                "relative overflow-hidden transition-all duration-500",
                showFullBio ? "max-h-[2000px]" : "max-h-[320px]"
              )}
            >
              <h3 className="text-2xl font-semibold mb-4">Kenya's Foremost Consultant in Human-Centered Design</h3>
              
              <div className="space-y-4 text-charcoal">
                <p>
                  Emmanuel Nandokha is one of Kenya's foremost consultants in Human-Centered Design (HCD), 
                  with an unmatched breadth and depth of experience spanning hundreds of design challenges 
                  across East and Central Africa.
                </p>
                
                <p>
                  With over 15 years of professional experience, Emmanuel brings a unique combination of 
                  design thinking, executive coaching, and facilitation skills to help organizations solve 
                  complex problems and create meaningful impact.
                </p>

                {showFullBio && (
                  <>
                    <p>
                      As a certified executive coach, Emmanuel has helped countless leaders and teams unlock 
                      their potential and navigate complex organizational challenges. His approach combines 
                      deep empathy with strategic rigor, enabling sustainable transformation at both individual 
                      and systemic levels.
                    </p>
                    
                    <p>
                      Emmanuel's work spans diverse sectors including financial services, healthcare, agriculture, 
                      education, and governance. He has facilitated innovations that have reached millions of 
                      underserved people across Africa, working with organizations ranging from global NGOs to 
                      local startups and government institutions.
                    </p>
                    
                    <p>
                      His methodology centers on building local capacity and creating sustainable solutions 
                      that respect cultural contexts and leverage existing resources. Emmanuel believes that 
                      the most powerful innovations emerge when communities are empowered to design their own futures.
                    </p>
                    
                    <p>
                      As a sought-after speaker and educator, Emmanuel regularly shares his insights at 
                      international conferences and has developed curriculum for design thinking and innovation 
                      programs at several leading institutions.
                    </p>
                  </>
                )}
              </div>

              {/* Gradient overlay for truncated text */}
              {!showFullBio && (
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-secondary to-transparent"></div>
              )}
            </div>

            <button 
              onClick={toggleBio} 
              className="mt-4 text-teal font-medium flex items-center hover:text-teal-dark transition-colors"
            >
              {showFullBio ? 'Show Less' : 'Read Full Bio'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`ml-2 h-5 w-5 transition-transform ${showFullBio ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

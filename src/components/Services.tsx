
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[400px] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-in-out",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className={cn(
        "absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-500",
        isHovered ? "translate-y-0" : "translate-y-[calc(100%-80px)]"
      )}>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className={cn(
          "text-white/90 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          {description}
        </p>
        <button className={cn(
          "mt-4 self-start py-2 px-4 rounded-md bg-teal text-white font-medium transition-all",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          Learn More
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Human-Centered Design",
      description: "Using collaborative methodologies to create solutions that truly meet human needs. Our HCD approach has been applied to hundreds of projects across East Africa with measurable impact.",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Executive Coaching",
      description: "Personalized coaching for leaders navigating complex challenges. Emmanuel's coaching methodology combines design thinking principles with proven leadership development frameworks.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Training Programs",
      description: "Customized capacity building programs that equip teams with innovation skills and mindsets. Our training approach emphasizes practical application and continuous learning.",
      imageUrl: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Workshop Facilitation",
      description: "Expert facilitation for high-stakes meetings, strategic planning sessions, and collaborative problem-solving. Emmanuel creates spaces where diverse perspectives can contribute to breakthrough solutions.",
      imageUrl: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Services</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive solutions for individuals and organizations seeking transformation through human-centered approaches.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

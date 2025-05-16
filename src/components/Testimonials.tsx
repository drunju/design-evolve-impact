
import React, { useRef, useEffect, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, delay }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={testimonialRef} 
      className={`testimonial-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11Z" stroke="#14B8A6" strokeWidth="2" />
          <path d="M19 11H15C14.4477 11 14 10.5523 14 10V6C14 5.44772 14.4477 5 15 5H19C19.5523 5 20 5.44772 20 6V10C20 10.5523 19.5523 11 19 11Z" stroke="#14B8A6" strokeWidth="2" />
          <path d="M10 20H6C5.44772 20 5 19.5523 5 19V15C5 14.4477 5.44772 14 6 14H10C10.5523 14 11 14.4477 11 15V19C11 19.5523 10.5523 20 10 20Z" stroke="#14B8A6" strokeWidth="2" />
          <path d="M19 20H15C14.4477 20 14 19.5523 14 19V15C14 14.4477 14.4477 14 15 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20Z" stroke="#14B8A6" strokeWidth="2" />
        </svg>
      </div>
      <p className="text-lg mb-4 italic">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{position}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Emmanuel's coaching transformed how our leadership team approaches innovation. His human-centered methodologies helped us create solutions that genuinely resonate with our customers.",
      author: "Sarah Mwangi",
      position: "Chief Innovation Officer",
      company: "Safaricom"
    },
    {
      quote: "The HCD workshops Emmanuel facilitated for our team unlocked creativity we didn't know we had. We've implemented three major product improvements as a direct result.",
      author: "James Odhiambo",
      position: "Product Director",
      company: "M-KOPA Solar"
    },
    {
      quote: "Emmanuel has a remarkable ability to make complex design concepts accessible and practical. Our education initiative reached 40% more students after applying his methodologies.",
      author: "Elizabeth Njeri",
      position: "Executive Director",
      company: "Kenya Education Fund"
    },
    {
      quote: "Working with Emmanuel helped us navigate a challenging organizational transformation. His coaching provided clarity and confidence when we needed it most.",
      author: "Robert Maina",
      position: "CEO",
      company: "East African Development Bank"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Client Testimonials</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hear from leaders who have experienced transformation through our work together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

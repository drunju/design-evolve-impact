
import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-teal rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Design the Future Together</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Ready to transform your organization through human-centered approaches?
            Let's collaborate to create meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Book a Consultation
            </a>
            <a href="#" className="btn-secondary">
              Download Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

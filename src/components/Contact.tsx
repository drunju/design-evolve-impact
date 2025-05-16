
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type FormStep = 1 | 2 | 3;

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  company: string;
}

const Contact = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    company: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep = (currentStep: FormStep) => {
    const newErrors: Partial<FormData> = {};
    
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.interest) newErrors.interest = 'Please select an interest';
      if (!formData.company) newErrors.company = 'Company/Organization is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => (prevStep + 1) as FormStep);
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => (prevStep - 1) as FormStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Submit form
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        company: '',
      });
      setStep(1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Get in Touch</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss how we can collaborate to meet your organization's goals.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={cn(
                  "relative flex flex-col items-center",
                  i <= step ? "text-teal" : "text-gray-500"
                )}
              >
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 font-bold",
                    i < step ? "bg-teal text-white" : i === step ? "border-2 border-teal" : "border-2 border-gray-500"
                  )}
                >
                  {i < step ? '✓' : i}
                </div>
                <div className="text-sm font-medium">
                  {i === 1 ? 'Your Info' : i === 2 ? 'Services' : 'Message'}
                </div>
                
                {/* Connector line */}
                {i < 3 && (
                  <div 
                    className={cn(
                      "absolute top-5 left-[calc(100%_-_10px)] w-[calc(100%_-_20px)] h-[2px]",
                      i < step ? "bg-teal" : "bg-gray-500"
                    )}
                  ></div>
                )}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white text-charcoal rounded-lg p-8 shadow-lg">
            {/* Step 1: Personal Info */}
            <div className={cn("space-y-4 transition-opacity duration-500", step === 1 ? "block opacity-100" : "hidden opacity-0")}>
              <h3 className="text-xl font-bold mb-4">Your Information</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal",
                    errors.name ? "border-red-500" : "border-gray-300"
                  )}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal",
                    errors.email ? "border-red-500" : "border-gray-300"
                  )}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal",
                    errors.phone ? "border-red-500" : "border-gray-300"
                  )}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>
            
            {/* Step 2: Interest */}
            <div className={cn("space-y-4 transition-opacity duration-500", step === 2 ? "block opacity-100" : "hidden opacity-0")}>
              <h3 className="text-xl font-bold mb-4">Your Interest</h3>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company/Organization*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal",
                    errors.company ? "border-red-500" : "border-gray-300"
                  )}
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">I'm interested in*</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal",
                    errors.interest ? "border-red-500" : "border-gray-300"
                  )}
                >
                  <option value="">Select an option</option>
                  <option value="Human-Centered Design">Human-Centered Design</option>
                  <option value="Executive Coaching">Executive Coaching</option>
                  <option value="Training Programs">Training Programs</option>
                  <option value="Workshop Facilitation">Workshop Facilitation</option>
                  <option value="Speaking Engagement">Speaking Engagement</option>
                  <option value="Other">Other</option>
                </select>
                {errors.interest && <p className="mt-1 text-sm text-red-500">{errors.interest}</p>}
              </div>
            </div>
            
            {/* Step 3: Message */}
            <div className={cn("space-y-4 transition-opacity duration-500", step === 3 ? "block opacity-100" : "hidden opacity-0")}>
              <h3 className="text-xl font-bold mb-4">Your Message</h3>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">How can Emmanuel help you?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                ></textarea>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-2 bg-gray-200 text-charcoal rounded-md hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-teal text-white rounded-md hover:bg-teal-dark transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal text-white rounded-md hover:bg-teal-dark transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

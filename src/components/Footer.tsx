
import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Emmanuel Nandokha</h3>
            <p className="text-gray-300 mb-4">
              Designing change. Coaching transformation. Empowering people through human-centered approaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-teal transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Services</a></li>
              <li><a href="#speaking-workshops" className="text-gray-300 hover:text-teal transition-colors">Speaking & Workshops</a></li>
              <li><a href="#coaching" className="text-gray-300 hover:text-teal transition-colors">Coaching</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-teal transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Human-Centered Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Executive Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Training Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Workshop Facilitation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal transition-colors">Speaking Engagements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest insights on human-centered design and leadership.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full bg-charcoal border border-gray-600 rounded-l-md focus:outline-none focus:border-teal text-white"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-teal hover:bg-teal-dark px-4 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Emmanuel Nandokha built by Zamu Interactive</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-teal transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

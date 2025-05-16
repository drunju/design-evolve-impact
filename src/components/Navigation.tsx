
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Speaking & Workshops', href: '/#speaking-workshops' },
    { name: 'Coaching', href: '/#coaching' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className={cn('transition-colors duration-300', isScrolled ? 'text-charcoal' : 'text-white')}>
            Emmanuel Nandokha
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'menu-link',
                isScrolled ? 'text-charcoal' : 'text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className={cn(
            'lg:hidden',
            isScrolled ? 'text-charcoal' : 'text-white'
          )}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 w-full lg:hidden bg-white transform transition-transform duration-300 ease-in-out z-50',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full px-6 py-20">
          <div className="flex justify-end mb-10">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={24} className="text-charcoal" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleLinkClick}
                className="text-xl font-bold text-charcoal hover:text-teal transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <h3 className="font-semibold text-charcoal mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-nandokha-458a809/?originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

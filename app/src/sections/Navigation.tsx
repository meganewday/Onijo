import { useState, useEffect } from 'react';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#practice-areas', label: 'Practice Areas' },
    { href: '#team', label: 'Our Team' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-navy-900' : 'bg-white/20'}`}>
              <Scale className={`w-6 h-6 ${isScrolled ? 'text-gold-500' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? 'text-navy-900' : 'text-white'
                }`}
              >
                SA LATEEF
              </span>
              <span
                className={`text-xs tracking-wider transition-colors ${
                  isScrolled ? 'text-navy-700' : 'text-white/80'
                }`}
              >
                ONIJO CHAMBERS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-medium text-sm transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-navy-900' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+2341234567890"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+234 123 456 7890</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gold-900 hover:bg-gold-500 text-white font-semibold px-6"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-medium transition-colors hover:text-gold-500 ${
                    isScrolled ? 'text-navy-900' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gold-900 hover:bg-gold-500 text-white font-semibold w-full mt-2"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

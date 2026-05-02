import { Scale, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    practiceAreas: [
      { label: 'Corporate Law', href: '#practice-areas' },
      { label: 'Litigation', href: '#practice-areas' },
      { label: 'Real Estate', href: '#practice-areas' },
      { label: 'Family Law', href: '#practice-areas' },
      { label: 'Banking & Finance', href: '#practice-areas' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Legal Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-navy-900">
                <Scale className="w-6 h-6 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-white">
                  SA LATEEF
                </span>
                <span className="text-xs tracking-wider text-white/60">
                  ONIJO CHAMBERS
                </span>
              </div>
            </a>

            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Providing exceptional legal services with integrity, professionalism,
              and unwavering dedication to our clients' success since 1999.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold-900 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {footerLinks.practiceAreas.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/60 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/60 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/60 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              {currentYear} SA Lateef Onijo Chambers. All rights reserved. | 
              <a href="#" className="hover:text-gold-500 ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-gold-500 ml-1">Terms of Service</a>
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/50 hover:text-gold-500 transition-colors text-sm"
            >
              Back to Top
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold-900 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

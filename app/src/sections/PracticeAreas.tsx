import { useEffect, useRef } from 'react';
import {
  Briefcase,
  Home,
  Users,
  Scale,
  Building2,
  FileText,
  Gavel,
  Landmark,
  ArrowRight,
} from 'lucide-react';

const PracticeAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const practiceAreas = [
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description:
        'Comprehensive legal services for businesses including company formation, mergers & acquisitions, contracts, and corporate governance.',
      features: ['Company Registration', 'M&A Advisory', 'Contract Drafting', 'Compliance'],
    },
    {
      icon: Scale,
      title: 'Litigation & Dispute Resolution',
      description:
        'Skilled representation in civil and commercial disputes, arbitration, and alternative dispute resolution mechanisms.',
      features: ['Civil Litigation', 'Commercial Disputes', 'Arbitration', 'Mediation'],
    },
    {
      icon: Home,
      title: 'Real Estate & Property',
      description:
        'Expert guidance on property transactions, land disputes, title verification, and real estate development projects.',
      features: ['Property Sales', 'Title Verification', 'Lease Agreements', 'Land Disputes'],
    },
    {
      icon: Users,
      title: 'Family Law',
      description:
        'Compassionate legal support for family matters including divorce, child custody, adoption, and estate planning.',
      features: ['Divorce Proceedings', 'Child Custody', 'Adoption', 'Wills & Probate'],
    },
    {
      icon: Building2,
      title: 'Banking & Finance',
      description:
        'Specialized legal services for financial institutions, loan documentation, securities, and regulatory compliance.',
      features: ['Loan Documentation', 'Securities Law', 'Debt Recovery', 'Regulatory Compliance'],
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      description:
        'Protection of creative assets through trademark registration, patent applications, and copyright enforcement.',
      features: ['Trademark Registration', 'Patent Applications', 'Copyright Law', 'IP Litigation'],
    },
    {
      icon: Gavel,
      title: 'Criminal Law',
      description:
        'Vigorous defense in criminal proceedings, from investigation through trial, protecting your rights at every stage.',
      features: ['Criminal Defense', 'Bail Applications', 'Appeals', 'White Collar Crime'],
    },
    {
      icon: Landmark,
      title: 'Constitutional & Human Rights',
      description:
        'Advocacy for fundamental rights and freedoms, challenging unconstitutional actions and promoting social justice.',
      features: ['Fundamental Rights', 'Judicial Review', 'Public Interest', 'Human Rights'],
    },
  ];

  return (
    <section id="practice-areas" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0">
            <span className="inline-block text-gold-900 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Expertise
            </span>
          </div>
          <h2 className="reveal opacity-0 delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
            Practice
            <span className="text-gold-900"> Areas</span>
          </h2>
          <p className="reveal opacity-0 delay-200 text-gray-600 leading-relaxed">
            We offer a comprehensive range of legal services across multiple practice areas,
            providing expert counsel and representation tailored to your specific needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className={`reveal opacity-0 delay-${(index % 4) * 100} group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-14 h-14 rounded-lg bg-navy-900/5 flex items-center justify-center mb-5 group-hover:bg-gold-900 group-hover:text-white transition-colors">
                <area.icon className="w-7 h-7 text-navy-900 group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                {area.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {area.description}
              </p>

              <ul className="space-y-2 mb-5">
                {area.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-900" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-gold-900 font-medium text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

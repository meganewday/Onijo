import { useEffect, useRef } from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
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

  const teamMembers = [
    {
      name: 'S.A. Lateef Onijo, SAN',
      role: 'Founder & Senior Partner',
      specialty: 'Corporate & Commercial Law',
      image: '/attorney-1.jpg',
      bio: 'With over 30 years of legal experience, Lateef Onijo is a distinguished Senior Advocate of Nigeria and the founding partner of the firm.',
    },
    {
      name: 'Dr. Amaka Okafor',
      role: 'Managing Partner',
      specialty: 'Litigation & Dispute Resolution',
      image: '/attorney-2.jpg',
      bio: 'Amaka brings 20 years of litigation expertise, having successfully handled numerous high-profile cases across Nigerian courts.',
    },
    {
      name: 'Emmanuel Adeyemi',
      role: 'Partner',
      specialty: 'Real Estate & Property Law',
      image: '/attorney-3.jpg',
      bio: 'Emmanuel specializes in complex real estate transactions and has advised on major property development projects nationwide.',
    },
    {
      name: 'Fatima Bello',
      role: 'Partner',
      specialty: 'Family Law & Human Rights',
      image: '/attorney-4.jpg',
      bio: 'Fatima is passionate about family law and human rights advocacy, providing compassionate legal support to families in need.',
    },
  ];

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0">
            <span className="inline-block text-gold-900 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Team
            </span>
          </div>
          <h2 className="reveal opacity-0 delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
            Meet Our
            <span className="text-gold-900"> Legal Experts</span>
          </h2>
          <p className="reveal opacity-0 delay-200 text-gray-600 leading-relaxed">
            Our team comprises seasoned legal professionals with diverse expertise,
            united by a commitment to excellence and client success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`reveal opacity-0 delay-${index * 100} group`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold-900 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold-900 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold-900 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-900 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-navy-700 text-xs mb-3">{member.specialty}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="reveal opacity-0 delay-500 mt-16 text-center">
          <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              We are always looking for talented legal professionals who share our
              commitment to excellence and client service.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold-900 hover:bg-gold-500 text-white font-semibold rounded-lg transition-colors"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

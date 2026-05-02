import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, TrendingUp, Shield, BookOpen } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            if (entry.target.classList.contains('counter-section')) {
              setCountersStarted(true);
            }
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

  const features = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'We uphold the highest ethical standards in every case we handle.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful outcomes across diverse legal matters.',
    },
    {
      icon: BookOpen,
      title: 'Expert Knowledge',
      description: 'Deep understanding of Nigerian and international law.',
    },
  ];

  const stats = [
    { value: 25, suffix: '+', label: 'Years of Excellence' },
    { value: 1000, suffix: '+', label: 'Cases Successfully Handled' },
    { value: 50, suffix: '+', label: 'Legal Professionals' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [countersStarted, value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="reveal opacity-0">
              <span className="inline-block text-gold-900 font-semibold text-sm tracking-wider uppercase mb-4">
                About Our Firm
              </span>
            </div>

            <h2 className="reveal opacity-0 delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
              A Legacy of Legal
              <span className="text-gold-900"> Excellence</span>
            </h2>

            <p className="reveal opacity-0 delay-200 text-gray-600 leading-relaxed mb-6">
              SA Lateef Onijo Chambers is a premier Nigerian law firm established in 1999,
              dedicated to providing exceptional legal services to individuals, businesses,
              and organizations across Nigeria and beyond.
            </p>

            <p className="reveal opacity-0 delay-300 text-gray-600 leading-relaxed mb-8">
              Our team of experienced attorneys combines deep legal expertise with a
              client-centered approach, ensuring that every case receives the attention
              and dedication it deserves. We pride ourselves on our ability to navigate
              complex legal challenges while maintaining the highest standards of
              professionalism and integrity.
            </p>

            {/* Features */}
            <div className="reveal opacity-0 delay-400 space-y-4 mb-8">
              {[
                'Comprehensive legal solutions tailored to your needs',
                'Experienced team with diverse specializations',
                'Commitment to client success and satisfaction',
                'Transparent communication throughout your case',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="reveal opacity-0 delay-500 grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <feature.icon className="w-8 h-8 text-gold-900 mb-3" />
                  <h3 className="font-display font-semibold text-navy-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="reveal opacity-0 delay-300 counter-section">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl ${
                    index % 2 === 0 ? 'bg-navy-900' : 'bg-gold-900'
                  } text-white text-center`}
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                "To deliver exceptional legal services that protect our clients' interests,
                uphold justice, and contribute to the development of a fair and equitable
                society through the rule of law."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

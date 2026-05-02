import { useEffect, useRef } from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '1000+', label: 'Cases Won' },
    { icon: Clock, value: '24/7', label: 'Legal Support' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Law office"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/85 to-navy-700/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="reveal opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-900/20 border border-gold-500/30 rounded-full text-gold-500 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Trusted Legal Excellence Since 1999
              </span>
            </div>

            <h1 className="reveal opacity-0 delay-100 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Defending Your
              <span className="text-gold-500"> Rights</span> With
              <span className="text-gold-500"> Excellence</span>
            </h1>

            <p className="reveal opacity-0 delay-200 text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              SA Lateef Onijo Chambers provides exceptional legal services with integrity,
              professionalism, and unwavering dedication to our clients' success.
            </p>

            <div className="reveal opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-gold-900 hover:bg-gold-500 text-white font-semibold px-8 py-6 text-base group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#practice-areas')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base"
              >
                Our Practice Areas
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 delay-400 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-gold-500" />
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Quote Card */}
          <div className="reveal opacity-0 delay-500 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-display">"</span>
                </div>
                <div>
                  <p className="text-white/90 text-lg italic leading-relaxed">
                    Justice will not be served until those who are unaffected are as
                    outraged as those who are.
                  </p>
                  <p className="text-gold-500 font-medium mt-4">— Benjamin Franklin</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/70 text-sm">
                  At SA Lateef Onijo Chambers, we believe every client deserves passionate
                  advocacy and personalized legal solutions tailored to their unique
                  circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

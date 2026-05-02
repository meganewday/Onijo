import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: 'Chief Olumide Johnson',
      role: 'CEO, Johnson Holdings Ltd',
      content:
        'SA Lateef Onijo Chambers provided exceptional legal counsel during our company\'s merger. Their attention to detail and strategic thinking were instrumental in the successful completion of the transaction.',
      rating: 5,
    },
    {
      name: 'Dr. Amina Ibrahim',
      role: 'Medical Director, City Hospital',
      content:
        'I have relied on this firm for all my legal matters for over a decade. Their professionalism, integrity, and dedication to their clients are unmatched. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Engr. Michael Ogunleye',
      role: 'Property Developer',
      content:
        'The real estate team at SA Lateef Onijo Chambers handled my property portfolio with exceptional expertise. Their knowledge of property law saved me from potential legal pitfalls.',
      rating: 5,
    },
    {
      name: 'Mrs. Ngozi Eze',
      role: 'Business Owner',
      content:
        'During a difficult family dispute, the team showed compassion and professionalism. They guided me through the process with patience and achieved a favorable outcome.',
      rating: 5,
    },
    {
      name: 'Alhaji Abdullahi Musa',
      role: 'Chairman, Musa Group',
      content:
        'Their litigation team is formidable. They represented our company in a complex commercial dispute and secured a victory that protected our business interests.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0">
            <span className="inline-block text-gold-900 font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonials
            </span>
          </div>
          <h2 className="reveal opacity-0 delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
            What Our
            <span className="text-gold-900"> Clients Say</span>
          </h2>
          <p className="reveal opacity-0 delay-200 text-gray-600 leading-relaxed">
            Our clients' satisfaction is our greatest achievement. Here's what they have
            to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="reveal opacity-0 delay-300 max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <Quote className="w-12 h-12 text-gold-900/20 mb-6" />

              <div className="mb-8">
                <p className="text-xl md:text-2xl text-navy-900 leading-relaxed font-display italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-display text-lg font-semibold text-navy-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-navy-900 hover:bg-gold-900 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-navy-900 hover:bg-gold-900 hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="reveal opacity-0 delay-500 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Corporate Clients' },
            { value: '98%', label: 'Success Rate' },
            { value: '25+', label: 'Years Experience' },
            { value: '24/7', label: 'Client Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

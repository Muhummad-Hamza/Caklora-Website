
import React from 'react';

const About: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const id = target.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative group max-w-lg mx-auto lg:max-w-none">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&h=1000&fit=crop" 
                alt="Artisanal cake masterpiece" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative background shapes - hidden on mobile for cleaner look */}
            <div className="absolute -bottom-6 -right-6 w-32 sm:w-48 h-32 sm:h-48 bg-sage-100 -z-10 rounded-2xl hidden sm:block"></div>
            <div className="absolute -top-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-sage-300 -z-10 rounded-2xl hidden sm:block"></div>
            
            <div className="absolute -bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-sage-50">
              <p className="font-serif italic text-sage-800 text-base sm:text-lg">"Quality ingredients are non-negotiable. Art is intentional."</p>
              <p className="text-sage-500 font-bold mt-2 text-xs sm:text-sm">— Founder of Caklora</p>
            </div>
          </div>

          <div className="pt-10 lg:pt-0">
            <span className="text-sage-300 font-bold tracking-widest uppercase text-[10px] sm:text-xs block mb-4">Our Heritage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-sage-900 leading-tight mb-8">
              The Story of <br /> 
              <span className="text-sage-300">Caklora</span>
            </h2>
            
            <div className="space-y-5 text-sm sm:text-base text-sage-700 leading-relaxed font-light">
              <p>
                Founded on the belief that every celebration deserves a centerpiece as unique as the memories being made, Caklora began in a small boutique kitchen with a simple whisk and a grand vision.
              </p>
              <p>
                Our passion lies in the intersection of traditional baking techniques and modern edible art. We don't just "make cakes"; we curate experiences. Every layer is soaked with intent.
              </p>
              <p>
                Whether it's the rich aroma of organic Madagascar vanilla or the structural integrity of our tiered wedding cakes, we refuse to compromise. Your trust is our most valuable ingredient.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-sage-400 mb-1">100%</h4>
                <p className="text-[10px] sm:text-xs font-medium text-sage-600 uppercase tracking-wider">Natural Ingredients</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-sage-400 mb-1">15k+</h4>
                <p className="text-[10px] sm:text-xs font-medium text-sage-600 uppercase tracking-wider">Cakes Delivered</p>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="#specials" 
                onClick={(e) => scrollToSection(e, '#specials')}
                className="flex items-center gap-2 text-sage-800 font-bold group text-sm sm:text-base"
              >
                <span className="border-b-2 border-sage-200 group-hover:border-sage-300 transition-all pb-1">Explore our latest collections</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

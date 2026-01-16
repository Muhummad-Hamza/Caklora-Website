
import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-sage-300 rounded-[3rem] overflow-hidden relative px-6 py-16 sm:px-12 sm:py-24 text-center">
          {/* Subtle backgrounds */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-sage-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-white leading-tight mb-6">
              Ready for a Taste of Perfection?
            </h2>
            <p className="text-sage-50 text-lg mb-10 max-w-2xl mx-auto font-light">
              Don't wait for a special occasion to treat yourself. Join our community of cake enthusiasts across Pakistan and let's bake something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#home" 
                className="px-10 py-5 bg-white text-sage-800 rounded-2xl font-black shadow-xl hover:bg-sage-50 transition-all hover:scale-105"
              >
                Place Your Order Now
              </a>
              <button 
                className="px-10 py-5 border-2 border-white/40 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                Contact Our Bakers
              </button>
            </div>
            <p className="mt-8 text-white/60 text-sm font-medium">
              Free delivery on your first order over Rs. 10,000!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

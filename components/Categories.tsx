
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const id = target.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-sage-400 font-bold uppercase tracking-widest text-xs mb-3 block">Specialties</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-sage-900">Baked Categories</h2>
          <div className="w-24 h-1 bg-sage-200 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat, index) => (
            <a 
              key={cat.id} 
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer aspect-[16/9] ${
                index % 3 === 0 ? 'md:col-span-1' : ''
              }`}
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sage-900/40 group-hover:bg-sage-900/50 transition-colors flex items-center justify-center p-8">
                <div className="text-center text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-3xl font-serif font-bold mb-3">{cat.title}</h3>
                  <p className="text-sm font-light text-cream-100 max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex justify-center gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <span className="text-xs font-bold uppercase tracking-widest">Order Custom</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Categories;

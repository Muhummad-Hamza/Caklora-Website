
import React, { useState } from 'react';
import { SPECIALS } from '../constants';
import { CakeCollectionItem } from '../types';

const Collections: React.FC = () => {
  const [selectedCake, setSelectedCake] = useState<CakeCollectionItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const id = target.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openQuickView = (e: React.MouseEvent, cake: CakeCollectionItem) => {
    e.stopPropagation();
    setSelectedCake(cake);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; 
  };

  const closeQuickView = () => {
    setSelectedCake(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCake) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedCake.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCake) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedCake.gallery.length) % selectedCake.gallery.length);
  };

  return (
    <div className="bg-cream-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-sage-400 font-bold uppercase tracking-widest text-xs mb-3 block">Exclusives</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-sage-900 leading-tight">
              Our Specials
            </h2>
            <p className="text-sage-600 mt-4 font-light">
              Explore our hand-picked selection of seasonally inspired masterpieces, each designed to evoke a unique sense of wonder.
            </p>
          </div>
          <a 
            href="#menu" 
            onClick={(e) => scrollToSection(e, '#menu')}
            className="hidden md:block px-8 py-3 rounded-full border border-sage-200 text-sage-600 font-semibold hover:bg-sage-100 transition-all text-center"
          >
            Explore Full Menu
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIALS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md transition-shadow group-hover:shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 gap-3">
                  <button 
                    onClick={(e) => openQuickView(e, item)}
                    className="w-full py-2.5 bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform text-center hover:bg-white/40"
                  >
                    Quick View
                  </button>
                  <a 
                    href="#home" 
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="w-full py-3 bg-white text-sage-900 font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform text-center shadow-lg active:scale-95"
                  >
                    Order Similar
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-tighter text-sage-800 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif font-bold text-sage-900 group-hover:text-sage-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sage-600 font-bold">{item.price}</p>
                </div>
                <p className="text-[11px] text-sage-400 uppercase tracking-widest mt-1 font-semibold overflow-hidden whitespace-nowrap text-ellipsis border-b border-sage-100 pb-1">
                  {item.ingredients.join(' • ')}
                </p>
                <p className="text-sm text-sage-500 mt-2 font-light italic">Artisan handcrafted</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:hidden">
          <a 
            href="#menu" 
            onClick={(e) => scrollToSection(e, '#menu')}
            className="block w-full py-4 rounded-xl border border-sage-200 text-sage-600 font-bold bg-white text-center"
          >
            Explore Full Menu
          </a>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedCake && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div 
            className="absolute inset-0 bg-sage-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeQuickView}
          ></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300 max-h-[90vh]">
            {/* Close Button */}
            <button 
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-[110] w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-sage-900 hover:bg-sage-100 transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content - Left (Carousel) */}
            <div className="md:w-1/2 h-80 md:h-auto overflow-hidden relative group/carousel bg-sage-50">
              <div className="w-full h-full relative">
                <img 
                  src={selectedCake.gallery[currentImageIndex]} 
                  alt={`${selectedCake.name} view ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover animate-in fade-in duration-500"
                />
                
                {/* Navigation Arrows */}
                {selectedCake.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white/50"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white/50"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicators */}
                {selectedCake.gallery.length > 1 && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {selectedCake.gallery.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Content - Right */}
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center overflow-y-auto">
              <span className="text-sage-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                {selectedCake.category} Collection
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-sage-900 mb-2 leading-tight">
                {selectedCake.name}
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <p className="text-2xl text-sage-600 font-bold">{selectedCake.price}</p>
                <div className="flex flex-wrap gap-1">
                  {selectedCake.ingredients.map(ing => (
                    <span key={ing} className="bg-sage-50 text-sage-600 text-[9px] px-2 py-1 rounded-md font-bold uppercase border border-sage-100">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="w-12 h-1 bg-sage-200 mb-6 rounded-full"></div>
              
              <p className="text-sage-700 font-light leading-relaxed mb-10 text-lg">
                {selectedCake.description}
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href="#home"
                  onClick={(e) => { scrollToSection(e, '#home'); closeQuickView(); }}
                  className="w-full py-4 bg-sage-800 text-white font-bold rounded-2xl text-center shadow-lg hover:bg-sage-700 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Order Custom Version
                </a>
                <button 
                  onClick={closeQuickView}
                  className="w-full py-4 border-2 border-sage-100 text-sage-600 font-bold rounded-2xl hover:bg-sage-50 transition-all"
                >
                  Back to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;

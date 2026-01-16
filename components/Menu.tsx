
import React, { useState, useMemo } from 'react';
import { ALL_MENU_ITEMS, CATEGORIES } from '../constants';
import { CakeCollectionItem } from '../types';

type SortOrder = 'none' | 'low-to-high' | 'high-to-low';

interface MenuProps {
  onAddToCart: (item: CakeCollectionItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].title);
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');

  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const filteredAndSortedItems = useMemo(() => {
    let items = ALL_MENU_ITEMS.filter(item => item.category === activeCategory);
    
    if (sortOrder === 'low-to-high') {
      items = [...items].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'high-to-low') {
      items = [...items].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    
    return items;
  }, [activeCategory, sortOrder]);

  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sage-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 block">Complete Selection</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-sage-900 leading-tight">
            Our Full Menu
          </h2>
          <p className="text-sm sm:text-base text-sage-600 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Browse through our extensive variety of cakes and desserts, organized by category and price for your convenience.
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 sm:mb-16">
          {/* Category Tabs - Scrollable on mobile */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex lg:flex-wrap justify-start sm:justify-center lg:justify-start gap-2 min-w-max sm:min-w-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border whitespace-nowrap ${
                    activeCategory === cat.title 
                    ? 'bg-sage-800 text-white border-sage-800 shadow-md' 
                    : 'bg-white text-sage-500 border-sage-100 hover:border-sage-300'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <label className="text-[10px] sm:text-xs font-bold text-sage-400 uppercase tracking-widest whitespace-nowrap">Sort By:</label>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="px-4 py-2 sm:py-2.5 rounded-xl border border-sage-100 bg-cream-50 text-sage-800 text-xs sm:text-sm font-semibold outline-none focus:ring-2 focus:ring-sage-200 transition-all cursor-pointer flex-grow sm:flex-grow-0"
            >
              <option value="none">Recommended</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 sm:gap-y-12 min-h-[300px]">
          {filteredAndSortedItems.length > 0 ? (
            filteredAndSortedItems.map((item) => (
              <div key={item.id} className="group flex gap-4 sm:gap-6 items-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-sage-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-1 gap-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-sage-900 group-hover:text-sage-500 transition-colors truncate max-w-[120px] sm:max-w-none">
                      {item.name}
                    </h3>
                    <div className="hidden sm:block flex-grow border-b border-dotted border-sage-200 mx-2"></div>
                    <span className="text-sm sm:text-base text-sage-800 font-black whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[11px] sm:text-sm text-sage-500 font-light mb-2 line-clamp-1 sm:line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.slice(0, 3).map(ing => (
                      <span key={ing} className="text-[8px] sm:text-[9px] uppercase font-bold text-sage-400 tracking-wider">
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-[8px] sm:text-[9px] uppercase font-bold text-sage-400 tracking-wider">+{item.ingredients.length - 3}</span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="p-2 sm:p-3 text-sage-400 hover:text-sage-800 hover:bg-sage-50 rounded-full transition-all active:scale-90 flex-shrink-0"
                  aria-label="Add to cart"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 sm:py-20 text-center text-sage-400 font-light italic text-sm">
              No items currently listed for this category.
            </div>
          )}
        </div>

        <div className="mt-16 sm:mt-20 text-center px-4">
          <p className="text-sm sm:text-base text-sage-500 font-light italic mb-6">Want something completely unique? We specialize in one-off custom designs.</p>
          <a 
            href="#home"
            onClick={scrollToOrder}
            className="w-full sm:w-auto px-10 py-4 bg-sage-300 text-white rounded-2xl font-black shadow-lg hover:bg-sage-400 transition-all inline-block active:scale-95"
          >
            Request Custom Quote
          </a>
        </div>

      </div>
    </div>
  );
};

export default Menu;

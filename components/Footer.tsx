
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const id = target.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-cream-100 pt-20 pb-10 border-t border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-serif font-bold text-sage-600 mb-6 tracking-tight">Caklora</h2>
            <p className="text-sage-600 font-light leading-relaxed mb-6">
              Artisanal cakes handcrafted with premium ingredients. Making your celebrations sweeter, one slice at a time.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'PN', 'TW'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-sage-100 flex items-center justify-center text-sage-400 font-bold text-xs hover:bg-sage-300 hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sage-900 font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sage-600 hover:text-sage-400 transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="text-sage-600 hover:text-sage-400 transition-colors font-semibold italic"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sage-900 font-bold uppercase tracking-widest text-xs mb-8">Baking Hours</h4>
            <ul className="space-y-4 text-sage-600 font-light">
              <li className="flex justify-between"><span>Mon — Fri</span> <span className="font-medium">9am — 6pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="font-medium">10am — 4pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="font-medium italic">Closed for Baking</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sage-900 font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-sage-600 text-sm mb-4 font-light">Get exclusive cake recipes and seasonal discounts.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-white focus:outline-none focus:ring-1 focus:ring-sage-200"
              />
              <button className="w-full py-3 bg-sage-800 text-white rounded-xl font-bold hover:bg-sage-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-10 border-t border-sage-50 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sage-400 text-sm font-light">
            © {new Date().getFullYear()} Caklora Artisanal Bakery. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-sage-400 font-light">
            <a href="#" className="hover:text-sage-600">Privacy Policy</a>
            <a href="#" className="hover:text-sage-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import { CAKE_TYPES, FLAVORS, SIZES } from '../constants';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    cakeType: '',
    weight: 2,
    size: '',
    flavor: '',
    customMessage: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const id = target.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      address: '',
      cakeType: '',
      weight: 2,
      size: '',
      flavor: '',
      customMessage: ''
    });
  };

  return (
    <div className="relative overflow-hidden bg-cream-50 pt-16 pb-12 lg:pt-24 lg:pb-32 px-4 sm:px-6">
      {/* Background blobs with looping animations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sage-100 rounded-full blur-3xl opacity-30 sm:opacity-40 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-sage-200 rounded-full blur-3xl opacity-20 sm:opacity-30 -z-10 animate-blob-reverse"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-100 rounded-full">
              Handcrafted in Pakistan
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-black text-sage-900 leading-tight mb-6">
              Bespoke Cakes for <br className="hidden sm:block" />
              <span className="text-sage-400 italic">Life's Sweetest</span> <br className="hidden sm:block" />
              Moments.
            </h1>
            <p className="text-base sm:text-lg text-sage-700 max-w-xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
              Blending premium ingredients with artistic passion to create cakes that taste as beautiful as they look.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center">
              <a 
                href="#collections" 
                onClick={(e) => scrollToSection(e, '#collections')}
                className="w-full sm:w-auto px-10 py-4 bg-sage-300 text-white rounded-xl font-bold hover:bg-sage-400 transition-all shadow-lg hover:-translate-y-1 text-center"
              >
                Explore Gallery
              </a>
              <div className="flex items-center gap-2 px-6 py-4 text-sage-800 font-medium text-sm sm:text-base">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Rated 5.0 by 5k+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Content: Order Form or Confirmation Message */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-sage-100 relative overflow-hidden flex flex-col w-full">
              <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-sage-300"></div>
              
              {!submitted ? (
                <>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-sage-800 mb-6 text-center lg:text-left">Order Your Dream Cake</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Full Name</label>
                        <input 
                          type="text"
                          placeholder="e.g. Zain Ahmed"
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm"
                          value={formData.fullName}
                          onChange={e => setFormData({...formData, fullName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Phone Number</label>
                        <input 
                          type="tel"
                          placeholder="e.g. 0300 1234567"
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm"
                          value={formData.phoneNumber}
                          onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Delivery Address</label>
                      <input 
                        type="text"
                        placeholder="Area, Street, House No."
                        className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm"
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Cake Type</label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm cursor-pointer"
                          value={formData.cakeType}
                          onChange={e => setFormData({...formData, cakeType: e.target.value})}
                          required
                        >
                          <option value="">Select Type</option>
                          {CAKE_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Weight (lbs)</label>
                        <input 
                          type="number" 
                          min="1" 
                          max="50"
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm"
                          value={formData.weight}
                          onChange={e => setFormData({...formData, weight: parseInt(e.target.value) || 0})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Size Preference</label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm cursor-pointer"
                          value={formData.size}
                          onChange={e => setFormData({...formData, size: e.target.value})}
                          required
                        >
                          <option value="">Select Size</option>
                          {SIZES.map(size => <option key={size} value={size}>{size}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Flavor</label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all text-sm cursor-pointer"
                          value={formData.flavor}
                          onChange={e => setFormData({...formData, flavor: e.target.value})}
                          required
                        >
                          <option value="">Select Flavor</option>
                          {FLAVORS.map(flavor => <option key={flavor} value={flavor}>{flavor}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-sage-500 uppercase mb-1.5">Custom Message / Notes</label>
                      <textarea 
                        rows={2}
                        placeholder="E.g. Happy Birthday Julia! Please use pastel colors..."
                        className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-50 focus:ring-2 focus:ring-sage-200 outline-none transition-all resize-none text-sm"
                        value={formData.customMessage}
                        onChange={e => setFormData({...formData, customMessage: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-sage-800 text-white font-bold rounded-xl hover:bg-sage-700 transition-all shadow-lg active:scale-95 text-base"
                    >
                      Place Order
                    </button>
                    <p className="text-center text-[9px] sm:text-[10px] text-sage-400 mt-2 italic">
                      *Our team will contact you within 24 hours to confirm your order.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex-grow flex flex-col items-center justify-center text-center py-6 sm:py-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-sage-100 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-sage-900 mb-4 px-2">Shukriya, {formData.fullName.split(' ')[0]}!</h2>
                  <p className="text-sm sm:text-base text-sage-600 mb-6 sm:mb-8 max-w-sm mx-auto leading-relaxed px-2">
                    We've received your request for a <span className="font-bold text-sage-800">{formData.cakeType}</span>. Your celebration is in good hands.
                  </p>
                  
                  <div className="w-full bg-cream-50 rounded-2xl p-5 sm:p-6 text-left border border-sage-50 mb-8 sm:mb-10">
                    <h3 className="text-[10px] font-bold text-sage-400 uppercase tracking-widest mb-4">Order Summary</h3>
                    <ul className="space-y-3 text-xs sm:text-sm">
                      <li className="flex justify-between border-b border-sage-100 pb-2">
                        <span className="text-sage-500">Flavor:</span>
                        <span className="font-semibold text-sage-800">{formData.flavor}</span>
                      </li>
                      <li className="flex justify-between border-b border-sage-100 pb-2">
                        <span className="text-sage-500">Weight:</span>
                        <span className="font-semibold text-sage-800">{formData.weight} lbs</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-sage-500">Contact:</span>
                        <span className="font-semibold text-sage-800">{formData.phoneNumber}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 w-full px-2">
                    <p className="text-[11px] sm:text-xs font-medium text-sage-500 leading-relaxed">
                      Expect a call or WhatsApp message from our head baker shortly to confirm the delivery slot and custom details.
                    </p>
                    <button 
                      onClick={handleReset}
                      className="w-full py-4 border-2 border-sage-100 text-sage-600 font-bold rounded-xl hover:bg-sage-50 transition-all active:scale-95 text-sm sm:text-base"
                    >
                      Place Another Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onClear }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const subtotal = items.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    return acc + (price * item.quantity);
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsCheckout(false);
      onClear();
      onClose();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-sage-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-[100%] sm:max-w-md bg-cream-50 h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-sage-100 flex justify-between items-center bg-white">
          <h2 className="text-xl sm:text-2xl font-serif font-black text-sage-900">Your Basket</h2>
          <button 
            onClick={onClose}
            className="p-2 text-sage-400 hover:text-sage-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-5 sm:p-6 custom-scroll">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-in zoom-in duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-black text-sage-900 mb-2">Order Confirmed!</h3>
              <p className="text-sm sm:text-base text-sage-500 font-light px-2">
                Thank you, {formData.name}. We've received your order. Our delivery team will contact you shortly at {formData.phone}.
              </p>
            </div>
          ) : isCheckout ? (
            <div className="animate-in fade-in duration-300">
              <button 
                onClick={() => setIsCheckout(false)}
                className="flex items-center gap-2 text-sage-400 hover:text-sage-800 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to basket
              </button>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-sage-800 mb-6">Delivery Details</h3>
              <form onSubmit={handleCheckout} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-sage-400 uppercase mb-1.5">Full Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-sage-100 bg-white focus:ring-2 focus:ring-sage-200 outline-none text-sm sm:text-base"
                    placeholder="E.g. Ali Raza"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-sage-400 uppercase mb-1.5">Phone Number</label>
                  <input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-sage-100 bg-white focus:ring-2 focus:ring-sage-200 outline-none text-sm sm:text-base"
                    placeholder="E.g. 0321 1234567"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-sage-400 uppercase mb-1.5">Delivery Address</label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-sage-100 bg-white focus:ring-2 focus:ring-sage-200 outline-none resize-none text-sm sm:text-base"
                    placeholder="Detailed address for delivery..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-sage-800 text-white font-bold rounded-xl shadow-lg hover:bg-sage-700 transition-all active:scale-95 mt-4 sm:mt-6"
                >
                  Confirm Order — Rs. {subtotal.toLocaleString()}
                </button>
              </form>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-10">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-base sm:text-lg font-serif italic">Your basket is empty</p>
            </div>
          ) : (
            <div className="space-y-5 sm:space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 sm:gap-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif font-bold text-sage-900 text-sm sm:text-base line-clamp-1">{item.name}</h4>
                      <button onClick={() => onRemove(item.id)} className="text-sage-300 hover:text-red-400 p-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-sage-500 font-bold mt-0.5">{item.price}</p>
                    <div className="flex items-center gap-3 mt-2 sm:mt-3">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-sage-200 flex items-center justify-center text-sage-400 hover:bg-sage-50 active:scale-90"
                      >-</button>
                      <span className="text-xs sm:text-sm font-bold text-sage-800 w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-sage-200 flex items-center justify-center text-sage-400 hover:bg-sage-50 active:scale-90"
                      >+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && !isCheckout && items.length > 0 && (
          <div className="p-5 sm:p-6 bg-white border-t border-sage-100 space-y-4">
            <div className="flex justify-between items-center text-sage-900">
              <span className="text-sm font-light uppercase tracking-widest">Subtotal</span>
              <span className="text-xl sm:text-2xl font-serif font-black">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-sage-400 uppercase tracking-widest text-center">Free delivery on orders over Rs. 10,000</p>
            <button 
              onClick={() => setIsCheckout(true)}
              className="w-full py-4 bg-sage-800 text-white font-bold rounded-xl shadow-lg hover:bg-sage-700 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>Proceed to Checkout</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

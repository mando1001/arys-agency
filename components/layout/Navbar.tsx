'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'motion/react';

export const Logo = React.memo(() => (
  <m.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 group cursor-pointer gpu-accel"
  >
    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-all group-hover:rotate-[360deg] duration-700 shadow-lg shadow-primary/20">
      <div className="w-5 h-5 bg-accent rounded-md rotate-45" />
    </div>
    <div className="text-2xl font-bold tracking-tighter text-primary font-heading">
      ARYS<span className="text-accent">.</span>
    </div>
  </m.div>
));

Logo.displayName = 'Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header 
      className={`fixed top-4 left-4 right-4 z-[90] transition-all duration-500 ease-[0.22,1,0.36,1] max-w-7xl mx-auto ${
        isScrolled 
          ? 'glass-card-premium py-3 rounded-2xl border-slate-200' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="px-6 flex items-center justify-between">
        <m.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="transition-transform duration-300 cursor-pointer"
        >
          <Logo />
        </m.div>

        <div className="hidden md:flex items-center gap-8">
          {['Megoldások', 'Audit'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer tracking-wide uppercase text-[10px]"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-audit'))}
            className="px-6 py-2.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-secondary transition-all cursor-pointer shadow-lg shadow-primary/10 active:scale-95"
          >
            Audit Indítása
          </button>
        </div>
      </div>
    </header>
  );
};

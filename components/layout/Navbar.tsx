'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'motion/react';

export const Logo = React.memo(() => (
  <m.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 group cursor-pointer gpu-accel"
  >
    <div className="w-8 h-8 bg-[#042F2E] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
      <div className="w-4 h-4 bg-[#2DD4BF] rounded-sm rotate-45" />
    </div>
    <div className="text-2xl font-black tracking-tighter text-[#042F2E]">
      ARYS<span className="text-teal-500">.</span>
    </div>
  </m.div>
));

Logo.displayName = 'Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll check for performance
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
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ease-[0.22,1,0.36,1] ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md backdrop-optimize py-4 border-b border-teal-500/10' 
          : 'bg-transparent py-8 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <m.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="transition-transform duration-300 cursor-pointer"
        >
          <Logo />
        </m.div>
      </div>
    </header>
  );
};

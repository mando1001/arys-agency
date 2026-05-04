'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'motion/react';

export const Logo = () => (
  <m.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 group cursor-pointer"
  >
    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
      <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
    </div>
    <div className="text-2xl font-black tracking-tighter text-white">
      ARYS<span className="text-teal-400">.</span>
    </div>
  </m.div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${isScrolled ? 'bg-[#0A0B0D]/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
          <Logo />
        </div>
      </div>
    </header>
  );
};

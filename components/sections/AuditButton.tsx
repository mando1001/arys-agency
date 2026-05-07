'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AuditButton = () => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-audit'));
  };

  return (
    <button
      onClick={handleClick}
      className="relative group px-12 py-6 bg-accent text-background font-black text-sm uppercase tracking-widest rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 transition-all hover:shadow-accent/40 hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 flex items-center gap-3">
        Audit Elindítása <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </button>
  );
};

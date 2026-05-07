'use client';

import React from 'react';
import { m } from 'motion/react';
import { Mail, FileText, Users, Database, Calendar, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

export const HeroVisual = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full max-w-6xl mx-auto mt-32 relative group cursor-default">
      {/* Decorative glow behind the whole visual */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 ${isMobile ? 'blur-[20px]' : 'blur-[80px]'} rounded-full transition-all duration-700 gpu-accel`} />

      <div className={`relative rounded-[40px] border border-white/10 glass-card-premium ${!isMobile ? 'backdrop-blur-3xl shadow-2xl shadow-black/50' : 'shadow-lg'} p-8 lg:p-16 overflow-hidden gpu-accel`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          {/* LEFT: Chaos */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] text-left mb-2 pl-2">Jelenlegi állapot (Káosz)</div>
            {[
              { icon: <Mail size={18} />, title: 'Feldolgozatlan Emailek', desc: 'Lassú reakcióidő' },
              { icon: <FileText size={18} />, title: 'Manuális adatrögzítés', desc: 'Magas hibafaktor' },
              { icon: <Users size={18} />, title: 'Elveszett potenciális leadek', desc: 'Kieső bevétel' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 text-white/60 grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 hover:border-red-500/50 hover:bg-red-500/5 shadow-sm"
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/30 group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">{item.icon}</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-primary">{item.title}</span>
                  <span className="text-[10px] text-red-500 font-bold bg-red-500/10 px-3 py-1 rounded-full mt-2 border border-red-500/20 uppercase tracking-widest">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: ARYS Engine */}
          <div className="flex-shrink-0 relative py-16 lg:py-0 flex items-center justify-center">
            {/* Stationary rings */}
            <div className="absolute inset-0 m-auto w-[240px] h-[240px] rounded-full border-2 border-accent/20 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-1000 aspect-square animate-pulse" />
            <div className="absolute inset-0 m-auto w-[320px] h-[320px] rounded-full border border-accent/10 group-hover:border-accent/20 transition-all duration-1000 aspect-square border-dashed animate-spin-slow" />

            <div
              className="w-44 h-44 rounded-[3rem] border-2 border-accent/50 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center relative z-10 cursor-pointer overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform gpu-accel group/engine"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover/engine:opacity-100 transition-opacity" />
              <span className="text-4xl font-bold text-white tracking-tighter mb-1 relative z-10 font-heading">ARYS</span>
              <span className="text-[10px] text-accent font-black tracking-[0.2em] uppercase bg-accent/10 px-4 py-1.5 rounded-full relative z-10 border border-accent/20">B.L.A.S.T.</span>
            </div>

            {/* Connecting dots */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(20,184,166,0.6)]" />
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(20,184,166,0.6)]" />
          </div>

          {/* RIGHT: Order */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            <div className="text-accent text-[10px] font-black uppercase tracking-[0.4em] text-left lg:text-right mb-2 pr-2">Újbóli növekedés (Rend)</div>
            {[
              { icon: <Database size={18} />, title: 'Központosított Tudás', desc: '100% Precizitás' },
              { icon: <Calendar size={18} />, title: 'Automata Workflow-k', desc: 'Folyamatos működés' },
              { icon: <CheckCircle2 size={18} />, title: 'Visszanyert +20 Óra', desc: 'Értékteremtő fókusz' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 rounded-[2rem] glass-card border border-accent/20 shadow-xl shadow-black/20 transition-all hover:border-accent hover:shadow-accent/10 group/card gpu-accel"
              >
                <div className="p-4 rounded-2xl bg-accent/10 text-accent border border-accent/20 group-hover/card:bg-accent group-hover/card:text-white transition-colors">{item.icon}</div>
                <div className="flex flex-col items-start lg:items-end w-full">
                  <span className="text-sm font-bold text-primary">{item.title}</span>
                  <span className="text-[10px] text-accent font-black mt-2 uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

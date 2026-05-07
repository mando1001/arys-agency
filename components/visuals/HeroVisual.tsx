'use client';

import React from 'react';
import { m } from 'motion/react';
import { Mail, FileText, Users, Database, Calendar, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

export const HeroVisual = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full max-w-6xl mx-auto mt-32 relative group cursor-default">
      {/* Decorative glow behind the whole visual - significantly reduced blur for performance */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/10 ${isMobile ? 'blur-[20px]' : 'blur-[60px]'} rounded-full group-hover:bg-teal-500/20 transition-all duration-700 gpu-accel`} />

      <div className={`relative rounded-[40px] border border-teal-500/10 bg-white/40 ${!isMobile ? 'backdrop-blur-md backdrop-optimize' : ''} p-8 lg:p-16 overflow-hidden gpu-accel`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          {/* LEFT: Chaos */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] text-left mb-4 pl-2 opacity-80">Jelenlegi állapot (Káosz)</div>
            {[
              { icon: <Mail size={18} />, title: 'Feldolgozatlan Emailek', desc: 'Lassú reakcióidő' },
              { icon: <FileText size={18} />, title: 'Manuális adatrögzítés', desc: 'Magas hibafaktor' },
              { icon: <Users size={18} />, title: 'Elveszett potenciális leadek', desc: 'Kieső bevétel' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-5 rounded-3xl bg-slate-100/80 border border-slate-200 text-slate-600 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 hover:border-red-200 hover:bg-red-50/50 shadow-sm"
              >
                <div className="p-4 rounded-2xl bg-slate-200/50 text-slate-500 group-hover:text-red-500 group-hover:bg-red-100/50 transition-colors">{item.icon}</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-700">{item.title}</span>
                  <span className="text-[10px] text-red-600 font-bold bg-red-100 px-2 py-0.5 rounded-full mt-2 border border-red-200 uppercase tracking-wider">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: ARYS Engine */}
          <div className="flex-shrink-0 relative py-16 lg:py-0 flex items-center justify-center">
            {/* Stationary rings */}
            <div className="absolute inset-0 m-auto w-[220px] h-[220px] rounded-full border-2 border-teal-500/20 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-1000 aspect-square" />
            <div className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-teal-500/10 group-hover:border-teal-500/20 transition-all duration-1000 aspect-square border-dashed" />

            <div
              className="w-40 h-40 rounded-[2.5rem] border-2 border-teal-500/40 bg-white backdrop-blur-md backdrop-optimize flex flex-col items-center justify-center relative z-10 cursor-pointer overflow-hidden shadow-2xl gpu-accel"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />
              <span className="text-4xl font-black text-slate-900 tracking-tighter mb-1 relative z-10">ARYS</span>
              <span className="text-[10px] text-teal-600 font-black tracking-[0.2em] uppercase bg-teal-50 px-3 py-1 rounded-full relative z-10 border border-teal-200">B.L.A.S.T.</span>
            </div>

            {/* Connecting dots */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
          </div>

          {/* RIGHT: Order */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <div className="text-teal-600 text-[10px] font-black uppercase tracking-[0.3em] text-left lg:text-right mb-4 pr-2 opacity-80">Újbóli növekedés (Rend)</div>
            {[
              { icon: <Database size={18} />, title: 'Központosított Tudás', desc: '100% Precizitás' },
              { icon: <Calendar size={18} />, title: 'Automata Workflow-k', desc: 'Folyamatos működés' },
              { icon: <CheckCircle2 size={18} />, title: 'Visszanyert +20 Óra', desc: 'Értékteremtő fókusz' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-5 rounded-3xl bg-white border border-teal-200 shadow-sm transition-all hover:border-teal-400 hover:shadow-md gpu-accel"
              >
                <div className="p-4 rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">{item.icon}</div>
                <div className="flex flex-col items-start lg:items-end w-full">
                  <span className="text-sm font-bold text-slate-900">{item.title}</span>
                  <span className="text-[10px] text-teal-600 font-black mt-2 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

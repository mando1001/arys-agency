'use client';

import React from 'react';
import { m } from 'motion/react';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AuditMagnet = ({ openModal }: { openModal: () => void }) => {
  return (
    <section id="audit" className="py-32 relative overflow-hidden bg-black">
      {/* Diagnostic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-scan-fast" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-slow" />
        <div className="absolute inset-0 bg-grid-white opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative p-12 md:p-24 rounded-[48px] bg-[#0D0F14] border border-white/5 overflow-hidden text-center">
          {/* Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-teal-500/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-teal-500/5 border border-teal-500/10 rounded-full text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Zap size={14} className="animate-pulse" />
              Rendszerdiagnosztika Elérhető
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
            >
              Találjuk meg a <br />
              <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-4 py-2 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">növekedési gátakat.</span>
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Egy 15 perces technológiai audit során feltérképezzük a manuális folyamataidat, és egy azonnal alkalmazható automatizációs tervet kapsz.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <button
                onClick={openModal}
                className="relative group px-12 py-6 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)] transition-all hover:shadow-teal-500/40 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Audit Elindítása <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-teal-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <div className="flex items-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-500" /> 100% Ingyenes</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-500" /> 2 perces form</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-500" /> Szakértői válasz</span>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

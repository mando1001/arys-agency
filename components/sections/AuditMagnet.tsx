import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { AuditButton } from './AuditButton';

export const AuditMagnet = () => {
  return (
    <section id="audit" className="py-32 relative overflow-hidden bg-[#F2F9F7]">
      {/* Diagnostic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-scan-fast hidden md:block" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-slow hidden md:block" />
        <div className="absolute inset-0 bg-grid-white opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative p-12 md:p-24 rounded-[48px] bg-white border-2 border-teal-500/10 overflow-hidden text-center shadow-2xl">
          {/* Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-teal-500/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-500/10 border border-teal-500/10 rounded-full text-teal-600 text-[10px] font-black uppercase tracking-[0.3em]">
              <Zap size={14} className="animate-pulse" />
              Rendszerdiagnosztika Elérhető
            </div>

            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight text-[#042F2E]">
              Találjuk meg a <br />
              <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent italic px-4 py-2 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">növekedési gátakat.</span>
            </h2>

            <p className="text-emerald-900/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Egy 15 perces technológiai audit során feltérképezzük a manuális folyamataidat, és egy azonnal alkalmazható automatizációs tervet kapsz.
            </p>

            <div className="flex flex-col items-center gap-6">
              <AuditButton />
              <div className="flex items-center gap-8 text-[10px] font-black text-emerald-900/40 uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-600" /> 100% Ingyenes</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-600" /> 2 perces form</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-600" /> Szakértői válasz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

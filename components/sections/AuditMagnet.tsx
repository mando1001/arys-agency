import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { AuditButton } from './AuditButton';

export const AuditMagnet = () => {
  return (
    <section id="audit" className="py-32 relative overflow-hidden bg-background">
      {/* Diagnostic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-slate opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative p-12 md:p-24 rounded-[4rem] border border-white/10 glass-card-premium overflow-hidden text-center shadow-2xl shadow-black/50">
          {/* Subtle Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-accent/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-background rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-lg shadow-primary/10">
              <Zap size={14} className="text-accent animate-pulse" />
              Rendszerdiagnosztika Elérhető
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] text-primary font-heading">
              Találjuk meg a <br />
              <span className="inline-block text-accent-gradient italic px-2">növekedési gátakat.</span>
            </h2>

            <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-body">
              Egy 15 perces technológiai audit során feltérképezzük a manuális folyamataidat, és egy azonnal alkalmazható automatizációs tervet kapsz.
            </p>

            <div className="flex flex-col items-center gap-10">
              <AuditButton />
              <div className="flex flex-wrap justify-center items-center gap-10 text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                <span className="flex items-center gap-2.5"><CheckCircle2 size={16} className="text-accent" /> 100% Ingyenes</span>
                <span className="flex items-center gap-2.5"><CheckCircle2 size={16} className="text-accent" /> 2 perces form</span>
                <span className="flex items-center gap-2.5"><CheckCircle2 size={16} className="text-accent" /> Szakértői válasz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

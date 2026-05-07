'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { m, Variants } from 'motion/react';
import { HeroVisual } from '../visuals/HeroVisual';
import { Testimonials } from './Testimonials';

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-48 pb-20 overflow-hidden bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] gpu-accel will-change-transform">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[50px] md:blur-[80px]" />
        <div className="absolute inset-0 bg-grid-slate opacity-60" />
      </div>

      <div
        className="relative max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center gpu-accel"
      >
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_12px_#14B8A6]" />
          Valódi Üzleti Automatizáció
        </div>

        <h1 
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[1.05] md:leading-[0.85] mb-10 text-primary font-heading"
        >
          Növeld a <span className="inline-block text-accent-gradient italic px-2">profitot</span>, <br />
          csökkentsd a <span className="text-secondary">káoszt.</span>
        </h1>

        <p 
          className="text-lg md:text-2xl text-secondary max-w-4xl text-center leading-relaxed mb-16 font-body"
        >
          Az ARYS célja, hogy levegye a manuális adminisztrációt, az elvesző leadeket és a belső kavarodást a csapatod válláról. Gyorsabb válaszok, kevesebb hiba, több lezárt ügy — úgy, hogy közben nem kell új embereket felvenned minden növekedési lépéshez.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto mb-24"
        >
          <a 
            href="#audit" 
            className="px-12 py-6 bg-primary hover:bg-secondary text-white font-black rounded-2xl transition-all shadow-2xl shadow-primary/20 text-sm flex items-center justify-center gap-3 group tracking-widest uppercase"
          >
            Ingyenes Cégdiagnosztika
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#megoldasok" 
            className="px-12 py-6 border-2 border-primary text-primary font-bold text-sm rounded-2xl transition-all flex items-center justify-center hover:bg-primary hover:text-white tracking-widest uppercase"
          >
            Megoldások
          </a>
        </div>

        <div className="w-full">
          <HeroVisual />
        </div>
        
        <div className="w-full">
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

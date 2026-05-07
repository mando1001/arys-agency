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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0B0D]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] gpu-accel will-change-transform">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[40px] md:blur-[60px] gpu-accel" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[30px] md:blur-[50px] gpu-accel" />
        <div className="absolute inset-0 bg-grid-white opacity-5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <m.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center gpu-accel will-change-transform"
      >
        <m.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/5 border border-teal-500/20 rounded-full text-teal-400 text-[10px] uppercase tracking-[0.3em] font-black mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_#2dd4bf]" />
          Valódi Üzleti Automatizáció
        </m.div>

        <m.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05] md:leading-[0.9] mb-8 text-white"
        >
          Növeld a <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-4 py-2 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">profitot</span>, <br />
          csökkentsd a céges káoszt.
        </m.h1>

        <m.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-400 max-w-4xl text-center leading-relaxed mb-12 font-medium"
        >
          Az ARYS célja, hogy levegye a manuális adminisztrációt, az elvesző leadeket és a belső kavarodást a csapatod válláról. Gyorsabb válaszok, kevesebb hiba, több lezárt ügy — úgy, hogy közben nem kell új embereket felvenned minden növekedési lépéshez.
        </m.p>

        <m.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a 
            href="#audit" 
            className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-extrabold rounded-2xl transition-all shadow-[0_20px_50px_-10px_rgba(45,212,191,0.4)] text-sm flex items-center justify-center gap-3 group"
          >
            Ingyenes Cégdiagnosztika
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#megoldasok" 
            className="px-10 py-5 border border-white/10 hover:border-white/30 text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center backdrop-blur-sm"
          >
            Megoldások
          </a>
        </m.div>

        <m.div variants={itemVariants} className="w-full">
          <HeroVisual />
        </m.div>
        
        <m.div variants={itemVariants} className="w-full">
          <Testimonials />
        </m.div>
      </m.div>
    </section>
  );
};

'use client';

import React from 'react';
import { m, Variants } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Török Attila",
      role: "Alapító, Török Consulting Kft.",
      content: "A lenyűgöző új arculaton túl olyan intelligens belső folyamatokat építettek fel számomra, amik teljesen transzparenssé tették az ügyfélkommunikációt.",
    },
    {
      name: "Török Adél",
      role: "Alapító, ajoga.hu",
      content: "A repetitív adminisztráció és a foglaláskezelés teljesen háttérbe szorult az ARYS rendszereivel. Végre kompromisszumok nélkül, 100%-os fókusszal szentelhetem magam a hivatásomnak.",
    },
    {
      name: "Csó Gábor",
      role: "Ügyvezető, Halasker Kft.",
      content: "A belső kommunikációs anomáliák és a számlázási hibák egyik napról a másikra megszűntek. A felszabadult kapacitás lehetővé tette a valódi proaktív értékteremtést a cégben.",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    },
  };

  return (
    <div 
      className="mt-32 w-full border-t border-slate-200 pt-24"
    >
      <p 
        className="text-[10px] uppercase tracking-[0.5em] text-accent mb-16 font-black text-center"
      >
        Akik már hatékonyabban dolgoznak velünk
      </p>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10 gpu-accel"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white border-2 border-slate-200 p-10 rounded-[2.5rem] text-left hover:border-accent hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 shadow-sm group"
          >
            <div className="flex gap-2 mb-8">
              {[1,2,3,4,5].map(s => <Sparkles key={s} size={16} className="text-accent fill-accent/20 group-hover:scale-110 transition-transform" />)}
            </div>
            <p className="text-secondary text-base leading-relaxed mb-8 italic font-body">"{review.content}"</p>
            <div className="flex flex-col gap-1">
              <div className="text-primary font-bold text-lg font-heading">{review.name}</div>
              <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-black">{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

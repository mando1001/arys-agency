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
      className="mt-32 w-full border-t border-slate-200 pt-20"
    >
      <p 
        className="text-[10px] uppercase tracking-[0.4em] text-teal-600 mb-12 font-black text-center"
      >
        Akik már hatékonyabban dolgoznak velünk
      </p>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 gpu-accel"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 p-8 rounded-3xl text-left hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500 shadow-sm"
          >
            <div className="flex gap-1.5 mb-6">
              {[1,2,3,4,5].map(s => <Sparkles key={s} size={14} className="text-teal-500 fill-teal-500/10" />)}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{review.content}"</p>
            <div>
              <div className="text-slate-900 font-bold text-sm">{review.name}</div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

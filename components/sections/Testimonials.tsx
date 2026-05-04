'use client';

import React from 'react';
import { m } from 'motion/react';
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

  return (
    <div 
      className="mt-32 w-full border-t border-white/5 pt-20"
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-teal-400 mb-12 font-black text-center">
        Akik már hatékonyabban dolgoznak velünk
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <m.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-left hover:border-teal-500/30 transition-all duration-500"
          >
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(s => <Sparkles key={s} size={12} className="text-teal-400" />)}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{review.content}"</p>
            <div>
              <div className="text-white font-bold text-sm">{review.name}</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-wider">{review.role}</div>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
};

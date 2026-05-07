'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

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
  },
  {
    name: "Kovács Péter",
    role: "CEO, TechFlow Solutions",
    content: "Az automatizációval havi 40+ munkaórát szabadítottunk fel. Nem csak pénzt spórolunk, de a csapat is sokkal boldogabb, hogy nem kell adminisztrálniuk.",
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content & Nav */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">
                Sikertörténetek
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary font-heading uppercase leading-[0.95]">
                Akik már <br />
                <span className="inline-block text-accent-gradient italic px-2">skálázódnak.</span>
              </h2>
              <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-md font-body">
                Nézd meg, hogyan változtattuk meg más vállalkozások mindennapjait az automatizáció erejével.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={prevStep}
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all group active:scale-95"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={nextStep}
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all group active:scale-95"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Testimonial Card */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <m.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full space-y-8"
              >
                <Quote className="text-accent w-12 h-12 mb-6 opacity-50" strokeWidth={1.5} />
                
                <blockquote className="text-2xl md:text-4xl font-medium text-primary leading-tight font-heading tracking-tight">
                  "{reviews[currentIndex].content}"
                </blockquote>

                <div className="flex items-center gap-6 pt-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center overflow-hidden">
                    <span className="text-accent font-black text-xl">
                      {reviews[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary font-heading">
                      {reviews[currentIndex].name}
                    </div>
                    <div className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                      {reviews[currentIndex].role}
                    </div>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { m } from 'motion/react';
import { Quote } from 'lucide-react';

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
  },
  {
    name: "Nagy Emese",
    role: "Marketing Manager, GrowthLab",
    content: "A lead-kezelő rendszerüknek köszönhetően a válaszidőnk 2 óráról 5 percre csökkent. A konverziónk 30%-kal nőtt az első hónapban.",
  },
  {
    name: "Szabó Márton",
    role: "Operations Lead, Logistics Pro",
    content: "Végre látom, mi történik a cégben. Az ARYS Brain-nel minden adatunk egy helyen van, és azonnal választ kapunk bármilyen operatív kérdésre.",
  }
];

const TestimonialCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-accent/10 transition-colors">
      <Quote size={80} strokeWidth={1} />
    </div>
    
    <p className="text-secondary text-lg leading-relaxed mb-8 relative z-10 font-body">
      "{review.content}"
    </p>
    
    <div className="flex flex-col gap-1 relative z-10">
      <div className="text-primary font-bold text-xl font-heading">{review.name}</div>
      <div className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">{review.role}</div>
    </div>
  </div>
);

const Marquee = ({ items, reverse = false }: { items: typeof reviews, reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-4">
      <m.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 min-w-max"
      >
        {[...items, ...items].map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </m.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="mt-32 w-full py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6">
          Sikertörténetek
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary font-heading uppercase mb-8">
          Akik már <br />
          <span className="inline-block text-accent-gradient italic px-2">hatékonyabban skáláznak.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee items={reviews.slice(0, 3)} />
        <Marquee items={reviews.slice(3, 6)} reverse />
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

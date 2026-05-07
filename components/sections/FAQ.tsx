'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Ez csak nagyvállalatoknak érhető el?",
    answer: "Nem, sőt. Az automatizáció a legkritikusabb a KKV-k számára, ahol korlátozott a munkaerő. Segítünk, hogy 5 fővel 15 fős teljesítményt nyújts, így a növekedés nem jelent azonnali bérköltség-robbanást."
  },
  {
    question: "Mennyi idő alatt látszik a változás?",
    answer: "Az első 'Quick Win' automatizációkat általában a bevezetést követő 14 napon belül élesítjük. A teljes folyamatoptimalizálás eredményei (időmegtakarítás, hibaarány csökkenése) már az első hónap végén mérhetőek."
  },
  {
    question: "Kell hozzá informatikai szaktudás a részemről?",
    answer: "Egyáltalán nem. Mi 'kulcsrakész' rendszereket adunk le, és betanítjuk a csapatodat a használatukra. A célunk, hogy a technológia téged szolgáljon, ne fordítva."
  },
  {
    question: "Mi van, ha már fut valami rendszerünk (pl. CRM, ERP)?",
    answer: "Az ARYS Flow egyik legnagyobb ereje az integráció. Nem lecseréljük a meglévő eszközeidet, hanem összekötjük őket, hogy az adatok automatikusan áramoljanak köztük, kiküszöbölve a manuális másolgatást."
  },
  {
    question: "Hogyan segít ez a profit növelésében?",
    answer: "Három fronton: 1. Megszünteti az elveszett leadeket ( Reach). 2. Drasztikusan csökkenti az adminisztrációs munkaórákat ( Flow). 3. Minimalizálja a drága emberi hibákból eredő pluszköltségeket."
  },
  {
    question: "Mi történik az első auditon?",
    answer: "Ez nem egy értékesítési hívás, hanem egy diagnózis. Átvilágítjuk a jelenlegi folyamataidat, és konkrét számokkal mutatjuk meg, hol és mennyi pénz folyik ki a cégedből a manuális munka miatt."
  }
];

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group border-b border-white/5 transition-all ${isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left gap-8 px-4"
      >
        <div className="flex items-start gap-6">
          <span className="text-accent font-black text-xs mt-1 tabular-nums">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
            {question}
          </span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-accent border-accent text-background rotate-180' : 'text-accent group-hover:border-accent/40'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[68px] pr-12 text-secondary leading-relaxed font-body text-lg max-w-3xl">
              {answer}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">
            Gyakori Kérdések
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary font-heading uppercase">
            Rövid válaszok a <br />
            <span className="inline-block text-accent-gradient italic px-2">tisztánlátáshoz.</span>
          </h2>
        </div>

        <div className="border-t border-white/5">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

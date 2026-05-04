'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Cpu, Database } from 'lucide-react';

interface AuditMagnetProps {
  openModal: () => void;
}

const AuditMagnet = ({ openModal }: AuditMagnetProps) => {
  return (
    <section id="audit" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0F1115] border border-white/10 rounded-3xl p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Sparkles size={200} className="text-teal-400" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                Kérj egy ingyenes <br />
                <span className="text-teal-400">Automatizációs Auditot</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Elemezzük a jelenlegi folyamataidat, és 48 órán belül küldünk egy konkrét tervet, hogy hol tudnál heti több órát felszabadítani AI segítségével.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Terminal, text: "Technikai Stack" },
                  { icon: Cpu, text: "AI Potenciál" },
                  { icon: Database, text: "Adat Workflow" },
                  { icon: Sparkles, text: "ROI Becslés" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                      <item.icon size={18} className="text-teal-400" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
                className="px-12 py-6 bg-teal-500 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(45,212,191,0.2)] hover:bg-teal-400 transition-colors"
              >
                Ingyenes audit kérése
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditMagnet;

'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0A0B0D] text-white p-6 md:p-24 font-sans selection:bg-teal-500/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors mb-12 group uppercase text-[10px] font-black tracking-[0.2em]">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Vissza a főoldalra
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
              <Info className="text-teal-400" size={24} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Impresszum</h1>
          </div>

          <section className="space-y-12 text-gray-400 leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-widest text-teal-400/50">Szolgáltató adatai</h2>
                <div className="space-y-2 text-white font-medium">
                  <p className="text-2xl font-bold">Szlávik Armand Loránd E.V.</p>
                  <p>2143 Kistarcsa, Bem utca 5.</p>
                  <p>Email: hello@arys.hu</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-widest text-teal-400/50">Hatósági adatok</h2>
                <div className="space-y-2 text-white">
                  <p><span className="text-gray-500">Adószám:</span> [Kérlek töltsd ki]</p>
                  <p><span className="text-gray-500">Nyilvántartási szám:</span> [Kérlek töltsd ki]</p>
                  <p><span className="text-gray-500">Nyilvántartó hatóság:</span> Nemzeti Adó- és Vámhivatal</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-widest text-teal-400/50">Tárhelyszolgáltató</h2>
                <div className="space-y-2 text-white">
                  <p className="font-bold">Vercel Inc.</p>
                  <p>440 N Barranca Ave #4133</p>
                  <p>Covina, CA 91723</p>
                  <p>privacy@vercel.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-widest text-teal-400/50">Online vitarendezés</h2>
                <p className="text-sm">
                  Az Európai Bizottság platformot biztosít az online vitarendezéshez (OS), amely itt érhető el: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" className="text-teal-400 hover:underline block mt-1">
                    ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
              ARYS Agency &copy; 2026 minden jog fenntartva.
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

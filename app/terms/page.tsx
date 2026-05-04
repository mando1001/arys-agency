'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
              <FileText className="text-teal-400" size={24} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Általános Szerződési Feltételek</h1>
          </div>

          <section className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-white font-bold italic">Utolsó frissítés: 2026. május 4.</p>
            
            <h2 className="text-2xl font-bold text-white tracking-tight mt-12">1. Szolgáltató adatai</h2>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2 text-white">
              <p className="font-bold">Szlávik Armand Loránd E.V.</p>
              <p>Székhely: 2143 Kistarcsa, Bem utca 5.</p>
              <p>Email: hello@arys.hu</p>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-tight mt-12">2. A szolgáltatás igénybevétele</h2>
            <p>
              Az ARYS Agency (Szlávik Armand Loránd E.V.) weboldalán keresztül elérhető "Audit Magnet" egy ingyenes diagnosztikai eszköz. Az audit kitöltése és a riport megküldése nem minősül hivatalos ajánlattételnek vagy szerződéskötésnek.
            </p>

            <h2 className="text-2xl font-bold text-white tracking-tight mt-12">3. Szellemi tulajdon</h2>
            <p>
              A weboldalon található minden tartalom, grafika, kód és koncepció Szlávik Armand Loránd E.V. kizárólagos szellemi tulajdonát képezi. Bármilyen jogosulatlan felhasználás, másolás vagy terjesztés jogi következményeket von maga után.
            </p>

            <h2 className="text-2xl font-bold text-white tracking-tight mt-12">4. Felelősségkorlátozás</h2>
            <p>
              A szolgáltató mindent megtesz az adatok pontosságáért, de nem vállal felelősséget a technikai hibákból vagy harmadik fél szolgáltatásainak (pl. tárhelyszolgáltató) kimaradásából eredő károkért.
            </p>

            <h2 className="text-2xl font-bold text-white tracking-tight mt-12">5. Kapcsolat</h2>
            <p>
              Kérdés vagy észrevétel esetén: <span className="text-teal-400">hello@arys.hu</span>
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

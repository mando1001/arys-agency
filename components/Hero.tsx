'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, FileText, Users, Database, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { MeshGradient } from "@paper-design/shaders-react";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full max-w-6xl mx-auto mt-32 relative group cursor-default"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/10 blur-[120px] rounded-full group-hover:bg-teal-500/20 transition-all duration-700" />

      <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 lg:p-16 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          {/* LEFT: Chaos */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] text-left mb-4 pl-2 opacity-60">Jelenlegi állapot (Káosz)</div>
            {[
              { icon: <Mail size={18} />, title: 'Feldolgozatlan Emailek', desc: 'Lassú reakcióidő', color: 'red' },
              { icon: <FileText size={18} />, title: 'Manuális adatrögzítés', desc: 'Magas hibafaktor', color: 'red' },
              { icon: <Users size={18} />, title: 'Elveszett potenciális leadek', desc: 'Kieső bevétel', color: 'red' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                animate={{ 
                  x: [0, idx % 2 === 0 ? -5 : 5, 0], 
                  rotate: [0, idx % 2 === 0 ? -1 : 1, 0] 
                }}
                transition={{ repeat: Infinity, duration: 4 + idx, ease: 'easeInOut' }}
                className="flex items-center gap-5 p-5 rounded-3xl bg-[#0A0B0D]/40 border border-white/5 text-gray-400 grayscale group-hover:grayscale-0 transition-all duration-700 hover:border-red-500/20"
              >
                <div className="p-4 rounded-2xl bg-white/5 text-gray-500">{item.icon}</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-gray-300">{item.title}</span>
                  <span className="text-[10px] text-red-400/60 font-bold bg-red-500/5 px-2 py-0.5 rounded-full mt-2 border border-red-500/10 uppercase tracking-wider">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER: ARYS Engine */}
          <div className="flex-shrink-0 relative py-16 lg:py-0 flex items-center justify-center">
            <div className="absolute inset-0 m-auto w-[220px] h-[220px] rounded-full border border-teal-500/10 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-1000 aspect-square" />
            <div className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-teal-500/5 group-hover:border-teal-500/20 transition-all duration-1000 aspect-square border-dashed animate-spin-slow" style={{ animationDuration: '30s' }} />

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-40 h-40 rounded-[2.5rem] border border-teal-500/40 bg-teal-500/10 backdrop-blur-2xl flex flex-col items-center justify-center relative z-10 shadow-[0_0_80px_-10px_rgba(45,212,191,0.6)] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent" />
              <span className="text-4xl font-black text-white tracking-tighter mb-1 relative z-10">ARYS</span>
              <span className="text-[10px] text-teal-300 font-black tracking-[0.2em] uppercase bg-teal-500/20 px-3 py-1 rounded-full relative z-10 border border-teal-500/20">B.L.A.S.T.</span>
              
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-teal-400/10 blur-xl"
              />
            </motion.div>

            {[0, 1, 2].map((i) => (
              <motion.div
                key={`p-in-${i}`}
                className="hidden lg:block absolute left-[-100px] w-2 h-2 rounded-full bg-teal-400 blur-[2px]"
                style={{ top: `${30 + i * 20}%` }}
                animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear', delay: i * 0.4 }}
              />
            ))}

            {[0, 1, 2].map((i) => (
              <motion.div
                key={`p-out-${i}`}
                className="hidden lg:block absolute right-[-100px] w-2 h-2 rounded-full bg-teal-400 blur-[2px]"
                style={{ top: `${30 + i * 20}%` }}
                animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear', delay: i * 0.4 + 0.75 }}
              />
            ))}
          </div>

          {/* RIGHT: Order */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <div className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] text-left lg:text-right mb-4 pr-2">Újbóli növekedés (Rend)</div>
            {[
              { icon: <Database size={18} />, title: 'Központosított Tudás', desc: '100% Precizitás' },
              { icon: <Calendar size={18} />, title: 'Automata Workflow-k', desc: 'Folyamatos működés' },
              { icon: <CheckCircle2 size={18} />, title: 'Visszanyert +20 Óra', desc: 'Értékteremtő fókusz' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-5 p-5 rounded-3xl bg-teal-500/5 border border-teal-500/20 text-white font-medium transition-all group-hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.3)] backdrop-blur-md"
              >
                <div className="p-4 rounded-2xl bg-teal-500/20 text-teal-400">{item.icon}</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[10px] text-teal-300 font-bold mt-2 uppercase tracking-wider">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-mesh">
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-40"
          colors={["#0A0B0D", "#2dd4bf", "#0891b2", "#134e4a", "#0d9488"]}
          speed={0.2}
        />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-grid-white opacity-5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/5 border border-teal-500/20 rounded-full text-teal-400 text-[10px] uppercase tracking-[0.3em] font-black mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_#2dd4bf]" />
          Valódi Üzleti Automatizáció
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[6rem] font-bold tracking-tighter leading-[1] mb-8"
        >
          Skálázd a profitod, <br />
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-2">ne a bérköltséged.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl text-center leading-relaxed mb-12 font-medium"
        >
          Felejtsd el az elszivárgó profitot és az adminisztratív káoszt. Automatizáljuk a repetitív folyamataidat, így plusz munkaerő felvétele nélkül skálázhatsz, és a csapatod végre azzal foglalkozhat, ami valódi pénzt termel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#audit" 
            className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-extrabold rounded-2xl transition-all shadow-[0_20px_50px_-10px_rgba(45,212,191,0.4)] text-sm flex items-center justify-center gap-3 group"
          >
            Ingyenes Cégdiagnosztika
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            href="#megoldasok" 
            className="px-10 py-5 border border-white/10 hover:border-white/30 text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center backdrop-blur-sm"
          >
            Megoldások
          </motion.a>
        </motion.div>

        <HeroVisual />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 w-full border-t border-white/5 pt-20"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-teal-400 mb-12 font-black">
            Akik már hatékonyabban dolgoznak velünk
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((review, i) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

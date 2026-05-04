'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Settings,
  Workflow,
  Activity,
  Database,
  BarChart,
  LayoutTemplate,
  Fingerprint,
  Mail,
  X,
  FileText,
  Users,
  Calendar,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';
import { PulsingBorder } from "@paper-design/shaders-react";

// Shared hook: detect mobile once at module level via media query
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
};

const Logo = () => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 group cursor-pointer"
  >
    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
      <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
    </div>
    <div className="text-2xl font-black tracking-tighter text-white">
      ARYS<span className="text-teal-400">.</span>
    </div>
  </motion.div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${isScrolled ? 'bg-[#0A0B0D]/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
          <Logo />
        </div>
      </div>
    </header>
  );
};


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0B0D]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
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
          className="text-6xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.9] mb-8"
        >
          Növeld a <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-2">profitot</span>, <br />
          csökkentsd a céges káoszt.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 max-w-4xl text-center leading-relaxed mb-12 font-medium"
        >
          Az ARYS célja, hogy levegye a manuális adminisztrációt, az elvesző leadeket és a belső kavarodást a csapatod válláról. Gyorsabb válaszok, kevesebb hiba, több lezárt ügy — úgy, hogy közben nem kell új embereket felvenned minden növekedési lépéshez.
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

        {/* --- ÚJ INTERAKTÍV VIZUÁLIS METAFORA --- */}
        <HeroVisual />

        {/* --- REVIEWS / TESTIMONIALS --- */}
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
  )
}

const HeroVisual = () => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full max-w-6xl mx-auto mt-32 relative group cursor-default"
    >
      {/* Decorative glow behind the whole visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/10 blur-[120px] rounded-full group-hover:bg-teal-500/20 transition-all duration-700" />

      <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 lg:p-16 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
        {/* Animated gradient sweep */}
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
              <div
                key={idx}
                className="flex items-center gap-5 p-5 rounded-3xl bg-[#0A0B0D]/40 border border-white/5 text-gray-400 grayscale group-hover:grayscale-0 transition-all duration-700 hover:border-red-500/20"
              >
                <div className="p-4 rounded-2xl bg-white/5 text-gray-500">{item.icon}</div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-gray-300">{item.title}</span>
                  <span className="text-[10px] text-red-400/60 font-bold bg-red-500/5 px-2 py-0.5 rounded-full mt-2 border border-red-500/10 uppercase tracking-wider">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: ARYS Engine */}
          <div className="flex-shrink-0 relative py-16 lg:py-0 flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute inset-0 m-auto w-[220px] h-[220px] rounded-full border border-teal-500/10 group-hover:border-teal-500/40 group-hover:scale-110 transition-all duration-1000 aspect-square" />
            <div className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-teal-500/5 group-hover:border-teal-500/20 transition-all duration-1000 aspect-square border-dashed animate-spin-slow" style={{ animationDuration: '30s' }} />

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-40 h-40 rounded-[2.5rem] border border-teal-500/40 bg-teal-500/10 backdrop-blur-2xl flex flex-col items-center justify-center relative z-10 shadow-[0_0_80px_-10px_rgba(45,212,191,0.6)] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent" />
              <span className="text-4xl font-black text-white tracking-tighter mb-1 relative z-10">ARYS</span>
              <span className="text-[10px] text-teal-300 font-black tracking-[0.2em] uppercase bg-teal-500/20 px-3 py-1 rounded-full relative z-10 border border-teal-500/20">B.L.A.S.T.</span>
              
              {/* Dynamic light pulse inside engine - desktop only */}
              {!isMobile && (
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-teal-400/10 blur-xl"
                />
              )}
            </motion.div>

            {/* Connecting dot left */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400/40" />
            {/* Connecting dot right */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400/40" />
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
  )
}

const FlowVisual = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden group hidden md:block">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_70%)] transition-colors duration-1000" />
        
        <svg className="w-full h-full max-w-[500px] max-h-[400px]" viewBox="0 0 500 400">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Central ARYS Node */}
          <g transform="translate(250, 200)">
            {/* Static rect (CSS animated to avoid foreignObject displacement) */}
            <rect
              width="80"
              height="80"
              x="-40"
              y="-40"
              rx="24"
              className="fill-teal-500/10 stroke-teal-500/30"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'spin 10s linear infinite' }}
            />
            <motion.circle
              r="30"
              className="fill-teal-500/5 stroke-teal-500/20"
              animate={{ r: [30, 45], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </g>
          {/* Settings icon in own foreignObject at absolute SVG coords — NOT inside animated g */}
          <foreignObject x="230" y="180" width="40" height="40">
            <div className="w-full h-full flex items-center justify-center">
              <Settings className="text-teal-400 w-8 h-8 animate-spin-slow" />
            </div>
          </foreignObject>
          {/* Surrounding Nodes and Connections */}
          {[
            { icon: <Mail className="w-5 h-5" />, x: 100, y: 100, delay: 0 },
            { icon: <Database className="w-5 h-5" />, x: 100, y: 300, delay: 0.5 },
            { icon: <Users className="w-5 h-5" />, x: 400, y: 100, delay: 1 },
            { icon: <CheckCircle2 className="w-5 h-5" />, x: 400, y: 300, delay: 1.5 }
          ].map((node, i) => (
            <g key={i}>
              {/* Connection Path */}
              <motion.path
                d={`M ${node.x} ${node.y} L 250 200`}
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-white/10 group-hover:text-teal-500/30 transition-colors duration-700"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: node.delay }}
              />
              {/* Data Particle */}
              <motion.circle
                r="4"
                className="fill-teal-400"
                filter="url(#glow)"
                animate={{
                  cx: [node.x, 250],
                  cy: [node.y, 200],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: node.delay + 0.5,
                  ease: "easeInOut"
                }}
              />
              {/* External Node */}
              <foreignObject x={node.x - 24} y={node.y - 24} width="48" height="48">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: node.delay, type: "spring" }}
                  className="w-full h-full rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-teal-400 group-hover:border-teal-500/30 transition-all duration-500 backdrop-blur-sm shadow-xl"
                >
                  {node.icon}
                </motion.div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

const BrainVisual = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 group hidden md:block overflow-visible">
      <div className="relative w-full h-full flex items-center overflow-visible">
        <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMaxYMid meet">
          <defs>
            <filter id="brainGlow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Neural Connections */}
          <g className="stroke-orange-500/10 group-hover:stroke-orange-500/20 transition-colors duration-700">
            {[
              { x1: 500, y1: 150, x2: 1100, y2: 80 },
              { x1: 500, y1: 150, x2: 1100, y2: 150 },
              { x1: 500, y1: 150, x2: 1100, y2: 220 },
            ].map((link, i) => (
              <motion.line
                key={i}
                x1={link.x1} y1={link.y1} x2={link.x2} y2={link.y2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
          </g>

          {/* Synaptic Firing Particles (Brain to Users) */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="2"
              className="fill-orange-400"
              filter="url(#brainGlow)"
              animate={{
                cx: [500, 1100],
                cy: [150, [80, 150, 220][i]],
                opacity: [0, 1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* User Nodes (Right) */}
          {[
            { x: 1100, y: 80 },
            { x: 1100, y: 150 },
            { x: 1100, y: 220 }
          ].map((node, i) => (
            <foreignObject key={i} x={node.x - 16} y={node.y - 16} width="40" height="40">
              <div className="w-full h-full rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400/50 group-hover:text-orange-400 transition-colors">
                <Users className="w-4 h-4" />
              </div>
            </foreignObject>
          ))}

          {/* Central Brain Node (Left) */}
          <g transform="translate(500, 150)">
            <motion.circle
              r="35"
              className="fill-orange-500/5 stroke-orange-500/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </g>
          {/* Brain icon in own foreignObject at absolute SVG coords — NOT inside animated g */}
          <foreignObject x="470" y="120" width="60" height="60">
            <div
              className="w-full h-full flex items-center justify-center transition-transform duration-500"
              style={{ transformOrigin: 'center center' }}
            >
              <Brain className="text-orange-400 w-8 h-8" />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      id: 'flow',
      title: 'ARYS Flow',
      subtitle: 'Munkafolyamat Automatizáció',
      description: 'A B.L.A.S.T. protokoll alapú, öngyógyító munkafolyamatok. Eltüntetjük a manuális adatrögzítést és a hibafaktorokat a mindennapokból.',
      icon: <Workflow className="w-8 h-8 text-teal-400" />,
      benefits: ['Zero-error pipeline', '80% időmegtakarítás', 'Skálázható alapok'],
      className: 'md:col-span-8 md:row-span-2',
      gradient: 'from-teal-500/20 via-teal-500/5 to-transparent',
      visual: <FlowVisual />
    },
    {
      id: 'reach',
      title: 'ARYS Reach',
      subtitle: 'Lead Generálás',
      description: 'Zökkenőmentes lead-to-deal folyamat. Nincs több elvesztett e-mail vagy elfelejtett utánkövetés.',
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      benefits: ['Automata naptár', '24/7 válaszadás'],
      className: 'md:col-span-4 md:row-span-1',
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent'
    },
    {
      id: 'brand',
      title: 'ARYS Brand',
      subtitle: 'Digitális Megjelenés',
      description: 'Prémium technológiai háttér és egységes arculat, ami bizalmat épít és konverziót növel.',
      icon: <Fingerprint className="w-8 h-8 text-purple-400" />,
      benefits: ['Modern tech stack', 'Személyre szabott UI'],
      className: 'md:col-span-4 md:row-span-1',
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent'
    },
    {
      id: 'brain',
      title: 'ARYS Brain',
      subtitle: 'Vállalati Tudástár',
      description: 'Saját, intelligens tudásbázis a céges adatokra építve. Felejtsd el a folyamatos kérdezgetést; válaszok másodpercek alatt.',
      icon: <LayoutTemplate className="w-8 h-8 text-orange-400" />,
      benefits: ['Azonnali válaszok', 'Központosított adatok'],
      className: 'md:col-span-12 md:row-span-1',
      gradient: 'from-orange-500/20 via-orange-500/5 to-transparent',
      visual: <BrainVisual />
    }
  ];

  return (
    <section id="megoldasok" className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            Megoldásaink
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8"
          >
            Változtasd a káoszt <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-2">átlátható növekedéssé.</span>
          </motion.h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A központosított rendszerek és okos munkafolyamatok kombinációjával cégéből eltüntetjük a súrlódásokat. Az eredmény: kiszámítható profit és tiszta fej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-[32px] border border-white/5 bg-[#0D0F14]/50 backdrop-blur-xl p-8 lg:p-12 overflow-hidden hover:border-white/10 transition-all duration-500 ${feature.className}`}
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <div className="text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-teal-400/40 transition-colors">
                    {feature.id}
                  </div>
                </div>

                {feature.visual && feature.visual}

                <div className="mt-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-glow-teal transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-teal-400/80 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {feature.benefits.map((benefit, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-teal-400 inline-block" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuditModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [isScanning, setIsScanning] = useState(false);
  const [formData, setFormData] = useState({
    mainObstacles: [] as string[],
    techStacks: [] as string[],
    integrationDepth: '',
    growthBottleneck: '',
    teamSize: '',
    timeLoss: '',
    errorFrequency: '',
    urgency: '',
    automationGoal: '',
    name: '',
    email: '',
    companyName: '',
    comment: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const [scanMessage, setScanMessage] = useState("Vállalkozási struktúra elemzése...");

  const scanMessages = [
    "Vállalkozási struktúra elemzése...",
    "Manuális folyamatok azonosítása...",
    "Hatékonysági rések keresése...",
    "Automatizációs lehetőségek feltérképezése...",
    "Személyre szabott stratégia generálása..."
  ];

  const submitForm = async () => {
    setIsScanning(true);
    
    // Cycle through scan messages
    let msgIndex = 0;
    const interval = setInterval(() => {
      msgIndex++;
      if (msgIndex < scanMessages.length) {
        setScanMessage(scanMessages[msgIndex]);
      }
    }, 800);

    // Simulate a "heavy" scanning period for perceived depth
    await new Promise(resolve => setTimeout(resolve, 4000));
    clearInterval(interval);
    
    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'ARYS Audit Form'
        })
      });
      
      const result = await response.json();
      console.log("Submission result:", result);
    } catch(e) {
      console.error("FETCH ERROR:", e);
    }
    
    setIsScanning(false);
    nextStep();
    
    setTimeout(() => {
      onClose();
    }, 6000);
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({ 
          mainObstacles: [], 
          techStacks: [],
          integrationDepth: '',
          growthBottleneck: '',
          teamSize: '',
          timeLoss: '', 
          errorFrequency: '', 
          urgency: '',
          automationGoal: '', 
          name: '', 
          email: '', 
          companyName: '',
          comment: '' 
        });
        setIsScanning(false);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const SelectionCard = ({ 
    title, 
    icon, 
    isSelected, 
    onClick 
  }: { 
    title: string; 
    icon: React.ReactNode; 
    isSelected: boolean; 
    onClick: () => void 
  }) => (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-8 rounded-[2rem] border transition-all duration-500 ${
        isSelected 
        ? 'border-teal-500 bg-teal-500/10 shadow-[0_0_40px_-10px_rgba(45,212,191,0.4)]' 
        : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      <div className={`mb-4 p-4 rounded-2xl transition-colors ${isSelected ? 'text-teal-400 bg-teal-400/10' : 'text-gray-500 bg-white/5'}`}>
        {icon}
      </div>
      <span className={`text-sm font-bold text-center tracking-tight ${isSelected ? 'text-white' : 'text-gray-400'}`}>
        {title}
      </span>
      {isSelected && (
        <motion.div 
          className="absolute inset-0 border-2 border-teal-500 rounded-[2rem]" 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A0B0D]/90 backdrop-blur-2xl"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors z-[110]">
          <X className="w-8 h-8" />
        </button>

        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full max-w-4xl bg-[#0D0F14] border border-white/10 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] relative max-h-[90vh] flex flex-col"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-20">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-blue-500 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(step, 10) / 10) * 100}%` }}
            />
          </div>

          <div className="p-8 md:p-16 overflow-y-auto flex-1 custom-scrollbar">
            <AnimatePresence mode="wait">
              {isScanning ? (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 space-y-8"
                >
                  <div className="relative w-32 h-32">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-teal-500/20 border-t-teal-500"
                    />
                    <div className="absolute inset-4 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <Activity className="w-10 h-10 text-teal-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center h-20">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{scanMessage}</h3>
                    <p className="text-gray-500 text-sm">ARYS Engine elemzi a megadott adatokat</p>
                  </div>
                </motion.div>
              ) : (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">01 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mi okozza a legtöbb napi fejfájást vagy elakadást?</h3>
                        <p className="text-gray-500 text-sm italic">Többet is választhatsz</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'data', title: 'Manuális adatrögzítés & Másolás', icon: <Database size={24} /> },
                          { id: 'comm', title: 'Kaotikus ügyfélkommunikáció', icon: <Mail size={24} /> },
                          { id: 'leads', title: 'Elveszett vagy kezeletlen érdeklődők', icon: <Fingerprint size={24} /> },
                          { id: 'finance', title: 'Számlázási & Pénzügyi lassúság', icon: <Database size={24} /> },
                          { id: 'pm', title: 'Projektmenedzsment káosz', icon: <Workflow size={24} /> },
                          { id: 'speed', title: 'Lassú válaszidők az ügyfeleknek', icon: <Zap size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.mainObstacles.includes(opt.title)}
                            onClick={() => {
                              const current = formData.mainObstacles;
                              const updated = current.includes(opt.title)
                                ? current.filter(i => i !== opt.title)
                                : [...current, opt.title];
                              setFormData({...formData, mainObstacles: updated});
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-end pt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={formData.mainObstacles.length === 0}
                          className="px-8 py-4 bg-white/10 hover:bg-teal-500 hover:text-black disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-white text-white font-bold rounded-2xl transition-all flex items-center gap-2 group"
                        >
                          Tovább <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">02 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mennyi munkaórát égetnek el a repetitív folyamatok?</h3>
                        <p className="text-gray-500 text-sm italic">Számolj a manuális adatmásolással, a hibák javításával és az adminisztrációval – céges szinten.</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { id: '1-5', title: '1-5 óra', icon: <Calendar size={24} /> },
                          { id: '5-15', title: '5-15 óra', icon: <Activity size={24} /> },
                          { id: '15-40', title: '15-40 óra', icon: <Zap size={24} /> },
                          { id: '40+', title: '40+ óra', icon: <Workflow size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.timeLoss === opt.title}
                            onClick={() => { setFormData({...formData, timeLoss: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">03 / 10</span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight">Okozott-e már konkrét kárt az emberi mulasztás?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'rare', title: 'Ritkán, de akkor nagy a baj', icon: <Shield size={24} /> },
                          { id: 'weekly', title: 'Heti szinten javítunk elírásokat', icon: <FileText size={24} /> },
                          { id: 'fire', title: 'Rendszeres a "tűzoltás"', icon: <Activity size={24} /> },
                          { id: 'blind', title: 'Nincs rálátásunk a hibákra', icon: <Fingerprint size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.errorFrequency === opt.title}
                            onClick={() => { setFormData({...formData, errorFrequency: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">04 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Bírná a rendszered, ha holnaptól 2x annyi ügyfeled lenne?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'yes', title: 'Igen, simán bírná', icon: <Shield size={24} /> },
                          { id: 'maybe', title: 'Valószínűleg megroppanna', icon: <Activity size={24} /> },
                          { id: 'chaos', title: 'Esélytelen, azonnal káosz lenne', icon: <Zap size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.growthBottleneck === opt.title}
                            onClick={() => { setFormData({...formData, growthBottleneck: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">05 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Milyen eszközöket használtok jelenleg?</h3>
                        <p className="text-gray-500 text-sm italic">Többet is választhatsz</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'google', title: 'Google Workspace / Sheets', icon: <Workflow size={24} /> },
                          { id: 'ms', title: 'Microsoft 365 / Excel', icon: <Database size={24} /> },
                          { id: 'crm', title: 'Dedikált CRM rendszer', icon: <Fingerprint size={24} /> },
                          { id: 'chat', title: 'Slack / Teams / Belső chat', icon: <Mail size={24} /> },
                          { id: 'tasks', title: 'Trello / Asana / ClickUp', icon: <Zap size={24} /> },
                          { id: 'billing', title: 'Számlázó program (Billingo, stb.)', icon: <FileText size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.techStacks.includes(opt.title)}
                            onClick={() => {
                              const current = formData.techStacks;
                              const updated = current.includes(opt.title)
                                ? current.filter(i => i !== opt.title)
                                : [...current, opt.title];
                              setFormData({...formData, techStacks: updated});
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-end pt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={formData.techStacks.length === 0}
                          className="px-8 py-4 bg-white/10 hover:bg-teal-500 hover:text-black disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-white text-white font-bold rounded-2xl transition-all flex items-center gap-2 group"
                        >
                          Tovább <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {step === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">06 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mennyire "beszélgetnek" egymással a szoftvereid?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'full', title: 'Teljes az integráció', icon: <Workflow size={24} /> },
                          { id: 'partial', title: 'Néha kézzel kell másolni adatokat', icon: <Database size={24} /> },
                          { id: 'island', title: 'Szigetszerűen működnek (semmi kapcsolat)', icon: <Settings size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.integrationDepth === opt.title}
                            onClick={() => { setFormData({...formData, integrationDepth: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 7 && (
                    <motion.div
                      key="step7"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">07 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Hány kolléga munkáját lassítják a manuális folyamatok?</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { id: 'onlyme', title: 'Csak engem', icon: <Fingerprint size={24} /> },
                          { id: '2-5', title: '2-5 fő', icon: <Database size={24} /> },
                          { id: '5-15', title: '5-15 fő', icon: <Workflow size={24} /> },
                          { id: '15+', title: '15+ fő (vállalati szint)', icon: <Activity size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.teamSize === opt.title}
                            onClick={() => { setFormData({...formData, teamSize: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 8 && (
                    <motion.div
                      key="step8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">08 / 10</span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight">Mi lenne a legfontosabb eredmény számodra?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'scale', title: 'Skálázhatóság és növekedés', icon: <Zap size={24} /> },
                          { id: 'time', title: 'Drasztikus időmegtakarítás a mindennapokban', icon: <Brain size={24} /> },
                          { id: 'cost', title: 'Alacsonyabb költségek, magasabb profit', icon: <Settings size={24} /> },
                          { id: 'peace', title: 'Hibamentes munka és teljes nyugalom', icon: <CheckCircle2 size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.automationGoal === opt.title}
                            onClick={() => { setFormData({...formData, automationGoal: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 9 && (
                    <motion.div
                      key="step9"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">09 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mikorra szeretnéd látni az első eredményeket?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'now', title: 'Azonnal (égető a probléma)', icon: <Zap size={24} /> },
                          { id: 'month', title: '1 hónapon belül', icon: <Calendar size={24} /> },
                          { id: 'search', title: 'Csak tájékozódom egyelőre', icon: <Fingerprint size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.urgency === opt.title}
                            onClick={() => { setFormData({...formData, urgency: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 10 && (
                    <motion.div
                      key="step10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-4">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">10 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">Kihez küldhetjük a diagnózist?</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Név</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Teljes neved"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Cégnév</label>
                            <input
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                              placeholder="Vállalkozásod neve"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Email</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Munkahelyi e-mail"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">További megjegyzések (Opcionális)</label>
                          <textarea
                            value={formData.comment}
                            onChange={(e) => setFormData({...formData, comment: e.target.value})}
                            placeholder="Van-e bármi, amit még kiemelne?"
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                          />
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={submitForm}
                          disabled={!formData.name || !formData.email || !formData.companyName}
                          className="w-full py-5 bg-teal-500 disabled:bg-gray-800 disabled:text-gray-600 text-black font-black rounded-2xl transition-all shadow-[0_20px_50px_-10px_rgba(45,212,191,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                        >
                          Elemzés Indítása <ArrowRight size={18} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {step === 11 && (
                    <motion.div
                      key="step11"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-8"
                    >
                      <div className="relative inline-block">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 12 }}
                          className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30"
                        >
                          <CheckCircle2 className="w-12 h-12 text-teal-400" />
                        </motion.div>
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 rounded-full border border-teal-500/50"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-4xl font-bold text-white tracking-tighter italic">Köszönjük!</h3>
                        <p className="text-gray-400 text-lg max-w-sm mx-auto">
                          Az audit sikeresen lezárult. Rendszerünk elemzi az adataidat; hamarosan érkezünk a <span className="text-teal-400 font-bold underline">diagnosztikai riporttal</span> és a következő lépésekkel.
                        </p>
                      </div>
                      <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                      >
                        Ablak bezárása
                      </button>
                    </motion.div>
                  )}

                  {step > 1 && step < 11 && !isScanning && (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={prevStep}
                      className="mt-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group"
                    >
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Vissza
                    </motion.button>
                  )}
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AuditMagnet = ({ openModal }: { openModal: () => void }) => {
  return (
    <section id="audit" className="py-32 relative overflow-hidden bg-black">
      {/* Diagnostic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-scan-fast" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-slow" />
        <div className="absolute inset-0 bg-grid-white opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative p-12 md:p-24 rounded-[48px] bg-[#0D0F14] border border-white/5 overflow-hidden text-center">
          {/* Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-teal-500/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-teal-500/5 border border-teal-500/10 rounded-full text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Zap size={14} className="animate-pulse" />
              Rendszerdiagnosztika Elérhető
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
            >
              Találjuk meg a <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-2">növekedési gátakat.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Egy 15 perces technológiai audit során feltérképezzük a manuális folyamataidat, és egy azonnal alkalmazható automatizációs tervet kapsz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <button
                onClick={openModal}
                className="relative group px-12 py-6 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)] transition-all hover:shadow-teal-500/40 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Audit Elindítása <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-teal-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <div className="flex items-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-500" /> 100% Ingyenes</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-500" /> 2 perces form</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-teal-500" /> Szakértői válasz</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StickyCTA = ({ openModal }: { openModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.2, y: y * 0.2 });
  };

  const resetPos = () => setMousePos({ x: 0, y: 0 });

  const handleClick = () => {
    if (isMobile && !isExpanded) {
      setIsExpanded(true);
    } else {
      openModal();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-5 md:bottom-24 md:right-10 z-[80]"
        >
          {/* Mobile: collapsed dot → expanded button */}
          {isMobile ? (
            <motion.button
              layout
              onClick={handleClick}
              className="relative flex items-center bg-white text-black font-black shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
              animate={{
                borderRadius: isExpanded ? '999px' : '999px',
                paddingLeft: isExpanded ? '20px' : '14px',
                paddingRight: isExpanded ? '20px' : '14px',
                paddingTop: isExpanded ? '14px' : '14px',
                paddingBottom: isExpanded ? '14px' : '14px',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: 'auto', marginLeft: '10px' }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[11px] uppercase tracking-[0.15em] whitespace-nowrap overflow-hidden"
                  >
                    Ingyenes Audit
                  </motion.span>
                )}
              </AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-2"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.span>
              )}
            </motion.button>
          ) : (
            /* Desktop: full button with magnetic effect + PulsingBorder */
            <div className="relative group">
              <div className="absolute inset-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <PulsingBorder
                  colors={["#2dd4bf", "#0891b2", "#134e4a", "#2dd4bf"]}
                />
              </div>
              <motion.button
                animate={{ x: mousePos.x, y: mousePos.y }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetPos}
                onClick={handleClick}
                className="relative flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  <span>Ingyenes Audit</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="relative bg-[#07080A] border-t border-white/5 pt-20 pb-10 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter">ARYS</span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
            Az ARYS segít a modern vállalkozásoknak felszabadítani a potenciáljukat intelligens automatizációval és adatvezérelt folyamatoptimalizálással.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@arys.hu" className="text-sm text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail size={14} />
              </div>
              hello@arys.hu
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Szolgáltatások</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-teal-400 transition-colors cursor-pointer">Workflow Automatiáció</li>
            <li className="hover:text-teal-400 transition-colors cursor-pointer">Lead Generálás</li>
            <li className="hover:text-teal-400 transition-colors cursor-pointer">CRM Integráció</li>
            <li className="hover:text-teal-400 transition-colors cursor-pointer">Adatvizualizáció</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Kapcsolat</h4>
          <div className="space-y-4">
             <p className="text-sm text-gray-500 leading-relaxed">
               Készen állsz az automatizációra? <br />
               Kérj ingyenes auditot még ma.
             </p>
             <motion.a
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               href="#audit"
               className="inline-flex items-center gap-2 text-teal-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-teal-500/20 pb-1 hover:border-teal-400 transition-all"
             >
               Audit indítása <ArrowRight size={12} />
             </motion.a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          &copy; 2026 ARYS — ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <a href="/impressum" className="hover:text-white transition-colors cursor-pointer">IMPRESSUM</a>
          <a href="/privacy" className="hover:text-white transition-colors cursor-pointer">PRIVACY</a>
          <a href="/terms" className="hover:text-white transition-colors cursor-pointer">TERMS</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex-1 flex flex-col bg-[#0A0B0D] text-white">
      <Header />
      <Hero />
      <Features />
      <AuditMagnet openModal={() => setIsModalOpen(true)} />
      <Footer />

      <StickyCTA openModal={() => setIsModalOpen(true)} />
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

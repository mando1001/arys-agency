'use client';

import React from 'react';
import { m } from 'motion/react';
import { Workflow, Activity, Fingerprint, LayoutTemplate } from 'lucide-react';
import { FlowVisual, BrainVisual } from '../visuals/InteractiveVisuals';
import { useIsMobile } from '../../hooks/useIsMobile';

export const Features = () => {
  const isMobile = useIsMobile();
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
      mobileAccent: 'border-l-teal-500/60 [background:linear-gradient(135deg,rgba(45,212,191,0.06),transparent_60%)]',
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
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
      mobileAccent: 'border-l-blue-500/60 [background:linear-gradient(135deg,rgba(59,130,246,0.06),transparent_60%)]',
    },
    {
      id: 'brand',
      title: 'ARYS Brand',
      subtitle: 'Digitális Megjelenés',
      description: 'Prémium technológiai háttér és egységes arculat, ami bizalmat épít és konverziót növel.',
      icon: <Fingerprint className="w-8 h-8 text-purple-400" />,
      benefits: ['Modern tech stack', 'Személyre szabott UI'],
      className: 'md:col-span-4 md:row-span-1',
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
      mobileAccent: 'border-l-purple-500/60 [background:linear-gradient(135deg,rgba(168,85,247,0.06),transparent_60%)]',
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
      mobileAccent: 'border-l-orange-500/60 [background:linear-gradient(135deg,rgba(251,146,60,0.06),transparent_60%)]',
      visual: <BrainVisual />
    }
  ];

  return (
    <section id="megoldasok" className="py-32 relative overflow-hidden border-t border-white/5 bg-[#0A0B0D]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-2xl">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            Megoldásaink
          </m.div>
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8"
          >
            Változtasd a káoszt <br />
            <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent italic px-4 py-2 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">átlátható növekedéssé.</span>
          </m.h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A központosított rendszerek és okos munkafolyamatok kombinációjával cégéből eltüntetjük a súrlódásokat. Az eredmény: kiszámítható profit és tiszta fej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6">
          {features.map((feature, i) => (
            <m.div
              key={feature.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                borderColor: isMobile ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-[32px] border border-white/5 bg-[#0D0F14]/30 ${!isMobile ? 'backdrop-blur-xl' : ''} p-8 lg:p-12 overflow-hidden hover:border-white/10 transition-all duration-500 md:border-l md:border-l-white/5 border-l-2 ${feature.mobileAccent ?? ''} ${feature.className}`}
            >
              {/* Card Gradient Background - subtle on mobile, full on desktop hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} ${isMobile ? 'opacity-[0.08]' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <div className="text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-teal-400/40 transition-colors">
                    {feature.id}
                  </div>
                </div>

                {!isMobile && feature.visual && feature.visual}

                <div className="mt-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-400 transition-all">
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
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

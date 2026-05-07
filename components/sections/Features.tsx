import React from 'react';
import { m, Variants } from 'motion/react';
import { Workflow, Activity, Fingerprint, LayoutTemplate } from 'lucide-react';
import { FlowVisual, BrainVisual } from '../visuals/InteractiveVisuals';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  };

  return (
    <section id="megoldasok" className="py-32 relative overflow-hidden border-t border-teal-500/10 bg-[#F2F9F7]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="mb-20 max-w-2xl gpu-accel"
        >
          <div className="text-teal-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Megoldásaink
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#042F2E] mb-8">
            Változtasd a káoszt <br />
            <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent italic px-4 py-2 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">átlátható növekedéssé.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A központosított rendszerek és okos munkafolyamatok kombinációjával cégéből eltüntetjük a súrlódásokat. Az eredmény: kiszámítható profit és tiszta fej.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 gpu-accel"
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

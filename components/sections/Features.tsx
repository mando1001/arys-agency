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
      subtitle: 'Hiring-free skálázódás',
      description: 'Szüntesd meg a repetitív manuális munkát. Automatizált munkafolyamatainkkal a csapatod adminisztráció helyett bevételt termel, így növekedésnél nem lesz szükséged újabb és újabb emberek felvételére.',
      icon: <Workflow className="w-8 h-8 text-teal-400" />,
      benefits: ['0% hibaarány', 'Felszabadult órák', 'Alacsonyabb bérköltség'],
      className: 'md:col-span-8 md:row-span-2',
      gradient: 'from-teal-500/20 via-teal-500/5 to-transparent',
      mobileAccent: 'border-l-teal-500/60 [background:linear-gradient(135deg,rgba(45,212,191,0.06),transparent_60%)]',
      visual: <FlowVisual />
    },
    {
      id: 'reach',
      title: 'ARYS Reach',
      subtitle: 'Megmentett bevételek',
      description: 'Zárjuk be a réseket, ahol eddig kifolyt a pénz. Egyetlen lead sem veszhet el: automata válaszokkal és utánkövetéssel maximalizáljuk a konverziódat.',
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      benefits: ['Nincs elveszett lead', '24/7 értékesítés'],
      className: 'md:col-span-4 md:row-span-1',
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
      mobileAccent: 'border-l-blue-500/60 [background:linear-gradient(135deg,rgba(59,130,246,0.06),transparent_60%)]',
    },
    {
      id: 'brand',
      title: 'ARYS Brand',
      subtitle: 'Bizalomépítés',
      description: 'A prémium megjelenés nem luxus, hanem eszköz a magasabb árazáshoz. Olyan digitális arculatot adunk, ami azonnal eladja a szakértelmedet.',
      icon: <Fingerprint className="w-8 h-8 text-purple-400" />,
      benefits: ['Magasabb konverzió', 'Szakértői státusz'],
      className: 'md:col-span-4 md:row-span-1',
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
      mobileAccent: 'border-l-purple-500/60 [background:linear-gradient(135deg,rgba(168,85,247,0.06),transparent_60%)]',
    },
    {
      id: 'brain',
      title: 'ARYS Brain',
      subtitle: 'Zökkenőmentes operáció',
      description: 'Vedd ki a válaszokat a fejekből és tedd egy központi AI agyba. Nincs több félreértés, elfelejtett infó vagy folyamatos kérdezgetés — csak tiszta hatékonyság.',
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
    <section id="megoldasok" className="py-32 relative overflow-hidden border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="mb-24 max-w-3xl gpu-accel"
        >
          <div className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Megoldásaink
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-10 font-heading leading-[1.1] uppercase">
            Profitgyilkos folyamatok <br />
            <span className="inline-block text-accent-gradient italic px-2 text-5xl md:text-7xl">helyett digitális gépezet.</span>
          </h2>
          <p className="text-secondary text-lg md:text-xl leading-relaxed font-body">
            Nem eszközöket adunk, hanem eredményeket. Megszüntetjük a belső súrlódásokat, hogy a céged végre úgy működjön, mint egy svájci óra.
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

'use client';

import React from 'react';
import { m, Variants } from 'motion/react';
import { useIsMobile } from '../../hooks/useIsMobile';

export const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const isMobile = useIsMobile();
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] as const }
    },
  };

  return (
    <m.div
      variants={itemVariants}
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
            {feature.benefits.map((benefit: string, j: number) => (
              <span key={j} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-300 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-teal-400 inline-block" />
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
};

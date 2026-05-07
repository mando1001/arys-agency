'use client';

import React from 'react';
import { m, Variants } from 'motion/react';
import { useIsMobile } from '../../hooks/useIsMobile';

export const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const isMobile = useIsMobile();
  
  return (
    <div
      className={`group relative rounded-[32px] border-2 border-teal-500/10 bg-white ${!isMobile ? 'backdrop-blur-xl backdrop-optimize' : ''} p-8 lg:p-12 overflow-hidden hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 md:border-l md:border-l-teal-500/20 border-l-4 ${feature.mobileAccent ?? ''} ${feature.className} gpu-accel`}
    >
      {/* Card Gradient Background - subtle on mobile, full on desktop hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} ${isMobile ? 'opacity-[0.08]' : 'opacity-0 group-hover:opacity-40'} transition-opacity duration-700`} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 group-hover:scale-110 group-hover:border-teal-300 group-hover:bg-teal-100 transition-all duration-500 shadow-sm">
            {feature.icon}
          </div>
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-teal-400 transition-colors">
            {feature.id}
          </div>
        </div>

        {!isMobile && feature.visual && feature.visual}

        <div className="mt-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-teal-700 transition-all">
            {feature.title}
          </h3>
          <p className="text-teal-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            {feature.subtitle}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
            {feature.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {feature.benefits.map((benefit: string, j: number) => (
              <span key={j} className="px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-bold text-teal-800 flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block shadow-[0_0_5px_rgba(20,184,166,0.5)]" />
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

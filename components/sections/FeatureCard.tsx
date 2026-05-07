'use client';

import React from 'react';
import { m, Variants } from 'motion/react';
import { useIsMobile } from '../../hooks/useIsMobile';

export const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const isMobile = useIsMobile();
  
  return (
    <div
      className={`group relative rounded-[2rem] border-2 border-slate-200 bg-white p-8 lg:p-12 overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 ${feature.mobileAccent ?? ''} ${feature.className} gpu-accel cursor-pointer`}
    >
      {/* Card Gradient Background - subtle on mobile, full on desktop hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} ${isMobile ? 'opacity-[0.05]' : 'opacity-0 group-hover:opacity-[0.15]'} transition-opacity duration-700`} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-10">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-primary group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
            {feature.icon}
          </div>
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] group-hover:text-accent transition-colors">
            {feature.id}
          </div>
        </div>

        {!isMobile && feature.visual && feature.visual}

        <div className="mt-auto">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4 tracking-tight font-heading group-hover:text-accent transition-all">
            {feature.title}
          </h3>
          <p className="text-accent text-[11px] font-black uppercase tracking-[0.3em] mb-6">
            {feature.subtitle}
          </p>
          <p className="text-secondary text-base leading-relaxed mb-10 max-w-md font-body">
            {feature.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {feature.benefits.map((benefit: string, j: number) => (
              <span key={j} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-bold text-primary flex items-center gap-2 shadow-sm transition-colors group-hover:bg-white group-hover:border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { m } from 'motion/react';

interface FeatureCardProps {
  feature: {
    id: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    gradient: string;
    mobileAccent?: string;
    className: string;
  };
  index: number;
}

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-[32px] border border-white/5 bg-[#0D0F14]/30 md:backdrop-blur-xl p-8 lg:p-12 overflow-hidden hover:border-white/10 transition-all duration-500 md:border-l md:border-l-white/5 border-l-2 ${feature.mobileAccent ?? ''} ${feature.className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
            {feature.icon}
          </div>
          <div className="text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-teal-400/40 transition-colors">
            {feature.id}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.desc}
        </p>
      </div>
    </m.div>
  );
};

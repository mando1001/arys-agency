'use client';

import React from 'react';
import { m } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export const Footer = () => (
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
             <m.a
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               href="#audit"
               className="inline-flex items-center gap-2 text-teal-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-teal-500/20 pb-1 hover:border-teal-400 transition-all"
             >
               Audit indítása <ArrowRight size={12} />
             </m.a>
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

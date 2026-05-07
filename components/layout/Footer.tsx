import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const Footer = () => (
  <footer className="relative bg-primary border-t border-white/5 pt-24 pb-12 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2 space-y-10">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-all group-hover:rotate-[360deg] duration-700 shadow-xl shadow-white/5">
              <div className="w-5 h-5 bg-primary rounded-md rotate-45" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-heading">ARYS<span className="text-accent">.</span></span>
          </div>
          <p className="text-white/60 max-w-sm leading-relaxed text-base font-body">
            Az ARYS segít a modern vállalkozásoknak felszabadítani a potenciáljukat intelligens automatizációval és adatvezérelt folyamatoptimalizálással.
          </p>
          <div className="flex flex-col gap-5">
            <a href="mailto:hello@arys.hu" className="text-base text-white/40 hover:text-accent transition-all flex items-center gap-3 group/mail">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/mail:bg-white group-hover/mail:text-primary transition-all">
                <Mail size={16} />
              </div>
              <span className="font-bold tracking-tight">hello@arys.hu</span>
            </a>
          </div>
        </div>
        
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Szolgáltatások</h4>
          <ul className="space-y-5 text-sm text-white/40 font-bold uppercase tracking-widest text-[11px]">
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all" />
              Workflow Automatiáció
            </li>
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all" />
              Lead Generálás
            </li>
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all" />
              CRM Integráció
            </li>
            <li className="hover:text-white transition-all cursor-pointer flex items-center gap-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all" />
              Adatvizualizáció
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Kapcsolat</h4>
          <div className="space-y-6">
             <p className="text-sm text-white/60 leading-relaxed font-body">
               Készen állsz az automatizációra? <br />
               Kérj ingyenes auditot még ma.
             </p>
             <a
               href="#audit"
               className="inline-flex items-center gap-3 text-accent text-[11px] font-black uppercase tracking-[0.3em] border-2 border-accent/20 px-6 py-3 rounded-xl hover:bg-accent hover:text-primary transition-all"
             >
               Audit indítása <ArrowRight size={14} />
             </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
          &copy; 2026 ARYS — ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-10 text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
          <a href="/impressum" className="hover:text-accent transition-colors cursor-pointer">IMPRESSUM</a>
          <a href="/privacy" className="hover:text-accent transition-colors cursor-pointer">PRIVACY</a>
          <a href="/terms" className="hover:text-accent transition-colors cursor-pointer">TERMS</a>
        </div>
      </div>
    </div>
  </footer>
);

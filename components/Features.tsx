'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Bot, Database, BarChart3, Search, Cloud } from 'lucide-react';

const features = [
  {
    title: "Workflow Design",
    desc: "Komplex üzleti folyamatok leképezése és automatizálása n8n és Make alapokon.",
    icon: Zap,
    color: "from-teal-400 to-emerald-400"
  },
  {
    title: "Custom AI Agents",
    desc: "Saját LLM alapú asszisztensek, amik ismerik a céged belső adatait és tudását.",
    icon: Bot,
    color: "from-blue-400 to-indigo-400"
  },
  {
    title: "Data Pipelines",
    desc: "Adatok gyűjtése, tisztítása és szinkronizálása a CRM, ERP és egyéb szoftverek között.",
    icon: Database,
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "Auto Reporting",
    desc: "Dinamikus dashboardok és automatikus riportok a valós idejű üzleti döntésekhez.",
    icon: BarChart3,
    color: "from-orange-400 to-red-400"
  },
  {
    title: "Lead Intelligence",
    desc: "Automatizált lead kutatás és kvalifikáció, hogy az értékesítők csak a forró ügyfelekkel foglalkozzanak.",
    icon: Search,
    color: "from-cyan-400 to-teal-400"
  },
  {
    title: "Cloud Native",
    desc: "Skálázható, biztonságos és felhőalapú infrastruktúra minden automatizációhoz.",
    icon: Cloud,
    color: "from-emerald-400 to-teal-400"
  }
];

const Features = () => {
  return (
    <section id="szolgaltatasok" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-4">
            <h4 className="text-teal-400 text-xs font-black uppercase tracking-[0.3em]">Miben vagyunk mások?</h4>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Technológia <br />
              <span className="text-gray-800">És Eredmények</span>
            </h2>
          </div>
          <p className="max-w-sm text-gray-500 text-sm leading-relaxed">
            Nem csak szoftvereket telepítünk. Olyan ökoszisztémát építünk, ami önműködővé teszi a vállalkozásod növekedését.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full bg-[#0A0B0D] rounded-[15px] flex items-center justify-center">
                  <f.icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

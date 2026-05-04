'use client';

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { 
  X, 
  Activity, 
  Database, 
  Mail, 
  Fingerprint, 
  Workflow, 
  Zap, 
  Calendar, 
  Shield, 
  FileText, 
  Settings, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export const AuditModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [isScanning, setIsScanning] = useState(false);
  const [formData, setFormData] = useState({
    mainObstacles: [] as string[],
    techStacks: [] as string[],
    integrationDepth: '',
    growthBottleneck: '',
    teamSize: '',
    timeLoss: '',
    errorFrequency: '',
    urgency: '',
    automationGoal: '',
    name: '',
    email: '',
    companyName: '',
    comment: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const [scanMessage, setScanMessage] = useState("Vállalkozási struktúra elemzése...");

  const scanMessages = [
    "Vállalkozási struktúra elemzése...",
    "Manuális folyamatok azonosítása...",
    "Hatékonysági rések keresése...",
    "Automatizációs lehetőségek feltérképezése...",
    "Személyre szabott stratégia generálása..."
  ];

  const submitForm = async () => {
    setIsScanning(true);
    
    // Cycle through scan messages
    let msgIndex = 0;
    const interval = setInterval(() => {
      msgIndex++;
      if (msgIndex < scanMessages.length) {
        setScanMessage(scanMessages[msgIndex]);
      }
    }, 800);

    // Simulate a "heavy" scanning period for perceived depth
    await new Promise(resolve => setTimeout(resolve, 4000));
    clearInterval(interval);
    
    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'ARYS Audit Form'
        })
      });
      
      const result = await response.json();
      console.log("Submission result:", result);
    } catch(e) {
      console.error("FETCH ERROR:", e);
    }
    
    setIsScanning(false);
    nextStep();
    
    setTimeout(() => {
      onClose();
    }, 6000);
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({ 
          mainObstacles: [], 
          techStacks: [],
          integrationDepth: '',
          growthBottleneck: '',
          teamSize: '',
          timeLoss: '', 
          errorFrequency: '', 
          urgency: '',
          automationGoal: '', 
          name: '', 
          email: '', 
          companyName: '',
          comment: '' 
        });
        setIsScanning(false);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const SelectionCard = ({ 
    title, 
    icon, 
    isSelected, 
    onClick 
  }: { 
    title: string; 
    icon: React.ReactNode; 
    isSelected: boolean; 
    onClick: () => void 
  }) => (
    <m.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-8 rounded-[2rem] border transition-all duration-500 ${
        isSelected 
        ? 'border-teal-500 bg-teal-500/10 shadow-[0_0_40px_-10px_rgba(45,212,191,0.4)]' 
        : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      <div className={`mb-4 p-4 rounded-2xl transition-colors ${isSelected ? 'text-teal-400 bg-teal-400/10' : 'text-gray-500 bg-white/5'}`}>
        {icon}
      </div>
      <span className={`text-sm font-bold text-center tracking-tight ${isSelected ? 'text-white' : 'text-gray-400'}`}>
        {title}
      </span>
      {isSelected && (
        <m.div 
          className="absolute inset-0 border-2 border-teal-500 rounded-[2rem]" 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </m.button>
  );

  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A0B0D]/90 backdrop-blur-2xl"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors z-[110]">
          <X className="w-8 h-8" />
        </button>

        <m.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full max-w-4xl bg-[#0D0F14] border border-white/10 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] relative max-h-[90vh] flex flex-col"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-20">
            <m.div
              className="h-full bg-gradient-to-r from-teal-500 to-blue-500 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(step, 10) / 10) * 100}%` }}
            />
          </div>

          <div className="p-8 md:p-16 overflow-y-auto flex-1 custom-scrollbar">
            <AnimatePresence mode="wait">
              {isScanning ? (
                <m.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 space-y-8"
                >
                  <div className="relative w-32 h-32">
                    <m.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-teal-500/20 border-t-teal-500"
                    />
                    <div className="absolute inset-4 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <Activity className="w-10 h-10 text-teal-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center h-20">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{scanMessage}</h3>
                    <p className="text-gray-500 text-sm">ARYS Engine elemzi a megadott adatokat</p>
                  </div>
                </m.div>
              ) : (
                <>
                  {step === 1 && (
                    <m.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">01 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mi okozza a legtöbb napi fejfájást vagy elakadást?</h3>
                        <p className="text-gray-500 text-sm italic">Többet is választhatsz</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'data', title: 'Manuális adatrögzítés & Másolás', icon: <Database size={24} /> },
                          { id: 'comm', title: 'Kaotikus ügyfélkommunikáció', icon: <Mail size={24} /> },
                          { id: 'leads', title: 'Elveszett vagy kezeletlen érdeklődők', icon: <Fingerprint size={24} /> },
                          { id: 'finance', title: 'Számlázási & Pénzügyi lassúság', icon: <Database size={24} /> },
                          { id: 'pm', title: 'Projektmenedzsment káosz', icon: <Workflow size={24} /> },
                          { id: 'speed', title: 'Lassú válaszidők az ügyfeleknek', icon: <Zap size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.mainObstacles.includes(opt.title)}
                            onClick={() => {
                              const current = formData.mainObstacles;
                              const updated = current.includes(opt.title)
                                ? current.filter(i => i !== opt.title)
                                : [...current, opt.title];
                              setFormData({...formData, mainObstacles: updated});
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-end pt-4">
                        <m.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={formData.mainObstacles.length === 0}
                          className="px-8 py-4 bg-white/10 hover:bg-teal-500 hover:text-black disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-white text-white font-bold rounded-2xl transition-all flex items-center gap-2 group"
                        >
                          Tovább <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </m.button>
                      </div>
                    </m.div>
                  )}

                  {step === 2 && (
                    <m.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">02 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mennyi munkaórát égetnek el a repetitív folyamatok?</h3>
                        <p className="text-gray-500 text-sm italic">Számolj a manuális adatmásolással, a hibák javításával és az adminisztrációval – céges szinten.</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { id: '1-5', title: '1-5 óra', icon: <Calendar size={24} /> },
                          { id: '5-15', title: '5-15 óra', icon: <Activity size={24} /> },
                          { id: '15-40', title: '15-40 óra', icon: <Zap size={24} /> },
                          { id: '40+', title: '40+ óra', icon: <Workflow size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.timeLoss === opt.title}
                            onClick={() => { setFormData({...formData, timeLoss: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 3 && (
                    <m.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">03 / 10</span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight">Okozott-e már konkrét kárt az emberi mulasztás?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'rare', title: 'Ritkán, de akkor nagy a baj', icon: <Shield size={24} /> },
                          { id: 'weekly', title: 'Heti szinten javítunk elírásokat', icon: <FileText size={24} /> },
                          { id: 'fire', title: 'Rendszeres a "tűzoltás"', icon: <Activity size={24} /> },
                          { id: 'blind', title: 'Nincs rálátásunk a hibákra', icon: <Fingerprint size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.errorFrequency === opt.title}
                            onClick={() => { setFormData({...formData, errorFrequency: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 4 && (
                    <m.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">04 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Bírná a rendszered, ha holnaptól 2x annyi ügyfeled lenne?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'yes', title: 'Igen, simán bírná', icon: <Shield size={24} /> },
                          { id: 'maybe', title: 'Valószínűleg megroppanna', icon: <Activity size={24} /> },
                          { id: 'chaos', title: 'Esélytelen, azonnal káosz lenne', icon: <Zap size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.growthBottleneck === opt.title}
                            onClick={() => { setFormData({...formData, growthBottleneck: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 5 && (
                    <m.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">05 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Milyen eszközöket használtok jelenleg?</h3>
                        <p className="text-gray-500 text-sm italic">Többet is választhatsz</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'google', title: 'Google Workspace / Sheets', icon: <Workflow size={24} /> },
                          { id: 'ms', title: 'Microsoft 365 / Excel', icon: <Database size={24} /> },
                          { id: 'crm', title: 'Dedikált CRM rendszer', icon: <Fingerprint size={24} /> },
                          { id: 'chat', title: 'Slack / Teams / Belső chat', icon: <Mail size={24} /> },
                          { id: 'tasks', title: 'Trello / Asana / ClickUp', icon: <Zap size={24} /> },
                          { id: 'billing', title: 'Számlázó program (Billingo, stb.)', icon: <FileText size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.techStacks.includes(opt.title)}
                            onClick={() => {
                              const current = formData.techStacks;
                              const updated = current.includes(opt.title)
                                ? current.filter(i => i !== opt.title)
                                : [...current, opt.title];
                              setFormData({...formData, techStacks: updated});
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-end pt-4">
                        <m.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={formData.techStacks.length === 0}
                          className="px-8 py-4 bg-white/10 hover:bg-teal-500 hover:text-black disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-white text-white font-bold rounded-2xl transition-all flex items-center gap-2 group"
                        >
                          Tovább <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </m.button>
                      </div>
                    </m.div>
                  )}

                  {step === 6 && (
                    <m.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">06 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mennyire "beszélgetnek" egymással a szoftvereid?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'full', title: 'Teljes az integráció', icon: <Workflow size={24} /> },
                          { id: 'partial', title: 'Néha kézzel kell másolni adatokat', icon: <Database size={24} /> },
                          { id: 'island', title: 'Szigetszerűen működnek (semmi kapcsolat)', icon: <Settings size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.integrationDepth === opt.title}
                            onClick={() => { setFormData({...formData, integrationDepth: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 7 && (
                    <m.div
                      key="step7"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">07 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Hány kolléga munkáját lassítják a manuális folyamatok?</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { id: 'onlyme', title: 'Csak engem', icon: <Fingerprint size={24} /> },
                          { id: '2-5', title: '2-5 fő', icon: <Database size={24} /> },
                          { id: '5-15', title: '5-15 fő', icon: <Workflow size={24} /> },
                          { id: '15+', title: '15+ fő (vállalati szint)', icon: <Activity size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.teamSize === opt.title}
                            onClick={() => { setFormData({...formData, teamSize: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 8 && (
                    <m.div
                      key="step8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">08 / 10</span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight">Mi lenne a legfontosabb eredmény számodra?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'scale', title: 'Skálázhatóság és növekedés', icon: <Zap size={24} /> },
                          { id: 'time', title: 'Drasztikus időmegtakarítás a mindennapokban', icon: <Brain size={24} /> },
                          { id: 'cost', title: 'Alacsonyabb költségek, magasabb profit', icon: <Settings size={24} /> },
                          { id: 'peace', title: 'Hibamentes munka és teljes nyugalom', icon: <CheckCircle2 size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.automationGoal === opt.title}
                            onClick={() => { setFormData({...formData, automationGoal: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 9 && (
                    <m.div
                      key="step9"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-2">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">09 / 10</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Mikorra szeretnéd látni az első eredményeket?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'now', title: 'Azonnal (égető a probléma)', icon: <Zap size={24} /> },
                          { id: 'month', title: '1 hónapon belül', icon: <Calendar size={24} /> },
                          { id: 'search', title: 'Csak tájékozódom egyelőre', icon: <Fingerprint size={24} /> }
                        ].map((opt) => (
                          <SelectionCard 
                            key={opt.id}
                            title={opt.title}
                            icon={opt.icon}
                            isSelected={formData.urgency === opt.title}
                            onClick={() => { setFormData({...formData, urgency: opt.title}); nextStep(); }}
                          />
                        ))}
                      </div>
                    </m.div>
                  )}

                  {step === 10 && (
                    <m.div
                      key="step10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-4">
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">10 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">Kihez küldhetjük a diagnózist?</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Név</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Teljes neved"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Cégnév</label>
                            <input
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                              placeholder="Vállalkozásod neve"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Email</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Munkahelyi e-mail"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">További megjegyzések (Opcionális)</label>
                          <textarea
                            value={formData.comment}
                            onChange={(e) => setFormData({...formData, comment: e.target.value})}
                            placeholder="Van-e bármi, amit még kiemelne?"
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                          />
                        </div>
                        <m.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={submitForm}
                          disabled={!formData.name || !formData.email || !formData.companyName}
                          className="w-full py-5 bg-teal-500 disabled:bg-gray-800 disabled:text-gray-600 text-black font-black rounded-2xl transition-all shadow-[0_20px_50px_-10px_rgba(45,212,191,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                        >
                          Elemzés Indítása <ArrowRight size={18} />
                        </m.button>
                      </div>
                    </m.div>
                  )}

                  {step === 11 && (
                    <m.div
                      key="step11"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-8"
                    >
                      <div className="relative inline-block">
                        <m.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 12 }}
                          className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30"
                        >
                          <CheckCircle2 className="w-12 h-12 text-teal-400" />
                        </m.div>
                        <m.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 rounded-full border border-teal-500/50"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-4xl font-bold text-white tracking-tighter italic">Köszönjük!</h3>
                        <p className="text-gray-400 text-lg max-w-sm mx-auto">
                          Az audit sikeresen lezárult. Rendszerünk elemzi az adataidat; hamarosan érkezünk a <span className="text-teal-400 font-bold underline">diagnosztikai riporttal</span> és a következő lépésekkel.
                        </p>
                      </div>
                      <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                      >
                        Ablak bezárása
                      </button>
                    </m.div>
                  )}

                  {step > 1 && step < 11 && !isScanning && (
                    <m.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={prevStep}
                      className="mt-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group"
                    >
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Vissza
                    </m.button>
                  )}
                </>
              )}
            </AnimatePresence>
          </div>
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};

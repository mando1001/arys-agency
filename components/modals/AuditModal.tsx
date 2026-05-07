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
      className={`relative flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all duration-500 ${
        isSelected 
        ? 'border-accent bg-accent/10 shadow-xl shadow-accent/10' 
        : 'border-white/5 bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.05]'
      }`}
    >
      <div className={`mb-3 p-3 rounded-2xl transition-all ${isSelected ? 'text-background bg-accent shadow-lg shadow-accent/20' : 'text-white/20 bg-white/5 border border-white/10'}`}>
        {icon}
      </div>
      <span className={`text-sm font-bold text-center tracking-tight font-body ${isSelected ? 'text-primary' : 'text-white/40'}`}>
        {title}
      </span>
      {isSelected && (
        <m.div 
          className="absolute inset-0 border-2 border-accent rounded-[2rem]" 
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-3xl"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors z-[110]">
          <X className="w-8 h-8" />
        </button>

        <m.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full max-w-4xl glass-card-premium border border-white/10 rounded-[3rem] shadow-2xl shadow-black/80 relative max-h-[95vh] flex flex-col"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-white/5 z-20 overflow-hidden rounded-t-[3rem]">
            <m.div
              className="h-full bg-accent shadow-[0_0_15px_rgba(20,184,166,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(step, 10) / 10) * 100}%` }}
            />
          </div>

          <div className="p-6 md:p-12 overflow-y-auto flex-1 custom-scrollbar">
            <AnimatePresence mode="wait">
              {isScanning ? (
                <m.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 space-y-10"
                >
                  <div className="relative w-40 h-40">
                    <m.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-4 border-white/5 border-t-accent shadow-xl shadow-accent/10"
                    />
                    <div className="absolute inset-4 rounded-full bg-accent/5 flex items-center justify-center">
                      <Activity className="w-12 h-12 text-accent animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-3 tracking-tighter font-heading">{scanMessage}</h3>
                    <p className="text-secondary text-base font-body">ARYS Engine elemzi a megadott adatokat</p>
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
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">01 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Mi okozza a legtöbb napi fejfájást?</h3>
                        <p className="text-secondary text-base italic font-body">Többet is választhatsz</p>
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
                      <div className="flex justify-end pt-8">
                        <m.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={formData.mainObstacles.length === 0}
                          className="px-10 py-5 bg-accent text-background disabled:opacity-30 font-black rounded-2xl transition-all flex items-center gap-3 group uppercase tracking-widest text-xs shadow-xl shadow-accent/20"
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
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">02 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Mennyi munkaórát égetnek el a repetitív folyamatok?</h3>
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
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">03 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Okozott-e már konkrét kárt az emberi mulasztás?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">04 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Bírná a rendszered a növekedést?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">05 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Milyen eszközöket használtok jelenleg?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      <div className="flex justify-end pt-8">
                        <m.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={formData.techStacks.length === 0}
                          className="px-10 py-5 bg-primary text-white disabled:opacity-30 font-black rounded-2xl transition-all flex items-center gap-3 group uppercase tracking-widest text-xs shadow-xl shadow-primary/20"
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
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">06 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Mennyire "beszélgetnek" egymással a szoftvereid?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">07 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Hány kolléga munkáját lassítják a folyamatok?</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">08 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Mi lenne a legfontosabb eredmény?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          { id: 'scale', title: 'Skálázhatóság és növekedés', icon: <Zap size={24} /> },
                          { id: 'time', title: 'Drasztikus időmegtakarítás', icon: <Brain size={24} /> },
                          { id: 'cost', title: 'Alacsonyabb költségek', icon: <Settings size={24} /> },
                          { id: 'peace', title: 'Hibamentes munka', icon: <CheckCircle2 size={24} /> }
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
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">09 / 10</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter font-heading leading-[1.1]">Mikorra szeretnéd az eredményeket?</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'now', title: 'Azonnal (égető)', icon: <Zap size={24} /> },
                          { id: 'month', title: '1 hónapon belül', icon: <Calendar size={24} /> },
                          { id: 'search', title: 'Csak tájékozódom', icon: <Fingerprint size={24} /> }
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
                      className="space-y-6"
                    >
                      <div className="space-y-6">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">10 / 10</span>
                        <h3 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter font-heading leading-none">Küldhetjük a diagnózist?</h3>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest pl-2">Név</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Teljes neved"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-primary placeholder:text-white/10 focus:outline-none focus:border-accent transition-all font-body"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black text-white/20 uppercase tracking-widest pl-2">Cégnév</label>
                            <input
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                              placeholder="Vállalkozásod neve"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-primary placeholder:text-white/10 focus:outline-none focus:border-accent transition-all font-body"
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-white/20 uppercase tracking-widest pl-2">Email</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Munkahelyi e-mail"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-primary placeholder:text-white/10 focus:outline-none focus:border-accent transition-all font-body"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-white/20 uppercase tracking-widest pl-2">Megjegyzés (Opcionális)</label>
                          <textarea
                            value={formData.comment}
                            onChange={(e) => setFormData({...formData, comment: e.target.value})}
                            placeholder="Van-e bármi, amit még kiemelne?"
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-primary placeholder:text-white/10 focus:outline-none focus:border-accent transition-all resize-none font-body"
                          />
                        </div>
                        <m.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={submitForm}
                          disabled={!formData.name || !formData.email || !formData.companyName}
                          className="w-full py-6 bg-accent text-background disabled:bg-white/10 disabled:text-white/20 font-black rounded-2xl transition-all shadow-2xl shadow-accent/20 flex items-center justify-center gap-4 uppercase tracking-widest text-xs"
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
                      className="text-center py-6 space-y-8"
                    >
                      <div className="relative inline-block">
                        <m.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 12 }}
                          className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent"
                        >
                          <CheckCircle2 className="w-14 h-14 text-accent" />
                        </m.div>
                        <m.div 
                          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 rounded-full border-2 border-accent"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-5xl font-bold text-primary tracking-tighter italic font-heading">Köszönjük!</h3>
                        <p className="text-secondary text-xl max-w-sm mx-auto font-body leading-relaxed">
                          Az audit sikeresen lezárult. Hamarosan érkezünk a <span className="text-accent font-bold underline">diagnosztikai riporttal</span> és a következő lépésekkel.
                        </p>
                      </div>
                      <button 
                        onClick={onClose}
                        className="text-secondary hover:text-primary transition-colors text-xs font-black uppercase tracking-widest border-b border-transparent hover:border-primary pb-1"
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
                      className="mt-12 flex items-center gap-3 text-secondary hover:text-primary transition-colors text-xs font-black uppercase tracking-widest group"
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

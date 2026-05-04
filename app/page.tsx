import { Suspense } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MotionProvider } from '../components/providers/MotionProvider';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { AuditMagnet } from '../components/sections/AuditMagnet';
import { ModalController } from './ModalController';

export const metadata = {
  title: 'ARYS | Valódi Üzleti Automatizáció',
  description: 'Az ARYS segít a modern vállalkozásoknak felszabadítani a potenciáljukat intelligens automatizációval és adatvezérelt folyamatoptimalizálással.',
};

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="bg-[#0A0B0D] text-white selection:bg-teal-500/30">
        <Hero />
        
        <Suspense fallback={<div className="h-96 bg-[#0A0B0D]" />}>
          <Features />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-[#0A0B0D]" />}>
          <AuditMagnet />
        </Suspense>

        <Suspense fallback={null}>
          <ModalController />
        </Suspense>
      </main>
      <Footer />
    </MotionProvider>
  );
}

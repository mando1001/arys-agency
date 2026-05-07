import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MotionProvider } from '../components/providers/MotionProvider';
import { Hero } from '../components/sections/Hero';

const Features = dynamic(() => import('../components/sections/Features').then(mod => mod.Features), {
  loading: () => <div className="h-96 w-full bg-[#0A0B0D]" />,
  ssr: true
});

const AuditMagnet = dynamic(() => import('../components/sections/AuditMagnet').then(mod => mod.AuditMagnet), {
  ssr: true
});

const ModalController = dynamic(() => import('./ModalController').then(mod => mod.ModalController), {
  ssr: false
});

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
        <Suspense fallback={<div className="h-96 w-full bg-[#0A0B0D]" />}>
          <Features />
        </Suspense>
        <Suspense fallback={null}>
          <AuditMagnet />
        </Suspense>
        <ModalController />
      </main>
      <Footer />
    </MotionProvider>
  );
}

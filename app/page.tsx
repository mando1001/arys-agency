import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MotionProvider } from '../components/providers/MotionProvider';
import { Hero } from '../components/sections/Hero';
import { ClientWrapper } from './ClientWrapper';

export const metadata = {
  title: 'ARYS | Valódi Üzleti Automatizáció',
  description: 'Az ARYS segít a modern vállalkozásoknak felszabadítani a potenciáljukat intelligens automatizációval és adatvezérelt folyamatoptimalizálással.',
};

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="bg-background text-primary selection:bg-accent/20">
        <Hero />
        <ClientWrapper />
      </main>
      <Footer />
    </MotionProvider>
  );
}

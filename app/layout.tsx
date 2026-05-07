import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ARYS — Növeld a profitot, csökkentsd a céges káoszt.',
  description: 'Prémium AI és workflow automatizáció modern vállalkozásoknak. B.L.A.S.T. protokoll alapú folyamatoptimalizálás — nyerj vissza heti 20+ órát.',
  keywords: ['automatizáció', 'üzleti folyamatok', 'AI', 'n8n', 'mesterséges intelligencia', 'hatékonyság', 'ARYS', 'B.L.A.S.T.'],
  authors: [{ name: 'ARYS Agency' }],
  openGraph: {
    title: 'ARYS — Növeld a profitot, csökkentsd a céges káoszt.',
    description: 'Prémium AI és workflow automatizáció modern vállalkozásoknak. Nyerj vissza heti 20+ órát.',
    url: 'https://arys.hu',
    siteName: 'ARYS',
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARYS — Növeld a profitot, csökkentsd a céges káoszt.',
    description: 'Prémium AI és workflow automatizáció modern vállalkozásoknak.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="bg-[#0A0B0D] bg-mesh text-white font-sans antialiased overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200 flex flex-col min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ARYS — Valódi Üzleti Automatizáció | Nyerj vissza heti 20+ órát',
  description: 'Prémium AI és workflow automatizációs megoldások modern vállalkozásoknak. B.L.A.S.T. protokoll alapú folyamatoptimalizálás, n8n és Gemini integrációk.',
  keywords: ['automatizáció', 'üzleti folyamatok', 'AI', 'n8n', 'mesterséges intelligencia', 'hatékonyság', 'ARYS', 'B.L.A.S.T.'],
  authors: [{ name: 'ARYS Agency' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'ARYS — Valódi Üzleti Automatizáció',
    description: 'Nyerj vissza heti 20+ órát prémium automatizációkkal.',
    url: 'https://arys.hu',
    siteName: 'ARYS',
    locale: 'hu_HU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="hu" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="bg-[#0A0B0D] text-white font-sans antialiased overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200 flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

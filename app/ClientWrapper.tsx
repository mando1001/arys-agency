'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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

export function ClientWrapper() {
  return (
    <>
      <Suspense fallback={<div className="h-96 w-full bg-[#0A0B0D]" />}>
        <Features />
      </Suspense>
      <Suspense fallback={null}>
        <AuditMagnet />
      </Suspense>
      <ModalController />
    </>
  );
}

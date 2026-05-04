'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { AuditMagnet } from '../components/sections/AuditMagnet';
import { StickyCTA } from '../components/layout/StickyCTA';

const AuditModal = dynamic(
  () => import('../components/modals/AuditModal').then(m => m.AuditModal),
  { ssr: false }
);

export const ModalController = () => {
  const [showAuditModal, setShowAuditModal] = useState(false);
  const openModal = () => setShowAuditModal(true);
  const closeModal = () => setShowAuditModal(false);

  return (
    <>
      <AuditMagnet openModal={openModal} />
      <StickyCTA openModal={openModal} />
      {showAuditModal && (
        <AuditModal isOpen={showAuditModal} onClose={closeModal} />
      )}
    </>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { StickyCTA } from '../components/layout/StickyCTA';

const AuditModal = dynamic(
  () => import('../components/modals/AuditModal').then(m => m.AuditModal),
  { ssr: false }
);

export const ModalController = () => {
  const [showAuditModal, setShowAuditModal] = useState(false);
  const openModal = () => setShowAuditModal(true);
  const closeModal = () => setShowAuditModal(false);

  useEffect(() => {
    const handleOpen = () => setShowAuditModal(true);
    window.addEventListener('open-audit', handleOpen);
    return () => window.removeEventListener('open-audit', handleOpen);
  }, []);

  return (
    <>
      <StickyCTA openModal={openModal} />
      {showAuditModal && (
        <AuditModal isOpen={showAuditModal} onClose={closeModal} />
      )}
    </>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const StickyCTA = ({ openModal }: { openModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.2, y: y * 0.2 });
  };

  const resetPos = () => setMousePos({ x: 0, y: 0 });

  const handleClick = () => {
    if (isMobile && !isExpanded) {
      setIsExpanded(true);
    } else {
      openModal();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-5 md:bottom-24 md:right-10 z-[80]"
        >
          {isMobile ? (
            <m.button
              layout
              onClick={handleClick}
              className="relative flex items-center bg-white text-black font-black shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
              animate={{
                borderRadius: '999px',
                paddingLeft: isExpanded ? '20px' : '14px',
                paddingRight: isExpanded ? '20px' : '14px',
                paddingTop: '14px',
                paddingBottom: '14px',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <AnimatePresence>
                {isExpanded && (
                  <m.span
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: 'auto', marginLeft: '10px' }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[11px] uppercase tracking-[0.15em] whitespace-nowrap overflow-hidden"
                  >
                    Ingyenes Audit
                  </m.span>
                )}
              </AnimatePresence>
              {isExpanded && (
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-2"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </m.span>
              )}
            </m.button>
          ) : (
            <div className="relative group">
              <div className="absolute inset-[-2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-teal-500/50 rounded-full blur-md" />
              <m.button
                animate={{ x: mousePos.x, y: mousePos.y }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetPos}
                onClick={handleClick}
                className="relative flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  <span>Ingyenes Audit</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </m.button>
            </div>
          )}
        </m.div>
      )}
    </AnimatePresence>
  );
};

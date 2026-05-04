'use client';

import React from 'react';
import { m } from 'motion/react';
import { Settings, Mail, Database, Users, CheckCircle2, Brain } from 'lucide-react';

export const FlowVisual = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden group hidden md:block">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_70%)] transition-colors duration-1000" />
        
        <svg className="w-full h-full max-w-[500px] max-h-[400px]" viewBox="0 0 500 400">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g transform="translate(250, 200)">
            <rect
              width="80"
              height="80"
              x="-40"
              y="-40"
              rx="24"
              className="fill-teal-500/10 stroke-teal-500/30"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'spin 10s linear infinite' }}
            />
            <m.circle
              r="30"
              className="fill-teal-500/5 stroke-teal-500/20"
              animate={{ r: [30, 45], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </g>
          <foreignObject x="230" y="180" width="40" height="40">
            <div className="w-full h-full flex items-center justify-center">
              <Settings className="text-teal-400 w-8 h-8 animate-spin-slow" />
            </div>
          </foreignObject>
          {[
            { icon: <Mail className="w-5 h-5" />, x: 100, y: 100, delay: 0 },
            { icon: <Database className="w-5 h-5" />, x: 100, y: 300, delay: 0.5 },
            { icon: <Users className="w-5 h-5" />, x: 400, y: 100, delay: 1 },
            { icon: <CheckCircle2 className="w-5 h-5" />, x: 400, y: 300, delay: 1.5 }
          ].map((node, i) => (
            <g key={i}>
              <m.path
                d={`M ${node.x} ${node.y} L 250 200`}
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-white/10 group-hover:text-teal-500/30 transition-colors duration-700"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: node.delay }}
              />
              <m.circle
                r="4"
                className="fill-teal-400"
                filter="url(#glow)"
                animate={{
                  cx: [node.x, 250],
                  cy: [node.y, 200],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: node.delay + 0.5,
                  ease: "easeInOut"
                }}
              />
              <foreignObject x={node.x - 24} y={node.y - 24} width="48" height="48">
                <m.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: node.delay, type: "spring" }}
                  className="w-full h-full rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-teal-400 group-hover:border-teal-500/30 transition-all duration-500 backdrop-blur-sm shadow-xl"
                >
                  {node.icon}
                </m.div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export const BrainVisual = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 group hidden md:block overflow-visible">
      <div className="relative w-full h-full flex items-center overflow-visible">
        <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMaxYMid meet">
          <defs>
            <filter id="brainGlow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g className="stroke-orange-500/10 group-hover:stroke-orange-500/20 transition-colors duration-700">
            {[
              { x1: 500, y1: 150, x2: 1100, y2: 80 },
              { x1: 500, y1: 150, x2: 1100, y2: 150 },
              { x1: 500, y1: 150, x2: 1100, y2: 220 },
            ].map((link, i) => (
              <m.line
                key={i}
                x1={link.x1} y1={link.y1} x2={link.x2} y2={link.y2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
          </g>
          {[0, 1, 2].map((i) => (
            <m.circle
              key={i}
              r="2"
              className="fill-orange-400"
              filter="url(#brainGlow)"
              animate={{
                cx: [500, 1100],
                cy: [150, [80, 150, 220][i]],
                opacity: [0, 1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            />
          ))}
          {[
            { x: 1100, y: 80 },
            { x: 1100, y: 150 },
            { x: 1100, y: 220 }
          ].map((node, i) => (
            <foreignObject key={i} x={node.x - 16} y={node.y - 16} width="40" height="40">
              <div className="w-full h-full rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400/50 group-hover:text-orange-400 transition-colors">
                <Users className="w-4 h-4" />
              </div>
            </foreignObject>
          ))}
          <g transform="translate(500, 150)">
            <m.circle
              r="35"
              className="fill-orange-500/5 stroke-orange-500/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </g>
          <foreignObject x="470" y="120" width="60" height="60">
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500" style={{ transformOrigin: 'center center' }}>
              <Brain className="text-orange-400 w-8 h-8" />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};

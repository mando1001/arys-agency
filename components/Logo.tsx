'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 group cursor-pointer"
  >
    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
      <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
    </div>
    <div className="text-2xl font-black tracking-tighter text-white">
      ARYS<span className="text-teal-400">.</span>
    </div>
  </motion.div>
);

export default Logo;

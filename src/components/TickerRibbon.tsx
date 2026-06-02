import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const SERVICES = [
  'WEB DEVELOPMENT',
  'UI/UX DESIGN',
  'CLOUD ARCHITECTURE',
  'FULL-STACK ENGINEERING',
  'BRAND STRATEGY',
  'SEO OPTIMIZATION',
  'DATABASE ARCHITECTURE',
  'ENTERPRISE CONSULTING',
  'CREATIVE DIRECTION',
];

export default function TickerRibbon() {
  // Duplicate services list to make sure the loop is flawless and fully fills widescreen screens
  const tickerItems = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES];

  return (
    <div className="relative w-full overflow-hidden bg-[#070709] py-14 select-none">
      
      {/* Decorative background glow under the ribbon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-24 bg-gradient-to-r from-brand-orange/15 to-rose-500/10 blur-xl opacity-80 pointer-events-none" />

      {/* The Slanted Ribbon Container */}
      <div className="relative w-[115%] -left-[7.5%] rotate-[-2.5deg] scale-[1.03] overflow-hidden bg-gradient-to-r from-[#FFAA2B] via-[#FF8A00] to-rose-500 py-4 sm:py-5 shadow-[0_12px_40px_rgba(255,138,0,0.25)] border-y-2 border-black/10">
        
        {/* Continuous Infinite Marquee Loop */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex items-center gap-10 sm:gap-14 text-black font-display font-black text-sm sm:text-base md:text-lg tracking-wider"
            animate={{ x: [0, -1500] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity,
            }}
          >
            {tickerItems.map((service, index) => (
              <span key={index} className="flex items-center gap-10 sm:gap-14">
                <span className="font-extrabold select-none uppercase tracking-widest">{service}</span>
                <span className="text-black inline-flex items-center">
                  <span className="text-base sm:text-lg">✦</span>
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

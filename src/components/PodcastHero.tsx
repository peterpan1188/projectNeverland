import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, ArrowRight, Layers, Cpu, Code, ArrowUpRight } from 'lucide-react';
import iKalingaImg from '../assets/images/neverland_creative_1779377777570.png';
import asanKanaImg from '../assets/images/red_silhouette_1779378744158.png';
import travelTayoImg from '../assets/images/orange_juice_1779378764645.png';
import kaBarangayImg from '../assets/images/neverland_interface_1779377759860.png';
import speakUpImg from '../assets/images/streetwear_blossoms_1779378828213.png';
import productDevImg from '../assets/images/hoodie_model_1779378723764.png';
import designArchitectImg from '../assets/images/peterbuenavente-featured-1.png';

interface PodcastHeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}



export default function PodcastHero({ onOpenBooking, onExploreServices }: PodcastHeroProps) {
  return (
    <section className="relative bg-[#070709] bg-radial-gradient py-12 md:py-20 overflow-hidden border-b border-zinc-900">
      
      {/* Dynamic Background Blob elements matching the peg */}
      {/* Green blob - top left */}
      <div className="absolute top-12 left-[12%] w-32 h-32 rounded-full bg-[#10B981] opacity-[0.22] blur-[80px] pointer-events-none" />
      {/* Large Royal Blue blob - top right */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#3B82F6] opacity-[0.25] blur-[110px] pointer-events-none" />
      {/* Orange-red blob - bottom left */}
      <div className="absolute bottom-16 left-[5%] w-48 h-48 rounded-full bg-[#EF4444] opacity-[0.18] blur-[90px] pointer-events-none" />

      {/* Subtle thin vector wavy line visuals in background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,200 Q200,50 500,250 T1200,100 T1800,300"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-50,300 Q400,120 800,350 T1600,150"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>



      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        
        {/* Decorative Space Cushion to replace the waveform visualizer */}
        <div className="h-4 sm:h-8 mb-6" />

        {/* Hero Tiny Badges / Sparkles */}
        <div className="absolute left-[20%] top-24 hidden md:block">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="text-zinc-600 hover:text-amber-400 transition-colors duration-300"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        </div>
        <div className="absolute right-[22%] top-36 hidden md:block">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 0.9, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="text-zinc-600 hover:text-amber-400 transition-colors duration-300"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Title text crafted to exactly replicate Dribbble peg layout but fully customized for Project Neverland */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAA2B] via-[#FF8A00] to-rose-500 font-extrabold shadow-sm">Peter Buenavente</span> <br className="hidden sm:inline" />
          Premium Digital Strategy
        </h1>

        {/* Pill call-to-actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <button
            onClick={onExploreServices}
            type="button"
            className="bg-white hover:bg-gray-100 text-black px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5 group"
          >
            <span>Explore Services</span>
            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <Play className="w-2.5 h-2.5 text-white fill-white ml-[1px]" />
            </div>
          </button>

          <a
            href="https://wa.me/639104011905"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111116] hover:bg-[#181822] text-white border border-white/10 hover:border-white/20 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/40"
          >
            <span>Initiate Strategy Session</span>
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="w-2.5 h-2.5 text-black" />
            </div>
          </a>
        </div>

        {/* Premium Bento Grid Media Collage from Video Peg */}
        <div className="relative mt-8 max-w-6xl mx-auto px-2">
          {/* Desktop Asymmetric Bento Column Grid Container */}
          <div className="hidden md:grid grid-cols-12 gap-4 items-stretch">
            
            {/* Card 1: iKalinga - Pet Rescue & Animal Welfare (Col span 2) */}
            <div className="col-span-2 relative group overflow-hidden rounded-2xl border border-white/5 bg-[#121217] h-[290px] self-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#FFAA2B]/30">
              <img
                src={iKalingaImg}
                alt=""
                className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Column 2: Stack of two MVP showcase items (Col span 3) */}
            <div className="col-span-3 flex flex-col gap-4">
              {/* Card top: Asan Kana - Family Location Tracking */}
              <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-[#121217] h-[137px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-indigo-500/30">
                <img
                  src={asanKanaImg}
                  alt=""
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Card bottom: Travel Tayo - Island Tourism */}
              <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-[#121217] h-[137px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-rose-500/30">
                <img
                  src={travelTayoImg}
                  alt=""
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Column 3: The Golden Center Hero Portrait (Col span 3) */}
            <div className="col-span-3 relative group overflow-hidden rounded-3xl border-2 border-[#FFAA2B]/40 bg-[#FFAA2B] h-[340px] shadow-[0_0_40px_rgba(255,170,43,0.25)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(255,170,43,0.35)]">
              {/* Gold/Orange styled studio lighting mesh inside layout */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFAA2B] via-amber-400 to-[#FF8A00] opacity-80" />
              <img
                src={designArchitectImg}
                alt=""
                className="w-full h-full object-cover relative z-10 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 group-hover:mix-blend-normal"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Column 4: Stack of two MVP showcase items (Col span 2) */}
            <div className="col-span-2 flex flex-col gap-4">
              {/* Card top: Ka Barangay - Community Governance */}
              <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-[#121217] h-[137px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-500/30">
                <img
                  src={kaBarangayImg}
                  alt=""
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Card bottom: SpeakUp - Anti-Bullying Support */}
              <div className="relative group overflow-hidden rounded-2xl border border-[#141d2d] bg-gradient-to-br from-indigo-900 to-purple-950 h-[137px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-indigo-500/30">
                <img
                  src={speakUpImg}
                  alt=""
                  className="w-full h-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-700 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Card 5: Right showcase (Col span 2) */}
            <div className="col-span-2 relative group overflow-hidden rounded-2xl border border-white/5 bg-[#121217] h-[290px] self-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#FFAA2B]/30">
              <img
                src={productDevImg}
                alt=""
                className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Mobile responsive touch-swipeable or stacked layout */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x scrollbar-none pb-4 px-2 select-none">
            {/* Slide 1 */}
            <div className="snap-center shrink-0 w-[240px] relative rounded-2xl border border-white/10 overflow-hidden bg-[#121217] h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                alt="Consultant representation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            {/* Slide 2 */}
            <div className="snap-center shrink-0 w-[240px] relative rounded-2xl border border-white/10 overflow-hidden bg-[#121217] h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600&auto=format&fit=crop"
                alt="High-Performance engineering product screen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            {/* Slide 3 */}
            <div className="snap-center shrink-0 w-[240px] relative rounded-2xl border border-white/10 overflow-hidden bg-[#121217] h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop"
                alt="Design blueprint"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          </div>
          {/* Custom swipe indicator for mobile */}
          <p className="md:hidden text-[10px] text-zinc-500 font-mono mt-3 text-center tracking-wider">
            Swipe left/right to browse corporate showroom ➔
          </p>

        </div>

      </div>
    </section>
  );
}

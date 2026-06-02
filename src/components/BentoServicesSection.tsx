import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CalendarRange, 
  Workflow, 
  BarChart3, 
  Smartphone, 
  Bell, 
  Layout, 
  Network, 
  Search, 
  Play, 
  User, 
  Check, 
  Mail, 
  Home, 
  Grid, 
  Heart, 
  Settings, 
  Share2 
} from 'lucide-react';

export default function BentoServicesSection() {
  // State to simulate user search on the phone mock
  const [phoneSearchText, setPhoneSearchText] = useState('');
  
  // Tab index simulation for the bottom menu mockup card
  const [activeBottomNavTab, setActiveBottomNavTab] = useState('share');

  // Animation variants for card containers to stagger nicely
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative bg-[#070709] py-24 px-4 overflow-hidden select-none">
      
      {/* Visual Ambient Overlay Mesh Grid matching the rest of the dark aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F0F12_1px,transparent_1px),linear-gradient(to_bottom,#0F0F12_1px,transparent_1px)] bg-[size:32px_32px] opacity-75 pointer-events-none" />

      {/* Decorative Brand Orange Glows in background of bento layout */}
      <div className="absolute -top-[10%] right-[5%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-brand-orange/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[5%] w-[45%] h-[45%] rounded-full bg-gradient-to-tr from-brand-orange/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Giant Watermark text echoing "MOBILE APP" in beautiful outlines behind the grid */}
        <div className="absolute top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
          <span className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] font-display font-black text-zinc-900/10 uppercase tracking-widest leading-none translate-y-[-40px]">
            MOBILE APP
          </span>
        </div>

        {/* Header statement */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-brand-orange font-mono text-xs tracking-widest font-semibold uppercase block mb-3">
            In Project Neverland, we are here to help you
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            What We Are Offering
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto font-sans font-light">
            We build elite custom-coded platforms, reliable SaaS backend architectures, and pristine visual guidelines designed specifically for fast performance and growth.
          </p>
        </div>

        {/* Dynamic Bento Box Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          
          {/* ================= COLUMN 1 (LEFT SIDE) ================= */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: Web Development */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: '#33333F' }}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-350"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                <Layout className="w-5.5 h-5.5 text-brand-orange" />
              </div>
              <h3 className="text-white text-lg font-display font-bold mb-2.5">
                Web Development
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Building high-speed, dynamic web platforms with React and modern TypeScript. Flawless responsive flows optimized for absolute visual perfection.
              </p>
            </motion.div>

            {/* Card 2: Software & System Dev */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: '#33333F' }}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-350"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                <Workflow className="w-5.5 h-5.5 text-brand-orange" />
              </div>
              <h3 className="text-white text-lg font-display font-bold mb-2.5">
                Software &amp; System Dev
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Engineering low-latency backend architectures, server management pipelines, and robust compilation parameters to scale alongside your operations.
              </p>
            </motion.div>

            {/* Card 3: UI/UX & Web Designing */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: '#33333F' }}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-350"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                <BarChart3 className="w-5.5 h-5.5 text-brand-orange" />
              </div>
              <h3 className="text-white text-lg font-display font-bold mb-2.5">
                UI/UX &amp; Web Designing
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Creating intuitive visual guidelines, precise layouts, responsive touch interactions, and bespoke style systems tailored to direct user attention.
              </p>
            </motion.div>

          </div>

          {/* ================= COLUMN 2 (CENTER HIGH-FIDELITY MOBILE PHONE) ================= */}
          <div className="flex flex-col gap-6 md:col-span-1">
            
            {/* Card 4: Multimedia Design */}
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-card/90 border border-neutral-border rounded-3xl overflow-hidden flex flex-col justify-between relative group text-left min-h-[380px] sm:min-h-[440px]"
            >
              <div className="p-6">
                <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                  <Smartphone className="w-5.5 h-5.5 text-brand-orange" />
                </div>
                <h3 className="text-white text-2xl font-display font-extrabold mb-3">
                  Multimedia Design
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-[240px]">
                  Designing premium digital graphics, interactive typography, customized logo packs, and video integrations that convert and captivate.
                </p>
              </div>

              {/* iPhone simulated device sidebar slide-in overlay clipping out on the right bottom */}
              <div className="absolute bottom-[-16px] right-[-16px] w-[62%] h-[68%] sm:h-[62%] bg-[#0A0A0E] border-t-4 border-l-4 border-zinc-800 rounded-tl-2xl shadow-[0_-12px_40px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Simulated Notch / Speaker capsule */}
                <div className="w-16 h-4 bg-zinc-900 rounded-full mx-auto mt-1 flex items-center justify-center border border-zinc-800/40">
                  <div className="w-2 h-2 rounded-full bg-cyan-700/80 mr-1.5" />
                  <div className="w-8 h-1 bg-zinc-800 rounded-full" />
                </div>

                <div className="p-3">
                  {/* Digital Clock */}
                  <div className="flex justify-between items-center px-1.5 mb-2.5">
                    <span className="text-[9px] font-mono text-zinc-400 font-bold">9:41</span>
                    <div className="flex items-center gap-1 text-[8px] text-zinc-400 font-bold font-mono">
                      <span>LTE</span>
                      <div className="w-3.5 h-2 border border-zinc-500 rounded-sm p-0.5 flex items-center">
                        <div className="h-full w-full bg-emerald-500 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Device simulated search bar */}
                  <div className="relative mb-3 bg-[#111115] border border-zinc-800/60 rounded px-1.5 py-1.5 flex items-center gap-1.5">
                    <Search className="w-2.5 h-2.5 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      value={phoneSearchText}
                      onChange={(e) => setPhoneSearchText(e.target.value)}
                      className="bg-transparent border-none text-[9.5px] text-zinc-300 placeholder-zinc-600 focus:outline-none w-full leading-none h-auto p-0 m-0"
                    />
                  </div>

                  {/* Diagram / Node Network inside phone screen */}
                  <div className="space-y-4 pt-1 relative">
                    
                    {/* Continuous SVG flow connector line */}
                    <div className="absolute left-[13px] top-[14px] bottom-[14px] w-0.5 border-l-2 border-dashed border-zinc-800" />

                    {/* Step A - Start */}
                    <div className="flex items-center gap-2 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/10 border border-brand-orange/35 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 text-brand-orange fill-brand-orange" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-semibold text-white block leading-none">Start</span>
                        <span className="text-[7.5px] font-mono text-zinc-500">Initiation trigger</span>
                      </div>
                    </div>

                    {/* Step B - New Account */}
                    <div className="flex items-center gap-2 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center">
                        <User className="w-2.5 h-2.5 text-zinc-400" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-semibold text-white block leading-none">New account</span>
                        <span className="text-[7.5px] font-mono text-[#FFAA2B]">Action active</span>
                      </div>
                    </div>

                    {/* Step C - Verification */}
                    <div className="flex items-center gap-2 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center">
                        <Mail className="w-1.5 h-1.5 text-zinc-400" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-semibold text-zinc-400 block leading-none">Send verification</span>
                        <span className="text-[7.5px] font-mono text-zinc-600">Pending handshake</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>

            {/* Card 5: Core Focus Message */}
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl overflow-hidden flex flex-col justify-between relative text-left min-h-[220px]"
            >
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed mb-6 z-10">
                Project Neverland delivers high-level digital execution, combining world-class design refinement with robust engineering processes to optimize growth.
              </p>

              {/* High fidelity Bottom portion of iPhone centered */}
              <div className="w-full max-w-[280px] mx-auto mt-auto bg-[#0A0A0E] border-t-4 border-x-4 border-zinc-800 rounded-t-xl py-3 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
                
                {/* Tab layout in simulated responsive mockup */}
                <div className="flex items-center justify-between">
                  
                  <button 
                    type="button" 
                    onClick={() => setActiveBottomNavTab('home')}
                    className={`p-1.5 rounded transition-transform active:scale-95 ${activeBottomNavTab === 'home' ? 'text-brand-orange' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    <Home className="w-4.5 h-4.5" />
                  </button>

                  <button 
                    type="button" 
                    onClick={() => setActiveBottomNavTab('grid')}
                    className={`p-1.5 rounded transition-transform active:scale-95 ${activeBottomNavTab === 'grid' ? 'text-[#FFAA2B]' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    <Grid className="w-4.5 h-4.5" />
                  </button>

                  {/* Core Highlighted Circle with customized glowing backdrop */}
                  <div className="relative -top-4">
                    <button 
                      type="button" 
                      onClick={() => setActiveBottomNavTab('share')}
                      className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center shadow-lg shadow-brand-orange/30 border border-brand-orange/40 active:scale-90 transition-transform"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    {/* Concentric rings to make it expand exactly like Dribbble UI element */}
                    <span className="absolute -inset-1 rounded-full border border-brand-orange/20 pointer-events-none" />
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setActiveBottomNavTab('heart')}
                    className={`p-1.5 rounded transition-transform active:scale-95 ${activeBottomNavTab === 'heart' ? 'text-rose-500' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    <Heart className="w-4.5 h-4.5" />
                  </button>

                  <button 
                    type="button" 
                    onClick={() => setActiveBottomNavTab('settings')}
                    className={`p-1.5 rounded transition-transform active:scale-95 ${activeBottomNavTab === 'settings' ? 'text-cyan-400' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    <Settings className="w-4.5 h-4.5" />
                  </button>

                </div>

                {/* iPhone Home gestural indicator bar */}
                <div className="w-24 h-1 bg-zinc-800 rounded-full mx-auto mt-4" />

              </div>
            </motion.div>

          </div>

          {/* ================= COLUMN 3 (RIGHT SIDE) ================= */}
          <div className="flex flex-col gap-6">
            
            {/* Card 6: SEO & Marketing Leads */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: '#33333F' }}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-350"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                <Bell className="w-5.5 h-5.5 text-brand-orange" />
              </div>
              <h3 className="text-white text-lg font-display font-bold mb-2.5">
                SEO &amp; Marketing Leads
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Driving transactional conversion, structuring semantic metadata tags, and optimizing Core Web Vitals to command first-page Google search results.
              </p>
            </motion.div>

            {/* Card 7: Systems Integration */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: '#33333F' }}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-350"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                <CalendarRange className="w-5.5 h-5.5 text-brand-orange" />
              </div>
              <h3 className="text-white text-lg font-display font-bold mb-2.5">
                Systems Integration
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Connecting secure checkout gateways, automated customer webhooks, and third-party APIs into singular streamlined workflows.
              </p>
            </motion.div>

            {/* Card 8: Custom Databases & Cloud */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: '#33333F' }}
              className="bg-neutral-card/90 border border-neutral-border p-6 rounded-3xl flex flex-col items-start text-left transition-all duration-350"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center mb-6 shadow-inner">
                <Network className="w-5.5 h-5.5 text-brand-orange" />
              </div>
              <h3 className="text-white text-lg font-display font-bold mb-2.5">
                Custom Databases &amp; Cloud
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Configuring high-fidelity relational stores, OAuth credentials systems, and enterprise data models built on grade-A security standards.
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

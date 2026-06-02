import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { mockProjects } from '../data';
import { ArrowLeft, ArrowRight, Sparkles, CalendarDays } from 'lucide-react';

interface ProjectCarouselProps {
  onSelectProject: (focus: string) => void;
  onOpenBooking: () => void;
}

const servicesTabs = [
  { id: 'strategy', number: '#01', label: 'Strategy & Planning', indexes: [0, 7] },
  { id: 'design', number: '#02', label: 'Design & Development', indexes: [1, 3, 8, 9] },
  { id: 'launch', number: '#03', label: 'Launch & Growth', indexes: [2, 4, 10] },
  { id: 'support', number: '#04', label: 'Ongoing Support', indexes: [5, 6] }
];

export default function ProjectCarousel({ onSelectProject, onOpenBooking }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Default to project #04 index to showcase black t-shirt mockup on grass right away
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [hoveredOffset, setHoveredOffset] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % mockProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + mockProjects.length) % mockProjects.length);
  };

  const activeProject = mockProjects[activeIndex];

  // We loop 7 offsets symmetrically [-3, -2, -1, 0, 1, 2, 3] around the activeIndex to form a seamless matching concave fan of 7 cover flow cards
  const offsets = [-3, -2, -1, 0, 1, 2, 3];

  let spacing = 285; // Perfect spacious desktop spacing to prevent clipping and allow all 7 cards to fit excellently
  if (deviceType === 'mobile') {
    spacing = 100;
  } else if (deviceType === 'tablet') {
    spacing = 170;
  }

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-neutral-dark" id="works">
      {/* Background radial ambient lights and grid reflections */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute -top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Cinematic Section Header with Exact Typography pairings from Mockup */}
        <div className="mb-14">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-orange font-mono text-sm tracking-widest font-semibold uppercase block mb-3"
          >
            Behind the Designs
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-[1.1]"
          >
            Curious What Else I’ve Created?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto mb-10 font-sans font-light"
          >
            Explore more brand identities, packaging, and digital design work in my extended portfolio.
          </motion.p>

          {/* Pill Button "See more Projects" with exact white pill/orange circle configuration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <button 
              type="button"
              onClick={onOpenBooking}
              id="btn_see_projects"
              className="group flex items-center justify-between gap-4 bg-white hover:bg-zinc-100 text-zinc-950 font-sans font-medium pl-6 pr-2 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold">See more Projects</span>
              <span className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3D Curved Coverflow Stage */}
        <div className="relative h-[250px] sm:h-[360px] md:h-[450px] flex items-center justify-center my-8 select-none group/stage">
          
          {/* Subtle reflection floor overlay */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent z-20 pointer-events-none" />

          {/* Nav Controllers perfectly centered & elevated */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 md:px-12 max-w-6xl mx-auto z-30 pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-neutral-border text-white flex items-center justify-center pointer-events-auto opacity-0 group-hover/stage:opacity-40 hover:!opacity-100 hover:bg-neutral-card hover:border-brand-orange hover:text-brand-orange transition-all duration-300 shadow-xl active:scale-90"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-neutral-border text-white flex items-center justify-center pointer-events-auto opacity-0 group-hover/stage:opacity-40 hover:!opacity-100 hover:bg-neutral-card hover:border-brand-orange hover:text-brand-orange transition-all duration-300 shadow-xl active:scale-90"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* 3D Viewport container */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center" style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}>
            {offsets.map((offset) => {
              // Loop key data index symmetrically
              const projectIdx = (activeIndex + offset + mockProjects.length * 10) % mockProjects.length;
              const project = mockProjects[projectIdx];

              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isFar = Math.abs(offset) === 2;
              const isExtreme = Math.abs(offset) === 3;

              // Base properties (unhovered coverflow state)
              const baseRotateY = isActive ? 0 : (offset * -12) - (offset > 0 ? 28 : -28); 
              const baseTranslateZ = isActive ? 110 : -Math.abs(offset) * 110 - 20;
              const baseTranslateX = offset * spacing;
              const baseScale = isActive ? 1.15 : isAdjacent ? 0.88 : isFar ? 0.74 : 0.62;
              const baseOpacity = isActive ? 1.0 : 0.82; // Background cards are slightly dimmer to emphasize center stage

              // Perfectly parallel vertical alignment matching standard 3D wireframe geometries
              const rotateZ = 0;
              const translateY = 0;

              // Dynamic properties: Beautiful, premium 3D lift & highlight on hover in-place without horizontal sliding or layout swapping
              let finalX = baseTranslateX;
              let finalZ = baseTranslateZ;
              let finalRotateY = baseRotateY;
              let finalScale = baseScale;
              let finalOpacity = baseOpacity;
              let zIndex = 50 - Math.abs(offset) * 10;

              if (hoveredOffset !== null) {
                if (hoveredOffset === offset) {
                  // The card under the cursor gently lifts in Z-depth, turns slightly forward, and scales up elegantly
                  finalScale = baseScale * (isActive ? 1.05 : 1.08);
                  finalZ = baseTranslateZ + (isActive ? 50 : 35);
                  finalRotateY = baseRotateY * 0.75; // Angle slightly towards the viewer for a tactile feedback
                  finalOpacity = 1.0;
                  zIndex = 100; // Elevate above sister cards
                } else {
                  // Other cards gently dim and recede to offer high-contrast cinematic focus on the hovered item
                  finalOpacity = isActive ? 0.65 : 0.35;
                }
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    setActiveIndex(projectIdx);
                    setHoveredOffset(null);
                  }}
                  onMouseEnter={() => {
                    setHoveredOffset(offset);
                  }}
                  onMouseLeave={() => setHoveredOffset(null)}
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center',
                  }}
                  animate={{
                    x: finalX,
                    y: translateY,
                    z: finalZ,
                    rotateY: finalRotateY,
                    scale: finalScale,
                    opacity: finalOpacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                    mass: 0.8
                  }}
                  className={`absolute ${
                    deviceType === 'mobile' 
                      ? 'w-[110px] h-[125px] rounded-xl' 
                      : deviceType === 'tablet' 
                      ? 'w-[175px] h-[195px] rounded-2xl' 
                      : 'w-[240px] h-[270px] rounded-3xl'
                  } overflow-hidden cursor-pointer group shadow-[0_25px_50px_rgba(0,0,0,0.7)] border transition-[colors,shadow] duration-300 ${
                    isActive 
                      ? 'border-brand-orange/80 shadow-[0_0_35px_rgba(255,90,31,0.2)] ring-1 ring-brand-orange/40' 
                      : 'border-zinc-800/80 bg-neutral-card/90 hover:border-zinc-700'
                  } pointer-events-auto`}
                >
                    {/* Visual Highlights & Glare overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 via-transparent to-white/5 opacity-40 z-15 pointer-events-none group-hover:translate-x-4 transition-transform duration-1000" />
                    
                    {/* Keep all adjacent/background items fully illuminated of dark layers */}

                    {/* Compliant, responsive background image */}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Reflection diagonal glare sheen line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-15" />

                    {/* Subtle details on hover or when card is center active */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 z-20 flex flex-col justify-end text-left h-2/3">
                      <span className="text-brand-orange font-mono text-[9px] sm:text-xs tracking-widest font-semibold uppercase mb-1">
                        {project.number} {project.category.split(' & ')[0]}
                      </span>
                      <h3 className="text-white font-display text-xs sm:text-base md:text-lg font-medium tracking-tight leading-tight group-hover:text-brand-orange transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                </motion.div>
              );
              })}
          </div>
        </div>

        {/* Navigation Indicator Columns - Replicated exactly from the 4 columns in the mockup */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-14 px-4">
          {servicesTabs.map((tab) => {
            const isActive = tab.indexes.includes(activeIndex);
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  // Cycle indexes or just set to first
                  if (isActive) {
                    const currentPos = tab.indexes.indexOf(activeIndex);
                    const nextPos = (currentPos + 1) % tab.indexes.length;
                    setActiveIndex(tab.indexes[nextPos]);
                  } else {
                    setActiveIndex(tab.indexes[0]);
                  }
                }}
                className="group flex flex-col items-center text-center transition-all duration-300 focus:outline-none"
              >
                <span className={`font-mono text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-brand-orange scale-110' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                  {tab.number}
                </span>
                <span className={`font-display text-sm font-medium tracking-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                  {tab.label}
                </span>
                <div className={`h-0.5 bg-brand-orange transition-all duration-300 mt-2 rounded-full ${isActive ? 'w-8' : 'w-0'}`} />
              </button>
            );
          })}
        </div>

        {/* Active Project Highlight Showcase Detail Drawer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-14 max-w-4xl mx-auto text-left bg-zinc-900/80 backdrop-blur-md rounded-[28px] p-6 sm:p-10 border border-neutral-border shadow-2xl relative overflow-hidden"
          >
            {/* Background neon visual line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent" />

            <div className="absolute top-5 right-5 flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeProject.metrics || "Interactive Deliverables Included"}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
              <div className="md:col-span-2 space-y-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                  {activeProject.number} Selected Brand Case study
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-zinc-300 font-sans font-light leading-relaxed text-sm sm:text-base">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeProject.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-zinc-950 border border-zinc-800/80 text-[10px] text-zinc-400 px-3 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instant Call-to-Action module */}
              <div className="bg-zinc-950/70 rounded-2xl p-5 sm:p-6 border border-zinc-800 flex flex-col justify-between h-full space-y-4">
                <div>
                  <h4 className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-bold mb-2">
                    Action Link
                  </h4>
                  <p className="text-zinc-400 text-xs font-sans font-light">
                    Want to integrate similar capabilities? Trigger our strategy generator for a customized proposal.
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={() => onSelectProject(activeProject.consultationFocus || activeProject.title)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-brand-orange/15 transform active:scale-95"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Initiate Strategy Build</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Layers,
  Globe,
  Compass,
  Radio,
  Vote,
  HeartPulse,
  Building2,
  ExternalLink
} from 'lucide-react';
import { mvpProjects, MvpProject } from '../mvpData';
import MvpCaseStudyPage from './MvpCaseStudyPage';

export default function BespokePortfolioMasonry() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMvp, setActiveMvp] = useState<MvpProject | null>(null);

  const categories = ['All', 'Travel & Tourism', 'Safety & Location', 'Civic & Community', 'Social Welfare'];

  const filteredSamples = selectedCategory === 'All' 
    ? mvpProjects 
    : mvpProjects.filter(p => {
        if (selectedCategory === 'Travel & Tourism') return p.id === 'travel-tayo';
        if (selectedCategory === 'Safety & Location') return p.id === 'asan-kana';
        if (selectedCategory === 'Civic & Community') return p.id === 'letsspeakup' || p.id === 'ka-barangay-io';
        if (selectedCategory === 'Social Welfare') return p.id === 'ikalinga';
        return false;
      });

  // Helper to choose vector icons representing each MVP card
  const getCardIcon = (id: string) => {
    switch(id) {
      case 'travel-tayo': return <Compass className="w-5 h-5 text-[#0F9D58]" />;
      case 'asan-kana': return <Radio className="w-5 h-5 text-[#E11D48]" />;
      case 'letsspeakup': return <Vote className="w-5 h-5 text-indigo-500" />;
      case 'ikalinga': return <HeartPulse className="w-5 h-5 text-[#10B981]" />;
      case 'ka-barangay-io': return <Building2 className="w-5 h-5 text-teal-500" />;
      default: return <Layers className="w-5 h-5 text-brand-orange" />;
    }
  };

  return (
    <section className="relative bg-[#09090C] py-28 px-4 border-t border-zinc-900 overflow-hidden select-none">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111115_1px,transparent_1px),linear-gradient(to_bottom,#111115_1px,transparent_1px)] bg-[size:40px_40px] opacity-45 pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[2%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#FFAA2B]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[2%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#FFAA2B]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header and introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full text-[10.5px] font-mono tracking-wider font-semibold text-brand-orange uppercase mb-4">
              <Layers className="w-3 h-3" />
              <span>Phase 1 Functional MVPs</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-extrabold tracking-tight text-white mb-4 leading-tight">
              Crafted Active Portfolios
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-sans font-light leading-relaxed">
              We focus on solving localized community challenges with premium digital layouts. Explore our selection of high-fidelity rapid-developed systems. 
              <strong className="text-brand-orange font-normal"> Click any card to enter its dedicated story and guidelines page.</strong>
            </p>
          </div>

          {/* Filter Categories tab */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-4.5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 border ${
                  selectedCategory === cat 
                    ? 'bg-white text-black border-white shadow-lg shadow-white/5' 
                    : 'bg-[#111115]/80 text-zinc-400 border-zinc-800/85 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-inspired bento grid for the 5 MVPs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSamples.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#0D0D11] rounded-2.5xl border border-zinc-900/90 hover:border-zinc-800/80 p-5 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex flex-col justify-between transition-all duration-400"
                onClick={() => setActiveMvp(project)}
              >
                
                <div>
                  {/* Card Visual device wrapper */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-5 bg-[#08080A] border border-zinc-950">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[82%] group-hover:brightness-[92%] filter grayscale-[15%] group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating serial and badge indicators */}
                    <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md border border-zinc-800 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-md">
                      {getCardIcon(project.id)}
                      <span className="text-[10.5px] font-mono font-bold text-zinc-200">
                        {project.metrics}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-zinc-950/90 border border-zinc-800 rounded-md px-2 py-0.5 text-[9.5px] font-mono text-zinc-400">
                      {project.number}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 pointer-events-none" />

                    {/* Hover floating trigger visual */}
                    <div className="absolute bottom-3 right-3 w-9-5 h-9-5 rounded-xl bg-brand-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-brand-orange/20">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="text-left space-y-2.5">
                    <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block font-bold">
                      {project.category}
                    </span>
                    
                    <h3 className="text-white text-lg font-display font-extrabold leading-snug group-hover:text-[#FFAA2B] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-300 font-mono text-xs italic font-light select-none">
                      &ldquo;{project.slogan}&rdquo;
                    </p>

                    <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer specs details card info */}
                <div className="border-t border-zinc-900/80 pt-4 mt-5 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-zinc-500">Rapid Sandbox Delivery</span>
                  <span className="text-brand-orange group-hover:underline flex items-center gap-1 font-bold">
                    <span>Enter Project Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study page overlay */}
      <AnimatePresence>
        {activeMvp && (
          <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100vw' }}
            transition={{ type: 'spring', damping: 26, stiffness: 180 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <MvpCaseStudyPage 
              project={activeMvp} 
              onBack={() => setActiveMvp(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

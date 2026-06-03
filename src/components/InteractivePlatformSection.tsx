import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin,
  Cpu, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Mail, 
  Phone, 
  ChevronRight, 
  Copy,
  Briefcase
} from 'lucide-react';
import peterPhoto from '../assets/images/peterbuenavente-featured-1.png';

export default function InteractivePlatformSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'achievements' | 'contact'>('experience');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const achievements = [
    { year: '2025', status: 'HON. MENTION', title: '2nd Ersao Digital Art Contest' },
    { year: '2025', status: 'HON. MENTION', title: 'Brooks Point Digital Art Competition' },
    { year: '2024', status: 'HON. MENTION', title: 'DENR FMB Digital Poster Making Contest' },
    { year: '2023', status: 'FINALIST', title: 'Philippine Art Award 2022-2023' },
    { year: '2023', status: 'FINALIST', title: 'Legazy T-Shirt Design Contest' },
    { year: '2019', status: 'FINALIST', title: 'Philippine Art Award 2019-2020' },
    { year: '2018', status: 'HON. MENTION', title: 'LIS and National Library Poster Making Contest' },
    { year: '2018', status: 'SEMI FINALIST', title: '2018 MADE (Metrobank Art and Design Excellence)' },
    { year: '2018', status: 'FINALIST', title: 'Fierra De Manila T-Shirt Design Competition' },
    { year: '2017', status: '2ND PRIZE', title: 'GHTCP - Anti Human Slavery Digital Poster Making Contest' },
    { year: '2017', status: 'HON. MENTION', title: 'Inner Wheel of the Philippines Painting Competition' },
    { year: '2017', status: 'FINALIST', title: 'Art Battle Manila (Fringe Manila)' },
    { year: '2017', status: 'SEMI FINALIST', title: '2017 MADE (Metrobank Art and Design Excellence)' },
    { year: '2017', status: 'GRAND PRIZE', title: 'Fierra De Manila T-Shirt Design Competition' },
    { year: '2017', status: 'TOP10 FINALIST', title: '2nd Don Papa Rum Art Competition' },
    { year: '2016', status: 'FINALIST', title: '2016 Maningning Miclat Art Award' },
    { year: '2016', status: 'GRAND PRIZE', title: 'Fierra De Manila T-Shirt Design Competition' },
    { year: '2015', status: 'HON. MENTION', title: '1st Iloilo Art Prize' },
    { year: '2015', status: 'HON. MENTION', title: 'Philippine Navy Painting Competition' },
    { year: '2015', status: 'TOP10 FINALIST', title: '2016 Int\'l Eucharist Painting Competition' },
    { year: '2014', status: '2ND PRIZE', title: '2014 Maningning Miclat Art Award' },
    { year: '2006', status: 'FINALIST', title: 'Painting Category - 39th Shell NSAC' },
    { year: '2006', status: 'HON. MENTION', title: 'Museo Pambata Poster Making Contest' },
    { year: '2005', status: 'REPRESENTATIVE', title: 'FEU Inter University Painting Competition' },
    { year: '2004', status: 'HON. MENTION', title: 'Smart Communication - Poster Making Contest' },
    { year: '2004', status: 'HON. MENTION', title: 'Bigkis Mag-aaral Poster Making Contest' }
  ];

  const getBadgeStyle = (status: string) => {
    if (status.includes('GRAND') || status.includes('1ST') || status.includes('WINNER')) {
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
    if (status.includes('2ND') || status.includes('3RD') || status.includes('PRIZE')) {
      return 'bg-slate-400/10 text-slate-300 border-slate-400/30';
    }
    if (status.includes('FINALIST') || status.includes('SEMI')) {
      return 'bg-brand-orange/10 text-brand-orange border-brand-orange/30';
    }
    return 'bg-zinc-500/10 text-zinc-400 border-zinc-800';
  };

  // Careers from pdf
  const careerTimeline = [
    {
      role: 'Senior UI/UX & Web Developer',
      company: 'MySchool Suite',
      period: 'Present',
      focus: 'K-12 Educational SaaS Industry',
      highlights: [
        'Translated deep user experience research data, competitor matrices, and structural system flows into high-fidelity UI layout screens for a multi-tenant web ecosystem.',
        'Maximized feature development velocity using state-of-the-art Agentic AI tooling (Cursor, Claude AI, Copilot) to prototype functional layouts and deploy front-end modules.',
        'Established usability testing tracks to isolate interaction bottlenecks, refactoring codebases with modern React libraries to accelerate performance.',
        'Produced complex web graphics and dynamic marketing assets, balancing design consistency with strict engineering parameters.'
      ]
    },
    {
      role: 'Senior Web Developer',
      company: 'KDCI Outsourcing',
      period: 'December 2021 – Present',
      focus: 'Business Process Outsourcing (BPO) & Enterprise Portals',
      highlights: [
        'Spearheaded the transformation of creative UI/UX wireframes into clean, scalable front-end components using professional from-scratch coding.',
        'Utilized modern frameworks including ReactJS and Tailwind CSS to engineer lightning-fast landing stages and optimized digital brand properties.',
        'Drove wide-scale asset re-engineering cycles, converting complex rebranding specifications into cross-browser semantic layouts following global code metrics.'
      ]
    },
    {
      role: 'Web Developer & UI/UX Lead',
      company: 'Khoenix Solution (Project Based)',
      period: 'February 2021 – August 2021',
      focus: 'Online Casino & Betting site',
      highlights: [
        'Acted as technical interface coordinator, managing functional codebase adjustments and UI standardizations across real-time betting web software.',
        'Spearheaded technical SEO boosting protocols, optimizing metadata syntax, structural link trees, and web code architecture to secure higher organic search indexing.'
      ]
    },
    {
      role: 'Web Designer & Web Developer',
      company: 'Ingenium BPO',
      period: 'June 2018 – January 2021',
      focus: 'Financial Technology (FinTech)',
      highlights: [
        'Owned the front-end pipeline from design handoff to functional implementation, writing raw code templates matching corporate brand values.',
        'Led technical audits and design workarounds to completely modernize legacy dashboard architectures for desktop and mobile devices.'
      ]
    },
    {
      role: 'Web Designer & Web Developer',
      company: 'EnfraUSA BusinessSolution',
      period: 'February 2016 – October 2017',
      focus: 'Internet Brands & Website Industry',
      highlights: [
        'Conducted website maintenance, editing details and content using proprietary CMS (iPortal and iControl, WordPress-inspired).',
        'Provided high-tier client support as Senior Designer for VIP client tasks, ensuring design precision and timeliness.',
        'Customized client websites, overriding backend constraints using raw code to implement advanced styling that exceeded CMS limitations.',
        'Produced professional graphic designs and corporate brandings for international client websites.'
      ]
    },
    {
      role: 'Multimedia Designer',
      company: 'Kelin Graphics System Corp.',
      period: 'June 2014 – October 2015',
      focus: 'Distributor of Large Format Printers & Advertising Machines',
      highlights: [
        'Appointed as UI Lead for brand revisions, managing website design, maintenance, and development.',
        'Developed wireframes, mockups, and interactive prototypes using Photoshop, Illustrator, and other design applications.',
        'Designed videos, GIFs, website banners, and marketing assets for official social media pages.',
        'Implemented SEO best practices, optimizing metadata syntax to increase website rankings and driving traffic via targeted marketing links.'
      ]
    },
    {
      role: 'Multimedia Designer',
      company: 'R.Y. Cortez Signs Services',
      period: 'July 2013 – April 2014',
      focus: 'Advertising Business (Signages)',
      highlights: [
        'Created detailed 3D signages and structural mockups for architectural visualization and client presentations.',
        'Designed corporate logo studies, computed production layouts, printed pattern layouts, and assisted in fabrication processes.',
        'Developed marketing expo booths and promotional collaterals including brochures, leaflets, posters, and tarpaulins.',
        'Attended client design meetings to align specifications and finalize fabrication quotations.'
      ]
    },
    {
      role: 'Web Designer & Web Developer',
      company: 'R.Y. Cortez Signs Services',
      period: 'March 2013 – May 2013',
      focus: 'Advertising Business (Signages)',
      highlights: [
        'Designed brand identity packages, product logo studies, and initial company advertisement concepts.',
        'Created marketing graphics, social media banners, and office collateral designs (leaflets, brochures, and banners).'
      ]
    },
    {
      role: 'Visual Artist & Graphic Designer (Freelance)',
      company: 'GMA7, Unli Merch, Toon City, Top Draw, Big and Small Art Co.',
      period: '2008 – 2013',
      focus: 'Media, Apparel, Animation & Fine Arts',
      highlights: [
        'Designed product logos, marketing brochures, leaflets, banners, posters, tarpaulins, and infographics for corporate clients.',
        'Worked as a subcontract animator for Toon City Animation and Top Draw Animation, contributing to international cartoon productions.',
        'Illustrated children\'s books and created print designs for apparel businesses (Unli Merch, Big and Small Art Co.).',
        'Created fine art murals and set designs for GMA 7 Studio, and exhibited fine art paintings in galleries and public spaces.'
      ]
    }
  ];

  const skillCategories = [
    {
      title: 'Core Front-End Engineering',
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      skills: ['Professional Scratch Coding', 'ReactJS / Next.js', 'Vite & TypeScript', 'Tailwind CSS', 'Responsive Architecture', 'JavaScript (ES6+)']
    },
    {
      title: 'UI/UX & Full-Lifecycle Design',
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      skills: ['Figma & Adobe XD', 'Design Systems Customization', 'High-Fidelity Wireframing', 'User Research', 'Usability System Diagnostics', 'System Flow Modeling']
    },
    {
      title: 'AI Tooling & Vibe Coding',
      icon: <Sparkles className="w-5 h-5 text-[#FFAA2B]" />,
      skills: ['Agentic AI Workflows', 'Claude AI / Custom Models', 'Cursor & Github Copilot', 'Automated Code Generation', 'Rapid Proof-of-Concepts', 'Workflow Automation Scripts']
    }
  ];

  return (
    <div className="bg-[#070709] border border-zinc-900 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-inner mt-10">
      
      {/* Decorative Grid Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Premium Portrait with glowing border & interactive state overlays */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-[#FFAA2B] to-[#FF5A1F] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-[#0A0A0C] rounded-2xl border border-zinc-800/80 overflow-hidden flex items-stretch">
            
            <img 
              src={peterPhoto} 
              alt="Peter Buenavente - Project Lead & UI/UX Lead" 
              className="w-full h-full object-cover object-bottom filter contrast-[1.05] grayscale-[15%] group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />



          </div>
        </div>

        {/* RIGHT COLUMN: Stark Swiss narrative bio with interactive indicators */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            Meet Peter
          </h2>

          {/* Engaging narrative description with absolute typography precision */}
          <div className="space-y-4 text-zinc-400 text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
            <p>
              Peter is a <span className="text-white font-semibold">Senior Developer and UI/UX Lead</span> who has spent over ten years turning creative ideas into beautiful, easy-to-use websites and applications. He handles both sides of the screen—crafting how an experience looks and making sure it runs smoothly.
            </p>
            <p>
              He is entirely self-taught, growing his skills step-by-step. His professional path goes from being a visual artist to a graphic artist, a web developer, a UI/UX designer, and now a trusted Project Lead. Guided by curiosity and real tenacity, his journey is all about learning, staying open to new ideas, and creating things that help businesses grow and delight the people using them.
            </p>
          </div>

          {/* Authentic Mantra / Quote Block */}
          <div className="relative p-5 sm:p-6 bg-zinc-950/40 border-l border-brand-orange/60 rounded-r-xl mb-8">
            <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase font-bold block mb-2">
              Why Project Neverland
            </span>
            <p className="text-zinc-300 italic text-sm font-sans leading-relaxed">
              "Being a childhood fan of my same-name hero Peter Pan, I always admired Neverland as a place full of hope, where everything impossible becomes possible. That is my mantra, that is my motivation—to learn more, hold onto a boundless imagination, and be more creative on what I am doing."
            </p>
            <div className="text-left mt-2.5">
              <span className="text-xs font-mono text-brand-orange/90 font-bold">— Peter</span>
            </div>
          </div>

          {/* Main Get to Know More CTA Trigger */}
          <div className="flex items-center">
            <button
              onClick={() => setIsDrawerOpen(true)}
              type="button"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all hover:shadow-xl hover:shadow-brand-orange/10 shadow-md active:scale-97 group cursor-pointer"
            >
              <span>Get to Know More</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

      {/* DETAILED INTERACTIVE PORTFOLIO & CAREER HISTORY DRAWER OVERLAY */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop Shadow Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

            {/* Slide-out side cabinet drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-2xl bg-neutral-dark border-l border-zinc-800 shadow-2xl z-50 overflow-y-auto flex flex-col"
            >
              
              {/* Header inside drawer */}
              <div className="p-6 border-b border-zinc-850 bg-[#0E0E12] flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-950/80 border border-zinc-800 flex items-center justify-center">
                    <Briefcase className="w-4.5 h-4.5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-extrabold text-base">Professional Ledger</h3>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase font-semibold">Peter Buenavente Resume Profile</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(false)}
                  type="button"
                  className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
                  aria-label="Close Ledger"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Tabs header selector */}
              <div className="px-6 bg-[#0E0E12] border-b border-zinc-850 flex gap-4 select-none overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab('experience')}
                  type="button"
                  className={`py-3.5 text-xs font-mono font-bold tracking-wider uppercase relative shrink-0 ${
                    activeTab === 'experience' ? 'text-brand-orange' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Experience Matrix
                  {activeTab === 'experience' && (
                    <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-orange" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  type="button"
                  className={`py-3.5 text-xs font-mono font-bold tracking-wider uppercase relative shrink-0 ${
                    activeTab === 'skills' ? 'text-brand-orange' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Technical Grid
                  {activeTab === 'skills' && (
                    <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-orange" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  type="button"
                  className={`py-3.5 text-xs font-mono font-bold tracking-wider uppercase relative shrink-0 ${
                    activeTab === 'achievements' ? 'text-brand-orange' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Achievements
                  {activeTab === 'achievements' && (
                    <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-orange" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  type="button"
                  className={`py-3.5 text-xs font-mono font-bold tracking-wider uppercase relative shrink-0 ${
                    activeTab === 'contact' ? 'text-brand-orange' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Direct Channels
                  {activeTab === 'contact' && (
                    <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-orange" />
                  )}
                </button>
              </div>

              {/* Body inside drawer */}
              <div className="p-6 flex-1 bg-[#0A0A0E] overflow-y-auto">
                
                {activeTab === 'experience' && (
                  <div className="space-y-8 text-left">
                    {/* Brief resume overview */}
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900">
                      <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                        Senior Web Developer and UI/UX Lead with over ten years of experience creating successful websites and digital products. Known for a strong work ethic, rapid learning, and a talent for leading projects from original design to final, working code.
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l border-zinc-850 pl-5.5 space-y-8 ml-2">
                      {careerTimeline.map((item, idx) => (
                        <div key={idx} className="relative group">
                          {/* Circle on timeline */}
                          <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-orange bg-[#0A0A0E] group-hover:scale-110 transition-transform duration-300 z-10 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-1">
                            <span className="text-white text-base font-display font-extrabold">{item.role}</span>
                            <span className="px-2.5 py-0.5 rounded-full border border-zinc-800 bg-zinc-950 text-[#FFAA2B] font-mono text-[9px] font-bold">
                              {item.period}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3 font-mono font-medium">
                            <span className="text-zinc-300">{item.company}</span>
                            <span>&bull;</span>
                            <span className="text-zinc-500">{item.focus}</span>
                          </div>

                          {/* Bullet notes */}
                          <ul className="space-y-2 mt-2">
                            {item.highlights.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex gap-2.5 text-xs text-zinc-400 font-sans font-light leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-6 text-left">
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed mb-6">
                      A deep-tech, modular visual grid details how Peter merges full product-lifecycle systems engineering with standard design guidelines and responsive code.
                    </p>

                    <div className="grid grid-cols-1 gap-5">
                      {skillCategories.map((cat, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 relative overflow-hidden group">
                          {/* Header of skill package */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-[#0A0A0E] border border-zinc-800 flex items-center justify-center">
                              {cat.icon}
                            </div>
                            <h4 className="text-white text-sm font-display font-bold">{cat.title}</h4>
                          </div>

                          {/* Skill grids */}
                          <div className="grid grid-cols-2 gap-2">
                            {cat.skills.map((skill, sIdx) => (
                              <div 
                                key={sIdx} 
                                className="px-3 py-2 rounded-lg bg-[#0A0A0E]/80 border border-zinc-900 hover:border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-2 transition-all"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="space-y-6 text-left">
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed mb-4">
                      An overview of Peter's creative awards, painting exhibitions, and national poster/design competitions spanning his career.
                    </p>

                    <div className="space-y-2.5 max-h-[62vh] overflow-y-auto pr-2 custom-scrollbar">
                      {achievements.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-900/80 hover:border-zinc-800 transition-all gap-2"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <span className="text-brand-orange font-mono text-xs font-bold shrink-0 mt-0.5 sm:mt-0">{item.year}</span>
                            <span className="text-white text-xs sm:text-sm font-sans font-light leading-normal">{item.title}</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border shrink-0 text-center w-max ${getBadgeStyle(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="space-y-6 text-left">
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed mb-6">
                      Connect with Peter directly for consulting engagements, enterprise-grade systems infrastructure, and premium visual layout inquiries.
                    </p>

                    <div className="space-y-4">
                      {/* Email block */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-lg bg-[#0A0A0E] border border-zinc-855 flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5 text-brand-orange" />
                          </div>
                          <div>
                            <span className="text-zinc-500 text-[9px] font-mono uppercase block">Direct Email</span>
                            <span className="text-white text-sm font-mono font-semibold block mt-0.5 selection:bg-brand-orange/40">ptrbuenavente@gmail.com</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleCopy('ptrbuenavente@gmail.com', 'email')}
                          type="button"
                          className="p-2 border border-zinc-800 rounded bg-[#0A0A0E] hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer"
                        >
                          {copiedText === 'email' ? <span className="text-[10px] font-mono text-emerald-400">COPIED</span> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Phone block */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-lg bg-[#0A0A0E] border border-zinc-855 flex items-center justify-center shrink-0">
                            <Phone className="w-5 h-5 text-brand-orange" />
                          </div>
                          <div>
                            <span className="text-zinc-500 text-[9px] font-mono uppercase block">Mobile Phone</span>
                            <span className="text-white text-sm font-mono font-semibold block mt-0.5 selection:bg-brand-orange/40">+63 910 401 1905</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleCopy('+639104011905', 'phone')}
                          type="button"
                          className="p-2 border border-zinc-800 rounded bg-[#0A0A0E] hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer"
                        >
                          {copiedText === 'phone' ? <span className="text-[10px] font-mono text-emerald-400">COPIED</span> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Map location block */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-[#0A0A0E] border border-zinc-855 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-[#FFAA2B]" />
                        </div>
                        <div>
                          <span className="text-zinc-500 text-[9px] font-mono uppercase block">Geo Coordinate Location</span>
                          <span className="text-white text-sm font-sans font-medium block mt-0.5">Manila, Metro Manila, Philippines</span>
                          <p className="text-zinc-500 text-[11px] font-sans font-light mt-1.5 leading-relaxed">
                            Serving regional and international client software portfolios, executing full web integrations under agile methodologies.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
                      <span className="text-[10px] font-mono text-zinc-600 block">AVAILABLE FOR EXCLUSIVE PRODUCT ADVISORY</span>
                    </div>

                  </div>
                )}

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

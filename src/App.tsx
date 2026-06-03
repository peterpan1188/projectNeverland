/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  mockServices, 
  mockFaqs 
} from './data';
import CreativeShowcaseGrid from './components/CreativeShowcaseGrid';
import BespokePortfolioMasonry from './components/BespokePortfolioMasonry';
import PodcastHero from './components/PodcastHero';
import TickerRibbon from './components/TickerRibbon';
import InteractivePlatformSection from './components/InteractivePlatformSection';
import BentoServicesSection from './components/BentoServicesSection';
import ProjectNeverlandLogo from './components/ProjectNeverlandLogo';
import { 
  ChevronDown, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Megaphone, 
  Palette,
  Briefcase,
  Users,
  Search,
  CheckCircle,
  Menu,
  X,
  PhoneCall,
  Flame,
  MousePointerClick,
  MessageCircle,
  Phone,
  Link
} from 'lucide-react';

const BehanceIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/>
  </svg>
);

const LinktreeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m13.51 5.85 4.01-4.12 2.32 2.38-4.21 4.01h5.91v3.31h-5.94l4.23 4.11-2.32 2.33-5.75-5.77-5.74 5.77-2.32-2.33 4.23-4.11H1.5v-3.31h5.92L3.21 4.11 5.53 1.73l4.01 4.12V0h3.97v5.85zM10.02 16.16h3.97V24h-3.97v-7.84z"/>
  </svg>
);

export default function App() {
  const [focusTopic, setFocusTopic] = useState<string>('');
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // References for scrolling
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const offeringRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleSelectProjectToConsult = (topic: string) => {
    setFocusTopic(topic);
    scrollToSection(portfolioRef);
  };

  const handleOpenBookingDefault = () => {
    window.open("https://wa.me/639104011905", "_blank", "noopener,noreferrer");
  };

  // Icon selector helper
  const getBentoIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-brand-orange" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-brand-orange" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-brand-orange" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-brand-orange" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-brand-orange" />;
      default: return <Palette className="w-6 h-6 text-brand-orange" />;
    }
  };

  return (
    <div className="bg-neutral-dark min-h-screen text-gray-100 font-sans selection:bg-brand-orange/30 selection:text-white">
      
      {/* Dynamic Header / Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-dark/85 backdrop-blur-md border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo Brand exactly configured */}
          <div className="flex items-center">
            <ProjectNeverlandLogo className="h-7 sm:h-8.5 w-auto" iconOnly />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              type="button" 
              onClick={() => scrollToSection(portfolioRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Featured Works
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection(servicesRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Services
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection(techStackRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Tech Stack
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection(faqRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Advisory FAQ
            </button>
          </nav>

          {/* Consultation CTA Header replaced with Behance and Linktree */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://www.behance.net/panbuenavente"
              target="_blank"
              rel="noopener noreferrer"
              title="Behance"
              className="w-9 h-9 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
            >
              <BehanceIcon className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://linktr.ee/panbuenavente"
              target="_blank"
              rel="noopener noreferrer"
              title="Linktree"
              className="w-9 h-9 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
            >
              <LinktreeIcon className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0D0D11] border-b border-neutral-border px-4 py-6 space-y-4"
            >
              <button 
                type="button" 
                onClick={() => scrollToSection(portfolioRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Featured Works
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection(servicesRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Services
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection(techStackRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Tech Stack
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection(faqRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Advisory FAQ
              </button>
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://www.behance.net/panbuenavente"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-zinc-950 border border-neutral-border flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-colors"
                >
                  <BehanceIcon className="w-5 h-5 mr-2" />
                  <span className="text-xs font-bold">Behance</span>
                </a>
                <a 
                  href="https://linktr.ee/panbuenavente"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-zinc-950 border border-neutral-border flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-colors"
                >
                  <LinktreeIcon className="w-5 h-5 mr-2" />
                  <span className="text-xs font-bold">Linktree</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Header Padding */}
      <div className="h-16 sm:h-20" />

      {/* Replaced Carousel with high-fidelity Dribbble Podcast Hero */}
      <PodcastHero 
        onOpenBooking={handleOpenBookingDefault} 
        onExploreServices={() => scrollToSection(offeringRef)} 
      />

      {/* Slanted continuous services ticker tape ribbon as requested */}
      <TickerRibbon />

      {/* Services Section */}
      <section className="py-24 px-4 bg-[#0A0A0C]" ref={servicesRef}>
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Custom graphics digital business solution offering section */}
          <InteractivePlatformSection />

          {/* Capabilities & Star-Rating Platform Section displaying high fidelity mobile bento grid */}
          <div ref={offeringRef}>
            <BentoServicesSection />
          </div>
        </div>
      </section>

      {/* Creative Showcase Grid replacing automated scheduling session as requested */}
      <div ref={techStackRef}>
        <CreativeShowcaseGrid />
      </div>

      {/* Bespoke Gallery masonry section styled in a modern and trendy style */}
      <div ref={portfolioRef}>
        <BespokePortfolioMasonry />
      </div>

      {/* Advisory FAQ list (Accordion structured) */}
      <section className="py-24 px-4 bg-neutral-dark border-t border-neutral-border" ref={faqRef}>
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-brand-orange font-mono text-xs tracking-widest font-semibold uppercase block mb-2">
              Knowledge Repository
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Our workflows clarified. Transparency at every step of your digital platform engineering journey.
            </p>
          </div>

          <div className="space-y-4">
            {mockFaqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div 
                  key={faq.question}
                  className="bg-neutral-card border border-neutral-border rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white hover:text-brand-orange transition-colors"
                  >
                    <span className="font-display font-medium text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180 text-brand-orange' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed border-t border-neutral-border/40 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact footer */}
      <footer className="bg-[#050507] border-t border-neutral-border py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <ProjectNeverlandLogo className="h-7 sm:h-8.5 w-auto" iconOnly />
            </div>
            <p className="text-zinc-500 text-xs font-light max-w-sm">
              Premium Digital Advisory &amp; Software Production Hub. Building robust custom platforms, web applications, integrations, and marketing assets for modern ventures.
            </p>
          </div>

          {/* Quick links to scroll */}
          <div className="flex justify-center gap-6 text-xs text-zinc-500">
            <button type="button" onClick={() => scrollToSection(portfolioRef)} className="hover:text-brand-orange transition-colors">Featured Works</button>
            <button type="button" onClick={() => scrollToSection(servicesRef)} className="hover:text-brand-orange transition-colors">Services</button>
            <button type="button" onClick={() => scrollToSection(techStackRef)} className="hover:text-brand-orange transition-colors">Tech Stack</button>
            <button type="button" onClick={() => scrollToSection(faqRef)} className="hover:text-brand-orange transition-colors">FAQs</button>
          </div>

          <div className="space-y-2 md:text-right">
            <span className="text-[10px] font-mono uppercase text-zinc-500 block">Direct Inquiries</span>
            <p className="text-white text-sm font-semibold selection:text-brand-orange mb-3">ptrbuenavente@gmail.com</p>
            
            {/* Social Media Connect Bar */}
            <div className="flex items-center justify-center md:justify-end gap-2.5 mt-3">
              <a
                href="https://wa.me/639104011905"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="viber://chat?number=%2B639104011905"
                target="_blank"
                rel="noopener noreferrer"
                title="Viber"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.behance.net/panbuenavente"
                target="_blank"
                rel="noopener noreferrer"
                title="Behance"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <BehanceIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linktr.ee/panbuenavente"
                target="_blank"
                rel="noopener noreferrer"
                title="Linktree"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <LinktreeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/pan.buenavente/"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.46-.63.87-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/pan.buenavente/"
                target="_blank"
                rel="noopener noreferrer"
                title="Messenger"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.915 1.458 5.518 3.738 7.177V22l3.414-1.875A11.751 11.751 0 0012 20.516c5.523 0 10-4.146 10-9.258S17.523 2 12 2zm1.092 12.355l-2.614-2.79-5.1 2.79 5.6-5.945 2.614 2.79 5.1-2.79-5.6 5.945z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-neutral-border/40 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[11px] text-zinc-600">
            &copy; {new Date().getFullYear()} Project Neverland. All Rights Reserved. Created under safe containerized workspaces.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-zinc-600 font-mono">
            <span>TERMS &bull; PRIVACY &bull; SECURED CODES</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

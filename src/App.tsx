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
  Sparkles, 
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

export default function App() {
  const [focusTopic, setFocusTopic] = useState<string>('');
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // References for scrolling
  const bookingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleSelectProjectToConsult = (topic: string) => {
    setFocusTopic(topic);
    scrollToSection(bookingRef);
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
            <ProjectNeverlandLogo className="h-10 sm:h-12 w-auto" iconOnly />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              type="button" 
              onClick={() => scrollToSection(servicesRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Services
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection(faqRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Advisory FAQ
            </button>
            <button 
              type="button" 
              onClick={() => scrollToSection(bookingRef)}
              className="text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              Consulting Center
            </button>
          </nav>

          {/* Consultation CTA Header */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/639104011905"
              target="_blank"
              rel="noopener noreferrer"
              id="nav_book_button"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-5 py-2.5 rounded-xl block text-center transition-all hover:shadow-lg hover:shadow-brand-orange/15 shadow-md active:scale-95"
            >
              Initiate Strategy Session
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
                onClick={() => scrollToSection(servicesRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Services
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection(faqRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Advisory FAQ
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection(bookingRef)}
                className="block text-left w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors py-1"
              >
                Consulting Center
              </button>
              <a 
                href="https://wa.me/639104011905"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-3 rounded-xl block transition-all"
              >
                Initiate Strategy Session
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Header Padding */}
      <div className="h-16 sm:h-20" />

      {/* Replaced Carousel with high-fidelity Dribbble Podcast Hero */}
      <PodcastHero 
        onOpenBooking={handleOpenBookingDefault} 
        onExploreServices={() => scrollToSection(servicesRef)} 
      />

      {/* Slanted continuous services ticker tape ribbon as requested */}
      <TickerRibbon />

      {/* Services Section */}
      <section className="py-24 px-4 bg-[#0A0A0C]" ref={servicesRef}>
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Custom graphics digital business solution offering section */}
          <InteractivePlatformSection />

          {/* Capabilities & Star-Rating Platform Section displaying high fidelity mobile bento grid */}
          <BentoServicesSection />
        </div>
      </section>

      {/* Creative Showcase Grid replacing automated scheduling session as requested */}
      <div ref={bookingRef}>
        <CreativeShowcaseGrid />
      </div>

      {/* Bespoke Gallery masonry section styled in a modern and trendy style */}
      <BespokePortfolioMasonry />

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
              <ProjectNeverlandLogo className="h-10 sm:h-12 w-auto" iconOnly />
            </div>
            <p className="text-zinc-500 text-xs font-light max-w-sm">
              Premium Digital Advisory &amp; Software Production Hub. Building robust custom platforms, web applications, integrations, and marketing assets for modern ventures.
            </p>
          </div>

          {/* Quick links to scroll */}
          <div className="flex justify-center gap-6 text-xs text-zinc-500">
            <button type="button" onClick={() => scrollToSection(servicesRef)} className="hover:text-brand-orange transition-colors">Services</button>
            <button type="button" onClick={() => scrollToSection(faqRef)} className="hover:text-brand-orange transition-colors">FAQs</button>
            <button type="button" onClick={() => scrollToSection(bookingRef)} className="hover:text-brand-orange transition-colors">Booking Engine</button>
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
                href="https://linktr.ee/panbuenavente"
                target="_blank"
                rel="noopener noreferrer"
                title="Linktree"
                className="w-8 h-8 rounded-full bg-zinc-950 border border-neutral-border/45 hover:border-brand-orange/60 flex items-center justify-center text-zinc-400 hover:text-brand-orange transition-all duration-300"
              >
                <Link className="w-4 h-4" />
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

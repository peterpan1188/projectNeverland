import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { mockServices } from '../data';
import { Booking, TimeSlot } from '../types';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Building, 
  Ticket, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  DollarSign, 
  Computer, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Megaphone, 
  Palette,
  Briefcase
} from 'lucide-react';

interface BookingSchedulerProps {
  initialFocusTopic?: string;
  onBookingCreated: () => void;
}

const DAYS_TO_SHOW = 14;
const DEFAULT_TIME_SLOTS: string[] = [
  '09:00 AM',
  '10:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM'
];

export default function BookingScheduler({ initialFocusTopic, onBookingCreated }: BookingSchedulerProps) {
  // Wizard States
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  
  // Custom interactive budget scope estimators
  const [includeAuth, setIncludeAuth] = useState(false);
  const [includeStripe, setIncludeStripe] = useState(false);
  const [includeSeoPackage, setIncludeSeoPackage] = useState(false);
  const [includeBrandingLogo, setIncludeBrandingLogo] = useState(false);
  const [isConsultingOnly, setIsConsultingOnly] = useState(false);

  // Form States
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientCompany, setClientCompany] = useState<string>('');
  const [businessStage, setBusinessStage] = useState<'startup' | 'enterprise' | 'growth' | 'idea'>('startup');
  const [struggleNotes, setStruggleNotes] = useState<string>('');

  const [bookingTicket, setBookingTicket] = useState<Booking | null>(null);

  // Map icons to strings
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-brand-orange" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-brand-orange" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-brand-orange" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-brand-orange" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-brand-orange" />;
      default: return <Palette className="w-5 h-5 text-brand-orange" />;
    }
  };

  // Pre-fill service topic if it changes from parent clicks
  useEffect(() => {
    if (initialFocusTopic) {
      // Try to find the closest service ID
      const matchingService = mockServices.find(s => 
        initialFocusTopic.toLowerCase().includes(s.title.toLowerCase()) ||
        s.title.toLowerCase().includes(initialFocusTopic.toLowerCase()) ||
        initialFocusTopic.toLowerCase().includes(s.id.toLowerCase())
      );
      if (matchingService) {
        setSelectedService(matchingService.id);
      } else {
        setSelectedService(mockServices[0].id);
      }
      setStep(1); // Jump back to step 1 to confirm selection
      
      // Auto pre-fill struggle notes with the topic
      setStruggleNotes(`I would like to explore specialized consulting related to: ${initialFocusTopic}`);
    }
  }, [initialFocusTopic]);

  // Generate available dates from 2026-05-21
  const generateDatesList = () => {
    const list = [];
    const baseDate = new Date(); // Mock relative to current date 
    
    for (let i = 1; i <= DAYS_TO_SHOW; i++) {
      const future = new Date(baseDate);
      future.setDate(baseDate.getDate() + i);
      
      // Skip Sundays
      if (future.getDay() === 0) continue;

      const yyyy = future.getFullYear();
      const mm = String(future.getMonth() + 1).padStart(2, '0');
      const dd = String(future.getDate()).padStart(2, '0');
      const dateString = `${yyyy}-${mm}-${dd}`;
      const weekday = future.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = future.getDate();
      const monthLabel = future.toLocaleDateString('en-US', { month: 'short' });

      list.push({
        dateString,
        weekday,
        dayNum,
        monthLabel
      });
    }
    return list;
  };

  const datesList = generateDatesList();

  // Dynamic budget quote calculator based on inputs
  const calculateEstimatedQuote = (): number => {
    if (isConsultingOnly) {
      return 150; // Flat intro/consulting review fee
    }

    let baseQuote = 1500; // Base MVP / Integration development cost
    if (selectedService === 'web-dev') baseQuote = 2500;
    if (selectedService === 'mvp-creation') baseQuote = 4000;
    if (selectedService === 'seo-marketing') baseQuote = 1200;
    if (selectedService === 'social-media') baseQuote = 800;
    if (selectedService === 'multimedia') baseQuote = 1000;

    if (includeAuth) baseQuote += 450;
    if (includeStripe) baseQuote += 600;
    if (includeSeoPackage) baseQuote += 500;
    if (includeBrandingLogo) baseQuote += 350;

    return baseQuote;
  };

  const finalQuote = calculateEstimatedQuote();

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedSlot || !clientName || !clientEmail) {
      return;
    }

    const matchedService = mockServices.find(s => s.id === selectedService);
    const serviceTitle = matchedService ? matchedService.title : 'Specialized Advisory Session';

    const randomId = Math.random().toString(36).substring(2, 9);
    const meetingCode = `meet.google.com/pjn-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}`;

    const newBooking: Booking = {
      id: randomId,
      serviceId: selectedService,
      serviceTitle,
      date: selectedDate,
      timeSlot: selectedSlot,
      clientName,
      clientEmail,
      clientCompany: clientCompany || 'Independent Founder',
      businessStage,
      struggleNotes: struggleNotes || 'Complimentary session assessment requested.',
      estimatedQuote: finalQuote,
      status: 'confirmed',
      meetingLink: meetingCode,
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const currentBookings = JSON.parse(localStorage.getItem('neverland_bookings') || '[]');
    localStorage.setItem('neverland_bookings', JSON.stringify([newBooking, ...currentBookings]));

    setBookingTicket(newBooking);
    setStep(4); // Ticket phase
    onBookingCreated();
  };

  const resetWizard = () => {
    setStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedSlot('');
    setIncludeAuth(false);
    setIncludeStripe(false);
    setIncludeSeoPackage(false);
    setIncludeBrandingLogo(false);
    setIsConsultingOnly(false);
    setClientName('');
    setClientEmail('');
    setClientCompany('');
    setBusinessStage('startup');
    setStruggleNotes('');
    setBookingTicket(null);
  };

  return (
    <section className="py-24 px-4 bg-neutral-dark border-t border-neutral-border" id="booking">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-mono text-xs tracking-widest font-semibold uppercase block mb-2">
            Automated Booking Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
            Initialize Your Strategy Session
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Review detailed custom budgets live, pick your preferred time slot, and instantly synchronize direct consulting calls.
          </p>
        </div>

        {/* Wizard Widget Container */}
        <div className="bg-neutral-card rounded-3xl border border-neutral-border shadow-2xl overflow-hidden min-h-[500px] flex flex-col md:flex-row relative">
          
          {/* Left Panel Sidebar - Progress Indicators */}
          <div className="md:w-1/3 bg-[#101014] p-8 border-b md:border-b-0 md:border-r border-neutral-border flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-5 h-5 text-brand-orange" />
                <span className="font-display font-bold text-lg tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  NEVERLAND
                </span>
              </div>

              {/* Step Steps Tracker */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                    step > 1 ? 'bg-brand-orange text-white' : step === 1 ? 'bg-zinc-800 text-brand-orange ring-1 ring-brand-orange/40' : 'bg-zinc-90 w/40 text-gray-600'
                  }`}>
                    1
                  </div>
                  <div>
                    <h4 className={`text-xs uppercase font-semibold font-display ${step === 1 ? 'text-white' : 'text-gray-500'}`}>Scope & Services</h4>
                    <p className="text-[10px] text-gray-500 font-sans">Choose options & interactive packages</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 col-start-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                    step > 2 ? 'bg-brand-orange text-white' : step === 2 ? 'bg-zinc-800 text-brand-orange ring-1 ring-brand-orange/40' : 'bg-zinc-900/40 text-gray-600'
                  }`}>
                    2
                  </div>
                  <div>
                    <h4 className={`text-xs uppercase font-semibold font-display ${step === 2 ? 'text-white' : 'text-gray-500'}`}>Availability</h4>
                    <p className="text-[10px] text-gray-500 font-sans">Select date & available hour slots</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 col-start-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                    step > 3 ? 'bg-brand-orange text-white' : step === 3 ? 'bg-zinc-800 text-brand-orange ring-1 ring-brand-orange/40' : 'bg-zinc-900/40 text-gray-600'
                  }`}>
                    3
                  </div>
                  <div>
                    <h4 className={`text-xs uppercase font-semibold font-display ${step === 3 ? 'text-white' : 'text-gray-500'}`}>Qualifiers</h4>
                    <p className="text-[10px] text-gray-500 font-sans">Submit business parameters & issues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Budget Indicator - showing craft elements */}
            {step < 4 && (
              <div className="mt-8 pt-6 border-t border-neutral-border/60">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Estimated Budget Projector</span>
                <div className="flex items-baseline gap-1 text-white">
                  {isConsultingOnly ? (
                    <>
                      <span className="text-2xl sm:text-3xl font-display font-medium text-brand-orange">$150</span>
                      <span className="text-xs text-gray-500">flat fee</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl sm:text-3xl font-display font-medium text-brand-orange">${finalQuote}</span>
                      <span className="text-xs text-gray-500">est. base</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] text-gray-400 mt-2 font-light">
                  {isConsultingOnly 
                    ? '1-on-1 strategic diagnostic session (60 mins)' 
                    : 'Tailored architecture blueprint with implementation specs.'
                  }
                </p>
              </div>
            )}
          </div>

          {/* Right Panel Body - Content Steps */}
          <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Services Selection & Scope Estimation */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold font-display text-white mb-1">Select Practice Area</h3>
                    <p className="text-xs text-gray-400">Choose custom specs or standard strategy session</p>
                  </div>

                  {/* Pricing Switch: Custom Project Dev vs. Diagnostic Strategy Review Only */}
                  <div className="grid grid-cols-2 gap-3 p-1 bg-neutral-dark rounded-xl border border-neutral-border">
                    <button
                      type="button"
                      onClick={() => setIsConsultingOnly(false)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                        !isConsultingOnly ? 'bg-zinc-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      Project Architecture (+Dev Scope)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsConsultingOnly(true)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                        isConsultingOnly ? 'bg-zinc-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      60-Min Interactive Strategy Session
                    </button>
                  </div>

                  {/* Grid Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mockServices.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedService === service.id 
                            ? 'bg-brand-orange/5 border-brand-orange text-white' 
                            : 'bg-neutral-dark border-neutral-border hover:border-zinc-800 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {getServiceIcon(service.icon)}
                          <span className="font-display font-medium text-xs sm:text-sm">{service.title}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 line-clamp-2 font-sans font-light">
                          {service.tagline}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Interactive estimators only visible when full development chosen */}
                  {!isConsultingOnly && selectedService && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-neutral-border/50 pt-4"
                    >
                      <h4 className="text-xs font-semibold text-white mb-3 tracking-wide">
                        Add Customized Project Add-ons (Budget Projector)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="flex items-center gap-3 p-3 bg-neutral-dark rounded-xl border border-neutral-border cursor-pointer hover:border-zinc-800 transition-colors">
                          <input 
                            type="checkbox" 
                            checked={includeAuth} 
                            onChange={(e) => setIncludeAuth(e.target.checked)}
                            className="w-4 h-4 accent-brand-orange bg-zinc-800 text-brand-orange border-neutral-border rounded"
                          />
                          <div>
                            <span className="text-xs font-semibold text-white block">Secure Multi-User Auth (+$450)</span>
                            <span className="text-[10px] text-gray-500 block">Personalized database rules/roles</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 bg-neutral-dark rounded-xl border border-neutral-border cursor-pointer hover:border-zinc-800 transition-colors">
                          <input 
                            type="checkbox" 
                            checked={includeStripe} 
                            onChange={(e) => setIncludeStripe(e.target.checked)}
                            className="w-4 h-4 accent-brand-orange"
                          />
                          <div>
                            <span className="text-xs font-semibold text-white block">Payments Integration (+$600)</span>
                            <span className="text-[10px] text-gray-500 block">Stripe onboarding & SaaS cycles</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 bg-neutral-dark rounded-xl border border-neutral-border cursor-pointer hover:border-zinc-800 transition-colors">
                          <input 
                            type="checkbox" 
                            checked={includeSeoPackage} 
                            onChange={(e) => setIncludeSeoPackage(e.target.checked)}
                            className="w-4 h-4 accent-brand-orange"
                          />
                          <div>
                            <span className="text-xs font-semibold text-white block">SEO Dominance Package (+$500)</span>
                            <span className="text-[10px] text-gray-500 block">Schema setup, performance, metadata</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 bg-neutral-dark rounded-xl border border-neutral-border cursor-pointer hover:border-zinc-800 transition-colors">
                          <input 
                            type="checkbox" 
                            checked={includeBrandingLogo} 
                            onChange={(e) => setIncludeBrandingLogo(e.target.checked)}
                            className="w-4 h-4 accent-brand-orange"
                          />
                          <div>
                            <span className="text-xs font-semibold text-white block">Full Brandkit Vectors (+$350)</span>
                            <span className="text-[10px] text-gray-500 block">High res customizable formats & styles</span>
                          </div>
                        </label>
                      </div>
                    </motion.div>
                  )}

                  {/* Actions footer */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      disabled={!selectedService}
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-xl text-xs font-semibold font-sans ml-auto transition-all disabled:opacity-50 active:scale-95 disabled:pointer-events-none"
                    >
                      <span>Choose Available Date</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date Grid & Availability */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold font-display text-white mb-1">Select Available Date</h3>
                    <p className="text-xs text-gray-400">Pick any active date in the next two weeks (Mon - Sat)</p>
                  </div>

                  {/* Beautiful customized Calendar Grid */}
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {datesList.map((dt) => {
                      const isSelected = selectedDate === dt.dateString;
                      return (
                        <button
                          key={dt.dateString}
                          type="button"
                          onClick={() => {
                            setSelectedDate(dt.dateString);
                            setSelectedSlot(''); // Reset slot on date change
                          }}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                            isSelected 
                              ? 'bg-brand-orange border-brand-orange text-white' 
                              : 'bg-neutral-dark border-neutral-border hover:border-zinc-800 text-gray-300'
                          }`}
                        >
                          <span className={`text-[10px] uppercase font-mono tracking-widest ${isSelected ? 'text-white' : 'text-zinc-500'}`}>
                            {dt.weekday}
                          </span>
                          <span className="text-lg font-bold font-display leading-[1]">
                            {dt.dayNum}
                          </span>
                          <span className="text-[10px] font-sans">
                            {dt.monthLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedDate && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <h4 className="text-xs font-semibold text-white tracking-wide">
                        Available Time Slots on {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {DEFAULT_TIME_SLOTS.map((slot) => {
                          const isSlotSelected = selectedSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`py-2 px-4 rounded-xl text-xs font-mono font-medium transition-all ${
                                isSlotSelected 
                                  ? 'bg-brand-orange/20 border-brand-orange text-brand-orange ring-1 ring-brand-orange' 
                                  : 'bg-neutral-dark border-neutral-border hover:border-zinc-800 text-gray-400'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{slot}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Actions Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-border/60">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to services</span>
                    </button>

                    <button
                      type="button"
                      disabled={!selectedDate || !selectedSlot}
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-50 active:scale-95 disabled:pointer-events-none"
                    >
                      <span>Fill Qualitative Forms</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Qualifier Form */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold font-display text-white mb-1">Interactive Qualifier Form</h3>
                    <p className="text-xs text-gray-400">Please supply context so we arrive fully researched for the review.</p>
                  </div>

                  <form onSubmit={handleCreateBooking} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Client Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="client_name" className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider flex items-center gap-1">
                        <User className="w-3 h-3 text-zinc-500" />
                        Full Named Organizer
                      </label>
                      <input
                        id="client_name"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Sebastian Cruz"
                        className="w-full bg-neutral-dark border border-neutral-border rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    {/* Client Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="client_email" className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider flex items-center gap-1">
                        <Mail className="w-3 h-3 text-zinc-500" />
                        Corporate Email address
                      </label>
                      <input
                        id="client_email"
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-neutral-dark border border-neutral-border rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="client_company" className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider flex items-center gap-1">
                        <Building className="w-3 h-3 text-zinc-500" />
                        Company or Startup Name (Optional)
                      </label>
                      <input
                        id="client_company"
                        type="text"
                        value={clientCompany}
                        onChange={(e) => setClientCompany(e.target.value)}
                        placeholder="e.g. Neverland Labs"
                        className="w-full bg-neutral-dark border border-neutral-border rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    {/* Stage selector */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider flex items-center gap-1">
                        <Computer className="w-3 h-3 text-zinc-500" />
                        Current Corporate Entity Stage
                      </label>
                      <select
                        value={businessStage}
                        onChange={(e: any) => setBusinessStage(e.target.value)}
                        className="w-full bg-neutral-dark border border-neutral-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                      >
                        <option value="idea">Early Ideation Startup (Pre-seed)</option>
                        <option value="startup">Active Growth Startup (Seed / Series-A)</option>
                        <option value="growth">Established Business (Vibrant Scaling)</option>
                        <option value="enterprise">Multi-tenant Corporate / Enterprise</option>
                      </select>
                    </div>

                    {/* Struggle notes / custom topic */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label htmlFor="struggle_notes" className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                        Core roadblock or system features to address
                      </label>
                      <textarea
                        id="struggle_notes"
                        rows={3}
                        value={struggleNotes}
                        onChange={(e) => setStruggleNotes(e.target.value)}
                        placeholder="Describe system integrations needed, conversion issues, user flows, tech stack parameters or general goals..."
                        className="w-full bg-neutral-dark border border-neutral-border rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange resize-none"
                      />
                    </div>

                    {/* Agreement Checkmark */}
                    <div className="sm:col-span-2 flex items-center gap-2 pt-1">
                      <ShieldCheck className="w-4 h-4 text-brand-orange" />
                      <span className="text-[10px] text-zinc-500">
                        This registers an instant sync token. Project Neverland holds absolute confidentiality.
                      </span>
                    </div>

                    {/* Action buttons inside form */}
                    <div className="sm:col-span-2 flex justify-between items-center pt-4 border-t border-neutral-border/60">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-medium"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Reschedule slots</span>
                      </button>

                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-xl text-xs font-semibold transition-all shadow-lg shadow-brand-orange/15 hover:shadow-brand-orange/30 active:scale-95"
                      >
                        <Ticket className="w-4 h-4" />
                        <span>Generate Secured Ticket</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 4: Digital Meeting Ticket */}
              {step === 4 && bookingTicket && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold font-display text-white mb-1">Session Synced Successfully!</h3>
                    <p className="text-zinc-400 text-xs">A calendar schedule block has been provisioned under ID key #{bookingTicket.id}</p>
                  </div>

                  {/* Digital Boarding Ticket UI */}
                  <div className="max-w-md mx-auto bg-neutral-dark/80 border border-neutral-border rounded-2xl overflow-hidden shadow-2xl relative text-left">
                    {/* Ticket tear edge line style */}
                    <div className="absolute top-[88px] left-0 -translate-x-[6px] w-3 h-3 rounded-full bg-neutral-card border-r border-neutral-border" />
                    <div className="absolute top-[88px] right-0 translate-x-[6px] w-3 h-3 rounded-full bg-neutral-card border-l border-neutral-border" />

                    {/* Top half */}
                    <div className="p-4 sm:p-5 border-b border-dashed border-neutral-border/80">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-brand-orange font-mono font-bold tracking-widest uppercase">
                          Project Neverland Ticket
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          STATUS: CONFIRMED
                        </span>
                      </div>
                      <h4 className="text-sm font-display font-medium text-white truncate">
                        {bookingTicket.serviceTitle}
                      </h4>
                    </div>

                    {/* Bottom half metrics */}
                    <div className="p-4 sm:p-5 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">Scheduled Date</span>
                        <span className="text-xs text-white block truncate">
                          {new Date(bookingTicket.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">Meeting Hour</span>
                        <span className="text-xs text-white block">
                          {bookingTicket.timeSlot}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">Main Sync Host</span>
                        <span className="text-xs text-white block truncate">
                          ptrbuenavente@gmail.com
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider block">Corporate Advisor</span>
                        <span className="text-xs text-white block text-brand-orange font-mono truncate">
                          Project Neverland
                        </span>
                      </div>

                      <div className="col-span-2 pt-2 border-t border-neutral-border/40">
                        <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider block mb-1">Google Meet Link</span>
                        <div className="flex items-center justify-between gap-2 p-2 bg-neutral-card rounded-lg border border-neutral-border select-all">
                          <span className="text-xs font-mono text-zinc-300 overflow-x-auto truncate">
                            {bookingTicket.meetingLink}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-500 max-w-sm mx-auto">
                    Note: Complete project parameters were submitted safely. Check your local tracker console panel to review or adjust the ticket parameters dynamically.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={resetWizard}
                      className="inline-flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-5 rounded-lg text-xs transition-all active:scale-95"
                    >
                      Book Another Advisory Session
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

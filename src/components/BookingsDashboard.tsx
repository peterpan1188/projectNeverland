import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../types';
import { Calendar, Clock, Trash2, Video, SlidersHorizontal, Layers, CheckCircle } from 'lucide-react';

interface BookingsDashboardProps {
  refreshTrigger: number;
  onSelectBookingService: (serviceName: string) => void;
}

export default function BookingsDashboard({ refreshTrigger, onSelectBookingService }: BookingsDashboardProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const loadBookings = () => {
    const list = JSON.parse(localStorage.getItem('neverland_bookings') || '[]');
    setBookings(list);
  };

  useEffect(() => {
    loadBookings();
  }, [refreshTrigger]);

  const handleDelete = (id: string) => {
    const current = JSON.parse(localStorage.getItem('neverland_bookings') || '[]');
    const filtered = current.filter((b: Booking) => b.id !== id);
    localStorage.setItem('neverland_bookings', JSON.stringify(filtered));
    loadBookings();
  };

  // Seed sample appointment to immediately test out the capabilities!
  const seedSample = () => {
    const sample: Booking = {
      id: "demo-99",
      serviceId: "web-dev",
      serviceTitle: "Web Development & Digital Platforms",
      date: "2026-05-24",
      timeSlot: "10:30 AM",
      clientName: "PTR Buenavente",
      clientEmail: "ptrbuenavente@gmail.com",
      clientCompany: "Neverland Founders Studio",
      businessStage: "growth",
      struggleNotes: "Reviewing static performance on Vite, responsive sliders, and core web vitals optimization.",
      estimatedQuote: 3100,
      status: "confirmed",
      meetingLink: "meet.google.com/pjn-249-110",
      createdAt: new Date().toISOString()
    };
    
    const current = JSON.parse(localStorage.getItem('neverland_bookings') || '[]');
    // Only prepend if not already there
    if (!current.some((b: Booking) => b.id === "demo-99")) {
      localStorage.setItem('neverland_bookings', JSON.stringify([sample, ...current]));
      loadBookings();
    }
  };

  return (
    <div className="bg-neutral-card rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold font-display text-white">Your Client Consulting Hub</h3>
          <p className="text-xs text-gray-400">Manage scheduled appointments and active digital tickets in real-time.</p>
        </div>

        {/* Diagnostic seed CTA */}
        <button
          type="button"
          onClick={seedSample}
          className="text-xs bg-zinc-800/85 hover:bg-zinc-800 text-gray-300 border border-neutral-border py-2 px-3 rounded-xl transition-all font-mono hover:text-white"
        >
          ✨ Seed Sample Consultation
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        {bookings.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10 border border-dashed border-neutral-border rounded-2xl bg-neutral-dark/30"
          >
            <SlidersHorizontal className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h4 className="text-sm font-semibold text-zinc-300">No active sessions located</h4>
            <p className="text-[11px] text-zinc-500 max-w-xs mx-auto mt-1 mb-4">
              Your booked advisory consultations and estimations will render here instantly. Use the scheduler above to instantiate a session.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>ACTIVE SCHEDULES: {bookings.length} SESSION(S)</span>
            </div>

            {bookings.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-5 rounded-2xl bg-neutral-dark border border-neutral-border hover:border-zinc-800 transition-all grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    <span className="text-[10px] font-mono text-brand-orange uppercase font-bold">
                      {b.id === 'demo-99' ? 'DEMO SESSION' : `ID: PJN-${b.id}`}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">&bull; {b.clientCompany}</span>
                  </div>
                  
                  <h4 className="text-sm font-display font-semibold text-white mb-1 leading-snug">
                    {b.serviceTitle}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans line-clamp-1">
                    Roadblock: {b.struggleNotes}
                  </p>
                </div>

                {/* Calendar details */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{b.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{b.timeSlot}</span>
                  </div>
                </div>

                {/* Action controllers */}
                <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 border-neutral-border/50 pt-3 md:pt-0">
                  <div className="text-left md:text-right">
                    <span className="text-[9px] text-zinc-500 uppercase block">Est Budget</span>
                    <span className="text-xs font-mono font-bold text-white">${b.estimatedQuote}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`https://${b.meetingLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-brand-orange/10 hover:bg-brand-orange/20 border border-brand-orange/20 text-brand-orange rounded-xl transition-all"
                      title="Join Meeting Rooms"
                    >
                      <Video className="w-4 h-4" />
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => handleDelete(b.id)}
                      className="p-2 bg-red-950/25 hover:bg-red-950/50 border border-red-900/40 text-red-500 rounded-xl transition-all"
                      title="Cancel Booking"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

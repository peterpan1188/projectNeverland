import React from 'react';
import { motion } from 'motion/react';
import { 
  Map, 
  Compass, 
  Users, 
  DollarSign, 
  Radio, 
  Battery, 
  AlertTriangle, 
  Heart, 
  Vote, 
  Clock, 
  MapPin, 
  Plus, 
  HeartPulse, 
  Check, 
  ShieldAlert,
  Building2,
  FileText,
  Bookmark,
  ChevronRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';

interface MvpHighFiMockupsProps {
  projectId: string;
  primaryColor: string;
  secondaryColor: string;
}

export default function MvpHighFiMockups({ projectId, primaryColor, secondaryColor }: MvpHighFiMockupsProps) {
  
  // Custom screen content depending on project ID to ensure absolute realism and no generic placeholders
  const renderMockupScreens = () => {
    switch (projectId) {
      case 'travel-tayo':
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-6">
            
            {/* Screen 1: Discovery Hub */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen A: Regional Travel Discoverer</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                {/* iPhone Dynamic Island notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                {/* Sub UI Frame */}
                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Discover Cebu</span>
                        <h4 className="font-extrabold text-sm block">Let's Travel Tayo!</h4>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                        <Compass className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>

                    {/* Filter tabs */}
                    <div className="flex gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-white text-black">Bangka</span>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">RoRo</span>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">Jeepney</span>
                    </div>

                    {/* Featured route card */}
                    <div className="bg-[#111216] border border-zinc-900 rounded-xl p-3 space-y-2 mb-4">
                      <div className="relative h-24 rounded-lg overflow-hidden bg-zinc-900">
                        <img 
                          src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=400&q=80" 
                          alt="Palawan Travel" 
                          className="w-full h-full object-cover brightness-75"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-2 left-2 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">Active</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-zinc-100">Palawan Island Hop</h5>
                          <span className="text-emerald-400 font-mono font-bold text-[9px]">₱2,400/pax</span>
                        </div>
                        <p className="text-[9px] text-zinc-400 leading-tight">Decentralized ferry booking including local bangkas in Coron.</p>
                      </div>
                    </div>

                    {/* Small recommendation list */}
                    <span className="text-[9.5px] font-mono text-zinc-500 uppercase block mb-2 font-bold">Trending Group Itineraries</span>
                    <div className="space-y-2">
                      <div className="bg-zinc-900/60 border border-zinc-900 rounded-lg p-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono text-[9px]">01</div>
                          <div>
                            <h6 className="font-bold text-[10px]">Cebu South Canyoneering</h6>
                            <span className="text-[8.5px] text-zinc-500 block">By Maria, 4 members</span>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                      </div>
                    </div>
                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="text-emerald-400 font-bold flex flex-col items-center"><Compass className="w-4 h-4 mb-0.5" /><span>Explore</span></span>
                    <span className="flex flex-col items-center"><Map className="w-4 h-4 mb-0.5" /><span>Planner</span></span>
                    <span className="flex flex-col items-center"><Users className="w-4 h-4 mb-0.5" /><span>Circles</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Discover local island routes, budget calculations, and real community feedback.
              </p>
            </div>

            {/* Screen 2: Planner Canvas */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen B: Collaborative Budget Planner</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                {/* Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Cebu Adventure</span>
                        <h4 className="font-extrabold text-sm block">Group Itinerary</h4>
                      </div>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[9px] font-mono">Shared</span>
                    </div>

                    {/* Progress tracking bar */}
                    <div className="bg-zinc-900 border border-zinc-850 rounded-xl p-2.5 space-y-1.5">
                      <div className="flex justify-between items-center text-[9px]">
                        <span className="text-zinc-400">Total Group Budget</span>
                        <span className="font-bold text-orange-400">₱4,500 of ₱8,000</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '56.25%' }} />
                      </div>
                    </div>

                    {/* Itinerary steps */}
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase font-mono text-zinc-500 block font-bold">Planned Nodes</span>

                      {/* Item 1 */}
                      <div className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-2.5 flex items-start gap-2 relative">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h6 className="font-bold text-[10.5px]">Day 1: Ferry crossing to Cebu</h6>
                            <span className="text-[9px] font-mono text-zinc-400 font-bold">₱1,200</span>
                          </div>
                          <p className="text-[9px] text-zinc-400 block mt-0.5">Booking via regional island watercraft.</p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-2.5 flex items-start gap-2 relative">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h6 className="font-bold text-[10.5px]">Day 2: Canyoning & Lunch</h6>
                            <span className="text-[9px] font-mono text-zinc-400 font-bold">₱3,300</span>
                          </div>
                          <p className="text-[9px] text-zinc-400 block mt-0.5">Local guide fees at Kawasan Falls.</p>
                        </div>
                      </div>
                    </div>

                    {/* Collaborative cursor display */}
                    <div className="pt-2 flex items-center gap-1.5">
                      <div className="flex -space-x-1.5">
                        <div className="w-5 h-5 rounded-full bg-rose-500 text-[8px] font-bold flex items-center justify-center border border-zinc-950 shadow">M</div>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-[8px] font-bold flex items-center justify-center border border-zinc-950 shadow">J</div>
                        <div className="w-5 h-5 rounded-full bg-cyan-500 text-[8px] font-bold flex items-center justify-center border border-zinc-950 shadow">A</div>
                      </div>
                      <span className="text-[8.5px] font-mono text-zinc-500">3 companions are viewing live</span>
                    </div>
                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="flex flex-col items-center"><Compass className="w-4 h-4 mb-0.5" /><span>Explore</span></span>
                    <span className="text-emerald-400 font-bold flex flex-col items-center"><Map className="w-4 h-4 mb-0.5" /><span>Planner</span></span>
                    <span className="flex flex-col items-center"><Users className="w-4 h-4 mb-0.5" /><span>Circles</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Sync items collaboratively with friends. Changes are processed in seconds.
              </p>
            </div>

          </div>
        );
      case 'asan-kana':
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-6">
            
            {/* Screen 1: SOS Alarm */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen A: Primary Beacon System</span>
              <div className="w-[285px] h-[550px] bg-[#070709] rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Distress beacon context</span>
                        <h4 className="font-extrabold text-sm block font-display">S.O.S Emergency</h4>
                      </div>
                      <div className="flex items-center gap-1 font-mono text-[9px] text-[#FFAA2B] bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800">
                        <Battery className="w-3.5 h-3.5" />
                        <span>18%</span>
                      </div>
                    </div>

                    {/* Sub title details */}
                    <p className="text-[10.5px] text-zinc-400 font-light leading-relaxed mb-6">
                      Press and hold the trigger button for 3 seconds to broadcast coordinates to your safety circle nodes.
                    </p>

                    {/* Massive SOS Trigger Center */}
                    <div className="flex items-center justify-center py-10">
                      <div className="relative w-36 h-36 rounded-full bg-rose-600/10 border border-rose-500/20 flex items-center justify-center">
                        <div className="absolute inset-2 rounded-full bg-rose-600/10 opacity-60" />
                        <div className="absolute inset-4 rounded-full bg-rose-500 border border-rose-400 flex flex-col items-center justify-center shadow-lg shadow-rose-500/40">
                          <Radio className="w-8 h-8 text-white mb-1" />
                          <span className="text-xs font-black tracking-widest text-white uppercase">SEND SOS</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Geo location coordinates */}
                    <div className="bg-[#110D0F] border border-rose-950/40 rounded-xl p-3 flex justify-between items-center">
                      <div className="font-mono text-[9.5px]">
                        <span className="text-zinc-500 block uppercase">LAST_PING geocoordinates</span>
                        <span className="text-rose-400 font-bold select-all">11.3961° N, 120.7183° E</span>
                      </div>
                      <div className="text-right font-mono text-[8.5px] text-zinc-500">
                        <span>Accuracy: </span>
                        <span className="text-emerald-400 block font-semibold">&plusmn; 3 meters</span>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="text-rose-500 font-bold flex flex-col items-center"><Radio className="w-4 h-4 mb-0.5" /><span>Beacon</span></span>
                    <span className="flex flex-col items-center"><MapPin className="w-4 h-4 mb-0.5" /><span>Radar</span></span>
                    <span className="flex flex-col items-center"><Users className="w-4 h-4 mb-0.5" /><span>Family</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                High accuracy low-draw GPS, keeping you connected under typhoon grids shut-off.
              </p>
            </div>

            {/* Screen 2: Family Radar */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen B: Georadar Circle Hub</span>
              <div className="w-[285px] h-[550px] bg-[#070709] rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Geolocational Geofence</span>
                        <h4 className="font-extrabold text-sm block font-display">Circle Members</h4>
                      </div>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[8.5px] font-mono">Secure API</span>
                    </div>

                    {/* Georadar graphic representation mockup */}
                    <div className="bg-zinc-950 border border-zinc-900 rounded-2xl h-44 flex items-center justify-center relative overflow-hidden mb-4">
                      {/* Grid concentric rings */}
                      <div className="absolute w-36 h-36 rounded-full border border-zinc-900/60" />
                      <div className="absolute w-28 h-28 rounded-full border border-zinc-900/40" />
                      <div className="absolute w-16 h-16 rounded-full border border-zinc-900/20" />
                      <div className="absolute w-0.5 h-full border-l border-zinc-900/40 border-dashed" />
                      <div className="absolute h-0.5 w-full border-t border-zinc-900/40 border-dashed" />
                      
                      {/* Center active node pointer */}
                      <div className="absolute w-2 h-2 rounded-full bg-rose-500 flex items-center justify-center">
                        <div className="absolute w-4 h-4 rounded-full bg-rose-500/30" />
                      </div>

                      {/* Sister node */}
                      <div className="absolute top-10 right-12 flex flex-col items-center">
                        <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-[8px] font-extrabold text-[#FFAA2B] flex items-center justify-center">S</div>
                        <span className="text-[7.5px] font-mono text-zinc-400 mt-0.5">Sister: 120m</span>
                      </div>

                      {/* Mom node */}
                      <div className="absolute bottom-12 left-10 flex flex-col items-center">
                        <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-[8px] font-extrabold text-[#FFAA2B] flex items-center justify-center">M</div>
                        <span className="text-[7.5px] font-mono text-rose-400 mt-0.5">Mom: 3.5km</span>
                      </div>
                    </div>

                    {/* Connection list */}
                    <span className="text-[9px] uppercase font-mono text-zinc-500 block mb-2 font-bold">Node Telemetries</span>
                    <div className="space-y-2">
                      <div className="bg-[#111216] border border-zinc-900 rounded-xl p-2.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[10.5px] block">Sister (Active)</span>
                          <span className="text-[8.5px] font-mono text-zinc-500 block">Battery: 82% | GPS accuracy: 4m</span>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">SAFE</span>
                      </div>

                      <div className="bg-[#111216] border border-zinc-900 rounded-xl p-2.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[10.5px] block">Mother (Low Power)</span>
                          <span className="text-[8.5px] font-mono text-zinc-500 block">Battery: 12% | Signal: Weak cell</span>
                        </div>
                        <span className="text-rose-400 font-mono font-bold text-[9px] bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">OUTSIDE</span>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="flex flex-col items-center"><Radio className="w-4 h-4 mb-0.5" /><span>Beacon</span></span>
                    <span className="text-rose-500 font-bold flex flex-col items-center"><MapPin className="w-4 h-4 mb-0.5" /><span>Radar</span></span>
                    <span className="flex flex-col items-center"><Users className="w-4 h-4 mb-0.5" /><span>Family</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Encrypted multi-node compass mapping safety boundaries of matching cell devices.
              </p>
            </div>

          </div>
        );
      case 'letsspeakup':
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-6">
            
            {/* Screen 1: Citizen Feed */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen A: Citizens Incident Registry</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Civic engagement portal</span>
                        <h4 className="font-extrabold text-sm block font-display">LetsSpeakUp Info</h4>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                        <Vote className="w-4 h-4 text-indigo-400" />
                      </div>
                    </div>

                    {/* Quick navigation selectors */}
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-none">
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-white text-black shrink-0">Open Incidents</span>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0">In-Progress</span>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0">Resolved</span>
                    </div>

                    {/* Incident Card item */}
                    <div className="bg-[#111216] border border-zinc-900 rounded-xl p-3 space-y-3 mb-3">
                      <div className="relative h-24 rounded-lg overflow-hidden bg-zinc-900/60">
                        <img 
                          src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=400&q=80" 
                          alt="Broken Pole" 
                          className="w-full h-full object-cover brightness-75"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">INFRASTRUCTURE</span>
                        <span className="absolute bottom-2 right-2 bg-black/80 backdrop-blur border border-zinc-800 text-orange-400 font-mono text-[8.5px] px-2 py-0.5 rounded font-black">PENDING</span>
                      </div>
                      
                      <div className="space-y-1.5">
                        <h5 className="font-bold text-zinc-100 leading-tight">Damaged public road grid (Main Highway)</h5>
                        <p className="text-[9.5px] text-zinc-400 leading-normal">Huge pothole right after terminal nodes, blocking local transport routes.</p>
                        
                        <div className="flex items-center justify-between border-t border-zinc-900 pt-2 mt-1">
                          <span className="text-[8.5px] font-mono text-zinc-500">Mandaluyong, Brgy. San Jose</span>
                          <span className="font-bold font-mono text-[10px] text-indigo-400 tracking-wider flex items-center gap-1">
                            <Vote className="w-3.5 h-3.5 shrink-0" />
                            <span>82 upvotes</span>
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="text-indigo-400 font-bold flex flex-col items-center"><Vote className="w-4 h-4 mb-0.5" /><span>Feed</span></span>
                    <span className="flex flex-col items-center"><Plus className="w-4 h-4 mb-0.5" /><span>Report</span></span>
                    <span className="flex flex-col items-center"><Clock className="w-4 h-4 mb-0.5" /><span>Audit</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Securely log local incidents, upvote matching reports, and track repair tasks.
              </p>
            </div>

            {/* Screen 2: Incident Form */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen B: Geotag Report Wizard</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Geotag incident</span>
                        <h4 className="font-extrabold text-sm block font-display">Create Briefing</h4>
                      </div>
                      <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[8.5px] font-mono">EXIF active</span>
                    </div>

                    {/* Image uploader placeholder */}
                    <div className="bg-zinc-950 border border-zinc-900 rounded-xl py-6 flex flex-col items-center justify-center gap-1.5 text-center mb-4 cursor-pointer select-none hover:border-indigo-500/40 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <Plus className="w-4.5 h-4.5 text-indigo-400" />
                      </div>
                      <div>
                        <span className="font-bold text-[10.5px] block text-zinc-200">Upload Incident Photo</span>
                        <span className="text-[8.5px] text-zinc-500 font-mono uppercase block mt-0.5">JPEG, PNG with GPS metadata</span>
                      </div>
                    </div>

                    {/* Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-[9.5px] font-mono text-zinc-500 uppercase block mb-1">Issue Description</label>
                        <div className="bg-zinc-900 border border-zinc-900 rounded-lg p-2 flex text-[10px] text-zinc-400 min-h-[55px] font-sans font-light">
                          Our barangay water pipeline has been leaking...
                        </div>
                      </div>

                      <div>
                        <label className="text-[9.5px] font-mono text-zinc-500 uppercase block mb-1">Selected municipal node</label>
                        <div className="bg-zinc-900 border border-zinc-900 rounded-lg p-2.5 flex items-center justify-between text-[10px] text-zinc-300 font-mono">
                          <span>Brgy. San Jose Hall Desk</span>
                          <span className="text-zinc-500">Node: #304</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="flex flex-col items-center"><Vote className="w-4 h-4 mb-0.5" /><span>Feed</span></span>
                    <span className="text-indigo-400 font-bold flex flex-col items-center"><Plus className="w-4 h-4 mb-0.5" /><span>Report</span></span>
                    <span className="flex flex-col items-center"><Clock className="w-4 h-4 mb-0.5" /><span>Audit</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Auto extracts EXIF data to verify report location, avoiding fake/malicious listings.
              </p>
            </div>

          </div>
        );
      case 'ikalinga':
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-6">
            
            {/* Screen 1: Welfare list */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen A: Grassroots Welfare Grid</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Grassroots support</span>
                        <h4 className="font-extrabold text-sm block font-display">iKalinga Assistance</h4>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                        <HeartPulse className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>

                    {/* Quick welcome text */}
                    <p className="text-[10px] text-zinc-400 font-sans font-light leading-snug mb-4">
                      Connecting domestic low-income families direct with healthcare hubs & medical benefits.
                    </p>

                    {/* Program item select blocks */}
                    <span className="text-[9px] uppercase font-mono text-zinc-500 block mb-2 font-bold">Dispatched Welfare Programs</span>
                    
                    <div className="space-y-2.5">
                      {/* Program A */}
                      <div className="bg-[#111216]/90 border border-zinc-900 rounded-xl p-3 flex items-start gap-3 hover:border-emerald-500/35 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                          <Heart className="w-4 h-4" />
                        </div>
                        <div className="flex-1 select-text">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[11px] text-zinc-100">Pediatric Health Aid Checkup</span>
                            <span className="font-mono text-[8.5px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.2 rounded">4 slots left</span>
                          </div>
                          <p className="text-[9.5px] text-zinc-400 leading-tight mt-1">Free child checkups of regional health desks.</p>
                        </div>
                      </div>

                      {/* Program B */}
                      <div className="bg-[#111216]/90 border border-zinc-900 rounded-xl p-3 flex items-start gap-3 hover:border-emerald-500/35 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1 select-text">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[11px] text-zinc-100">Toddler Nutrition Milk Drops</span>
                            <span className="font-mono text-[8.5px] text-[#FFAA2B] font-bold bg-amber-500/10 border border-amber-500/20 px-1 py-0.2 rounded">12 sets left</span>
                          </div>
                          <p className="text-[9.5px] text-zinc-400 leading-tight mt-1">Brgy. nutrition milk drops targeting malnutrition.</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="text-emerald-400 font-bold flex flex-col items-center"><HeartPulse className="w-4 h-4 mb-0.5" /><span>Programs</span></span>
                    <span className="flex flex-col items-center"><Bookmark className="w-4 h-4 mb-0.5" /><span>Appointments</span></span>
                    <span className="flex flex-col items-center"><Clock className="w-4 h-4 mb-0.5" /><span>History</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Select assistance categories, check prerequisites on-screen and save slots.
              </p>
            </div>

            {/* Screen 2: Ticket */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen B: Social Verification Ticket</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Ticket verification</span>
                        <h4 className="font-extrabold text-sm block font-display">Active Booking</h4>
                      </div>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[8.5px] font-mono">Confirmed</span>
                    </div>

                    {/* Large verification ticket with dashed border and scissor cut aesthetics */}
                    <div className="bg-[#101311] border-2 border-emerald-950/60 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden text-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2.5 text-emerald-400">
                        <Check className="w-5.5 h-5.5" />
                      </div>
                      
                      <h5 className="font-bold text-zinc-100 text-[11.5px]">Pediatric Clinic Appointment</h5>
                      <span className="text-[9px] text-emerald-400 font-mono uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25 mt-1 block">TICKET #K-2081</span>

                      <div className="w-full text-left font-mono text-[8px] text-zinc-400 space-y-1.5 mt-4 pt-4 border-t border-dashed border-zinc-800">
                        <div className="flex justify-between"><span>DATETIME:</span><span className="font-bold text-zinc-200">JUNE 15, 9:00 AM</span></div>
                        <div className="flex justify-between"><span>LOCATION:</span><span className="font-bold text-zinc-200">BRGY. HEALTH CENTER</span></div>
                        <div className="flex justify-between"><span>PATIENT CODE:</span><span className="font-bold text-zinc-200">#P-8104</span></div>
                      </div>
                    </div>

                    {/* PREREQUISITE list */}
                    <span className="text-[9px] uppercase font-mono text-zinc-500 block mb-2 font-bold">Please Bring On-Site</span>
                    <div className="space-y-1.5 font-mono text-[8.5px] text-zinc-400">
                      <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /><span>Proof of Barangay Residencs</span></div>
                      <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /><span>Child Barangay Health card</span></div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="flex flex-col items-center"><HeartPulse className="w-4 h-4 mb-0.5" /><span>Programs</span></span>
                    <span className="text-emerald-400 font-bold flex flex-col items-center"><Bookmark className="w-4 h-4 mb-0.5" /><span>Appointments</span></span>
                    <span className="flex flex-col items-center"><Clock className="w-4 h-4 mb-0.5" /><span>History</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Generates a dynamic local verification code, ensuring zero queuing delays.
              </p>
            </div>

          </div>
        );
      case 'ka-barangay-io':
      default:
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-6">
            
            {/* Screen 1: Admin Dashboard Request List */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen A: Barangay Operational Desk</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Official Administrative Desk</span>
                        <h4 className="font-extrabold text-sm block font-display col-span-3">Ka-Barangay Hub</h4>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-teal-400" />
                      </div>
                    </div>

                    {/* Operational count boxes */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-zinc-900/80 border border-zinc-900 rounded-xl p-2.5 text-left">
                        <span className="text-[8px] font-mono text-zinc-500 block uppercase">Requests Queue</span>
                        <span className="text-base font-extrabold text-teal-400 font-mono font-black">42</span>
                      </div>
                      <div className="bg-zinc-900/80 border border-zinc-900 rounded-xl p-2.5 text-left">
                        <span className="text-[8px] font-mono text-zinc-500 block uppercase">Dispatched today</span>
                        <span className="text-base font-extrabold text-zinc-350 font-mono font-black">124</span>
                      </div>
                    </div>

                    {/* Active Queue lists */}
                    <span className="text-[9px] uppercase font-mono text-zinc-500 block mb-2 font-bold">Pending Clearance Requests</span>
                    
                    <div className="space-y-2">
                      {/* Req 1 */}
                      <div className="bg-[#111216]/90 border border-zinc-900 rounded-xl p-2.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[10.5px] block">Juan dela Cruz</span>
                          <span className="text-[8.5px] font-mono text-zinc-500 block">Clearance purpose: Employment</span>
                        </div>
                        <span className="text-amber-500 font-mono font-bold text-[8.5px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/25">QUEUED</span>
                      </div>

                      {/* Req 2 */}
                      <div className="bg-[#111216]/90 border border-zinc-900 rounded-xl p-2.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-[10.5px] block">Maria Lopez Sese</span>
                          <span className="text-[8.5px] font-mono text-zinc-500 block">Clearance purpose: Loan, valid ID</span>
                        </div>
                        <span className="text-teal-400 font-mono font-bold text-[8.5px] bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/25">READY</span>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="text-teal-405 font-bold flex flex-col items-center"><Building2 className="w-4 h-4 mb-0.5" /><span>Dashboard</span></span>
                    <span className="flex flex-col items-center"><FileText className="w-4 h-4 mb-0.5" /><span>Requests</span></span>
                    <span className="flex flex-col items-center"><UserCheck className="w-4 h-4 mb-0.5" /><span>Audits</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Monitor and verify citizen requests with clean digital lists and progress trackers.
              </p>
            </div>

            {/* Screen 2: Dynamic Certificate PDF Preview */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">Screen B: Instant Template Certificate</span>
              <div className="w-[285px] h-[550px] bg-zinc-950 rounded-[40px] border-[5px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4.5">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full ml-auto mr-3" />
                </div>

                <div className="flex-1 flex flex-col justify-between pt-4.5 text-left text-xs text-white">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-mono block">Certificate builder</span>
                        <h4 className="font-extrabold text-sm block font-display">PDF Output View</h4>
                      </div>
                      <span className="bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded text-[8.5px] font-mono">DRAFT PDF</span>
                    </div>

                    {/* Official certificate mockup styled in ivory paper aesthetic */}
                    <div className="bg-[#FAF8F5] border border-zinc-800 rounded-xl p-3 text-black text-[7px] font-serif space-y-2 select-text shadow-inner">
                      <div className="text-center font-bold font-sans flex flex-col items-center">
                        <span className="text-[6px] tracking-wide">REPUBLIC OF THE PHILIPPINES</span>
                        <span className="text-[7.5px] text-teal-800 tracking-wider">OFFICE OF THE BARANGAY CLEARANCE</span>
                        <div className="w-20 h-0.5 bg-black/60 my-1" />
                      </div>

                      <div className="space-y-1 mt-3">
                        <p className="font-sans font-bold text-[6px]">TO WHOM IT MAY CONCERN:</p>
                        <p className="leading-tight font-sans text-stone-700">
                          This is to certify that <strong className="text-black font-serif uppercase">MARIA LOPEZ SESE</strong>, of legal age, Filipino, is a resident of Barangay San Jose, Mandaluyong City, with good moral character...
                        </p>
                        <p className="leading-tight mt-1.5 font-sans font-bold text-stone-900">
                          CLEARANCE PURPOSE: <span className="font-mono text-[6px] font-normal underline">Employment and valid local ID application.</span>
                        </p>
                      </div>

                      <div className="pt-4 flex justify-between items-end font-sans text-[5.5px] text-stone-500">
                        <div>
                          <span>Issued: </span>
                          <span className="font-semibold text-black">June 02, 2026</span>
                        </div>
                        <div className="text-right flex flex-col items-center">
                          <span className="w-12 h-1 bg-zinc-400/20 block" /> {/* Hand written signature line */}
                          <span className="font-bold text-black mt-0.5">PETER BUENAVENTE</span>
                          <span>Barangay Chairman</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Simulated bottom navigation */}
                  <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[8.5px] font-mono text-zinc-500 select-none bg-zinc-950">
                    <span className="flex flex-col items-center"><Building2 className="w-4 h-4 mb-0.5" /><span>Dashboard</span></span>
                    <span className="text-teal-405 font-bold flex flex-col items-center"><FileText className="w-4 h-4 mb-0.5" /><span>Requests</span></span>
                    <span className="flex flex-col items-center"><UserCheck className="w-4 h-4 mb-0.5" /><span>Audits</span></span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-zinc-400 text-center max-w-[250px] font-light">
                Generates verified clearance certificates using official PDF margins automatically.
              </p>
            </div>

          </div>
        );
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Upper Grid metrics presentation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-5 text-left">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Visual Design Scale</span>
          <span className="text-white text-base sm:text-lg font-bold block select-none">19.5:9 High-Fidelity Views</span>
          <p className="text-zinc-500 text-xs font-light tracking-wide mt-1 leading-normal">
            Every view is custom mapped following the rigid container layout parameters defining Behance guidelines.
          </p>
        </div>

        <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-5 text-left">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Pixel Precision alignment</span>
          <span className="text-white text-base sm:text-lg font-bold block select-none">&plusmn; 0.5px Grid System</span>
          <p className="text-zinc-500 text-xs font-light tracking-wide mt-1 leading-normal">
            Drawn in tight modular coordinate ratios keeping the app look stunning across all mobile screens.
          </p>
        </div>

        <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-5 text-left sm:col-span-2 md:col-span-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Asset integration</span>
          <span className="text-white text-base sm:text-lg font-bold block select-none">Embedded Native Vectors</span>
          <p className="text-zinc-500 text-xs font-light tracking-wide mt-1 leading-normal">
            No lazy static screenshots. The presentation renders live styled inline elements for maximum clarity.
          </p>
        </div>
      </div>

      {/* Render the mockups in device containers */}
      <div className="py-6">
        {renderMockupScreens()}
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Tag, 
  Clock, 
  Target, 
  Cpu, 
  Award, 
  Info, 
  Layers, 
  Globe, 
  Activity, 
  Check, 
  AlertTriangle,
  ChevronRight,
  Send,
  MessageSquare,
  PenTool,
  Smartphone,
  Map,
  FileText,
  Zap,
  CheckCircle,
  HelpCircle,
  User,
  GitBranch,
  Layout,
  Sliders,
  Maximize2,
  Play,
  MousePointer
} from 'lucide-react';
import { MvpProject } from '../mvpData';
import MvpHighFiMockups from './MvpHighFiMockups';

interface MvpCaseStudyPageProps {
  project: MvpProject;
  onBack: () => void;
}

export default function MvpCaseStudyPage({ project, onBack }: MvpCaseStudyPageProps) {
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);
  const [wireframeHover, setWireframeHover] = useState<string | null>(null);
  const userEmail = "ptrbuenavente@gmail.com";

  // FigJam interactive drawing and simulation states
  const [selectedFigJamTool, setSelectedFigJamTool] = useState<'select' | 'sticky' | 'connector' | 'pen'>('select');
  const [simulationActive, setSimulationActive] = useState<boolean>(false);
  const [simulationProgress, setSimulationProgress] = useState<number>(-1);
  const [customStickyNotes, setCustomStickyNotes] = useState<{ id: string; text: string; color: string; x: number; y: number }[]>([]);
  const [simulationHistory, setSimulationHistory] = useState<string[]>([]);

  const primarySwatchColor = project.brandIdentity.colors[0]?.hex || '#FFAA2B';
  const secondarySwatchColor = project.brandIdentity.colors[1]?.hex || '#0EA5E9';

  // Dynamic visual layout data based on project ID to maximize authenticity
  const getProjectDesignAssets = (id: string) => {
    switch(id) {
      case 'travel-tayo':
        return {
          sketchNotes: [
            { text: "Budget-cap marker sliding dynamically", x: "12%", y: "45%" },
            { text: "Collaborative cursors with dynamic avatars", x: "65%", y: "20%" },
            { text: "Seamless Ferry schedules indexed offline", x: "42%", y: "78%" }
          ],
          wireframeItems: [
            { name: "Top Header Bar", status: "Active routing filters (Jeepney, Bus, Bangka options)", spec: "H: 56px, Fixed" },
            { name: "Iterative Planner Canvas", status: "Multi-user live synchronized list items", spec: "Flex-1, min-w: 320px" },
            { name: "Archipelago Map Grid", status: "Leaflet overlay with custom local sea coordinates", spec: "Aspect: 16/9, Cached" }
          ],
          sketchTitle: "Archipelago Route ideation",
          sketches: (
            <svg viewBox="0 0 400 240" className="w-full h-full text-emerald-500/80 stroke-current fill-none stroke-1" strokeLinecap="round" strokeLinejoin="round">
              {/* Screen outer */}
              <rect x="20" y="20" width="360" height="200" rx="12" strokeWidth="1.5" />
              {/* Header */}
              <line x1="20" y1="55" x2="380" y2="55" strokeWidth="1" />
              <rect x="35" y="30" width="80" height="15" rx="3" strokeDasharray="4,2" />
              {/* App Cursors */}
              <path d="M 240,80 L 255,90 L 248,93 L 254,103 L 250,105 L 244,95 L 240,100 Z" fill="rgba(16,185,129,0.2)" />
              <text x="260" y="92" className="text-[7px] font-mono fill-emerald-400 font-bold stroke-none">Maria [Editing]</text>
              
              <path d="M 110,130 L 125,140 L 118,143 L 124,153 L 120,155 L 114,145 L 110,150 Z" fill="rgba(230,81,0,0.2)" />
              <text x="130" y="142" className="text-[7px] font-mono fill-orange-400 font-bold stroke-none">Juan [Budget]</text>

              {/* Grid content list of islands */}
              <rect x="35" y="70" width="150" height="40" rx="6" />
              <line x1="45" y1="82" x2="150" y2="82" />
              <circle cx="50" cy="95" r="5" />
              <line x1="60" y1="95" x2="160" y2="95" strokeDasharray="3,3" />

              <rect x="35" y="120" width="150" height="40" rx="6" />
              <line x1="45" y1="132" x2="155" y2="132" />
              <circle cx="50" cy="145" r="5" />
              <line x1="60" y1="145" x2="160" y2="145" strokeDasharray="3,3" />

              {/* Map mockup sphere right */}
              <circle cx="280" cy="135" r="45" strokeWidth="1" strokeDasharray="4,4" />
              <path d="M 255,140 Q 280,110 305,145" strokeLinecap="round" strokeWidth="1.5" />
              <text x="260" y="120" className="text-[8px] font-mono fill-zinc-400 stroke-none">Visayas Sea Crossing</text>
              <circle cx="255" cy="140" r="3" fill="#E65100" />
              <circle cx="305" cy="145" r="3" fill="#E65100" />
            </svg>
          )
        };
      case 'asan-kana':
        return {
          sketchNotes: [
            { text: "Big, easily clickable SOS distress handle", x: "18%", y: "42%" },
            { text: "Circular telemetry mapping concentric circles", x: "72%", y: "30%" },
            { text: "Direct backup SMS stream builder triggered automatically", x: "35%", y: "82%" }
          ],
          wireframeItems: [
            { name: "SOS Panel Core", status: "Primary Red Distress Button. Triggers 5s cooldown to prevent errors.", spec: "D: 96px, Center" },
            { name: "Radial Compass Widget", status: "Displays closest safety nodes and circle members.", spec: "D: 180px, Responsive" },
            { name: "Telemetry Metadata Stats", status: "Displays device battery percentage and active GPS accuracy (meters).", spec: "Font: Mono, H: 45px" }
          ],
          sketchTitle: "SOS Signal Radiant ideation",
          sketches: (
            <svg viewBox="0 0 400 240" className="w-full h-full text-rose-500/80 stroke-current fill-none stroke-1" strokeLinecap="round" strokeLinejoin="round">
              {/* Screen outer */}
              <rect x="20" y="20" width="360" height="200" rx="12" strokeWidth="1.5" />
              {/* Dial design */}
              <circle cx="200" cy="120" r="50" strokeWidth="1.5" strokeDasharray="6,4" />
              <circle cx="200" cy="120" r="35" strokeWidth="2" />
              <line x1="200" y1="50" x2="200" y2="190" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="130" y1="120" x2="270" y2="120" strokeWidth="0.5" strokeDasharray="2,2" />
              {/* Labels */}
              <text x="180" y="123" className="text-[9px] font-mono fill-rose-400 font-black stroke-none tracking-widest">S.O.S</text>
              {/* Signal ripples */}
              <circle cx="200" cy="120" r="75" strokeWidth="0.5" strokeDasharray="1,5" />
              <circle cx="200" cy="120" r="85" strokeWidth="0.5" strokeDasharray="2,8" />
              {/* Battery Widget top */}
              <rect x="40" y="35" width="40" height="15" rx="3" />
              <rect x="80" y="39" width="3" height="7" />
              <text x="48" y="46" className="text-[7px] font-mono fill-zinc-500 stroke-none">[18%]</text>
              {/* Compass node pointer */}
              <path d="M 200,90 L 195,105 L 205,105 Z" fill="#E11D48" />
              <text x="210" y="100" className="text-[6.5px] font-mono fill-rose-300 stroke-none">Clinic Node: 400m</text>
            </svg>
          )
        };
      case 'letsspeakup':
        return {
          sketchNotes: [
            { text: "Upvote count with rapid animation", x: "12%", y: "55%" },
            { text: "Automatic EXIF geolocation parser block", x: "62%", y: "25%" },
            { text: "Public progression index block", x: "40%", y: "80%" }
          ],
          wireframeItems: [
            { name: "Incident Feed Card", status: "Responsive cards displaying photo upload, tags, and progress logs.", spec: "H: Auto, spacing: 16px" },
            { name: "Upvote Counter Button", status: "Triggers instant upvote database indexing representing community support.", spec: "W: 44px, Touch ready" },
            { name: "Status Tracker Ribbon", status: "Changes color depending on the municipal team's active verification.", spec: "H: 28px, rounded" }
          ],
          sketchTitle: "Civic Feed & Upvoting wireframe",
          sketches: (
            <svg viewBox="0 0 400 240" className="w-full h-full text-indigo-500/80 stroke-current fill-none stroke-1" strokeLinecap="round" strokeLinejoin="round">
              {/* Screen outer */}
              <rect x="25" y="20" width="350" height="200" rx="12" strokeWidth="1.5" />
              {/* Search */}
              <rect x="40" y="35" width="320" height="18" rx="5" />
              <circle cx="50" cy="44" r="3" />
              {/* Card List 1 */}
              <rect x="40" y="65" width="150" height="110" rx="8" />
              <rect x="50" y="75" width="130" height="45" rx="4" strokeDasharray="3,2" />
              <text x="65" y="102" className="text-[7px] font-mono fill-zinc-500 stroke-none">[Photo Metadata Box]</text>
              <line x1="50" y1="130" x2="160" y2="130" />
              <line x1="50" y1="140" x2="130" y2="140" strokeWidth="0.5" />
              {/* Upvote button inside card */}
              <rect x="150" y="148" width="30" height="18" rx="4" />
              <path d="M 158,159 L 163,154 L 168,159 Z" />

              {/* Right side Detail layout */}
              <rect x="205" y="65" width="155" height="110" rx="8" />
              <text x="215" y="82" className="text-[8px] font-mono fill-indigo-400 font-bold stroke-none">Public Municipal Audit</text>
              <circle cx="220" cy="102" r="4" fill="rgba(99,102,241,0.2)" />
              <line x1="230" y1="102" x2="340" y2="102" />
              <circle cx="220" cy="122" r="4" fill="rgba(99,102,241,0.2)" />
              <line x1="230" y1="122" x2="340" y2="122" />
              <circle cx="220" cy="142" r="4" fill="rgba(99,102,241,0.2)" />
              <line x1="230" y1="142" x2="340" y2="142" />
            </svg>
          )
        };
      case 'ikalinga':
        return {
          sketchNotes: [
            { text: "Minimal lightweight checkmarks for items", x: "15%", y: "40%" },
            { text: "Dynamic clinical reservation timeline slots", x: "70%", y: "30%" },
            { text: "High contrast PDF validation ticket download container", x: "45%", y: "85%" }
          ],
          wireframeItems: [
            { name: "Programs Grid Selector", status: "Displays available aid options (NGO Aid, Clinical, Child Care).", spec: "Aspect: 4/3, Flex list" },
            { name: "Document Verification list", status: "Checkbox dashboard outlining required citizen clearance certificates.", spec: "Gap: 12px, padded" },
            { name: "Validation Code Ribbon", status: "Secure appointment ticket with offline validation codes.", spec: "H: 52px, High contrast" }
          ],
          sketchTitle: "NGO aid reservation schematic",
          sketches: (
            <svg viewBox="0 0 400 240" className="w-full h-full text-emerald-500/80 stroke-current fill-none stroke-1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="25" y="20" width="350" height="200" rx="12" strokeWidth="1.5" />
              {/* Checklist details left */}
              <rect x="40" y="40" width="145" height="145" rx="8" />
              <text x="50" y="58" className="text-[8px] font-mono fill-emerald-400 font-bold stroke-none">Required Credentials</text>
              
              <rect x="50" y="70" width="10" height="10" rx="2" />
              <line x1="68" y1="75" x2="165" y2="75" />

              <rect x="50" y="95" width="10" height="10" rx="2" />
              <line x1="68" y1="100" x2="165" y2="100" />
              
              <rect x="50" y="120" width="10" height="10" rx="2" />
              <line x1="68" y1="125" x2="165" y2="125" />

              {/* Clinical appointment scheduler right */}
              <rect x="200" y="40" width="160" height="145" rx="8" />
              <text x="210" y="58" className="text-[8px] font-mono fill-emerald-400 font-bold stroke-none">Verify Appointment Slots</text>
              {/* Daily boxes */}
              <rect x="210" y="75" width="40" height="25" rx="4" />
              <text x="215" y="90" className="text-[7px] font-mono fill-zinc-500 stroke-none">9:00 AM</text>
              <rect x="260" y="75" width="40" height="25" rx="4" strokeDasharray="3,2" />
              <text x="265" y="90" className="text-[7px] font-mono fill-zinc-500 stroke-none">10:30 AM</text>
              <rect x="310" y="75" width="40" height="25" rx="4" />
              <text x="315" y="90" className="text-[7px] font-mono fill-zinc-500 stroke-none">1:00 PM</text>
              {/* PDF Verification ticket graphic */}
              <rect x="210" y="115" width="140" height="55" rx="6" strokeWidth="1.5" strokeDasharray="4,2" />
              <path d="M 220,135 L 227,143 L 245,127" strokeWidth="2" strokeLinecap="round" />
              <text x="255" y="137" className="text-[8px] font-sans fill-white font-bold stroke-none">Appointment Booked</text>
              <text x="255" y="148" className="text-[7.5px] font-mono fill-emerald-400 stroke-none">PIN ID: #K-9304</text>
            </svg>
          )
        };
      case 'ka-barangay-io':
      default:
        return {
          sketchNotes: [
            { text: "Official stamp certification position", x: "12%", y: "45%" },
            { text: "Interactive search filters looking up citizens files", x: "62%", y: "22%" },
            { text: "Immediate PDF dispatch trigger", x: "45%", y: "82%" }
          ],
          wireframeItems: [
            { name: "Admin Dashboard Matrix", status: "Direct list tracking citizen credential requests (Pending, Complete).", spec: "Flex-1, Table layout" },
            { name: "Clearance Form input fields", status: "Saves critical background citizen metadata inside secure structures.", spec: "Padding: 16px, high-contrast" },
            { name: "Dynamic Document dispatch", status: "Instant template engine rendering exportable clearance documents.", spec: "H: 520px, Printable PDF layout" }
          ],
          sketchTitle: "Bureaucratic clearance layout draft",
          sketches: (
            <svg viewBox="0 0 400 240" className="w-full h-full text-teal-500/80 stroke-current fill-none stroke-1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="25" y="20" width="350" height="200" rx="12" strokeWidth="1.5" />
              {/* Standard layout menu top */}
              <line x1="25" y1="52" x2="375" y2="52" />
              {/* Left Side: forms */}
              <rect x="40" y="65" width="140" height="135" rx="6" />
              <text x="50" y="80" className="text-[8px] font-mono fill-teal-400 font-bold stroke-none">Clearance Wizard</text>
              <rect x="50" y="92" width="120" height="14" rx="3" />
              <line x1="55" y1="99" x2="150" y2="99" strokeWidth="0.5" />
              <rect x="50" y="116" width="120" height="14" rx="3" />
              <line x1="55" y1="123" x2="130" y2="123" strokeWidth="0.5" />
              <rect x="50" y="140" width="120" height="30" rx="3" strokeDasharray="3,2" />
              <text x="55" y="152" className="text-[6.5px] font-mono fill-zinc-500 stroke-none">Clearance Purpose Input...</text>
              {/* Right Side: cert outline preview */}
              <rect x="195" y="65" width="165" height="135" rx="6" strokeWidth="1" />
              <circle cx="277" cy="85" r="10" strokeDasharray="2,2" />
              <text x="272" y="88" className="text-[5.5px] font-mono fill-teal-300 stroke-none">STAMP</text>
              <line x1="210" y1="110" x2="345" y2="110" strokeWidth="1.5" />
              <line x1="210" y1="122" x2="345" y2="122" strokeWidth="0.5" />
              <line x1="210" y1="132" x2="320" y2="132" strokeWidth="0.5" />
              <line x1="210" y1="142" x2="340" y2="142" strokeWidth="0.5" strokeDasharray="3,2" />
              <rect x="250" y="165" width="55" height="18" rx="4" />
              <text x="257" y="177" className="text-[7.5px] font-mono fill-teal-300 stroke-none">GENERATE PDF</text>
            </svg>
          )
        };
    }
  };

  const getFlowchartData = (projectId: string) => {
    switch (projectId) {
      case 'letsspeakup':
        return {
          title: 'campus whistleblower purging & route flow',
          nodes: [
            { id: 'start', label: 'Student files anonymous complaint', shape: 'capsule' as const, type: 'start' as const, x: 80, y: 220, w: 150, h: 50 },
            { id: 'dec1', label: 'EXIF metadata found in attachment?', shape: 'diamond' as const, type: 'decision' as const, x: 300, y: 220, w: 140, h: 100 },
            { id: 'step1a', label: 'Run severe sandbox purging routine', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 100, w: 160, h: 60 },
            { id: 'step1b', label: 'Directly dispatch clean text log', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 340, w: 160, h: 60 },
            { id: 'dec2', label: 'Severity trigger matched?', shape: 'diamond' as const, type: 'decision' as const, x: 740, y: 220, w: 130, h: 90 },
            { id: 'warn_step', label: 'Trigger direct webhook alert', shape: 'rectangle' as const, type: 'warning' as const, x: 910, y: 100, w: 140, h: 60 },
            { id: 'end', label: 'Safe counselor dialog open', shape: 'capsule' as const, type: 'page' as const, x: 920, y: 340, w: 130, h: 50 },
          ],
          links: [
            { from: 'start', to: 'dec1', badge: 'sync' as const, label: '' },
            { from: 'dec1', to: 'step1a', badge: 'warning' as const, label: 'YES' },
            { from: 'dec1', to: 'step1b', badge: 'check' as const, label: 'NO' },
            { from: 'step1a', to: 'dec2', badge: 'check' as const, label: '' },
            { from: 'step1b', to: 'dec2', badge: 'sync' as const, label: '' },
            { from: 'dec2', to: 'warn_step', badge: 'warning' as const, label: 'YES' },
            { from: 'dec2', to: 'end', badge: 'check' as const, label: 'NO' },
            { from: 'warn_step', to: 'end', badge: 'check' as const, label: '' },
          ],
          simLogs: [
            "INIT: Student opens secure submission form. Triggering metadata purge...",
            "SANITY: EXIF headers identified in uploaded image file.",
            "PURGING: Dynamic sanitizer scrubbing gps/camera coordinates in isolated sandbox.",
            "ROUTING: Standard compliant packet logged. Checking database triage triggers...",
            "DECISION: High-severity threat matrix match. Escalating dispatcher response.",
            "DISPATCH: Outgoing administrative webhook sent successfully.",
            "COMPLETE: Safe whitelisted chat coordinates initialized."
          ]
        };
      case 'ikalinga':
        return {
          title: 'stray catalog & adoption logic',
          nodes: [
            { id: 'start', label: 'Citizen views foster pets catalog', shape: 'capsule' as const, type: 'start' as const, x: 80, y: 220, w: 150, h: 50 },
            { id: 'dec1', label: 'Is stray breed unidentified?', shape: 'diamond' as const, type: 'decision' as const, x: 300, y: 220, w: 140, h: 100 },
            { id: 'step1a', label: 'Trigger AI model breed analyzer', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 100, w: 160, h: 60 },
            { id: 'step1b', label: 'Load verified shelter documents', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 340, w: 160, h: 60 },
            { id: 'dec2', label: 'Submit adoption request form', shape: 'diamond' as const, type: 'decision' as const, x: 740, y: 220, w: 130, h: 90 },
            { id: 'warn_step', label: 'Require manual review queue', shape: 'rectangle' as const, type: 'warning' as const, x: 910, y: 100, w: 140, h: 60 },
            { id: 'end', label: 'Chat channel opened with foster', shape: 'capsule' as const, type: 'page' as const, x: 920, y: 340, w: 130, h: 50 },
          ],
          links: [
            { from: 'start', to: 'dec1', badge: 'sync' as const, label: '' },
            { from: 'dec1', to: 'step1a', badge: 'warning' as const, label: 'YES' },
            { from: 'dec1', to: 'step1b', badge: 'check' as const, label: 'NO' },
            { from: 'step1a', to: 'dec2', badge: 'check' as const, label: '' },
            { from: 'step1b', to: 'dec2', badge: 'check' as const, label: '' },
            { from: 'dec2', to: 'warn_step', badge: 'block' as const, label: 'NO' },
            { from: 'dec2', to: 'end', badge: 'check' as const, label: 'YES' },
            { from: 'warn_step', to: 'end', badge: 'sync' as const, label: '' },
          ],
          simLogs: [
            "INIT: Live browser pet-seeking query triggered.",
            "ANALYZE: Breed field empty. Accessing localized edge-inference AI...",
            "AI_MODEL: Recognized 94.2% Golden Retriever mixture specs.",
            "POST: Adoption candidate file submission enqueued.",
            "AUDIT: Checking local foster host's background registry...",
            "VERIFY: Secure credentials checked. Passing profile check to current pet carer.",
            "COMPLETE: Live connection chat session is online."
          ]
        };
      case 'ka-barangay-io':
        return {
          title: 'barangay resident services verification',
          nodes: [
            { id: 'start', label: 'Request official certificate', shape: 'capsule' as const, type: 'start' as const, x: 80, y: 220, w: 150, h: 50 },
            { id: 'dec1', label: 'Dispute blotter log records active?', shape: 'diamond' as const, type: 'decision' as const, x: 300, y: 220, w: 140, h: 100 },
            { id: 'step1a', label: 'Hold for manual review hold', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 100, w: 160, h: 60 },
            { id: 'step1b', label: 'Pre-approve request automatically', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 340, w: 160, h: 60 },
            { id: 'dec2', label: 'Valid digital signature on file?', shape: 'diamond' as const, type: 'decision' as const, x: 740, y: 220, w: 130, h: 90 },
            { id: 'warn_step', label: 'Prompt resident register update', shape: 'rectangle' as const, type: 'warning' as const, x: 910, y: 100, w: 140, h: 60 },
            { id: 'end', label: 'Clearance PDF ready for pickup', shape: 'capsule' as const, type: 'page' as const, x: 920, y: 340, w: 130, h: 50 },
          ],
          links: [
            { from: 'start', to: 'dec1', badge: 'sync' as const, label: '' },
            { from: 'dec1', to: 'step1a', badge: 'warning' as const, label: 'YES' },
            { from: 'dec1', to: 'step1b', badge: 'check' as const, label: 'NO' },
            { from: 'step1a', to: 'dec2', badge: 'sync' as const, label: '' },
            { from: 'step1b', to: 'dec2', badge: 'check' as const, label: '' },
            { from: 'dec2', to: 'warn_step', badge: 'block' as const, label: 'NO' },
            { from: 'dec2', to: 'end', badge: 'check' as const, label: 'YES' },
            { from: 'warn_step', to: 'end', badge: 'check' as const, label: '' },
          ],
          simLogs: [
            "INIT: Document request received for Barangay Clearance.",
            "AUDIT: Auditing active dispute logs against resident identity...",
            "SYNC: Blotter register history checked. Result: 100% CLEAR.",
            "AUTOMATE: Resident parameters matched. Clearance PDF generation triggered.",
            "ENCRYPT: Certifying cleared document with official digital certificate signatures.",
            "VERIFY: Resident clearance generated with cryptographic timestamp verification.",
            "COMPLETE: Generated template. Document ready for physical pickup/email export."
          ]
        };
      case 'travel-tayo':
        return {
          title: 'local Visayas sea transit routing',
          nodes: [
            { id: 'start', label: 'User selects budget travel plan', shape: 'capsule' as const, type: 'start' as const, x: 80, y: 220, w: 150, h: 50 },
            { id: 'dec1', label: 'Does route cross open waters?', shape: 'diamond' as const, type: 'decision' as const, x: 300, y: 220, w: 140, h: 100 },
            { id: 'step1a', label: 'Query live outrigger schedules', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 100, w: 160, h: 60 },
            { id: 'step1b', label: 'Load inland tricycle rate maps', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 340, w: 160, h: 60 },
            { id: 'dec2', label: 'Budget cap parameter exceeded?', shape: 'diamond' as const, type: 'decision' as const, x: 740, y: 220, w: 130, h: 90 },
            { id: 'warn_step', label: 'Apply alternative economic routes', shape: 'rectangle' as const, type: 'warning' as const, x: 910, y: 100, w: 140, h: 60 },
            { id: 'end', label: 'Dynamic booking vouchers linked', shape: 'capsule' as const, type: 'page' as const, x: 920, y: 340, w: 130, h: 50 },
          ],
          links: [
            { from: 'start', to: 'dec1', badge: 'sync' as const, label: '' },
            { from: 'dec1', to: 'step1a', badge: 'check' as const, label: 'YES' },
            { from: 'dec1', to: 'step1b', badge: 'check' as const, label: 'NO' },
            { from: 'step1a', to: 'dec2', badge: 'sync' as const, label: '' },
            { from: 'step1b', to: 'dec2', badge: 'check' as const, label: '' },
            { from: 'dec2', to: 'warn_step', badge: 'warning' as const, label: 'YES' },
            { from: 'dec2', to: 'end', badge: 'check' as const, label: 'NO' },
            { from: 'warn_step', to: 'end', badge: 'check' as const, label: '' },
          ],
          simLogs: [
            "INIT: Initiated Visayas archipelago route planner sync.",
            "CHECK: High sea-state warnings checked via localized maritime logs.",
            "QUERY: Loaded Boracay-Caticlan outrigger boat timetables.",
            "CALCULATE: Total land-water transit expenses sum: PHP 420.00.",
            "DECISION: Checking user's customized PHP 500.00 budget ceiling limits...",
            "VALIDATION: Cost OK. Compiling dynamic transport ticket barcodes.",
            "COMPLETE: Stamped vouchers enqueued in local offline storage cache successfully."
          ]
        };
      case 'asan-kana':
      default:
        return {
          title: 'emergency SOS locational coordinates trigger',
          nodes: [
            { id: 'start', label: 'GPS watchPosition listener active', shape: 'capsule' as const, type: 'start' as const, x: 80, y: 220, w: 150, h: 50 },
            { id: 'dec1', label: 'Dynamic speed change detected?', shape: 'diamond' as const, type: 'decision' as const, x: 300, y: 220, w: 140, h: 100 },
            { id: 'step1a', label: 'Increase coordinate polling interval', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 100, w: 160, h: 60 },
            { id: 'step1b', label: 'Enter micro standby battery-save mode', shape: 'rectangle' as const, type: 'process' as const, x: 530, y: 340, w: 160, h: 60 },
            { id: 'dec2', label: 'Panic button held for 3s?', shape: 'diamond' as const, type: 'decision' as const, x: 740, y: 220, w: 130, h: 90 },
            { id: 'warn_step', label: 'Form emergency SMS network packets', shape: 'rectangle' as const, type: 'warning' as const, x: 910, y: 100, w: 140, h: 60 },
            { id: 'end', label: 'Family radar circle updated feed', shape: 'capsule' as const, type: 'page' as const, x: 920, y: 340, w: 130, h: 50 },
          ],
          links: [
            { from: 'start', to: 'dec1', badge: 'sync' as const, label: '' },
            { from: 'dec1', to: 'step1a', badge: 'check' as const, label: 'YES' },
            { from: 'dec1', to: 'step1b', badge: 'warning' as const, label: 'NO' },
            { from: 'step1a', to: 'dec2', badge: 'check' as const, label: '' },
            { from: 'step1b', to: 'dec2', badge: 'sync' as const, label: '' },
            { from: 'dec2', to: 'warn_step', badge: 'warning' as const, label: 'YES' },
            { from: 'dec2', to: 'end', badge: 'check' as const, label: 'NO' },
            { from: 'warn_step', to: 'end', badge: 'check' as const, label: '' },
          ],
          simLogs: [
            "INIT: WatchPosition GPS sensor calibrator thread activated successfully.",
            "ANALYZE: Computing velocity delta of current mobile device...",
            "SLEEP: Polling rate set to energy-saving sleep due to static user state.",
            "TRIGGER: SOS panic signal detection sequence triggered.",
            "COMPARE: Verified 3-second secure continuous button hold.",
            "SMS_BUFFER: Generated fallback low-signal emergency SMS coordinates frame.",
            "COMPLETE: Family trust network broadcasted successfully with real-time location."
          ]
        };
    }
  };

  const projectAssets = getProjectDesignAssets(project.id);

  return (
    <div className="fixed inset-0 z-50 bg-[#070709] overflow-y-auto text-gray-100 font-sans select-text scroll-smooth pb-20">
      
      {/* Dynamic atmospheric color glow backdrop */}
      <div 
        className="absolute top-0 left-1/4 w-[60%] h-[45%] rounded-full opacity-20 blur-[160px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${primarySwatchColor} 0%, transparent 80%)` }}
      />
      <div 
        className="absolute top-[180vh] right-[10%] w-[50%] h-[40%] rounded-full opacity-10 blur-[160px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${secondarySwatchColor} 0%, transparent 80%)` }}
      />

      {/* Persistent premium header navigation panel */}
      <nav className="sticky top-0 z-50 bg-[#070709]/95 backdrop-blur-md border-b border-zinc-900 px-4 sm:px-6 lg:px-8 py-4.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-zinc-300 hover:text-white transition-colors py-2 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80"
          >
            <ArrowLeft className="w-4 h-4 text-brand-orange" />
            <span>Close Project</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-1.5 text-[10.5px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>{project.title} &mdash; Direct Portfolio View</span>
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold font-mono py-2.5 px-5 rounded-xl transition-all shadow-[0_5px_15px_rgba(255,170,43,0.15)] hover:scale-[1.02]"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* BEHANCE STYLE METASTATION INTRO COVER */}
        <header className="relative rounded-3xl overflow-hidden border border-zinc-900 mb-16 bg-zinc-950 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/45 to-transparent z-10" />
          
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-[360px] sm:h-[520px] object-cover scale-100 brightness-[70%] filter grayscale-[5%] transition-transform duration-70w"
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-12 z-20 text-left">
            <div className="inline-flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/30 px-3.5 py-1.5 rounded-full text-[10.5px] font-mono tracking-widest font-bold text-brand-orange uppercase mb-4 shadow">
              <Tag className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            
            <h1 className="text-4xl sm:text-7xl font-display font-black tracking-tight text-white mb-2 max-w-4xl leading-tight">
              {project.title}
            </h1>
            <p className="text-[#FFAA2B] font-mono text-sm sm:text-xl font-light mb-6">
              &mdash; &ldquo;{project.slogan}&rdquo;
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-zinc-800/65 pt-6 mt-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">Primary Target</span>
                <span className="text-zinc-200 text-xs sm:text-sm font-semibold">{project.metrics}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">Development Sprit</span>
                <span className="text-zinc-200 text-xs sm:text-sm font-semibold">21-Day High-Fi Cycle</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">Lead Architect</span>
                <span className="text-zinc-200 text-xs sm:text-sm font-semibold">Peter Buenavente</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">Archived Links</span>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline text-xs sm:text-sm font-mono flex items-center gap-1">
                  <span>vercel.app deployment</span>
                  <ExternalLink className="w-3 C-3" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* CONTINUOUS BEHANCE presentation PORTFOLIOFLOW */}
        <div className="space-y-28">

          {/* 1. TACTICAL CONTEXT */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-orange font-mono text-[10.5px] font-bold uppercase tracking-widest block">
                01. Research Abstract &amp; Mandate
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-display font-black text-white leading-tight">
                Addressing fundamental societal voids in the Philippines.
              </h2>
              <p className="text-zinc-450 text-sm sm:text-base font-light leading-relaxed">
                Project Neverland approaches product design through custom-tailored, localized community templates. We bypass abstract global features to focus heavily on solving real, physical problems Filipino users face on-site.
              </p>
              <div className="bg-zinc-950/90 border border-zinc-900 rounded-2xl p-5 block">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-bold flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#FFAA2B]" />
                  <span>MVP Target Scope</span>
                </span>
                <p className="text-zinc-300 text-xs leading-relaxed font-mono">
                  {project.scope}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0b0c0e]/95 border border-zinc-900 rounded-2xl p-6.5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600" />
                <span className="text-xs font-mono text-rose-500 uppercase block mb-3.5 font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>The Problem Constraint</span>
                </span>
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed select-all">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="bg-[#0b0c0e]/95 border border-zinc-900 rounded-2xl p-6.5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600" />
                <span className="text-xs font-mono text-emerald-500 uppercase block mb-3.5 font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Targeted Research Insight</span>
                </span>
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed select-all">
                  {project.caseStudy.researchInsight}
                </p>
              </div>
            </div>
          </section>

          {/* MVP DETAILS SPECIFICATIONS BANNER */}
          <section className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Product Overview & Goal */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-brand-orange font-mono text-[10.5px] font-bold uppercase tracking-widest block mb-2">
                    Product Overview
                  </span>
                  <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed select-all">
                    {project.overviewText}
                  </p>
                </div>

                <div className="bg-[#12100e] border border-brand-orange/15 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />
                  <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest block mb-2 font-bold select-none">
                    MVP Goal Specification
                  </span>
                  <p className="text-zinc-200 text-xs sm:text-sm font-semibold italic select-all">
                    &ldquo;{project.mvpGoal}&rdquo;
                  </p>
                </div>

                {/* Target Users */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block font-bold select-none">Primary Target Audience Profiles</span>
                  <div className="flex flex-wrap gap-2.5">
                    {project.targetUsers?.map((user, idx) => (
                      <span key={idx} className="bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[10.5px] px-3.5 py-1.5 rounded-lg select-all flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-brand-orange" />
                        <span>{user}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Features list */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-brand-orange font-mono text-[10.5px] font-bold uppercase tracking-widest block mb-1">
                  Core Features Delivered (MVP Scope)
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.coreFeatures?.map((feature, idx) => (
                    <div key={idx} className="bg-[#0b0c10] border border-zinc-900/80 rounded-xl p-3.5 hover:border-brand-orange/20 transition-colors flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10.5px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-zinc-300 text-xs sm:text-sm font-light select-all leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* 2. THE HAND-DRAWN SKETCHES & IDEATION SECTION */}
          <section className="text-left bg-[#101014]/60 border border-zinc-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-brand-orange font-mono text-[10.5px] font-bold uppercase tracking-wider mb-2">
                <PenTool className="w-3.5 h-3.5" />
                <span>02. Early Stage Ideation Sketches</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                Brainstorming &amp; Hand-Drawn Concepts
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mt-1.5">
                Every screen starts on conceptual paper. Here is the initial rough schematic diagram detailing how interactive elements are grouped.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Sketches Canvas view */}
              <div className="lg:col-span-7 bg-[#08080a] border border-zinc-900/90 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden min-h-[260px] group shadow-inner">
                {/* Blueprint grid layout */}
                <div className="absolute inset-0 bg-[radial-gradient(#1c1d22_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />
                
                <div className="w-full max-w-md relative z-10 p-2">
                  {projectAssets.sketches}
                </div>

                <div className="absolute bottom-3 left-3 bg-zinc-950/80 border border-zinc-800 rounded px-2 py-1 text-[9px] font-mono text-zinc-500 uppercase">
                  {projectAssets.sketchTitle}
                </div>
              </div>

              {/* Hand written design notes annotations column */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block font-bold">Concept Sticky Annotations</span>
                
                <div className="space-y-3.5">
                  {projectAssets.sketchNotes.map((note, noteIdx) => (
                    <div key={noteIdx} className="bg-[#14151b] border border-zinc-800 rounded-xl p-4 p-x-5 shadow-sm hover:border-brand-orange/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[#FFAA2B] text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                          {noteIdx + 1}
                        </div>
                        <div>
                          <p className="text-zinc-300 text-xs sm:text-sm font-light select-all">
                            {note.text}
                          </p>
                          <span className="text-[9px] font-mono text-zinc-600 block mt-1">Screen Coordinate Target: {note.x} / {note.y}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-800/80 pt-4 mt-2">
                  <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px]">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Transformed to digital layouts in Sprint Week 1</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. HIGH FIDELITY WIREFRAMES & SCHEMATICS */}
          <section className="text-left bg-gradient-to-r from-zinc-950 to-[#0e0f14] border border-zinc-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange" />
            
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-brand-orange font-mono text-[10.5px] font-bold uppercase tracking-wider mb-2">
                <Layout className="w-3.5 h-3.5" />
                <span>03. Blueprint Structures</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                UI Blueprint &amp; Layout Wireframes
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mt-1.5 font-sans">
                Below is the digital wireframe schematic highlighting pixel allocation, adaptive alignments, and functional layouts of the core user interface screens.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Interactive interactive blueprint item matrix */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block font-bold">Component Anatomy Matrix</span>
                
                {projectAssets.wireframeItems.map((item, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setWireframeHover(item.name)}
                    onMouseLeave={() => setWireframeHover(null)}
                    className={`p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                      wireframeHover === item.name 
                        ? 'bg-brand-orange/5 border-brand-orange/60 shadow-lg' 
                        : 'bg-black/30 border-zinc-900 hover:border-zinc-850'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white block select-all">{item.name}</span>
                      <span className="font-mono text-[10.5px] text-[#FFAA2B]">{item.spec}</span>
                    </div>
                    <p className="text-[11.5px] text-zinc-400 font-light leading-relaxed select-all">
                      {item.status}
                    </p>
                  </div>
                ))}

                <p className="text-[10px] text-zinc-500 italic font-mono pt-2">
                  * Hover over components to examine specifications
                </p>
              </div>

              {/* Wireframe device mockup viewer */}
              <div className="lg:col-span-7 bg-[#06070a]/95 border border-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-center relative min-h-[380px]">
                {/* Simulated blueprint screen layout */}
                <div className="w-full max-w-md bg-[#0d0e13] rounded-2xl border border-zinc-800 p-5 font-mono text-[10px] text-zinc-500 space-y-4 relative">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-2 text-[8px] select-none text-zinc-650">
                    <span>WIRE_VIEW_v1.0</span>
                    <span className="flex items-center gap-1">
                      <span>GPS: OK</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                    </span>
                  </div>

                  {/* Top Wire item */}
                  <div className={`p-3 rounded border text-center transition-all ${
                    wireframeHover === "Top Header Bar" || wireframeHover === "SOS Panel Core" || wireframeHover === "Admin Dashboard Matrix"
                      ? 'bg-brand-orange/20 border-brand-orange text-white'
                      : 'bg-zinc-950/40 border-zinc-900'
                  }`}>
                    <span className="text-[9px] block font-bold font-mono">
                      {project.id === 'asan-kana' ? '[Emergency Broadcast Hotkeys]' : '[Dynamic Navigation bar]'}
                    </span>
                    <span className="text-[7.5px] text-zinc-600">Align: Space-between, height: 44px</span>
                  </div>

                  {/* Body wireframe content items */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded border aspect-[4/3] text-center flex flex-col justify-center items-center transition-all ${
                      wireframeHover === "Iterative Planner Canvas" || wireframeHover === "Radial Compass Widget" || wireframeHover === "Clearance Form input fields"
                        ? 'bg-brand-orange/20 border-brand-orange text-white'
                        : 'bg-zinc-950/40 border-zinc-900'
                    }`}>
                      <span className="font-bold select-all block text-[8px]">
                        {project.id === 'asan-kana' ? '[RADAR_CANVAS]' : '[CORE_ACTION_WIDGET]'}
                      </span>
                      <span className="text-[7px] text-zinc-600 block mt-1">Responsive Flex Column</span>
                    </div>

                    <div className={`p-4 rounded border flex flex-col justify-center text-left transition-all ${
                      wireframeHover === "Archipelago Map Grid" || wireframeHover === "Telemetry Metadata Stats" || wireframeHover === "Dynamic Document dispatch"
                        ? 'bg-brand-orange/20 border-brand-orange text-white'
                        : 'bg-zinc-950/40 border-zinc-900'
                    }`}>
                      <span className="font-bold text-[8px] block">
                        {project.id === 'travel-tayo' ? '[MAP_GEOLOCATIONS]' : '[DATA_LOG_LIST]'}
                      </span>
                      <div className="w-full bg-zinc-900/60 h-1 rounded mt-1.5" />
                      <div className="w-3/4 bg-zinc-900/60 h-1 rounded mt-1" />
                    </div>
                  </div>

                  {/* Dynamic footer status ribbon */}
                  <div className="border-t border-zinc-900 pt-3 flex items-center justify-between text-[8px]">
                    <span>STATUS: DRAFT UNIT APPROVED</span>
                    <span className="text-[#FFAA2B]">GRID: 12-COL-FLUID</span>
                  </div>

                </div>

                <div className="absolute right-4 bottom-4 bg-[#14151b] px-3.5 py-1.5 rounded-xl border border-zinc-800 text-[10px] font-mono text-zinc-400">
                  Blueprint Scaler: <span className="text-[#FFAA2B]">1:1 Viewport</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. DESIGN FLOWCHARTS & NODE STEPS */}
          <section className="text-left bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-brand-orange font-mono text-[10.5px] uppercase tracking-widest block font-bold mb-1">
                  04. User Experience Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                  System Interface Flowcharts
                </h2>
              </div>

              {/* Simulation Trigger inside header */}
              <button
                type="button"
                onClick={() => {
                  if (simulationActive) return;
                  
                  const data = getFlowchartData(project.id);
                  setSimulationHistory([]);
                  setSimulationProgress(0);
                  setSimulationActive(true);

                  const timeouts = [
                    { p: 0, delay: 0 },
                    { p: 1, delay: 1000 },
                    { p: 2, delay: 2000 },
                    { p: 3, delay: 3000 },
                    { p: 4, delay: 4000 },
                    { p: 5, delay: 5000 },
                    { p: 6, delay: 6000 }
                  ];

                  timeouts.forEach(t => {
                    setTimeout(() => {
                      setSimulationProgress(t.p);
                      if (data.simLogs[t.p]) {
                        setSimulationHistory(prev => [...prev, data.simLogs[t.p]]);
                      }
                      if (t.p === 6) {
                        setSimulationActive(false);
                      }
                    }, t.delay);
                  });
                }}
                disabled={simulationActive}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 border shadow-lg ${
                  simulationActive 
                    ? 'bg-brand-orange/10 border-brand-orange/30 text-brand-orange animate-pulse cursor-not-allowed'
                    : 'bg-brand-orange hover:bg-brand-orange-hover border-brand-orange/40 text-black shadow-brand-orange/20 hover:scale-[1.02] active:scale-95'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>{simulationActive ? 'Simulating System Flow...' : 'Simulate System Flow'}</span>
              </button>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mb-6">
              Interactive 2D structural diagram mapping standard decision trees, process channels, and success nodes. Styled exactly like a clean, collaborative **FigJam** whiteboard drawing.
            </p>

            {/* FIGJAM WORKSPACE TOOLBAR & CABINET */}
            <div className="bg-white border border-zinc-200 rounded-2.5xl p-4 sm:p-5 mb-8 relative overflow-hidden shadow-sm">
              
              {/* FigJam Style Float Toolbar Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-100 pb-4 mb-4 font-mono text-[11px] text-zinc-600">
                <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 p-1 rounded-xl shadow-sm">
                  {/* Select cursor tool */}
                  <button
                    type="button"
                    onClick={() => setSelectedFigJamTool('select')}
                    className={`p-2 rounded-lg flex items-center justify-center transition-colors ${
                      selectedFigJamTool === 'select' ? 'bg-zinc-200 text-zinc-900 font-bold' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                    title="Select Cursor"
                  >
                    <MousePointer className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  {/* Sticky Notes tool */}
                  <button
                    type="button"
                    onClick={() => setSelectedFigJamTool('sticky')}
                    className={`p-2 rounded-lg flex items-center justify-center transition-all relative ${
                      selectedFigJamTool === 'sticky' ? 'bg-amber-100 text-amber-900 font-bold border border-amber-200' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                    title="Spawn Sticky Note (Click Canvas)"
                  >
                    <div className="w-3.5 h-3.5 border-2 border-current rounded-sm shrink-0" />
                    {customStickyNotes.length === 0 && (
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                    )}
                  </button>

                  {/* Connector Drawing line tool */}
                  <button
                    type="button"
                    onClick={() => setSelectedFigJamTool('connector')}
                    className={`p-2 rounded-lg flex items-center justify-center transition-colors ${
                      selectedFigJamTool === 'connector' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                    title="Highlight Connectors"
                  >
                    <GitBranch className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  {/* Pen marker tool */}
                  <button
                    type="button"
                    onClick={() => setSelectedFigJamTool('pen')}
                    className={`p-2 rounded-lg flex items-center justify-center transition-colors ${
                      selectedFigJamTool === 'pen' ? 'bg-purple-50 text-purple-700 font-bold' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                    title="Marker Annotations"
                  >
                    <PenTool className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>

                {/* Status indicators */}
                <div className="flex items-center gap-4 text-zinc-400 select-none">
                  {customStickyNotes.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setCustomStickyNotes([])}
                      className="text-zinc-500 hover:text-red-500 transition-colors bg-zinc-50 border border-zinc-200 px-2 py-1 rounded-md text-[10px]"
                    >
                      Clear Sticky Notes ({customStickyNotes.length})
                    </button>
                  )}
                  <span>Grid: <strong className="text-zinc-600">Dot Canvas</strong></span>
                  <span className="hidden md:inline bg-zinc-50 px-2 flex items-center gap-1.5 py-0.5 rounded border border-zinc-200 text-[10px] text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Simulator Ready</span>
                  </span>
                </div>
              </div>

              {/* DYNAMIC GRID CANVAS FRAME */}
              <div
                id="figjam-board"
                onClick={(e) => {
                  if (selectedFigJamTool !== 'sticky') return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  if (customStickyNotes.length >= 8) {
                    setCustomStickyNotes(prev => prev.slice(1));
                  }

                  const pastelStickyColors = [
                    'bg-[#FCF4BC]/95 text-amber-950 border-amber-300 shadow-md',
                    'bg-[#D2F8E3]/95 text-emerald-950 border-emerald-300 shadow-md',
                    'bg-[#FCDDE6]/95 text-rose-950 border-rose-300 shadow-md',
                    'bg-[#E2EBFC]/95 text-sky-950 border-sky-350 shadow-md',
                  ];

                  const defaultInsights = [
                    "Note: Ensure state queries utilize lean, non-blocking indices.",
                    "Todo: Local device memory optimization checks.",
                    "Insight: Streamline branch criteria for rapid mobile scaling.",
                    "Proposal: Add coordinate polling dynamic dampener.",
                  ];

                  const newSticky = {
                    id: `sticky-${Date.now()}`,
                    text: defaultInsights[customStickyNotes.length % defaultInsights.length],
                    color: pastelStickyColors[customStickyNotes.length % pastelStickyColors.length],
                    x: Math.min(Math.max(x - 65, 20), rect.width - 150),
                    y: Math.min(Math.max(y - 65, 20), rect.height - 150),
                  };

                  setCustomStickyNotes(prev => [...prev, newSticky]);
                }}
                className={`relative w-full overflow-x-auto overflow-y-hidden select-none border border-zinc-200/80 transition-all rounded-2xl bg-[#FCFCFA] ${
                  selectedFigJamTool === 'sticky' ? 'cursor-cell border-amber-400' : 'cursor-default'
                }`}
                style={{
                  minHeight: '440px'
                }}
              >
                
                {/* SVG Width constraint forces scroll on small screens while keeping design structure pristine */}
                <div className="relative w-[1000px] h-[440px] shrink-0 mx-auto">
                  
                  {/* Dot grid background backing */}
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{
                      backgroundImage: 'radial-gradient(#d1d5db 1.2px, transparent 1.2px)',
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Diagram title overlay tag */}
                  <div className="absolute top-3 left-4 bg-white/90 border border-zinc-200/60 px-3 py-1 rounded-lg shadow-sm text-[10px] font-mono text-zinc-400 font-medium pointer-events-none z-10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    <span>Workspace / <strong>System flow map</strong></span>
                  </div>

                  {/* SVG paths representing the CONNECTIONS */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 440">
                    <defs>
                      <marker id="figjam-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#9CA3AF" />
                      </marker>
                      <marker id="figjam-arrow-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3B82F6" />
                      </marker>
                    </defs>

                    {/* Start -> Dec1 */}
                    <path d="M 155 220 L 230 220" fill="none" stroke={simulationProgress >= 1 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 1 ? '2.5' : '1.5'} className="transition-all" markerEnd={simulationProgress >= 1 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />
                    
                    {/* Dec1 -> Step1a */}
                    <path d="M 300 170 L 300 100 L 450 100" fill="none" stroke={simulationProgress >= 2 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 2 ? '2.5' : '1.5'} className="transition-all" markerEnd={simulationProgress >= 2 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />
                    
                    {/* Dec1 -> Step1b */}
                    <path d="M 300 270 L 300 340 L 450 340" fill="none" stroke={simulationProgress >= 2 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 2 ? '2.5' : '1.5'} className="transition-all" markerEnd={simulationProgress >= 2 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />
                    
                    {/* Step1a -> Dec2 */}
                    <path d="M 610 100 L 675 100 L 675 220" fill="none" stroke={simulationProgress >= 3 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 3 ? '2.5' : '1.5'} className="transition-all" />
                    
                    {/* Step1b -> Dec2 */}
                    <path d="M 610 340 L 675 340 L 675 220" fill="none" stroke={simulationProgress >= 3 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 3 ? '2.5' : '1.5'} className="transition-all" />

                    {/* Merge lines -> Dec2 Left Face Entry */}
                    <path d="M 675 220 L 740 220" fill="none" stroke={simulationProgress >= 3 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 3 ? '2.5' : '1.5'} className="transition-all" markerEnd={simulationProgress >= 3 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />

                    {/* Dec2 -> WarnStep */}
                    <path d="M 805 220 L 840 220 L 840 100 L 910 100" fill="none" stroke={simulationProgress >= 4 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 4 ? '2.5' : '1.5'} className="transition-all" markerEnd={simulationProgress >= 4 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />

                    {/* Dec2 -> End */}
                    <path d="M 805 220 L 840 220 L 840 340 L 920 340" fill="none" stroke={simulationProgress >= 5 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 5 ? '2.5' : '1.5'} className="transition-all" markerEnd={simulationProgress >= 5 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />

                    {/* WarnStep -> End (return loop) */}
                    <path d="M 980 100 L 1000 100 L 1000 340 L 985 340" fill="none" stroke={simulationProgress >= 6 ? '#3B82F6' : '#9CA3AF'} strokeWidth={simulationProgress >= 6 ? '2.5' : '1.5'} strokeDasharray="3 3" className="transition-all" markerEnd={simulationProgress >= 6 ? 'url(#figjam-arrow-active)' : 'url(#figjam-arrow)'} />

                    {/* SVG FLOWING WAPEPACK AMBIENT ANIMATION PULSE */}
                    {simulationActive && (
                      <g>
                        {/* Define linear movement coordinates targeting active nodes */}
                        {simulationProgress === 0 && (
                          <circle r="4.5" fill="#3B82F6" className="shadow">
                            <animateMotion dur="0.9s" repeatCount="indefinite" path="M 155 220 Q 192 220 230 220" />
                          </circle>
                        )}
                        {simulationProgress === 1 && (
                          <g>
                            <circle r="4.5" fill="#3B82F6">
                              <animateMotion dur="0.9s" repeatCount="indefinite" path="M 300 170 L 300 100 L 450 100" />
                            </circle>
                            <circle r="4.5" fill="#3B82F6">
                              <animateMotion dur="0.9s" repeatCount="indefinite" path="M 300 270 L 300 340 L 450 340" />
                            </circle>
                          </g>
                        )}
                        {simulationProgress === 2 && (
                          <g>
                            <circle r="4.5" fill="#3B82F6">
                              <animateMotion dur="0.9s" repeatCount="indefinite" path="M 610 100 L 675 100 L 675 220 L 740 220" />
                            </circle>
                            <circle r="4.5" fill="#3B82F6">
                              <animateMotion dur="0.9s" repeatCount="indefinite" path="M 610 340 L 675 340 L 675 220 L 740 220" />
                            </circle>
                          </g>
                        )}
                        {simulationProgress === 3 && (
                          <circle r="4.5" fill="#3B82F6">
                            <animateMotion dur="0.9s" repeatCount="indefinite" path="M 805 220 L 840 220 L 840 100 L 910 100" />
                          </circle>
                        )}
                        {simulationProgress === 4 && (
                          <circle r="4.5" fill="#3B82F6">
                            <animateMotion dur="0.9s" repeatCount="indefinite" path="M 805 220 L 840 220 L 840 340 L 920 340" />
                          </circle>
                        )}
                        {simulationProgress === 5 && (
                          <circle r="4.5" fill="#3B82F6">
                            <animateMotion dur="0.9s" repeatCount="indefinite" path="M 980 100 L 1000 100 L 1000 340 L 985 340" />
                          </circle>
                        )}
                      </g>
                    )}
                  </svg>

                  {/* Render Link Badges overlaying link paths halfway */}
                  {(() => {
                    const data = getFlowchartData(project.id);
                    const badges = [
                      { x: 190, y: 220, type: 'sync', label: 'Processing' },
                      { x: 375, y: 100, type: 'warning', label: 'YES' },
                      { x: 375, y: 340, type: 'check', label: 'NO' },
                      { x: 675, y: 150, type: 'check', label: 'Loaded' },
                      { x: 675, y: 290, type: 'check', label: 'Loaded' },
                      { x: 840, y: 160, type: 'warning', label: 'YES' },
                      { x: 840, y: 280, type: 'check', label: 'NO' },
                      { x: 1000, y: 220, type: 'sync', label: 'Loop' }
                    ];

                    return badges.map((b, idx) => {
                      const l = data.links[idx];
                      if (!l) return null;
                      
                      let badgeStyle = '';
                      let badgeIcon = '';
                      
                      switch (l.badge) {
                        case 'check':
                          badgeStyle = 'bg-emerald-100 border-emerald-300 text-emerald-700';
                          badgeIcon = '✓';
                          break;
                        case 'warning':
                          badgeStyle = 'bg-amber-100 border-amber-350 text-amber-800';
                          badgeIcon = '⚠️';
                          break;
                        case 'block':
                          badgeStyle = 'bg-rose-100 border-rose-300 text-rose-700';
                          badgeIcon = '🚫';
                          break;
                        case 'sync':
                        default:
                          badgeStyle = 'bg-blue-50 border-blue-200 text-blue-600';
                          badgeIcon = '⟳';
                          break;
                      }

                      return (
                        <div 
                          key={idx}
                          style={{ left: b.x - 14, top: b.y - 14 }}
                          className={`absolute w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-[9px] shadow-sm border select-none pointer-events-none z-10 ${badgeStyle}`}
                        >
                          <span>{badgeIcon}</span>
                          {l.label && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-1.5 py-0.5 rounded border border-zinc-200 text-zinc-500 font-sans text-[8.5px] scale-90 whitespace-nowrap font-black shadow-xs">
                              {l.label}
                            </span>
                          )}
                        </div>
                      );
                    });
                  })()}

                  {/* Flowchart 2D HTML standard shape nodes rendering */}
                  {(() => {
                    const data = getFlowchartData(project.id);
                    return data.nodes.map((n, idx) => {
                      const isActive = simulationProgress === idx;
                      const isPassed = simulationProgress > idx;
                      
                      let appearance = '';
                      let labelColor = '';

                      switch (n.type) {
                        case 'start':
                          appearance = 'bg-emerald-50 border-emerald-500 hover:border-emerald-600';
                          labelColor = 'text-emerald-900';
                          break;
                        case 'process':
                          appearance = 'bg-blue-50/90 border-blue-500 hover:border-blue-600';
                          labelColor = 'text-blue-900';
                          break;
                        case 'decision':
                          // decision diamonds are custom drawn below
                          break;
                        case 'warning':
                          appearance = 'bg-amber-50 border-amber-500 hover:border-amber-600';
                          labelColor = 'text-amber-900';
                          break;
                        case 'page':
                          appearance = 'bg-teal-50 border-teal-500 hover:border-teal-600';
                          labelColor = 'text-teal-900';
                          break;
                        default:
                          appearance = 'bg-rose-50 border-rose-500 hover:border-rose-600';
                          labelColor = 'text-rose-900';
                          break;
                      }

                      // DIAMOND SHAPE RENDERING WITH HORIZONTAL TEXT
                      if (n.shape === 'diamond') {
                        return (
                          <div 
                            key={n.id}
                            style={{ left: n.x - n.w/2, top: n.y - n.h/2, width: n.w, height: n.h }}
                            className="absolute flex items-center justify-center cursor-pointer select-none z-20"
                            onClick={() => {
                              setSelectedFigJamTool('select');
                              setSimulationProgress(idx);
                            }}
                          >
                            <div className="relative w-full h-full flex items-center justify-center">
                              {/* 45 degree rotated box forming diamond */}
                              <div className={`absolute inset-1.5 border-2 rounded-lg rotate-45 transition-all duration-300 ${
                                isActive 
                                  ? 'bg-purple-100 border-purple-600 scale-102 shadow-md shadow-purple-300' 
                                  : isPassed 
                                  ? 'bg-purple-50/50 border-purple-400'
                                  : 'bg-purple-50 border-purple-300 hover:border-purple-400'
                              }`} />
                              
                              {/* Standard orthogonal boundary check cursor overlay */}
                              {isActive && (
                                <div className="absolute -inset-1 border-2 border-indigo-400 rounded-sm scale-110 pointer-events-none select-none z-0 border-dashed animate-pulse" />
                              )}

                              {/* Normal Text Layer (Must not rotate!) */}
                              <span className="relative z-10 px-4 text-center leading-tight font-black font-sans text-[10px] text-purple-950">
                                {n.label}
                              </span>
                            </div>
                          </div>
                        );
                      }

                      // STADIUM / RECTANGLE SHAPE RENDERING
                      return (
                        <div
                          key={n.id}
                          style={{ left: n.x - n.w/2, top: n.y - n.h/2, width: n.w, height: n.h }}
                          onClick={() => {
                            setSelectedFigJamTool('select');
                            setSimulationProgress(idx);
                          }}
                          className={`absolute flex items-center justify-center border-2 transition-all duration-300 cursor-pointer select-none z-20 ${
                            n.shape === 'capsule' ? 'rounded-full' : 'rounded-2xl'
                          } ${appearance} ${
                            isActive 
                              ? 'scale-102 ring-4 ring-zinc-200/60 shadow-lg border-zinc-900' 
                              : isPassed 
                              ? 'opacity-80' 
                              : 'shadow-xs'
                          }`}
                        >
                          {/* Inside active editor boundary halo */}
                          {isActive && (
                            <div className="absolute -inset-1 border-2 border-dashed border-zinc-400 rounded-2xl pointer-events-none" />
                          )}
                          <div className="px-3.5 text-center">
                            <span className={`block font-black font-sans text-[10.5px] leading-tight ${labelColor}`}>
                              {n.label}
                            </span>
                          </div>
                        </div>
                      );
                    });
                  })()}

                  {/* FLOATING COLLABORATIVE Whiteboard CURSORS */}
                  <div className="absolute top-[60px] left-[15%] pointer-events-none hidden lg:block animate-pulse">
                    <div className="flex items-center gap-1.5 bg-[#ff72c0] text-white font-mono text-[9px] px-2 py-0.5 rounded-md shadow-lg font-bold">
                      <MousePointer className="w-3 h-3 fill-current rotate-45" />
                      <span>UX_Architect</span>
                    </div>
                  </div>

                  <div className="absolute bottom-[80px] left-[45%] pointer-events-none hidden lg:block">
                    <div className="flex items-center gap-1.5 bg-[#FF5A1F] text-white font-mono text-[9px] px-2 py-0.5 rounded-md shadow-lg font-bold">
                      <MousePointer className="w-3 h-3 fill-current rotate-45" />
                      <span>{userEmail ? userEmail.split('@')[0] : 'ptrbuenavente'}</span>
                    </div>
                  </div>

                  {/* SPAWNED STICKY NOTES RENDERING */}
                  {customStickyNotes.map((note, index) => (
                    <div
                      key={note.id}
                      style={{
                        left: note.x,
                        top: note.y,
                        transform: `rotate(${(index % 2 === 0 ? 3.5 : -3.5)}deg)`
                      }}
                      className={`absolute w-34 p-3 rounded-lg shadow-xl border text-left text-[10px] font-medium transition-all ${note.color} z-30 group`}
                      onClick={(e) => {
                        e.stopPropagation(); // prevent spawning nested notes
                      }}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCustomStickyNotes(prev => prev.filter(n => n.id !== note.id));
                        }}
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-black/10 hover:bg-black/30 text-black hover:text-red-700 rounded-full flex items-center justify-center font-bold text-[9px] opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete Sticky Note"
                      >
                        ×
                      </button>
                      <p className="select-all block leading-tight font-sans text-zinc-900">{note.text}</p>
                    </div>
                  ))}

                  {/* EMPTY STICKIES TRIGGER GUIDANCE OVERLAY */}
                  {selectedFigJamTool === 'sticky' && customStickyNotes.length === 0 && (
                    <div className="absolute top-14 left-4 right-4 bg-zinc-900 text-white border border-zinc-800 px-4 py-2 rounded-xl text-center text-[10.5px] font-mono pointer-events-none z-20 opacity-95 transition-opacity">
                      💡 Click anywhere on the dotted board canvas below to affix a custom pastel sticky note!
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* SIMULATOR PACKET EMITTER TERMINAL OUTPUT */}
            <div className="bg-[#0c0d12] border border-zinc-900 rounded-2.5xl p-5 font-mono text-[11px] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-3">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Activity className="w-3.5 h-3.5 text-brand-orange shrink-0 animate-pulse" />
                  <span>Interactive System Flow Trace Monitor: <strong className="text-zinc-200">ACTIVE_ROUTE</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${simulationActive ? 'bg-emerald-500 animate-ping' : 'bg-zinc-650'}`} />
                  <span className="text-[10px] text-zinc-500 uppercase">{simulationActive ? 'Simulating' : 'Idle'}</span>
                </div>
              </div>

              {simulationHistory.length === 0 ? (
                <div className="py-4 text-center text-zinc-500 text-xs italic select-none">
                  ⚡ Click the &quot;Simulate System Flow&quot; button above to track signals passing across standard process layers.
                </div>
              ) : (
                <div className="space-y-1.5 text-left text-[10.5px] max-h-[120px] overflow-y-auto">
                  {simulationHistory.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 shrink-0 select-none">✓</span>
                      <span className="text-zinc-300 font-light select-all leading-normal">{log}</span>
                    </div>
                  ))}
                  {simulationActive && (
                    <div className="flex items-center gap-2 text-blue-400 animate-pulse mt-1">
                      <span className="shrink-0 select-none">➔</span>
                      <span>Tracing packets in real-time coordinates...</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* 5. HIGH-FIDELITY APP SCREEN MOCKUPS */}
          <section className="text-left bg-[#101014]/60 border border-zinc-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 text-brand-orange font-mono text-[10.5px] font-bold uppercase tracking-wider mb-2">
                <Smartphone className="w-3.5 h-3.5" />
                <span>05. High-Fidelity App UI Mockups</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
                Mockup Storytelling &amp; Colored Interfaces
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mt-1.5 leading-relaxed">
                Pristine high-contrast visual design layouts paired with human-centric interfaces, mapping standard mobile device frames and guidelines.
              </p>
            </div>

            <MvpHighFiMockups 
              projectId={project.id} 
              primaryColor={primarySwatchColor} 
              secondaryColor={secondarySwatchColor} 
            />
          </section>

          {/* 6. FAST 21-DAY SPRINT ROADMAP */}
          <section className="text-left bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 sm:p-10">
            <span className="text-brand-orange font-mono text-[10.5px] uppercase tracking-widest block font-bold mb-6">
              06. Fast 21-Day Sprint Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-8">
              The Process of Building the App
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {project.caseStudy.executionTimeline.map((sprint, sIdx) => (
                <div key={sIdx} className="bg-[#0C0D10]/95 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 text-7xl font-mono text-zinc-900/40 opacity-40 font-black">
                    0{sIdx + 1}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 block mb-3 uppercase tracking-widest">
                    Week 0{sIdx + 1} Sprint
                  </span>
                  <p className="text-zinc-200 text-xs sm:text-sm font-light leading-relaxed relative z-10 select-all">
                    {sprint}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. BRAND GUIDELINES (BEHANCE STYLE BRAND GUIDE BLOCK) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left bg-gradient-to-b from-transparent to-[#0a0a0c] p-6 sm:p-10 rounded-3xl border border-zinc-900/60">
            <div className="lg:col-span-4 space-y-6">
              <span className="text-brand-orange font-mono text-[10.5px] uppercase tracking-widest block font-bold">
                07. Aesthetics &amp; Identity
              </span>
              <h2 className="text-3xl font-display font-black text-white leading-tight">
                Brand Guidelines
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                {project.brandIdentity.concept}
              </p>

              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block">Typography Specifications</span>
                {project.brandIdentity.fonts.map((f, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-900 bg-zinc-950/80">
                    <div>
                      <span className="text-sm font-bold text-white block select-all">{f.family}</span>
                      <span className="text-[10px] font-mono text-zinc-500 block select-none">Weight: {f.weight}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#FFAA2B] bg-brand-orange/10 px-2 py-1 rounded border border-brand-orange/20 select-none">
                      {f.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <span className="text-[10.5px] font-mono uppercase text-zinc-500 tracking-wider block">Aesthetic swatches</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.brandIdentity.colors.map((c, cIdx) => (
                  <div key={cIdx} className="bg-[#0b0c10] border border-zinc-900 rounded-2xl overflow-hidden shadow-md">
                    <div className="h-24 w-full transition-all group-hover:scale-105" style={{ backgroundColor: c.hex }} />
                    <div className="p-4.5 text-left">
                      <span className="text-white text-xs sm:text-sm font-extrabold block truncate select-all">{c.name}</span>
                      <span className="font-mono text-[10.5px] text-[#FFAA2B] block select-all mb-2.5 font-semibold">
                        {c.hex}
                      </span>
                      <p className="text-[10px] text-zinc-400 font-sans leading-relaxed select-all">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. DETAILED CHAPTER STORIES & CASE STUDIES */}
          <section className="space-y-12">
            <div className="text-left max-w-2xl">
              <span className="text-brand-orange font-mono text-[10.5px] uppercase tracking-widest block font-bold mb-2">
                08. Case Study Narrative
              </span>
              <h2 className="text-3xl font-display font-black text-white">
                Detailed Case Study Chapters
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              {project.caseStudy.chapters.map((chap, chapIdx) => (
                <div key={chapIdx} className="bg-zinc-950/90 border border-zinc-900 p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute right-4 top-4 text-2.5xl font-mono font-black text-zinc-800/40">
                    Cap.0{chapIdx + 1}
                  </div>
                  <div className="space-y-4 mb-6">
                    <span className="text-[#FFAA2B] font-mono text-[9px] uppercase tracking-widest font-bold block">
                      {chap.subtitle}
                    </span>
                    <h3 className="text-white text-xl font-display font-black leading-snug">
                      {chap.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed select-all">
                      {chap.content}
                    </p>
                  </div>

                  <div className="border-t border-zinc-900/80 pt-4 mt-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Key Highlights</span>
                    <div className="flex flex-wrap gap-2">
                      {chap.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="inline-flex items-center gap-1.5 bg-[#0C0D10] border border-zinc-900 px-2.5 py-1.5 rounded-lg text-[10.5px]">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="text-zinc-300 font-mono select-all">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. SOFTWARE ARCHITECTURE MAP DIAGRAM */}
          <section className="text-left bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 sm:p-10">
            <span className="text-brand-orange font-mono text-[10.5px] uppercase tracking-widest block font-bold mb-4">
              09. Decoupled Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-4">
              Structured Infrastructure Deployment
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mb-8">
              {project.architecture.overview}
            </p>

            <div className="space-y-4">
              {project.architecture.layers.map((lay, layIdx) => (
                <div key={layIdx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#070709] border border-zinc-900 p-5 rounded-2xl">
                  <div className="md:col-span-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-[#FFAA2B] font-mono text-xs font-black flex items-center justify-center">
                      L0{layIdx + 1}
                    </div>
                    <div>
                      <span className="text-white text-xs sm:text-sm font-bold block select-all">{lay.layer}</span>
                      <span className="font-mono text-[9px] text-zinc-500 uppercase select-none">System Layer</span>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <span className="font-mono text-xs text-[#FFAA2B] bg-brand-orange/5 border border-brand-orange/20 rounded px-2.5 py-1 inline-block select-all">
                      {lay.tech}
                    </span>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed select-all">
                      {lay.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. COMPETITOR ANALYSIS MATRIX */}
          <section className="text-left overflow-x-auto bg-[#070709] border border-zinc-900 rounded-3xl p-6 sm:p-10 shadow-lg">
            <span className="text-brand-orange font-mono text-[10.5px] uppercase tracking-widest block font-bold mb-4">
              10. Competitor Research Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-8">
              The Competitor Analysis Matrix
            </h2>

            <div className="min-w-[700px] divide-y divide-zinc-900">
              <div className="grid grid-cols-12 gap-4 pb-4 text-[10.5px] font-mono uppercase text-zinc-500 font-bold select-none">
                <div className="col-span-3">Competitor Entity</div>
                <div className="col-span-2">Core Focus</div>
                <div className="col-span-2">Perceived Pros</div>
                <div className="col-span-2">Perceived Cons</div>
                <div className="col-span-3 text-[#FFAA2B]">Peter\'s Edge (Our Edge)</div>
              </div>

              {project.competitors.map((comp, cIdx) => (
                <div key={cIdx} className="grid grid-cols-12 gap-4 py-5 items-start text-xs sm:text-sm">
                  <div className="col-span-3 font-semibold text-white select-all">{comp.name}</div>
                  <div className="col-span-2 font-mono text-zinc-400 py-0.5 select-all">{comp.focus}</div>
                  <div className="col-span-2 text-zinc-400 leading-relaxed font-light select-all">{comp.pros}</div>
                  <div className="col-span-2 text-zinc-400 leading-relaxed font-light select-all">{comp.cons}</div>
                  <div className="col-span-3 text-white bg-brand-orange/5 border border-brand-orange/15 rounded-xl p-3 leading-relaxed font-normal select-all">
                    {comp.ourEdge}
                  </div>
                </div>
              ))}

              {/* Our project added row */}
              <div className="grid grid-cols-12 gap-4 pt-5 items-start text-xs sm:text-sm select-text bg-zinc-950/40 p-3 rounded-xl border border-zinc-900/60 mt-3">
                <div className="col-span-3 font-bold text-[#FFAA2B] uppercase tracking-wider">{project.title} (Neverland MVP)</div>
                <div className="col-span-2 font-mono text-white">Hyper-Localized Philippine Solutions</div>
                <div className="col-span-2 text-white">Aggressively optimized weight, high-fidelity UI layout, 21-day time to market.</div>
                <div className="col-span-2 text-zinc-500 italic">Pre-Seed MVP scale limits.</div>
                <div className="col-span-3 font-semibold text-white bg-brand-orange shadow-md px-3 py-2 rounded-xl text-center">
                  The Absolute Benchmark
                </div>
              </div>
            </div>
          </section>




          {/* 13. STRATEGY BOOKING TARGETED TRIGGER */}
          <section className="bg-gradient-to-r from-zinc-950 via-[#0B0D10] to-[#120F0A] border border-zinc-900 rounded-3xl p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-[10%] left-[10%] w-[33%] h-[33%] rounded-full bg-[#FFAA2B]/5 blur-[90px] pointer-events-none" />
            <span className="text-[#FFAA2B] font-mono text-[11px] uppercase tracking-widest block font-bold mb-3 select-none">
              Start Specifying Your Application
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
              Want a custom premium MVP built for your startup?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed mb-8">
              Skip traditional slow agencies. Neverland builds high-fidelity, extreme-performance applications following the exact Behance aesthetics and native type safety demonstrated above in weeks, not years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/639104011905"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-brand-orange/20 hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Initiate Briefing on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onBack}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors bg-zinc-950/80 border border-zinc-900 hover:border-zinc-805 py-3.5 px-8 rounded-xl"
              >
                <MessageSquare className="w-4 h-4 text-[#FFAA2B]" />
                <span>Back to Main Portfolio</span>
              </button>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

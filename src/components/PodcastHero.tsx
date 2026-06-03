import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Building2,
  CheckCircle,
  Compass,
  GraduationCap,
  HeartPulse,
  MapPin,
  Play,
  Radio,
  ShieldCheck,
  Wifi,
} from 'lucide-react';
import { mvpProjects, MvpProject } from '../mvpData';

interface PodcastHeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

type FeaturedMockup = 'safety' | 'travel' | 'school' | 'welfare' | 'civic';

interface FeaturedTheme {
  label: string;
  accent: string;
  dark: string;
  soft: string;
  icon: React.ReactNode;
  mockup: FeaturedMockup;
}

const featuredOrder = ['asan-kana', 'travel-tayo', 'letsspeakup', 'ikalinga', 'ka-barangay-io'];

const featuredWorks = featuredOrder
  .map((id) => mvpProjects.find((project) => project.id === id))
  .filter((project): project is MvpProject => Boolean(project));

const getFeaturedTheme = (projectId: string): FeaturedTheme => {
  switch (projectId) {
    case 'asan-kana':
      return {
        label: 'Family Safety MVP',
        accent: '#E11D48',
        dark: '#130719',
        soft: 'rgba(225, 29, 72, 0.16)',
        icon: <Radio className="w-4 h-4" />,
        mockup: 'safety',
      };
    case 'travel-tayo':
      return {
        label: 'Smart Tourism MVP',
        accent: '#F59E0B',
        dark: '#071827',
        soft: 'rgba(14, 165, 233, 0.16)',
        icon: <Compass className="w-4 h-4" />,
        mockup: 'travel',
      };
    case 'letsspeakup':
      return {
        label: 'Student Support MVP',
        accent: '#2563EB',
        dark: '#09111f',
        soft: 'rgba(37, 99, 235, 0.16)',
        icon: <GraduationCap className="w-4 h-4" />,
        mockup: 'school',
      };
    case 'ikalinga':
      return {
        label: 'Animal Welfare MVP',
        accent: '#10B981',
        dark: '#071914',
        soft: 'rgba(16, 185, 129, 0.16)',
        icon: <HeartPulse className="w-4 h-4" />,
        mockup: 'welfare',
      };
    default:
      return {
        label: 'Civic Services MVP',
        accent: '#14B8A6',
        dark: '#071716',
        soft: 'rgba(20, 184, 166, 0.16)',
        icon: <Building2 className="w-4 h-4" />,
        mockup: 'civic',
      };
  }
};

const getFeaturePair = (project: MvpProject) => project.coreFeatures.slice(0, 2);

function SafetyMockup({ project, theme }: { project: MvpProject; theme: FeaturedTheme }) {
  return (
    <>
      <div className="absolute left-4 top-14 w-[54%] max-w-[230px] rounded-xl border border-white/10 bg-[#12081e]/85 p-3 text-left shadow-2xl backdrop-blur-md sm:left-5 sm:top-16">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-white">Safe Network</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">4 contacts active</p>
            </div>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
        </div>

        {['Sophia (Nanay)', 'Noah (Anak)'].map((name) => (
          <div key={name} className="mb-1.5 flex items-center justify-between rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1.5 last:mb-0">
            <span className="text-[10px] font-medium text-zinc-300">{name}</span>
            <span className="font-mono text-[9px] uppercase" style={{ color: theme.accent }}>
              Synced
            </span>
          </div>
        ))}
      </div>

      <div className="absolute left-4 top-16 right-4 rounded-xl border border-rose-500/40 bg-[#1b0610]/90 p-3 text-left shadow-2xl backdrop-blur-md sm:left-auto sm:right-5 sm:w-[38%] sm:top-20">
        <div className="mb-2 flex items-center gap-2 text-white">
          <Bell className="h-4 w-4 text-rose-400" />
          <span className="text-xs font-bold">Transit Anomaly</span>
        </div>
        <p className="text-[10px] leading-relaxed text-zinc-300">{project.scope.split(',').slice(0, 2).join(' + ')}</p>
      </div>
    </>
  );
}

function TravelMockup({ theme }: { theme: FeaturedTheme }) {
  const spots = ['El Nido', 'Siargao', 'Cebu'];

  return (
    <div className="absolute inset-x-4 top-5 grid grid-cols-3 gap-2 sm:inset-x-5">
      {spots.map((spot, index) => (
        <div
          key={spot}
          className="min-h-[88px] rounded-xl border border-white/10 bg-black/55 p-2.5 text-left shadow-xl backdrop-blur-md"
          style={{ borderColor: index === 0 ? `${theme.accent}88` : undefined }}
        >
          <div className="mb-4 flex items-center justify-between">
            <MapPin className="h-3.5 w-3.5" style={{ color: theme.accent }} />
            <span className="rounded-md bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-zinc-200">4.{95 - index * 7}</span>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Featured route</p>
          <p className="mt-1 text-xs font-bold text-white">{spot}</p>
        </div>
      ))}
    </div>
  );
}

function SchoolMockup({ project, theme }: { project: MvpProject; theme: FeaturedTheme }) {
  return (
    <div className="absolute right-4 top-16 w-[42%] max-w-[220px] rounded-[24px] border-[8px] border-[#111827] bg-slate-50 p-3 text-left shadow-2xl sm:right-5">
      <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: theme.accent }} />
          <span className="text-xs font-extrabold text-slate-950">SpeakUp SafeApp</span>
        </div>
        <span className="font-mono text-[9px] uppercase text-emerald-500">Secure node</span>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">New anonymous report</p>
      <div className="mt-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
        {project.coreFeatures[0]}
      </div>
      <div className="mt-2 rounded-xl border border-slate-200 bg-white px-3 py-4 text-xs text-slate-400">
        Incident notes...
      </div>
      <button className="mt-3 flex h-8 w-full items-center justify-center rounded-lg bg-[#0f172a] text-[11px] font-bold text-white" type="button">
        Submit Report
      </button>
    </div>
  );
}

function WelfareMockup({ project, theme }: { project: MvpProject; theme: FeaturedTheme }) {
  return (
    <div className="absolute inset-x-5 top-16 rounded-2xl border border-white/10 bg-white/90 p-4 text-left shadow-2xl backdrop-blur-md">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-black text-slate-950">Rescue & adoption desk</p>
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">{project.metrics}</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: theme.accent }}>
          <HeartPulse className="h-4 w-4" />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {getFeaturePair(project).map((feature) => (
          <div key={feature} className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2">
            <CheckCircle className="mb-1 h-3.5 w-3.5 text-emerald-500" />
            <p className="text-[10px] font-bold leading-snug text-slate-800">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CivicMockup({ project, theme }: { project: MvpProject; theme: FeaturedTheme }) {
  return (
    <div className="absolute inset-x-5 top-16 rounded-xl border border-white/10 bg-[#071716]/90 p-4 text-left shadow-2xl backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-teal-200">Resident service queue</span>
        <Wifi className="h-4 w-4" style={{ color: theme.accent }} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {project.coreFeatures.slice(0, 3).map((feature, index) => (
          <div key={feature} className="rounded-lg border border-white/10 bg-white/[0.05] p-2.5">
            <p className="font-mono text-[10px] text-teal-200">0{index + 1}</p>
            <p className="mt-2 text-[10px] font-bold leading-snug text-white">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedMockupPreview({ project, theme }: { project: MvpProject; theme: FeaturedTheme }) {
  if (theme.mockup === 'safety') {
    return <SafetyMockup project={project} theme={theme} />;
  }

  if (theme.mockup === 'travel') {
    return <TravelMockup theme={theme} />;
  }

  if (theme.mockup === 'school') {
    return <SchoolMockup project={project} theme={theme} />;
  }

  if (theme.mockup === 'welfare') {
    return <WelfareMockup project={project} theme={theme} />;
  }

  return <CivicMockup project={project} theme={theme} />;
}

export default function PodcastHero({ onOpenBooking, onExploreServices }: PodcastHeroProps) {
  const [activeId, setActiveId] = useState<string>(featuredWorks[0]?.id ?? 'asan-kana');

  const activeWork = useMemo(
    () => featuredWorks.find((project) => project.id === activeId) ?? featuredWorks[0],
    [activeId],
  );

  const activeTheme = getFeaturedTheme(activeWork.id);

  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-[#070709] py-12 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,170,43,0.16),transparent_54%),linear-gradient(180deg,rgba(7,7,9,0.15)_0%,#09090c_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-12">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Do you have ideas? Let's connect.
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFAA2B] via-[#FF7A1A] to-rose-500">
                We turn drawings into complete engineering.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base"
            >
              We can turn your startup ideas into possibilities. A featured set of high-fidelity community MVPs built to feel real, covering safety tracking, tourism, student reporting, animal welfare, and civic service platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExploreServices}
                type="button"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold text-black shadow-xl shadow-white/5 transition-all hover:scale-105 hover:bg-gray-100 active:scale-95 sm:px-7 sm:text-sm"
              >
                <span>Explore Services</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black transition-transform group-hover:translate-x-1">
                  <Play className="ml-[1px] h-2.5 w-2.5 fill-white text-white" />
                </span>
              </button>

              <a
                href="tel:09104011905"
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-[#111116] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-black/40 transition-all hover:scale-105 hover:border-white/20 hover:bg-[#181822] active:scale-95 sm:px-7 sm:text-sm"
              >
                <span>Talk to Us</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-2.5 w-2.5 text-black" />
                </span>
              </a>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="relative w-full lg:max-w-[620px] lg:justify-self-end"
          >
            <div className="mb-3 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Selected page preview</p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">Featured Works</h2>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400 sm:inline-flex">
                Click to switch
              </span>
            </div>

            <div className="grid gap-2.5 lg:grid-cols-[minmax(0,1fr)_170px] xl:grid-cols-[minmax(0,1fr)_180px]">
              <motion.article
                key={activeWork.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative h-[410px] overflow-hidden rounded-3xl border bg-zinc-950 shadow-2xl sm:h-[420px] lg:h-[430px] xl:h-[450px]"
                style={{
                  borderColor: `${activeTheme.accent}66`,
                  boxShadow: `0 28px 90px ${activeTheme.accent}20`,
                  backgroundColor: activeTheme.dark,
                }}
              >
                <img
                  src={activeWork.imageUrl}
                  alt={`${activeWork.title} featured page preview`}
                  className="absolute inset-0 h-full w-full object-cover opacity-78 transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
                <div className="absolute inset-0 opacity-45" style={{ background: `radial-gradient(circle at 30% 20%, ${activeTheme.soft}, transparent 45%)` }} />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/65 px-3 py-2 text-white backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: activeTheme.soft, color: activeTheme.accent }}>
                    {activeTheme.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold">{activeWork.title}</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">{activeTheme.label}</p>
                  </div>
                </div>

                <FeaturedMockupPreview project={activeWork} theme={activeTheme} />

                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/86 to-transparent p-4 pt-20 text-left sm:p-5 sm:pt-24">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/55 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeTheme.accent }} />
                    {activeWork.metrics}
                  </div>
                  <h3 className="max-w-xl font-display text-xl font-extrabold leading-tight text-white sm:text-2xl">
                    {activeWork.slogan}
                  </h3>
                  <p className="mt-2 line-clamp-3 max-w-xl text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">{activeWork.shortDescription}</p>
                  <a
                    href={activeWork.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition-transform hover:-translate-y-0.5"
                  >
                    <span>View Marketing Page</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {featuredWorks.map((project) => {
                  const theme = getFeaturedTheme(project.id);
                  const isActive = project.id === activeWork.id;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveId(project.id)}
                      aria-pressed={isActive}
                      className="group grid h-[78px] grid-cols-[62px_1fr] items-center gap-2 overflow-hidden rounded-xl border bg-[#101014] p-1.5 text-left shadow-lg shadow-black/25 transition-all hover:-translate-y-1 hover:border-white/20"
                      style={{
                        borderColor: isActive ? `${theme.accent}88` : 'rgba(255,255,255,0.08)',
                        background: isActive ? `linear-gradient(135deg, ${theme.soft}, rgba(16,16,20,0.94))` : undefined,
                      }}
                    >
                      <div className="relative h-full overflow-hidden rounded-xl bg-zinc-900">
                        <img
                          src={project.imageUrl}
                          alt=""
                          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                        <span className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-md bg-black/70 backdrop-blur-md" style={{ color: theme.accent }}>
                          {theme.icon}
                        </span>
                      </div>

                      <div className="min-w-0 pr-1">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">{project.number}</p>
                        <p className="truncate font-display text-xs font-bold text-white">{project.title}</p>
                        <p className="mt-0.5 line-clamp-2 text-[10px] leading-3 text-zinc-400">{project.tagline}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

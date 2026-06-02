import React from 'react';
import { motion } from 'motion/react';

// Custom high-fidelity modern SVGs for the developer's favorite web development stack
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 fill-[#00D8FF] stroke-[#00D8FF] stroke-[0.1] drop-shadow-[0_0_12px_rgba(0,216,255,0.4)]">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(242,78,30,0.4)]">
    <path d="M12.735 8.981H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981z" fill="#F24E1E"/>
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z" fill="#FF7262"/>
    <path d="M12.735 17.962H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98z" fill="#A259FF"/>
    <path d="M15.852 17.962h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49z" fill="#1ABC9C"/>
    <path d="M8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539z" fill="#0ACF83"/>
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(0,122,204,0.4)]">
    <defs>
      <linearGradient id="vscode-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3E9FDC" />
        <stop offset="100%" stopColor="#007ACC" />
      </linearGradient>
    </defs>
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="url(#vscode-grad)" />
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]">
    <path d="M4 0h16v8h-8z" fill="#0052FF" />
    <path d="M4 8h8l8 8H4z" fill="#00DFE0" />
    <path d="M4 16h8v8z" fill="#FF007F" />
  </svg>
);

const WebflowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(67,83,255,0.4)]">
    <path d="M5.136 7.02c1.416 0 3.162 1.158 3.288 3.072 0 0 .222 3.81.228 4.11.12-.318 1.602-4.146 1.602-4.146.588-1.56 1.692-3.036 3.768-3.036 0 0 .888 6.858.924 7.176.09-.324 1.308-4.14 1.308-4.14.582-1.566 1.716-3.036 3.87-3.036l-3.054 7.506c-.63 1.506-1.806 2.88-3.984 2.88 0 0-.924-6.426-.936-6.57-.054.15-1.356 3.528-1.356 3.528-.612 1.566-1.782 3.036-3.954 3.042z" fill="#4353FF" />
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(33,117,155,0.4)]">
    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" fill="#21759B" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden drop-shadow-[0_0_12px_rgba(49,120,198,0.4)]">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#3178C6" />
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-[0_0_12px_rgba(255,197,23,0.4)]">
    <defs>
      <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BD34FE" />
        <stop offset="50%" stopColor="#FFC517" />
        <stop offset="100%" stopColor="#41D1FF" />
      </linearGradient>
    </defs>
    <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" fill="url(#vite-grad)" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#38BDF8" />
  </svg>
);

export default function CreativeShowcaseGrid() {
  // Beautiful interactive tech stack layout replacing the automated mock images
  const mosaicImages = [
    {
      title: 'React.js',
      subtitle: 'Component Architect',
      icon: <ReactIcon />,
      glowColor: 'from-[#00D8FF]/10',
      borderColor: 'hover:border-[#00D8FF]/30',
      scale: 'hover:scale-105',
      rotate: '-rotate-3 sm:-rotate-6',
      offsetX: '-left-4 sm:left-6',
      offsetY: 'top-10 sm:top-20',
      w: 'w-24 sm:w-36 md:w-44',
      h: 'h-32 sm:h-48 md:h-60',
    },
    {
      title: 'Figma',
      subtitle: 'Vector Systems',
      icon: <FigmaIcon />,
      glowColor: 'from-[#F24E1E]/10',
      borderColor: 'hover:border-[#F24E1E]/30',
      scale: 'hover:scale-105',
      rotate: 'rotate-2 sm:rotate-6',
      offsetX: 'left-24 sm:left-48 md:left-56',
      offsetY: '-top-4 sm:top-4',
      w: 'w-24 sm:w-32 md:w-40',
      h: 'h-28 sm:h-40 md:h-52',
    },
    {
      title: 'VS Code',
      subtitle: 'Engine Room',
      icon: <VSCodeIcon />,
      glowColor: 'from-[#007ACC]/10',
      borderColor: 'hover:border-[#007ACC]/30',
      scale: 'hover:scale-105',
      rotate: '-rotate-2 sm:-rotate-4',
      offsetX: 'left-[22%] sm:left-[35%] md:left-[38%]',
      offsetY: '-top-14 sm:-top-20',
      w: 'w-28 sm:w-40 md:w-48',
      h: 'h-36 sm:h-52 md:h-64',
    },
    {
      title: 'Framer',
      subtitle: 'Fluid Motion Engine',
      icon: <FramerIcon />,
      glowColor: 'from-[#FF007F]/10',
      borderColor: 'hover:border-[#FF007F]/30',
      scale: 'hover:scale-105',
      rotate: 'rotate-3 sm:rotate-12',
      offsetX: 'right-12 sm:right-36 md:right-48',
      offsetY: 'top-0 sm:top-6',
      w: 'w-24 sm:w-36 md:w-40',
      h: 'h-32 sm:h-48 md:h-56',
    },
    {
      title: 'Webflow',
      subtitle: 'Visual Blueprint',
      icon: <WebflowIcon />,
      glowColor: 'from-[#4353FF]/10',
      borderColor: 'hover:border-[#4353FF]/30',
      scale: 'hover:scale-105',
      rotate: '-rotate-6 sm:-rotate-12',
      offsetX: '-right-4 sm:right-6 md:right-12',
      offsetY: 'top-16 sm:top-28',
      w: 'w-22 sm:w-32 md:w-40',
      h: 'h-28 sm:h-44 md:h-52',
    },
    {
      title: 'WordPress',
      subtitle: 'Enterprise CMS',
      icon: <WordPressIcon />,
      glowColor: 'from-[#21759B]/10',
      borderColor: 'hover:border-[#21759B]/30',
      scale: 'hover:scale-105',
      rotate: 'rotate-2 sm:rotate-6',
      offsetX: '-left-6 sm:left-4 md:left-12',
      offsetY: 'bottom-8 sm:bottom-20',
      w: 'w-24 sm:w-36 md:w-44',
      h: 'h-32 sm:h-48 md:h-60',
    },
    {
      title: 'TypeScript',
      subtitle: 'Static Type-Safety',
      icon: <TypeScriptIcon />,
      glowColor: 'from-[#3178C6]/10',
      borderColor: 'hover:border-[#3178C6]/30',
      scale: 'hover:scale-105',
      rotate: '-rotate-3 sm:-rotate-8',
      offsetX: 'left-20 sm:left-48 md:left-64',
      offsetY: 'bottom-2 sm:bottom-12',
      w: 'w-22 sm:w-32 md:w-40',
      h: 'h-28 sm:h-40 md:h-52',
    },
    {
      title: 'Vite',
      subtitle: 'Lightning Bundler',
      icon: <ViteIcon />,
      glowColor: 'from-[#FFC517]/10',
      borderColor: 'hover:border-[#FFC517]/30',
      scale: 'hover:scale-105',
      rotate: 'rotate-4 sm:rotate-8',
      offsetX: 'right-20 sm:right-48 md:right-64',
      offsetY: 'bottom-2 sm:bottom-12',
      w: 'w-22 sm:w-32 md:w-40',
      h: 'h-28 sm:h-40 md:h-52',
    },
    {
      title: 'Tailwind CSS',
      subtitle: 'Atomic utility system',
      icon: <TailwindIcon />,
      glowColor: 'from-[#38BDF8]/10',
      borderColor: 'hover:border-[#38BDF8]/30',
      scale: 'hover:scale-105',
      rotate: '-rotate-3 sm:-rotate-6',
      offsetX: '-right-6 sm:left-auto sm:right-6 md:right-16',
      offsetY: 'bottom-10 sm:bottom-20',
      w: 'w-24 sm:w-36 md:w-44',
      h: 'h-32 sm:h-48 md:h-60',
    }
  ];

  return (
    <section className="relative bg-[#070709] py-32 px-4 overflow-hidden border-t border-b border-zinc-900 select-none">
      
      {/* Visual Ambient Overlay Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F0F12_1px,transparent_1px),linear-gradient(to_bottom,#0F0F12_1px,transparent_1px)] bg-[size:32px_32px] opacity-75 pointer-events-none" />

      {/* Extreme back glow colors matching the brand identity */}
      <div className="absolute -top-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#FFAA2B]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-rose-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* ASYMMETRIC MOSAIC FLOATING GRID UNDERLAY */}
      <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full opacity-45 sm:opacity-75 pointer-events-none z-0">
        
        {mosaicImages.map((img, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${img.offsetX} ${img.offsetY} pointer-events-auto cursor-pointer transition-all duration-300 ${img.scale}`}
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
            style={{ transform: img.rotate }}
            whileHover={{ y: -6, scale: 1.15 }}
          >
            {/* Centered raw SVG Container with zero background and zero branding label text */}
            <div className="flex items-center justify-center p-3 sm:p-4">
              <motion.div 
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5 + (idx % 3) * 1.5,
                  ease: "easeInOut",
                  delay: idx * 0.2
                }}
              >
                {img.icon}
              </motion.div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* CENTRAL STATEMENT CONTAINER */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px] px-4">
        
        {/* Massive Bold Eye-catching Statement with Stark Swiss Typography exactly replicating mockup */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white mb-6 leading-[1.08] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
        >
          Create unlimited <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#FFAA2B]">beautiful digital experiences.</span>
        </motion.h1>

      </div>

    </section>
  );
}

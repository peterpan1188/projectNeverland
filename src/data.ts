import { Project, ServiceDetail } from './types';

export const mockProjects: Project[] = [
  {
    id: 'fashion-hoodie',
    number: '#01',
    title: 'Streetwear & Apparel Campaign',
    category: 'Brand Strategy & Identity',
    description: 'Designed and executed an exclusive, minimalist luxury brand identity for a premium streetwear line, featuring high-contrast clean visuals and optimized digital launching loops.',
    imageUrl: '/src/assets/images/hoodie_model_1779378723764.png',
    techStack: ['Brand Architecture', 'Sleek Aesthetic Consulting', 'Social Media Templates', 'Visual Direction'],
    metrics: '$1.4M First-Drop Sales',
    consultationFocus: 'Streetwear Brand Strategy & Visual Production'
  },
  {
    id: 'interactive-light',
    number: '#02',
    title: 'Creative Interactive Installations',
    category: 'Design & Software Solutions',
    description: 'Engineered a real-time reactive projection interface and visual controller, syncing physical motion data with ultra-low latency canvas rendering loops.',
    imageUrl: '/src/assets/images/red_silhouette_1779378744158.png',
    techStack: ['Framer Motion', 'Canvas APIs', 'Interactive Webhooks', 'High-Contrast Arts'],
    metrics: '100k+ Active Expo Interactions',
    consultationFocus: 'Ultra-Low Latency Canvas & Web Interactive Dev'
  },
  {
    id: 'refreshing-beverage',
    number: '#03',
    title: 'Vibrant Beverage Launch Campaign',
    category: 'Launch & Growth Optimization',
    description: 'Piloted an analytical leads generation and packaging rollout for an artisanal organic beverage, optimization of core vitals and online retail channels.',
    imageUrl: '/src/assets/images/orange_juice_1779378764645.png',
    techStack: ['Product Packaging Design', 'Google Analytics 4', 'Conversion Metrics', 'Web Speed optimization'],
    metrics: '+240% Direct-to-Consumer Orders',
    consultationFocus: 'Artisanal Beverage Campaign & Web CRO Routing'
  },
  {
    id: 'organic-apparel',
    number: '#04',
    title: 'Organic Apparel Visual System',
    category: 'Design & Custom Softwares',
    description: 'Constructed an end-to-end e-commerce concept and digital portal for sustainable textiles, utilizing premium layout grids and raw organic asset presentations.',
    imageUrl: '/src/assets/images/black_tshirt_grass_1779378786322.png',
    techStack: ['Tailwind CSS v4', 'High-Fidelity UI Kits', 'Responsive Flow Grids', 'Sustainable Branding'],
    metrics: '99% Perfect Lighthouse UX Score',
    consultationFocus: 'Modern Clean Commerce Portals & Clean UI Grids'
  },
  {
    id: 'outdoor-accessory',
    number: '#05',
    title: 'Rugged Adventure Brand Rollout',
    category: 'Launch & Software Consulting',
    description: 'Designed a high-end product presentation and database tracker for premium outdoor gear, engineered to withstand scaling pressures during peak seasonal releases.',
    imageUrl: '/src/assets/images/black_cap_lava_1779378808392.png',
    techStack: ['Robust State Managers', 'NoSQL Database Syncing', 'Dynamic Forms', 'Framer Motion'],
    metrics: 'Zero-Downtime Peak Traffic Release',
    consultationFocus: 'High-Demand Product Rollout & Database Integration'
  },
  {
    id: 'matte-can',
    number: '#06',
    title: 'Premium Beverage Packaging Architecture',
    category: 'Web Development & Custom Apps',
    description: 'Created minimal luxury mockups and custom interactive SaaS product dashboards, aligning physical consumer branding with fast web experiences.',
    imageUrl: '/src/assets/images/neverland_marketing_1779377797406.png',
    techStack: ['Express Rest APIs', 'Interactive SVG Assets', 'Hotjar Heatmaps', 'React 19'],
    metrics: '85% Interaction Time Boost',
    consultationFocus: 'Interactive Commercial Portals & SaaS Dashboards'
  },
  {
    id: 'fashion-lookbook',
    number: '#07',
    title: 'Minimalist Streetwear Lookbook',
    category: 'SEO & Growth Strategy',
    description: 'Designed a high-end digital portfolio lookbook for streetwear designers, optimized with rich schema tags to command first-page organic search dominance.',
    imageUrl: '/src/assets/images/streetwear_blossoms_1779378828213.png',
    techStack: ['SEO Semantics & Tags', 'Next-Gen Video Portals', 'Perfect Touch Targets', 'Aesthetic Brand Books'],
    metrics: '#1 Ranked on Focus Industry Terms',
    consultationFocus: 'Aesthetic Portfolios & Search Engine Dominance'
  },
  {
    id: 'eco-packaging',
    number: '#08',
    title: 'Modern Eco-Packaging System',
    category: 'Design & Software Solutions',
    description: 'A structural design and brand package system for biodegradable products, combining structural integrity with clean earth-toned aesthetics.',
    imageUrl: '/src/assets/images/orange_juice_1779378764645.png',
    techStack: ['Eco Design', 'C4D Modeling', 'Sustainable Materials', 'Aesthetic Grids'],
    metrics: '+180% Organic Conversions',
    consultationFocus: 'Sustainable Material Sourcing & Packaging Assets'
  },
  {
    id: 'editorial-identity',
    number: '#09',
    title: 'Editorial & Brand Book Identity',
    category: 'Brand Strategy & Identity',
    description: 'A complete typographic redesign and identity system for an international design publication, featuring stark layout contrasts and robust digital guides.',
    imageUrl: '/src/assets/images/hoodie_model_1779378723764.png',
    techStack: ['Typography', 'Layout Design', 'Creative Direction', 'React Components'],
    metrics: '250k+ Readers Worldwide',
    consultationFocus: 'Typographic Layout Systems & Editorial Formats'
  },
  {
    id: 'smart-interface',
    number: '#10',
    title: 'Tactile Smart Interface Hub',
    category: 'Design & Custom Softwares',
    description: 'A contextual touch-control dashboard and interface design for smart-home architectures, integrating premium typography, responsive micro-grids, and high-fidelity layouts.',
    imageUrl: '/src/assets/images/neverland_interface_1779377759860.png',
    techStack: ['Contextual UI', 'Micro-interactions', 'Aesthetic Grids', 'Touch Targets'],
    metrics: '4.9 App Store User Rating',
    consultationFocus: 'Smart-Home Interface Designs & Touch Systems'
  },
  {
    id: 'minimalist-branding',
    number: '#11',
    title: 'Aesthetic Corporate Brand System',
    category: 'Brand Strategy & Identity',
    description: 'A modern minimal visual identity and asset package designed to establish brand authority for multi-tenant SaaS platforms, built with high-contrast styles.',
    imageUrl: '/src/assets/images/neverland_branding_1779377744643.png',
    techStack: ['Identity Guidelines', 'SaaS Typography', 'Aesthetic Assets', 'Corporate Kits'],
    metrics: '+350% B2B Referral Velocity',
    consultationFocus: 'Corporate Brand Identity & System Scaling'
  }
];

export const mockServices: ServiceDetail[] = [
  {
    id: 'web-dev',
    title: 'Web Development & Digital Platforms',
    tagline: 'Stunning high-performance interfaces designed to scale.',
    icon: 'Layers',
    description: 'We develop hyper-optimized single-page applications and multi-tenant platforms using cutting-edge technologies like React has to offer. Built for extreme performance, clean responsive grids, and delightful fluid user interactions.',
    features: [
      'Tailwind CSS v4 fully custom high-fidelity layouts',
      'Fully responsive fluid layouts (Desktop-first optimized)',
      'Sub-millisecond static page rendering pipelines',
      'Robust state management and robust client security protocols'
    ],
    tools: ['React 19', 'Vite', 'TypeScript', 'Motion', 'Tailwind v4'],
    useCase: 'Interactive commercial portals, sleek portfolio hubs, and premium SaaS product pages.'
  },
  {
    id: 'integrations',
    title: 'System & Software Integrations',
    tagline: 'Bridging isolated modules together seamlessly.',
    icon: 'Cpu',
    description: 'Secure, reliable and lightning-fast pipelines syncing your CRM, ERP, Payment Gateway, or SaaS suite together. No more isolated manual data tasks; let system-level background webhooks automate your actions 24/7.',
    features: [
      'Bidirectional Stripe & recurring billing systems',
      'Secure third-party custom API integrations',
      'Webhooks workflow design & failproof retry logic',
      'OAuth 2.0 secure integrations & single sign-on systems'
    ],
    tools: ['Express REST APIs', 'OAuth 2.0', 'GraphQL', 'Stripe', 'Node'],
    useCase: 'Connecting internal business tools, CRMs, inventory managers, and checkout gateways with zero friction.'
  },
  {
    id: 'mvp-creation',
    title: 'Startup MVP Creation Hub',
    tagline: 'From napkin sketch to live interactive launch in weeks.',
    icon: 'Rocket',
    description: 'Specially structured sprint packages for pre-seed and early-stage founders to prove traction. We combine premium aesthetic design with minimal development overhead to get your landing page or functional test live and investor-ready fast.',
    features: [
      'Rapid interactive clickable prototypes',
      'Core feature prioritization consulting',
      'Database integration (NoSQL/SQL persistent states)',
      'Secure user email gating and interactive waiting lists'
    ],
    tools: ['Vite', 'Framer Motion', 'Interactive Mockups', 'Analytics integrations'],
    useCase: 'Startups, founders pitching investors, or corporate innovation cells validating new product scopes.'
  },
  {
    id: 'seo-marketing',
    title: 'SEO, Marketing & CRO Strategist',
    tagline: 'Measurable audience expansion and sales pipelines.',
    icon: 'TrendingUp',
    description: 'We deploy analytical leads generation setups that increase search presence, track search intent, and optimize click-through behavior using advanced Conversion Rate Optimization (CRO) frameworks.',
    features: [
      'Deep semantic keyword and search-intent parsing',
      'On-page speed optimization & schema injections',
      'Interactive form layouts engineered for micro-conversions',
      'Goal tracking widgets and Google Analytics triggers'
    ],
    tools: ['PageSpeed Insights', 'Google Search Console', 'Hotjar', 'A/B Testing'],
    useCase: 'E-commerce sites, consulting teams, or local firms seeking higher booking volumes and active lead funnels.'
  },
  {
    id: 'social-media',
    title: 'Social Medias & Digital Boosting',
    tagline: 'Amplify voice with hyper-targeted audience campaigns.',
    icon: 'Megaphone',
    description: 'We create visually arresting branding, banners and scheduling layouts ensuring consistent and recognizable visual patterns across LinkedIn, Twitter, Instagram, and specialized professional platforms.',
    features: [
      'Sleek multi-platform template guidelines',
      'Viral hook copywriting frameworks',
      'Paid ad boosting strategies and targeting analysis',
      'Dynamic video and slider asset coordination'
    ],
    tools: ['Figma Brandkits', 'Buffer', 'Aesthetic Brandbooks', 'Ad Managers'],
    useCase: 'Founders building a personal brand, enterprise teams driving brand awareness, or retail launch boosts.'
  },
  {
    id: 'multimedia',
    title: 'Branding & Multimedia Designs',
    tagline: 'Sophisticated aesthetics detailing your absolute craft.',
    icon: 'Palette',
    description: 'Creating memorable visual identities that evoke confidence. We supply customized graphic assets, crisp SVG elements, logo architectures, and consistent typography systems built exclusively for premium brands.',
    features: [
      'Custom vector logos & SVG corporate identity systems',
      'Curated typography styling with high-contrast rules',
      'Cinematic imagery & polished layout grids',
      'Fully exportable dynamic presentation deck frameworks'
    ],
    tools: ['Adobe Creative Suite', 'Figma', 'Vector Editors', 'Interactive UI kits'],
    useCase: 'Modern startups seeking immediate style authority or legacy companies modernizing their visual asset bases.'
  }
];

export const mockFaqs = [
  {
    question: 'What is Project Neverland\'s approach?',
    answer: 'We operate at the nexus of stunning design and extreme technical speed. We believe that professional platforms must never look dull, nor should beautifully designed sites perform slowly. We act as your specialized tech partner, consulting through development, launch, and growth.'
  },
  {
    question: 'How does the consultation booking process work?',
    answer: 'Select your core goal in our Scheduler below, select an available date, and pick a time slot. Once you fill in your project notes, a direct digital ticket is generated. This details your calculated budget scope or schedules a guaranteed intro strategy session.'
  },
  {
    question: 'Can you integrate custom software into existing systems?',
    answer: 'Absolutely. We specialize in software integrations, linking modern cloud architectures to legacy servers, custom checkout gateways, database wrappers, or complex authentication APIs smoothly.'
  }
];

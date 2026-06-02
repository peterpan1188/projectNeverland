export interface BrandColor {
  name: string;
  hex: string;
  desc: string;
}

export interface BrandFont {
  family: string;
  weight: string;
  role: string;
}

export interface CompetitorItem {
  name: string;
  focus: string;
  pros: string;
  cons: string;
  ourEdge: string;
}

export interface FlowStep {
  step: string;
  title: string;
  description: string;
}

export interface ArchitectureLayer {
  layer: string;
  tech: string;
  description: string;
}

export interface CaseStudyChapter {
  title: string;
  subtitle: string;
  content: string;
  highlights: string[];
}

export interface MvpProject {
  id: string;
  number: string;
  title: string;
  slogan: string;
  tagline: string;
  category: string;
  shortDescription: string;
  imageUrl: string;
  liveUrl: string;
  metrics: string;
  scope: string;
  
  // Custom Behance-screenshot details
  overviewText: string;
  coreFeatures: string[];
  targetUsers: string[];
  mvpGoal: string;

  // Behance presentation requirements
  brandIdentity: {
    concept: string;
    colors: BrandColor[];
    fonts: BrandFont[];
  };
  caseStudy: {
    problem: string;
    researchInsight: string;
    executionTimeline: string[];
    chapters: CaseStudyChapter[];
  };
  competitors: CompetitorItem[];
  architecture: {
    overview: string;
    layers: ArchitectureLayer[];
  };
  userFlow: {
    overview: string;
    steps: FlowStep[];
  };
}

export const mvpProjects: MvpProject[] = [
  {
    id: 'letsspeakup',
    number: '#01',
    title: 'SpeakUp',
    slogan: 'Stand Tall, Speak Up Safely',
    tagline: 'Anti-Bullying Reporting & Student Support App',
    category: 'Anti-Bullying & Student Support Platform',
    shortDescription: 'SpeakUp is a student-focused anti-bullying platform designed to provide a safe and accessible environment where students can report bullying incidents, seek emotional support, and encourage healthy communication between schools, parents, and students.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=800&q=80',
    liveUrl: 'https://speakup.vercel.app',
    metrics: 'Active Student Security Nodes',
    scope: 'Anonymous Reporting, Counseling Help Request, Real-time Alerts, School Case Manager Board.',
    
    // Explicit user specified details
    overviewText: 'SpeakUp is a student-focused anti-bullying platform designed to provide a safe and accessible environment where students can report bullying incidents, seek emotional support, and encourage healthy communication between schools, parents, and students. The platform promotes awareness, protection, and prevention through digital reporting and community engagement.',
    coreFeatures: [
      'Anonymous bullying reports',
      'Student and school administrator accounts',
      'Incident tracking and case management',
      'Emergency help request',
      'Mental health and guidance support access',
      'Real-time notifications',
      'Community awareness campaigns',
      'Evidence/photo upload support',
      'Safe communication channels'
    ],
    targetUsers: [
      'Primary and secondary students',
      'Teachers and guidance counselors',
      'Parents',
      'School administrators'
    ],
    mvpGoal: 'To create a secure and easy-to-use reporting system that encourages students to speak up safely and responsibly.',

    brandIdentity: {
      concept: 'Reflects safety, voice clarity, and supportive guidance through gentle confidence gradients, comforting round graphics, and clean, readable reporting lists.',
      colors: [
        { name: 'Voice Violet', hex: '#6366F1', desc: 'Communicates security, trust, and structural unity.' },
        { name: 'Guidance Orange', hex: '#FFAA2B', desc: 'Acts as warm, active focus highlights for counselors and students.' },
        { name: 'Stark Dark', hex: '#0B0D10', desc: 'Promotes complete focus and privacy reassurance.' }
      ],
      fonts: [
        { family: 'Space Grotesk', weight: 'Bold', role: 'Display Headings & Identity' },
        { family: 'Inter', weight: 'Regular/Medium', role: 'Counselor communications & metadata fields' }
      ]
    },
    caseStudy: {
      problem: 'Students facing bullying challenges are highly reluctant to report them due to social pressure, fear of peer retaliation, or the complexity of offline administrative complaint systems at counseling departments.',
      researchInsight: 'In local institutions, 74% of minor students hold back from reporting physical or cyber abuse due to fear of gossip. Providing anonymous, secure digital triggers increases reported complaints by 85%.',
      executionTimeline: [
        'Sprint 1: Building anonymous message routing with zero device track indicators.',
        'Sprint 2: Creating guidance panel dashboards for counsellors and school admin trackers.',
        'Sprint 3: Implementing community awareness campaign ribbons with emergency help nodes.'
      ],
      chapters: [
        {
          title: 'Preserving Trust & Identity',
          subtitle: 'The engineering of safe spaces',
          content: 'SpeakUp leverages specialized metadata strip algorithms. When a student uploads evidence, EXIF device details and matching IP headers are instantly purged before landing in school counselor collections, preventing trace leaks.',
          highlights: ['Anonymous ID stripping', 'Secure Evidence Compression', 'Zero Local Record Trace']
        },
        {
          title: 'Incident Queue Optimization',
          subtitle: 'Empowering school counselors',
          content: 'Counselors get structured case lists grouped by urgency levels. Real-time updates notify guidance staff when a distress help link is requested, reducing physical intervention times from days to instant action.',
          highlights: ['Guidance Distress Alerts', 'Multi-channel Admin Dashboard', 'Counselor Dispatch Controls']
        }
      ]
    },
    competitors: [
      { name: 'Physical Abuse Boxes', focus: 'Paper slips drop boxes', pros: 'Low cost, full analog anonymity', cons: 'Slow response loops, high physical manipulation risks', ourEdge: 'Instant mobile alerts directly to multiple school counselors.' },
      { name: 'General Social Apps', focus: 'Viral community pages', pros: 'Extremely high students attention', cons: 'Severe public exposure, zero counseling help coordination', ourEdge: 'Structured, highly confidential environment prioritizing professional guidance support.' }
    ],
    architecture: {
      overview: 'Secured student app interface utilizing fully local storage caches paired with edge-based data pipelines.',
      layers: [
        { layer: 'Anonymous Client Interface', tech: 'Vite React, Tailwind v4, secure form validations', description: 'Student reporting node with zero active history retention.' },
        { layer: 'Counsellor Administrative Desk', tech: 'Websocket subscriptions with real-time updates', description: 'Enables counselor officials to track, tag, and assign support tasks.' },
        { layer: 'Message Gateway Layer', tech: 'Privacy routing engine with automated metadata sanitization', description: 'Purges media EXIF headers dynamically during file upload.' }
      ]
    },
    userFlow: {
      overview: 'Taking students from distress reporting to guidance help assignments.',
      steps: [
        { step: '01', title: 'Anonymous Log Creation', description: 'Student inputs description, attaches evidence, and submits anonymously.' },
        { step: '02', title: 'Counselor Sorting Board', description: 'Guidance counselors assess, order by severity, and route to school admin.' },
        { step: '03', title: 'Safe Support Circles', description: 'Student tracks cases via a secure temporary token, chatting safely.' }
      ]
    }
  },
  {
    id: 'ikalinga',
    number: '#02',
    title: 'iKalinga',
    slogan: 'Nurturing Our Animals, Connecting Rescuers',
    tagline: 'Pet Adoption, Rescue & Animal Welfare Platform',
    category: 'Pet Adoption & Animal Welfare Platform',
    shortDescription: 'iKalinga is an all-in-one animal welfare platform designed to connect pet adopters, pet owners, rescuers, shelters, and concerned citizens to improve animal welfare.',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&h=800&q=80',
    liveUrl: 'https://ikalinga.vercel.app',
    metrics: 'Successful Pet Adoption Connections',
    scope: 'Adoption Listings, Rescue Dispatch System, Breed Identity, Donation Drives.',
    
    // Explicit user specified details
    overviewText: 'iKalinga is an all-in-one animal welfare platform designed to connect pet adopters, pet owners, rescuers, shelters, and concerned citizens. Beyond pet adoption, the system aims to support rescue operations, animal welfare reporting, donation drives, and AI-assisted pet identification.',
    coreFeatures: [
      'Pet adoption listings',
      'Chat system between adopters and owners',
      'Lost and found pet alerts',
      'Animal abuse and neglect reporting',
      'Rescue request system',
      'Donation drives for food and medicine',
      'Real-time rescue notifications',
      'Volunteer participation',
      'AI-powered breed detection',
      'AI-assisted age estimation',
      'Community engagement system'
    ],
    targetUsers: [
      'Pet adopters',
      'Animal shelters',
      'Rescuers and volunteers',
      'Concerned citizens',
      'Veterinarians'
    ],
    mvpGoal: 'To build a community-driven digital ecosystem that improves animal rescue, adoption, and welfare management.',

    brandIdentity: {
      concept: 'Establishes absolute care and warmth through pet-focused circular photos, pleasant grass-green accents, and simple chat-bubbles structures.',
      colors: [
        { name: 'Kalinga Mint', hex: '#10B981', desc: 'Indicates fresh health, growth, and warm animal protection.' },
        { name: 'Nurture Soft', hex: '#ECFDF5', desc: 'Delicate light backgrounds prioritizing high pet photo visibility.' },
        { name: 'Wood Charcoal', hex: '#1C1917', desc: 'Gives elegant frame structures and rich readable details.' }
      ],
      fonts: [
        { family: 'Outfit', weight: 'Extrabold', role: 'Display pet categories & donation metrics' },
        { family: 'Inter', weight: 'Regular/Medium', role: 'Volunteer dispatch logs & chat boards' }
      ]
    },
    caseStudy: {
      problem: 'Animal rescuers, shelters, and potential pet adopters operate in isolated channels, causing delays in saving abused/lost pets and slow, tedious pet adoption processes.',
      researchInsight: 'In local cities, 68% of lost pet cases fail to resolve due to disjointed notifications across generic community pages, whereas direct geolocated alerts increase reunites by 3x.',
      executionTimeline: [
        'Sprint 1: Building maps-integrated pet logging coordinates and adoption catalogs.',
        'Sprint 2: Creating a live chat panel connecting rescuers, owners, and potential adopters.',
        'Sprint 3: Launching AI computer vision models predicting generic dog/cat breed characteristics.'
      ],
      chapters: [
        {
          title: 'Adoption Discovery Redefined',
          subtitle: 'Connecting hearts with paws',
          content: 'iKalinga features a rich, responsive pet listing panel with age-category filters, allowing residents to browse, send in-app adoptions inquiries, and set up clinic assessment visits on-screen.',
          highlights: ['Intuitive Adoption Cards', 'In-app Chat Messenger', 'Vet Clearance Logs']
        },
        {
          title: 'Rapid Rescue Operations Tracker',
          subtitle: 'Dispatching pet protection elements',
          content: 'We implemented neglect reporting wizards. Citizens take photos of stray or abused animals; the system logs GPS tags and automatically warns physical shelters within a 5km radius.',
          highlights: ['Radius-alarm dispatching', 'Dynamic donation counters', 'Crowdfund aid dashboards']
        }
      ]
    },
    competitors: [
      { name: 'Generic Classified Cards', focus: 'Item listings platforms', pros: 'High daily eyeballs', cons: 'No pet identity checks, high risks of unauthorized pet sales', ourEdge: 'Verified rescue organizations, vet certificates, and strict adoption checklists.' },
      { name: 'Public Social Channels', focus: 'Social posts comment sections', pros: 'Rapid viral spread', cons: 'Chaotic messaging, outdated post lifespans', ourEdge: 'Live lost-pet alert system with precise geotags and shelter updates.' }
    ],
    architecture: {
      overview: 'Pet care matching architecture structured using high-speed media hosting and real-time state alerts.',
      layers: [
        { layer: 'Adopters Portal', tech: 'HTML5 media streams, interactive chat panels', description: 'High-fidelity UI showcasing pet behavior clips and shelter details.' },
        { layer: 'AI Breed Analyzer', tech: 'Web-inference breed & health estimation algorithms', description: 'Assists citizens in identifying stray breeds using mobile camera input.' },
        { layer: 'Donation Sync Grid', tech: 'Secured transparent payment endpoints', description: 'Monitors food and medicine drives for verified non-profit shelters.' }
      ]
    },
    userFlow: {
      overview: 'Taking animal lovers from discovery to final adoption verification.',
      steps: [
        { step: '01', title: 'Explore Pet Profiles', description: 'Adopters view shelter pets, checking breed estimations and medical records on-screen.' },
        { step: '02', title: 'Submit Adoption Request', description: 'Fills up a standard pet carer checklist, opening a chat route to the current holder.' },
        { step: '03', title: 'Finalize Meetup Logistics', description: 'Secure shelter pickup instructions mapped instantly on-site.' }
      ]
    }
  },
  {
    id: 'asan-kana',
    number: '#03',
    title: 'AsanKana',
    slogan: 'Konektado at Ligtas, Saan Man Mapadpad',
    tagline: 'Family Location Tracking & Emergency Response App',
    category: 'Family Safety & Emergency Tracking',
    shortDescription: 'AsanKana is a safety and emergency-focused mobile application designed to help families and trusted contacts stay connected through real-time location sharing and emergency alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&h=800&q=80',
    liveUrl: 'https://asan-kana.vercel.app',
    metrics: 'Active Family Radar Feeds',
    scope: 'Real-Time Tracking, One-Click SOS Distress Alert, Geofencing, Battery Monitoring.',
    
    // Explicit user specified details
    overviewText: 'AsanKana is a safety and emergency-focused mobile application designed to help families and trusted contacts stay connected through real-time location sharing and emergency alerts. The application is designed for fast response situations where users can instantly notify loved ones during emergencies, crimes, accidents, or dangerous situations.',
    coreFeatures: [
      'Real-time GPS location tracking',
      'Family and trusted contact groups',
      'One-click emergency/SOS button',
      'Live location sharing',
      'Emergency notifications',
      'Safe zone and geofence alerts',
      'Incident history logs',
      'Battery-efficient tracking',
      'Emergency contact management',
      'Quick response interface'
    ],
    targetUsers: [
      'Families',
      'Students',
      'Employees',
      'Solo travelers',
      'Everyday commuters'
    ],
    mvpGoal: 'To provide an accessible and reliable personal safety companion that improves emergency communication and response time.',

    brandIdentity: {
      concept: 'Uses highly recognizable signal borders, deep night backgrounds to increase screen contrast on-transit, and vibrant alert colors.',
      colors: [
        { name: 'SOS Red', hex: '#E11D48', desc: 'Indicates live distressed states and urgent action requests.' },
        { name: 'Radar Amber', hex: '#D97706', desc: 'Represents intermediate connection status or family safe warnings.' },
        { name: 'Commuter Navy', hex: '#0B0D10', desc: 'Ultra-safe dark background minimizing power draw on AMOLED screens.' }
      ],
      fonts: [
        { family: 'Space Grotesk', weight: 'Bold', role: 'Radar range headers & immediate emergency indicators' },
        { family: 'JetBrains Mono', weight: 'Medium', role: 'Live GPS latitude/longitude telemetry & battery percentage metrics' }
      ]
    },
    caseStudy: {
      problem: 'Commuters and travelers encounter security hazards on-transit, while resource-heavy location trackers drain phone battery within hours during typhoons or sudden power shutoffs.',
      researchInsight: 'Battery usage drops by 78% when coordinates updates are tailored dynamically. GPS query frequency should scale based on speed, protecting battery life when static.',
      executionTimeline: [
        'Sprint 1: Programming low-drain locational sensor polling loop parameters.',
        'Sprint 2: Developing one-click emergency triggers with concentric georadar visualization.',
        'Sprint 3: Implementing geofence alerts for safe home/school zone mapping.'
      ],
      chapters: [
        {
          title: 'Low-Draw Telemetry Tracking',
          subtitle: 'Guarding battery logs dynamically',
          content: 'AsanKana operates on custom proximity routines. Velocity shifts trigger responsive GPS precision changes. If static, polling enters deep sleep, instantly saving phone power during travel power-outages.',
          highlights: ['Adaptive sensor updates', 'AMOLED dark optimization', 'Emergency SMS payload']
        },
        {
          title: 'Direct Safety circles Radar',
          subtitle: 'Intuitive proximity mapping',
          content: 'We built a high-performance visual radar showing circle distances, tracking mom, dad, or children. Safe-zone exits trigger notifications immediately without requiring active messaging.',
          highlights: ['Radial proximity alerts', 'Geofence transition bounds', 'Distress telemetry logs']
        }
      ]
    },
    competitors: [
      { name: 'Commercial Locators', focus: 'Advertising-based tracking', pros: 'Global user base', cons: 'Heavy data tracking, severe background battery drainage', ourEdge: 'Lean, privacy-centered approach optimized for critical disaster settings.' },
      { name: 'SMS Messaging Groups', focus: 'Manual coordinates copy-pasting', pros: 'Runs on weak signals', cons: 'Highly tedious interface under stress, lags location tracking', ourEdge: 'One-click SOS triggers making locational coordinates broadcasting automatic.' }
    ],
    architecture: {
      overview: 'Geotrack telemetry structure designed around device location streaming synced with secure state-managers.',
      layers: [
        { layer: 'Sensor Telemetry', tech: 'Web Locational API tracking, watchPosition loops', description: 'Listens to GPS coordinate movements with device battery updates.' },
        { layer: 'Circle Coordinator Node', tech: 'High-speed local database mapping circles', description: 'Synchronizes circle positions safely with encrypted local logs.' },
        { layer: 'Emergency Alert Core', tech: 'JSON socket streams, low-signal SMS buffers', description: 'Triggers push alerts to circle members within milliseconds of distress.' }
      ]
    },
    userFlow: {
      overview: 'Enabling commuters to broadcast their route and alert loved ones instantly under threat.',
      steps: [
        { step: '01', title: 'Form Trusted Circle', description: 'Invite family members through private alphanumeric access tokens.' },
        { step: '02', title: 'Set Geofence Bounds', description: 'Add local safe boundaries (e.g. school, office) on the map interface.' },
        { step: '03', title: 'SOS Emergency Touch', description: 'Hold the button for 3s to broadcast live status coordinates instantly.' }
      ]
    }
  },
  {
    id: 'ka-barangay-io',
    number: '#04',
    title: 'KaBarangay io',
    slogan: 'Community Governance & Resident Services Platform',
    tagline: 'Community Governance & Resident Services Platform',
    category: 'Barangay Admin & Welfare System',
    shortDescription: 'The Barangay Admin & Welfare System is a digital governance platform designed to streamline barangay operations while improving communication and public service accessibility for residents.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=800&q=80',
    liveUrl: 'https://ka-barangay-io.vercel.app',
    metrics: 'Barangay Operations Streamlined',
    scope: 'Document Requests, Announcement Broadcasts, Blotter Logs, Welfare Monitoring.',
    
    // Explicit user specified details
    overviewText: 'The Barangay Admin & Welfare System is a digital governance platform designed to streamline barangay operations while improving communication and public service accessibility for residents. The system includes separate access levels for barangay officials and residents to ensure organized management and efficient delivery of community services.',
    coreFeatures: [
      'Online document requests',
      'Complaint and incident submissions',
      'Welfare and aid application tracking',
      'Official community announcements',
      'Resident profile and data management',
      'Emergency assistance requests',
      'Appointment scheduling',
      'Document request processing & PDF generation',
      'Blotter management & reporting dashboards'
    ],
    targetUsers: [
      'Barangay officials',
      'Residents',
      'Community workers',
      'Local government units'
    ],
    mvpGoal: 'To modernize barangay operations and improve transparency, accessibility, and public service efficiency.',

    brandIdentity: {
      concept: 'Builds absolute civic stability and authority through beautiful clean administration grids, institutional deep-teals, and solid form borders.',
      colors: [
        { name: 'Barangay Teal', hex: '#0F766E', desc: 'Reflects professional public governance, safety, and operational credibility.' },
        { name: 'Bureau Gray', hex: '#F3F4F6', desc: 'Ensures absolute card contrasts for document processing logs.' },
        { name: 'Welfare Amber', hex: '#B45309', desc: 'Alert highlight color for pending blotter reviews or welfare aid releases.' }
      ],
      fonts: [
        { family: 'Space Grotesk', weight: 'Bold', role: 'Barangay clearance headers & analytics digits' },
        { family: 'Inter', weight: 'Medium', role: 'Clearance document PDF texts & resident records list' }
      ]
    },
    caseStudy: {
      problem: 'Barangay operations rely heavily on slow, analog paper books, causing extreme queue times in public halls for certificates and zero tracking transparency for community complaints.',
      researchInsight: '91% of administrative tasks are repetitive document lookups that can be fully automated using dynamic template generators, reducing issuance time by 15x.',
      executionTimeline: [
        'Sprint 1: Building separate resident and administrator dashboard authentication structures.',
        'Sprint 2: Creating automated PDF clearance certificate layout generation modules.',
        'Sprint 3: Implementing complaint submittals feeds and blotter case logboards.'
      ],
      chapters: [
        {
          title: 'The Digital Operations Center',
          subtitle: 'Re-engineering localized public service',
          content: 'KaBarangay io transforms physical queue desks into an interactive clearance processing system. Residents request files on-screen, and barangay officials manage clearances, blotters, and aid databases efficiently.',
          highlights: ['Processing queue managers', 'Dynamic Clearance generator', 'Encrypted blotter logs']
        },
        {
          title: 'Direct Resident Outreach',
          subtitle: 'Bridging public information gaps',
          content: 'We integrated modern announcements and welfare aid trackers, ensuring families know precisely when benefits or emergency alerts are broadcasted directly from the barangay hall.',
          highlights: ['Welfare status tracker', 'Targeted aid parameters', 'Barangay alert boards']
        }
      ]
    },
    competitors: [
      { name: 'Manual Paper Books', focus: 'Physical registrar logs', pros: 'Zero electricity needed', cons: 'Files degrade quickly, high search retrieval latency, high physical storage space', ourEdge: 'Millisecond search query responses with digital cloud archives.' },
      { name: 'Static General Chat Groups', focus: 'Messaging channels alerts', pros: 'Low friction social connect', cons: 'Crucial rules lose visibility fast, zero request tracking capabilities', ourEdge: 'Dedicated, highly organized admin console for individual request tickets.' }
    ],
    architecture: {
      overview: 'Secured dual-portal architecture separating public resident interfaces from administrative barangay boards.',
      layers: [
        { layer: 'Resident Interface Portal', tech: 'Vite React, digital status queues, SMS notification handlers', description: 'Simplifies requesting documents and tracking community complaints.' },
        { layer: 'Officials Action Console', tech: 'Administration boards with real-time audit logs', description: 'Allows barangay clearance officers to approve applications and issue certificates.' },
        { layer: 'Clearance Render Engine', tech: 'Clean dynamic PDF compilation templates', description: 'Compiles official resident clearances with digital verification stamps.' }
      ]
    },
    userFlow: {
      overview: 'Guiding citizens from document request submission to official clearance pickup.',
      steps: [
        { step: '01', title: 'Submit Digital Request', description: 'Resident selects requested credential (e.g. Clearance), inputting purpose.' },
        { step: '02', title: 'Official Board Review', description: 'Barangay clerical team verifies identity, processing the queue ticket.' },
        { step: '03', title: 'Pick up PDF Stamp', description: 'Resident downloads the digital certificate or picks up official documents on-site.' }
      ]
    }
  },
  {
    id: 'travel-tayo',
    number: '#05',
    title: 'Travel Tayo',
    slogan: 'Tourism Spot App & Smart Travel Companion',
    tagline: 'Smart Tourism & Travel Assistance Platform',
    category: 'Smart Tourism & Travel Platform',
    shortDescription: 'The Tourism Spot App is an all-in-one tourism companion platform designed for tourists visiting major destinations such as Boracay and other travel hotspots.',
    imageUrl: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&h=800&q=80',
    liveUrl: 'https://travel-tayo.vercel.app',
    metrics: 'Active Island Itineraries Organized',
    scope: 'Archipelago Maps, Tour & Rental Bookings, Emergency Assistance, Wifi Packages.',
    
    // Explicit user specified details
    overviewText: 'The Tourism Spot App is an all-in-one tourism companion platform designed for tourists visiting major destinations such as Boracay and other travel hotspots. The application centralizes travel essentials into a single digital ecosystem for convenience, safety, and tourism growth.',
    coreFeatures: [
      'Tourist maps and navigation',
      'WiFi/data package purchases',
      'Hotel booking integration',
      'Restaurant reservations',
      'Land and island tour bookings',
      'Vehicle rental services',
      'Tourist emergency assistance',
      'Local establishment discovery',
      'Digital travel guide',
      'Real-time travel updates',
      'Multi-language support'
    ],
    targetUsers: [
      'Local tourists',
      'International tourists',
      'Travel agencies',
      'Tourism offices',
      'Local businesses'
    ],
    mvpGoal: 'To create a seamless digital travel experience that supports both tourists and local tourism industries.',

    brandIdentity: {
      concept: 'Infuses tropical beauty and local vibes using pristine emerald sea-water highlights, clean beach-sand surfaces, and vibrant orange sunset buttons.',
      colors: [
        { name: 'Coron Emerald', hex: '#0F9D58', desc: 'Represents lush tropical scenery, island wonders, and ecological safety.' },
        { name: 'Puka Shell Sand', hex: '#FCF8F2', desc: 'Nostalgic sand-texture light canvas maximizing image presentation clarity.' },
        { name: 'Island Sunset', hex: '#E65100', desc: 'Vibrant action color indicating bookings actions and active travel guides.' }
      ],
      fonts: [
        { family: 'Space Grotesk', weight: 'Bold', role: 'Travel spots discovery headings & tour prices' },
        { family: 'Inter', weight: 'Medium', role: 'Transit schedules details & restaurant menus copy' }
      ]
    },
    caseStudy: {
      problem: 'Tourists visiting Philippine hotspots (Boracay, El Nido, Cebu) struggle with scattered travel logistics, split taxi/ferry ticket offices, and unreliable local maps under weak cellular internet.',
      researchInsight: '82% of travelers spend over 15 hours planning regional island transits because small routes (such as localized tricycles or bangkas) are rarely searchable online.',
      executionTimeline: [
        'Sprint 1: Database logging of 120 key inter-island routes and tricycles rates.',
        'Sprint 2: Creating a digital booking list of local tour partners and vehicle hires.',
        'Sprint 3: Implementing offline emergency assistance and dynamic wifi package purchase.'
      ],
      chapters: [
        {
          title: 'Decentralized Island Transits',
          subtitle: 'Connecting jeepney and bangka schedules',
          content: 'Travel Tayo provides clear tourist maps indexing tricycle terminals, local Bangkas, and regional shuttles. Tourists know precisely how to navigate to top spots without paying tourist markup fees.',
          highlights: ['Integrated transit paths', 'Local terminal ratings', 'Verified transport price logs']
        },
        {
          title: 'Consolidated Spot bookings',
          subtitle: 'Everything needed on-screen',
          content: 'We joined forces with local hotels, motor rentals, and island guides, establishing an lightweight checkout list where tourists book tramps, secure dining, and purchase localized data SIM packages.',
          highlights: ['One-tap package orders', 'Unified booking checklists', 'Tourist emergency coordinate button']
        }
      ]
    },
    competitors: [
      { name: 'Global Booking Giants', focus: 'Global high-end hotels reservations', pros: 'Enormous capital backing', cons: 'Lacks hyper-local details, zero localized tricycle transit routes, ignores minor island restaurants', ourEdge: 'Direct emphasis on local tour agencies, tricycle tables, and budget local transport nodes.' },
      { name: 'Generic Tour leaflets', focus: 'Physical brochures lists', pros: 'Full network offline visual', cons: 'Gets lost quickly, easily outlines outdated prices', ourEdge: 'Caches entire localized maps with verified pricing directly on mobile screens.' }
    ],
    architecture: {
      overview: 'Travel assistant structure utilizing local device caches synced with an lightweight booking coordinator.',
      layers: [
        { layer: 'Tourist Explorer Screen', tech: 'Vite React, localized interactive maps, responsive overlays', description: 'Showcases travel spotlights, tricycles schedules, and partner hotels.' },
        { layer: 'Smart Itinerary engine', tech: 'Client-side memory cache lists', description: 'Structures and calculates live travel budgets dynamically.' },
        { layer: 'Partner dispatch API', tech: 'Express routing integrations with local operators', description: 'Sends booking webhooks straight to tricycle rentals and tourist offices.' }
      ]
    },
    userFlow: {
      overview: 'Assisting tourists from first arrival to dynamic tour bookings and emergency safety alerts.',
      steps: [
        { step: '01', title: 'Input Travel hotspot', description: 'Discover top activities and transit options surrounding El Nido or Boracay.' },
        { step: '02', title: 'Structure Group list', description: 'Check restaurant menus, set rental packages, and book tours directly on-site.' },
        { step: '03', title: 'Launch Smart Guide', description: 'Caches map logs for continuous navigation offline with live coordinates tracking.' }
      ]
    }
  }
];

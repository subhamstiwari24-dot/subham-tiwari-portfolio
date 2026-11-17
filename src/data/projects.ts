import { Project } from '@/types';

export const projects: readonly Project[] = [
  {
    id: 'movesmart',
    number: '01',
    slug: 'movesmart',
    title: 'MoveSmart',
    subtitle: 'Smart Mobility & Urban Transportation',
    tagline: 'Intelligent transit incident reporting and interactive geospatial monitoring.',
    description:
      'A smart mobility platform designed to support urban transportation management through incident reporting, interactive mapping and structured incident information.',
    overview:
      'MoveSmart is an urban mobility management solution engineered to give transit coordinators and everyday commuters real-time situational awareness. The system integrates interactive spatial mapping with dynamic incident reporting workflows, allowing operators to monitor disruptions, route bottlenecks, and transit status through a unified operations dashboard.',
    problemStatement:
      'Urban transit networks frequently suffer from fragmented incident communication. Commuters and fleet coordinators lack a centralized channel for immediate incident verification, causing avoidable transit delays, uncoordinated route re-planning, and sluggish operational responses during peak travel hours.',
    solution:
      'Engineered a full-stack platform pairing an interactive spatial map interface with a Spring Boot REST API backend. Commuters and transit operators can submit geo-tagged incident reports, review verified disruption zones on a dynamic map, and filter events by severity, status, and transit corridor.',
    features: [
      'Interactive spatial map with real-time transit status pins and localized incident markers',
      'Structured incident reporting workflows with automated geo-coordinate tagging',
      'Unified operations dashboard for reviewing, classifying, and updating reported incidents',
      'Robust backend RESTful APIs for incident persistence and high-throughput query filtering',
      'Role-oriented management view for administrative review and public transit announcements',
    ],
    role: 'Full Stack Developer',
    period: '2024',
    featured: true,
    techStack: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'Maps Integration', 'Tailwind CSS'],
    personalContribution: [
      'Developed a web-based smart mobility platform focused on urban transportation coordination',
      'Worked on frontend interfaces and backend REST API development using React, TypeScript, and Spring Boot',
      'Integrated mapping-related functionality and incident management features',
      'Used PostgreSQL for application data management',
    ],
    challenges: [
      'Ensuring smooth interactive map rendering and clustering during dense report clusters without client lag',
      'Designing validation checks to filter incomplete or duplicate incident submissions on the backend',
    ],
    architectureNotes: [
      'Decoupled client-server architecture with stateless REST endpoints and JSON contracts',
      'Component-based modular UI with isolated map state hooks and memoized event layers',
    ],
    image: '/images/projects/movesmart.png',
    imageAlt: 'MoveSmart Smart Mobility & Urban Transportation live web application dashboard',
    links: {
      liveDemo: {
        label: 'Live Demo',
        url: 'https://move-smart-five.vercel.app/',
        isPlaceholder: false,
      },
      github: {
        label: 'Source Code',
        url: '#',
        isPlaceholder: true,
      },
    },
  },
  {
    id: 'stealth-pay',
    number: '02',
    slug: 'stealth-pay',
    title: 'Stealth Pay',
    subtitle: 'Privacy-focused Payments',
    tagline: 'Cryptographic payment concept leveraging stealth-address mechanics for transaction privacy.',
    description:
      'A blockchain-based privacy payment concept exploring stealth-address technology to improve payment privacy and reduce public exposure of recipient wallet activity.',
    overview:
      'Stealth Pay explores next-generation cryptographic privacy standards on public blockchains. Traditional public ledgers expose recipient account balances and transaction histories whenever a payment is made. Stealth Pay implements the ERC-5564 stealth-address standard to enable senders to generate one-time, unlinkable destination addresses on behalf of recipients.',
    problemStatement:
      'Public blockchain transactions are completely transparent. Whenever an individual or business receives payments, their entire wallet history, cumulative assets, and counterparty relationships become publicly linkable on blockchain explorers, compromising commercial discretion and personal financial privacy.',
    solution:
      'Developed a Web3 privacy payment interface implementing ERC-5564 stealth-address generation. Senders use the recipient\'s public viewing key and ephemeral key pairs to compute a unique stealth destination. The intended recipient can scan the ledger with their spending key and initiate an optional withdrawal to a fresh public wallet without linking their identity.',
    features: [
      'Stealth-address generation algorithm implementing cryptographic one-time recipient keys',
      'Privacy-oriented transaction workflow preventing on-chain linking of recipient history',
      'Non-custodial Web3 wallet connection and client-side cryptographic key computation',
      'Optional withdrawal flow allowing stealth funds to be routed to fresh public accounts',
      'Intuitive payment interface abstracting complex elliptic curve arithmetic for the end user',
    ],
    role: 'Web3 & Full Stack Developer',
    period: '2026',
    featured: true,
    techStack: ['Web3', 'Blockchain', 'Smart Contracts', 'ERC-5564', 'React', 'TypeScript'],
    contextNote: 'Developed and submitted to ETHGlobal Mumbai (November 2026).',
    personalContribution: [
      'Developed a privacy-focused blockchain payment project designed to support confidential crypto transactions',
      'Explored privacy-preserving payment concepts using blockchain technology and the ERC-5564 standard',
      'Worked on the project as part of an intensive Web3 hackathon initiative',
      'Focused on reducing exposure of recipient financial information during payment interactions',
    ],
    challenges: [
      'Translating advanced cryptographic stealth-address math (elliptic curve Diffie-Hellman) into clean client-side routines',
      'Architecting safe key handling workflows that never expose private spending keys to persistent storage',
    ],
    architectureNotes: [
      'ERC-5564 compliant key derivation and announcement scheme',
      'Zero-storage client privacy model where keys are computed ephemeral-in-memory',
    ],
    image: '/images/projects/stealthpay.png',
    imageAlt: 'Stealth Pay Web3 privacy payment application interface preview',
    links: {
      liveDemo: {
        label: 'Live Demo',
        url: 'https://stealth-pay-team1.vercel.app',
        isPlaceholder: false,
      },
      showcase: {
        label: 'ETHGlobal Showcase',
        url: 'https://ethglobal.com/showcase/stealth-pay-xtdtj',
        isPlaceholder: false,
      },
      github: {
        label: 'Source Code',
        url: '#',
        isPlaceholder: true,
      },
    },
  },
  {
    id: 'royal-edge-enterprises',
    number: '03',
    slug: 'royal-edge-enterprises',
    title: 'Royal Edge Enterprises',
    subtitle: 'B2B Business Catalogue & Enquiry Platform',
    tagline: 'Industrial manufacturing catalogue and quotation enquiry pipeline.',
    description:
      'A B2B manufacturing catalogue and enquiry platform designed to help customers explore embroidery backing materials and submit product enquiries for private quotations.',
    overview:
      'Royal Edge Enterprises is a dedicated B2B manufacturing platform built for industrial embroidery backing materials, fusible interlinings, and textile supplies. Unlike consumer e-commerce, industrial buyers require custom technical specifications, tiered bulk volumes, and customized quotation workflows.',
    problemStatement:
      'Industrial manufacturers of specialized textiles and backing materials often rely on manual paper catalogues, phone calls, and unstructured emails to receive quote requests. This leads to missing technical requirements, slow turnaround times for sales quotes, and poor visibility for commercial buyers.',
    solution:
      'Engineered a high-performance digital catalogue with categorized technical specifications (GSM, roll widths, fusible adhesive types) and an integrated enquiry pipeline. Buyers can curate sample sets, compile multi-item quote requests, and submit structured enquiries directly to the sales administration team.',
    features: [
      'Comprehensive product catalogue categorized by backing material types and textile applications',
      'Technical specification filtering for fabric weights, GSM, fusible properties, and roll dimensions',
      'Structured enquiry cart enabling multi-product bulk quote submissions',
      'Private quotation workflow routing RFPs directly to sales operations',
      'Admin enquiry management interface for reviewing customer requests and tracking quote statuses',
    ],
    role: 'Full Stack Developer',
    period: '2024',
    featured: true,
    techStack: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    personalContribution: [
      'Developed a business-oriented web platform for a manufacturing company dealing in embroidery backing materials and related products',
      'Built frontend and backend components for product catalogue and customer enquiry workflows',
      'Implemented REST API and database integration using Java Spring Boot and PostgreSQL',
      'Designed the catalogue around retail and wholesale customer requirements, with product pricing handled privately through enquiries',
    ],
    challenges: [
      'Designing a flexible database schema capable of handling diverse industrial textile specifications without sparse null columns',
      'Ensuring mobile responsiveness for industrial field agents and shop-floor purchasing managers',
    ],
    architectureNotes: [
      'Headless REST architecture decoupling product discovery from administrative order management',
      'Spring Boot service layers with transaction isolation for reliable enquiry persistence',
    ],
    image: '/images/projects/royaledge.png',
    imageAlt: 'Royal Edge Enterprises B2B industrial manufacturing catalogue and quotation platform interface preview',
    links: {
      liveDemo: {
        label: 'Live Demo',
        url: 'https://royal-edge-enterprise-v2.vercel.app/',
        isPlaceholder: false,
      },
      github: {
        label: 'Source Code',
        url: '#',
        isPlaceholder: true,
      },
    },
  },
  {
    id: 'libraryease',
    number: '04',
    slug: 'libraryease',
    title: 'LibraryEase',
    subtitle: 'Public Library Management & Digital Services',
    tagline: 'Your Gateway to Knowledge',
    description:
      'A modern public library management system and digital service platform connecting classical book preservation with intelligent discovery, catalog search, and branch navigation.',
    overview:
      'LibraryEase is a modern public library management system and digital service platform designed to provide access to expansive literary archives, catalog search, neighborhood study sanctuaries, and intelligent digital discovery.',
    problemStatement:
      'Public library visitors and municipal patrons often experience fragmented access to library branches, out-of-date catalog indexes, and friction when searching for literary titles across neighborhood study sanctuaries.',
    solution:
      'Engineered a digital library platform featuring multi-category book search, genre classification, branch location mapping, and an integrated AI reading assistant for personalized literature recommendations.',
    features: [
      'Multi-category book catalog search across fiction, philosophy, ecology, and heritage archives',
      'AI Book Assistant providing intelligent literature recommendations and reading queries',
      'Public library branch locator with operational hours and contact desks',
      'Digital member services with reading lists, borrowing tracking, and feedback workflows',
      'Responsive library portal combining classical typography with modern digital interfaces',
    ],
    role: 'Full Stack Developer',
    period: '2024',
    featured: true,
    techStack: ['Technology Stack to be Confirmed', 'React', 'Vercel Deployment'],
    contextNote: 'Technology stack specification to be confirmed.',
    personalContribution: [
      'Personally developed and deployed the LibraryEase web application',
      'Published and hosted the frontend application using Vercel',
      'Engineered digital catalog discovery and public library services interface',
    ],
    challenges: [
      'Balancing warm literary editorial aesthetics with responsive web performance',
      'Structuring intuitive catalog filtering across diverse genres and public archives',
    ],
    architectureNotes: [
      'Component-driven single page application built on modern React and Vite',
      'Client-side state management for library search and reading assistant interactions',
    ],
    image: '/images/projects/libraryease.png',
    imageAlt: 'LibraryEase public library management system and digital services preview',
    links: {
      liveDemo: {
        label: 'Live Demo',
        url: 'https://libraryease-frontend.vercel.app/',
        isPlaceholder: false,
      },
      github: {
        label: 'Source Code',
        url: '#',
        isPlaceholder: true,
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

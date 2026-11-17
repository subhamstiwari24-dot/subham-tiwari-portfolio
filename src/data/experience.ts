import { ExperienceItem } from '@/types';

export const experienceData: readonly ExperienceItem[] = [
  {
    id: 'edu-btech',
    title: 'Bachelor of Technology (B.Tech), Information Technology',
    organization: 'Undergraduate Degree Program',
    location: 'Mumbai, India',
    period: '2024 — 2028 | Currently Pursuing',
    type: 'education',
    description:
      'Pursuing undergraduate degree in Information Technology with comprehensive coursework in software systems, algorithms, and application engineering.',
    highlights: [
      'Core academic focus on Object-Oriented Programming (Java), Data Structures, Algorithms, and DBMS',
      'Hands-on laboratory implementation of relational database models, operating system concepts, and web architectures',
      'Applying theoretical computer science foundations directly into modern web application projects',
    ],
    techStack: ['Java', 'Data Structures', 'Algorithms', 'DBMS', 'Software Engineering'],
    isCurrent: true,
  },
  {
    id: 'exp-fullstack-projects',
    title: 'Full Stack Web Application Development',
    organization: 'Hands-on Project Engineering',
    location: 'Mumbai, India',
    period: '2024 — Present',
    type: 'project',
    description:
      'Designing and engineering functional full-stack web applications, translating real-world requirements into clean user interfaces and structured backend services.',
    highlights: [
      'MoveSmart: Urban mobility platform with real-time incident reporting, interactive maps, and Spring Boot REST APIs',
      'Royal Edge Enterprises: B2B industrial textile catalogue with PostgreSQL integration and quotation enquiry pipeline',
      'LibraryEase: Modern public library management web application featuring catalog search and digital services',
    ],
    techStack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    isCurrent: true,
  },
  {
    id: 'exp-ethglobal-hackathon',
    title: 'Project Contributor — Stealth Pay',
    organization: 'ETHGlobal Mumbai Hackathon',
    location: 'Mumbai, India',
    period: 'November 2026',
    type: 'hackathon',
    description:
      'Participated in the ETHGlobal Mumbai hackathon sprint (November 5–7, 2026), an official event consisting of coding, workshops, and keynotes, submitting the privacy-preserving blockchain payment project "Stealth Pay".',
    highlights: [
      'Developed client-side cryptographic interaction supporting confidential crypto transaction workflows with ERC-5564',
      'Explored privacy-preserving concepts using blockchain technology to reduce recipient wallet exposure',
      'Awarded official ETHGlobal Certificate of Participation and showcased project on the ETHGlobal Showcase',
    ],
    techStack: ['Web3', 'Blockchain', 'Smart Contracts', 'ERC-5564', 'React', 'TypeScript'],
    note: 'Official ETHGlobal Certificate of Participation & Showcase Verified',
  },
  {
    id: 'edu-hsc',
    title: 'Higher Secondary Certificate (12th Grade)',
    organization: 'Sathaye College, Mumbai',
    location: 'Mumbai, India',
    period: '2024 | 65%',
    type: 'education',
    description:
      'Completed Higher Secondary Certificate examination with rigorous coursework in Science, Mathematics, and Physics.',
    highlights: [
      'Secured 65% in Higher Secondary Certificate examinations (Maharashtra State Board)',
      'Developed core foundations in mathematics, logical reasoning, and scientific methodology',
    ],
  },
  {
    id: 'edu-ssc',
    title: 'Secondary School Certificate (10th Grade)',
    organization: 'Public English High School, Mumbai',
    location: 'Mumbai, India',
    period: '2022 | 84%',
    type: 'education',
    description:
      'Completed Secondary School Certificate examination with distinction, excelling across mathematics and sciences.',
    highlights: [
      'Secured 84% in Secondary School Certificate examinations with distinction',
      'Recognized for academic excellence and problem-solving aptitude',
    ],
  },
];

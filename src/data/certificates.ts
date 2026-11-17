import { CertificateItem } from '@/types';

/**
 * Verified Certificates & Recognition
 * Subham Tiwari — Full Stack Developer
 */
export const certificatesData: readonly CertificateItem[] = [
  {
    id: 'ethglobal-mumbai-2026',
    title: 'Certificate of Participation — ETHGlobal Mumbai',
    recipient: 'Subham Tiwari',
    issuer: 'ETHGlobal',
    eventName: 'ETHGlobal Mumbai',
    issueDate: 'November 2026',
    period: 'November 5 — 7, 2026',
    credentialId: 'stealth-pay-xtdtj',
    credentialUrl: 'https://ethglobal.com/showcase/stealth-pay-xtdtj',
    pdfUrl: '/certificates/ETHGlobal-Mumbai-Subham-Tiwari.pdf',
    pdfFilename: 'ETHGlobal-Mumbai-Subham-Tiwari.pdf',
    image: '/images/certificates/ethglobal-mumbai-stealthpay.png',
    projectTitle: 'Stealth Pay',
    projectSlug: 'stealth-pay',
    signatory: 'Kartik Talwar, Co-founder, ETHGlobal',
    description:
      'Awarded for participating in ETHGlobal Mumbai, an official event consisting of coding, workshops, keynotes, and talks, successfully submitting and showcasing the project "Stealth Pay".',
    skills: ['Web3', 'Blockchain', 'Smart Contracts', 'ERC-5564', 'React', 'TypeScript'],
    isVerified: true,
  },
];

export const showCertificatesSection = certificatesData.length > 0;

/**
 * TypeScript Type Definitions
 * Subham Tiwari — Full Stack Developer Portfolio
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
  readonly isPlaceholder?: boolean;
}

export interface Project {
  readonly id: string;
  readonly number: string;
  readonly slug: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly tagline: string;
  readonly description: string;
  readonly overview: string;
  readonly problemStatement: string;
  readonly solution: string;
  readonly features: readonly string[];
  readonly role: string;
  readonly period: string;
  readonly featured: boolean;
  readonly techStack: readonly string[];
  readonly personalContribution: readonly string[];
  readonly challenges: readonly string[];
  readonly architectureNotes?: readonly string[];
  readonly contextNote?: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly links?: {
    readonly liveDemo?: ProjectLink;
    readonly github?: ProjectLink;
    readonly caseStudy?: ProjectLink;
    readonly showcase?: ProjectLink;
    readonly certificate?: ProjectLink;
  };
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly skills: readonly Skill[];
}

export type SkillCategoryType =
  | 'programming'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'blockchain'
  | 'tools'
  | 'additional';

export interface Skill {
  readonly name: string;
  readonly category: SkillCategoryType;
  readonly isPrimary?: boolean;
}

export type TimelineType = 'education' | 'experience' | 'project' | 'hackathon';

export interface ExperienceItem {
  readonly id: string;
  readonly title: string;
  readonly organization: string;
  readonly location?: string;
  readonly period: string;
  readonly type: TimelineType;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly techStack?: readonly string[];
  readonly isCurrent?: boolean;
  readonly note?: string;
}

export interface CertificateItem {
  readonly id: string;
  readonly title: string;
  readonly recipient?: string;
  readonly issuer: string;
  readonly eventName?: string;
  readonly issueDate: string;
  readonly period?: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly pdfUrl?: string;
  readonly pdfFilename?: string;
  readonly image?: string;
  readonly projectTitle?: string;
  readonly projectSlug?: string;
  readonly signatory?: string;
  readonly description?: string;
  readonly skills?: readonly string[];
  readonly isVerified: boolean;
}

export interface SiteConfig {
  readonly siteUrl: string;
  readonly identity: {
    readonly name: string;
    readonly title: string;
    readonly positioning: string;
    readonly introduction: string;
    readonly heroDescription: string;
    readonly emailPlaceholder: string;
    readonly locationPlaceholder: string;
    readonly availableForOpportunities: boolean;
    readonly availabilityText: string;
    readonly resumeUrl: string;
    readonly resumeFilename?: string;
    readonly phone?: string;
    readonly location?: string;
  };
  readonly navigation: readonly NavItem[];
  readonly socials: {
    readonly github: string;
    readonly linkedin: string;
    readonly twitter?: string;
    readonly email: string;
    readonly phone?: string;
  };
}

export type InquiryType = 'job' | 'freelance' | 'collaboration' | 'other';

export interface ContactFormData {
  fullName: string;
  email: string;
  inquiryType: InquiryType;
  subject: string;
  message: string;
}

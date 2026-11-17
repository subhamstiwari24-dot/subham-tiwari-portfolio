import React from 'react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/sections/Hero';
import { AboutSection } from '@/sections/About';
import { SkillsSection } from '@/sections/Skills';
import { ProjectsSection } from '@/sections/Projects';
import { ExperienceSection } from '@/sections/Experience';
import { CertificatesSection } from '@/sections/Certificates';
import { ContactSection } from '@/sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <SEO />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
};

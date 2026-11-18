import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { HeroVisual } from './HeroVisual';

const rotatingFocusAreas = [
  'Java Spring Boot & REST APIs',
  'React & TypeScript Ecosystems',
  'PostgreSQL & Spring Data JPA',
  'Web3 & ERC-5564 Privacy Protocols',
];

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);

  // Rotating focus areas ticker (runs consistently on desktop and mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFocusIndex((prev) => (prev + 1) % rotatingFocusAreas.length);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background Animated Gradient Orb */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Introduction & Actions */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-left"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/25 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-accent-secondary" />
              <span>HELLO, I'M</span>
            </div>

            {/* Name & Primary Role */}
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-heading text-text-primary tracking-tight">
                {siteConfig.identity.name}
              </h1>

              {/* Primary title + Rotating Specialty Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <p className="text-2xl sm:text-3xl font-heading font-semibold text-accent-primary">
                  {siteConfig.identity.title}
                </p>

                {/* Rotating Specialty Area Badge (Responsive on Mobile and Desktop) */}
                <div
                  className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-accent-secondary max-w-full overflow-hidden w-fit min-h-[28px] sm:min-h-[30px]"
                  role="status"
                  aria-live="polite"
                  aria-label={`Specialty focus: ${rotatingFocusAreas[currentFocusIndex]}`}
                >
                  <Terminal className="w-3.5 h-3.5 text-accent-primary shrink-0" aria-hidden="true" />
                  <div className="relative overflow-hidden min-w-[190px] sm:min-w-[240px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentFocusIndex}
                        initial={shouldReduceMotion ? { opacity: 0.4 } : { opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0.4 } : { opacity: 0, y: -4 }}
                        transition={{ duration: shouldReduceMotion ? 0.12 : 0.22, ease: 'easeOut' }}
                        className="block truncate"
                      >
                        {rotatingFocusAreas[currentFocusIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-text-primary leading-snug">
              {siteConfig.identity.positioning}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
              {siteConfig.identity.heroDescription}
            </p>

            {/* Action Buttons: Two Prominent CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="hover:shadow-accent-glow w-full sm:w-auto text-center"
              >
                View My Projects
              </Button>

              <Button
                href={siteConfig.identity.resumeUrl}
                download={siteConfig.identity.resumeFilename || 'Subham-Satish-Tiwari-Resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                leftIcon={<Download className="w-4 h-4 text-accent-secondary" />}
                className="w-full sm:w-auto text-center"
              >
                Download Resume
              </Button>
            </div>

            {/* Verified Social Channels Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-text-muted border-t border-border-subtle/60 max-w-md">
              <span className="font-mono">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/50 transition-all hover:scale-105 active:scale-95"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/50 transition-all hover:scale-105 active:scale-95"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                {siteConfig.socials.twitter && (
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/50 transition-all hover:scale-105 active:scale-95"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
              <span className="text-border-subtle hidden sm:inline">•</span>
              <a
                href={siteConfig.socials.email}
                className="font-mono text-text-secondary hover:text-accent-primary transition-colors truncate max-w-[200px] sm:max-w-none"
              >
                {siteConfig.identity.emailPlaceholder}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Custom Visual Composition */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full overflow-hidden"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

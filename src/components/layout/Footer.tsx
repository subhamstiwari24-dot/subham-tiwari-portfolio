import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-bg-secondary/40 py-14 mt-auto">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border-subtle">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-card border border-border-subtle">
                <span className="font-heading font-bold text-xs tracking-tight text-text-primary">
                  ST
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-base text-text-primary tracking-tight">
                  {siteConfig.identity.name}
                </span>
                <span className="text-xs text-accent-primary font-mono ml-2">
                  {siteConfig.identity.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              {siteConfig.identity.positioning}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-text-secondary hover:text-accent-primary transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Connect
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                {siteConfig.socials.twitter && (
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${siteConfig.identity.emailPlaceholder}`}
                  aria-label="Email"
                  className="p-2 rounded-lg bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-primary transition-colors cursor-pointer group"
                aria-label="Scroll back to top of page"
              >
                <span>Back to top</span>
                <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-border-subtle flex items-center justify-center group-hover:border-accent-primary/40">
                  <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-text-muted font-mono">
          <p>
            &copy; {currentYear} {siteConfig.identity.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Crafted with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

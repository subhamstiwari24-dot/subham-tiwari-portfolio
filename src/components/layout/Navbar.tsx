import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/siteConfig';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Handle scroll detection with functional state updates to prevent unnecessary re-renders
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open to prevent background scrolling across iOS Safari and Chrome
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // IntersectionObserver to observe sections on home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMobileMenu();

    // If anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);

      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          });
        }
      } else {
        navigate(`/${href}`);
      }
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle shadow-subtle'
          : 'bg-bg-primary/80 backdrop-blur-sm border-b border-white/[0.04]'
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand Monogram + Full Name + Title */}
          <Link
            to="/#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg p-1 -m-1"
            aria-label={`${siteConfig.identity.name} Home`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg-card border border-border-subtle group-hover:border-accent-primary/60 transition-colors shadow-subtle">
              <span className="font-heading font-bold text-sm tracking-tight text-text-primary">
                ST
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-semibold tracking-tight text-text-primary">
                {siteConfig.identity.name}
              </span>
              <span className="text-[11px] text-text-muted leading-none">
                {siteConfig.identity.title}
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = location.pathname === '/' && activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative px-3.5 py-1.5 rounded-lg text-xs font-medium font-sans transition-colors',
                    isActive
                      ? 'text-accent-primary font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                  )}
                >
                  {item.label}
                  {isActive && !shouldReduceMotion && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-accent-primary/10 rounded-lg -z-10 border border-accent-primary/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: GitHub Link + CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-lg hover:bg-white/[0.04] transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-text-muted" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center text-xs font-medium px-4 py-2 rounded-interactive bg-accent-primary text-white hover:bg-accent-primary-hover shadow-subtle transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Touch target >= 44px, immediate tap response, touch-manipulation) */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl text-text-secondary hover:text-text-primary active:text-text-primary hover:bg-white/[0.05] active:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary transition-colors touch-manipulation select-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer (Optimized transform/opacity, no layout thrashing or heavy backdrop-blur) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden border-b border-border-subtle bg-bg-secondary w-full max-w-full px-4 py-4 space-y-3 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {siteConfig.navigation.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = location.pathname === '/' && activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-colors touch-manipulation select-none',
                      isActive
                        ? 'text-accent-primary bg-accent-primary/10 font-semibold'
                        : 'text-text-secondary hover:text-text-primary active:text-text-primary hover:bg-white/[0.05] active:bg-white/[0.08]'
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-border-subtle flex flex-col gap-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs text-text-secondary hover:text-text-primary active:text-text-primary bg-white/[0.03] border border-border-subtle active:bg-white/[0.08] transition-colors touch-manipulation select-none"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="min-h-[44px] flex items-center justify-center w-full text-center py-2.5 px-3 rounded-xl text-xs font-semibold bg-accent-primary text-white hover:bg-accent-primary-hover active:bg-accent-primary/90 shadow-subtle transition-colors touch-manipulation select-none"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

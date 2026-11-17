import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, Cpu, Database, Code, Shield } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background Ambient Radial Glows */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.35 }
            : {
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.45, 0.3],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-72 h-72 rounded-full bg-accent-primary/20 blur-[90px] pointer-events-none"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.25 }
            : {
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.38, 0.2],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute w-64 h-64 rounded-full bg-accent-secondary/15 blur-[80px] pointer-events-none -bottom-4 -right-4"
      />

      {/* Outer Rotating Geometric Accent Ring */}
      <div
        className={`absolute inset-4 rounded-full border border-dashed border-white/[0.08] pointer-events-none ${
          shouldReduceMotion ? '' : 'animate-[spin_70s_linear_infinite]'
        }`}
      />
      <div className="absolute inset-16 rounded-full border border-white/[0.05] pointer-events-none" />

      {/* Central Glassmorphic Engineering Terminal Card */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-[390px] rounded-2xl bg-bg-card/90 backdrop-blur-xl border border-border-highlight/40 p-5 shadow-glass space-y-4 hover:border-accent-primary/50 transition-colors duration-300"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-text-muted">subham.tiwari.dev</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active</span>
          </div>
        </div>

        {/* Code Snippet Blueprint */}
        <div className="font-mono text-xs space-y-1.5 leading-relaxed">
          <div className="text-text-muted">
            <span className="text-accent-secondary">const</span>{' '}
            <span className="text-text-primary">developer</span> = &#123;
          </div>
          <div className="pl-4 text-text-secondary">
            <span className="text-text-muted">name:</span>{' '}
            <span className="text-accent-primary">'Subham Tiwari'</span>,
          </div>
          <div className="pl-4 text-text-secondary">
            <span className="text-text-muted">title:</span>{' '}
            <span className="text-accent-primary">'Full Stack Developer'</span>,
          </div>
          <div className="pl-4 text-text-secondary">
            <span className="text-text-muted">backend:</span>{' '}
            <span className="text-accent-secondary">['Java', 'Spring Boot', 'REST']</span>,
          </div>
          <div className="pl-4 text-text-secondary">
            <span className="text-text-muted">frontend:</span>{' '}
            <span className="text-accent-secondary">['React', 'TypeScript', 'Tailwind']</span>,
          </div>
          <div className="pl-4 text-text-secondary">
            <span className="text-text-muted">database:</span>{' '}
            <span className="text-accent-secondary">['PostgreSQL', 'MySQL']</span>,
          </div>
          <div className="pl-4 text-text-secondary">
            <span className="text-text-muted">engineering:</span>{' '}
            <span className="text-emerald-400">'Practical Problem Solver'</span>
          </div>
          <div className="text-text-muted">&#125;;</div>
        </div>

        {/* Terminal Telemetry Footer */}
        <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-text-muted font-mono">
          <span className="flex items-center gap-1.5 text-accent-secondary">
            <Terminal className="w-3.5 h-3.5" />
            <span>TypeSafe • Modular</span>
          </span>
          <span className="text-text-muted">Clean Architecture</span>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 1: Backend / Java (Top-Right) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 -right-2 sm:right-2 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-card/90 backdrop-blur-md border border-accent-primary/30 shadow-subtle text-xs font-mono hover:scale-105 transition-transform"
      >
        <div className="w-6 h-6 rounded-lg bg-accent-primary/15 flex items-center justify-center text-accent-primary">
          <Cpu className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[10px] text-text-muted">Core Backend</p>
          <p className="text-xs font-semibold text-text-primary">Spring Boot + Java</p>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 2: Frontend / React (Bottom-Left) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [4, -4, 4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 -left-2 sm:left-2 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-card/90 backdrop-blur-md border border-accent-secondary/30 shadow-subtle text-xs font-mono hover:scale-105 transition-transform"
      >
        <div className="w-6 h-6 rounded-lg bg-accent-secondary/15 flex items-center justify-center text-accent-secondary">
          <Code className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[10px] text-text-muted">Client Interfaces</p>
          <p className="text-xs font-semibold text-text-primary">React + TypeScript</p>
        </div>
      </motion.div>

      {/* Floating Interactive Badge 3: Database (Top-Left) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute -top-4 -left-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-bg-card/90 backdrop-blur-md border border-white/[0.08] shadow-subtle text-[11px] font-mono text-text-secondary hover:border-accent-primary/40 transition-colors"
      >
        <Database className="w-3.5 h-3.5 text-accent-primary" />
        <span>PostgreSQL & REST APIs</span>
      </motion.div>

      {/* Floating Interactive Badge 4: Web3 / Security (Bottom-Right) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [3, -3, 3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden sm:flex absolute -bottom-4 right-8 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-card/90 backdrop-blur-md border border-white/[0.08] shadow-subtle text-[11px] font-mono text-text-secondary hover:border-accent-secondary/40 transition-colors"
      >
        <Shield className="w-3.5 h-3.5 text-accent-secondary" />
        <span>ERC-5564 & Web3</span>
      </motion.div>
    </div>
  );
};

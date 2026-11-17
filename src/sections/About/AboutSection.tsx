import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, Lightbulb, BookOpen, CheckCircle, Terminal } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const aboutPillars = [
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Frontend and backend application development.',
    detail:
      'Translating user needs into cohesive web systems with React, TypeScript, Java Spring Boot, and relational databases.',
    badge: 'End-to-End',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Converting real-world problems into functional software solutions.',
    detail:
      'Analyzing requirements to construct reliable data models, responsive interfaces, and clear API interaction patterns.',
    badge: 'Analytical',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Exploring modern technologies and improving engineering practices.',
    detail:
      'Keeping pace with emergent developer tooling, Web3 primitives, clean architecture standards, and performance optimization.',
    badge: 'Adaptive',
  },
];

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border-subtle/50 relative">
      <Container size="wide">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="More Than Just Writing Code."
            subtitle="Bridging thoughtful design with solid software architecture."
          />
        </motion.div>

        {/* Narrative & Visual Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative with Official Resume Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-sm sm:text-base text-text-secondary leading-relaxed p-7 rounded-2xl glass-card"
          >
            <p className="text-text-primary font-medium text-base sm:text-lg">
              Entry-level Full Stack Developer and Information Technology undergraduate with hands-on experience building web applications using Java, Spring Boot, React, TypeScript, and PostgreSQL.
            </p>

            <p>
              I have developed full-stack projects across smart mobility, blockchain payments, B2B e-commerce, and library applications. My experience centers on REST API development, database integration, clean frontend architecture, and modern software development workflows.
            </p>

            <p>
              Currently pursuing my B.Tech in Information Technology (2024–2028), I focus on turning complex technical specifications into dependable, well-tested digital products. I prioritize readable code, maintainable architecture, and responsive user experiences across client, server, and data layers.
            </p>

            {/* Quick Principles Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-text-primary border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-secondary shrink-0" />
                <span>React.js & TypeScript UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-primary shrink-0" />
                <span>Spring Boot RESTful APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-secondary shrink-0" />
                <span>PostgreSQL & Spring Data JPA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-primary shrink-0" />
                <span>Web3 & Smart Contracts</span>
              </div>
            </div>
          </motion.div>

          {/* Minimal Developer Journey Blueprint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-7 rounded-2xl glass-card space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="font-heading font-semibold text-text-primary text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-primary" />
                Engineering Values
              </span>
              <span className="text-[11px] font-mono text-accent-secondary">Core Focus</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-border-subtle space-y-1">
                <span className="text-text-muted uppercase text-[10px] tracking-wider">Methodology</span>
                <p className="text-text-primary font-semibold">User-Centric & Pragmatic</p>
                <p className="text-text-secondary text-[11px] font-sans">
                  Prioritizing clarity, usability, and speed over unnecessary engineering complexity.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-border-subtle space-y-1">
                <span className="text-text-muted uppercase text-[10px] tracking-wider">System View</span>
                <p className="text-text-primary font-semibold">Full Stack Cohesion</p>
                <p className="text-text-secondary text-[11px] font-sans">
                  Connecting database schema design seamlessly through backend controllers to interactive React clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Supporting Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                className="p-6 rounded-2xl glass-card space-y-4 hover:border-accent-primary/40 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-accent-secondary border border-border-subtle">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-heading font-semibold text-lg text-text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-accent-primary">
                    {pillar.description}
                  </p>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  programming: Terminal,
  frontend: Code,
  backend: Server,
  database: Database,
  blockchain: Cpu,
  tools: Wrench,
};

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-border-subtle/50 relative">
      <Container size="wide">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Technologies I Work With."
            subtitle="Categorized engineering proficiencies and tools used across client, server, and storage layers."
          />
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <motion.div
                key={category.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                className="p-6 rounded-2xl glass-card space-y-5 hover:border-accent-primary/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-semibold text-base text-text-primary">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-text-muted">
                      {category.skills.length} techs
                    </span>
                  </div>

                  {category.description && (
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Skill Chips */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 select-none ${
                        skill.isPrimary
                          ? 'bg-white/[0.05] border border-border-subtle text-text-primary hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-white'
                          : 'bg-white/[0.02] border border-white/[0.05] text-text-secondary hover:border-white/[0.15]'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Rigor Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-4 rounded-xl bg-bg-card/50 border border-white/[0.06] flex items-center justify-between text-xs text-text-muted font-mono"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
            <span>Demonstrated through functional codebases, REST contracts, and production builds</span>
          </div>
          <span className="hidden sm:inline text-accent-primary">No Arbitrary Percentages</span>
        </motion.div>
      </Container>
    </section>
  );
};

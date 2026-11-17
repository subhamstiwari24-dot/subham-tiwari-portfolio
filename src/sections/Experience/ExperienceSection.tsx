import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, Code2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceData } from '@/data/experience';
import { TimelineType } from '@/types';

const typeIcons: Record<TimelineType, React.ElementType> = {
  education: GraduationCap,
  experience: Briefcase,
  hackathon: Trophy,
  project: Code2,
};

const typeLabels: Record<TimelineType, { label: string; color: string }> = {
  education: { label: 'Education', color: 'text-accent-secondary border-accent-secondary/30 bg-accent-secondary/10' },
  experience: { label: 'Experience', color: 'text-accent-primary border-accent-primary/30 bg-accent-primary/10' },
  hackathon: { label: 'Hackathon Sprint', color: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
  project: { label: 'Engineering Journey', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
};

export const ExperienceSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-border-subtle/50 relative">
      <Container size="wide">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Learning, Building and Growing."
            subtitle="Academic foundations, technical project milestones, and developer hackathon engagements."
          />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="mt-14 relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-border-subtle -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const Icon = typeIcons[item.type] || Code2;
              const typeMeta = typeLabels[item.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-bg-card border-2 border-accent-primary flex items-center justify-center text-accent-primary shadow-subtle">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Spacer for opposite side on Desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8">
                    <div className="p-6 rounded-2xl glass-card space-y-4 hover:border-accent-primary/40 transition-colors">
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${typeMeta.color}`}
                        >
                          {typeMeta.label}
                        </span>

                        <span className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-lg text-text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-accent-primary">
                          {item.organization}
                        </p>
                        {item.location && (
                          <p className="flex items-center gap-1 text-xs text-text-muted">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="space-y-1.5 text-xs text-text-secondary pt-1">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent-secondary font-bold">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Context Note if any */}
                      {item.note && (
                        <p className="text-[11px] font-mono text-accent-secondary pt-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 shrink-0" />
                          <span>{item.note}</span>
                        </p>
                      )}

                      {/* Tech Stack Chips */}
                      {item.techStack && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-border-subtle text-text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

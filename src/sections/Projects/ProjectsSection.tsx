import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { projects } from '@/data/projects';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-border-subtle/50 relative">
      <Container size="wide">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects That Bring Ideas to Life."
            subtitle="Real web applications combining clean user interfaces with structured backend engineering."
          />
        </motion.div>

        {/* Featured Projects Vertical Stack / Cards */}
        <div className="mt-14 space-y-12">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative p-6 sm:p-8 lg:p-10 rounded-2xl glass-card border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Hover Ambient Spotlight */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-primary/10 rounded-full blur-[90px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[90px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Blueprint / Live Screenshot Column with Hover Zoom */}
                  <div
                    className={`lg:col-span-6 transition-transform duration-500 ${
                      shouldReduceMotion ? '' : 'group-hover:scale-[1.015]'
                    } ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <ProjectMockup
                      projectId={project.id}
                      image={project.image}
                      imageAlt={project.imageAlt}
                      title={project.title}
                      liveUrl={project.links?.liveDemo?.url}
                    />
                  </div>

                  {/* Narrative & Details Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Project Header & Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-accent-secondary">
                          {project.number}
                        </span>
                        <span className="text-border-subtle">•</span>
                        <span className="text-xs font-mono text-accent-primary font-semibold">
                          {project.role}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-text-muted">
                        {project.period}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-accent-primary">
                        {project.subtitle || project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Context note if any */}
                    {project.contextNote && (
                      <div className="p-2.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-xs text-text-secondary flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
                        <span>{project.contextNote}</span>
                      </div>
                    )}

                    {/* Tech Badges with hover interaction */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-border-subtle text-text-secondary hover:border-accent-primary/40 hover:bg-accent-primary/10 hover:text-text-primary transition-all duration-200 select-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <Button
                        to={`/projects/${project.slug}`}
                        variant="primary"
                        size="sm"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                        className="hover:shadow-accent-glow"
                      >
                        View Case Study
                      </Button>

                      <Button
                        href={project.links?.github?.url ?? '#'}
                        variant="outline"
                        size="sm"
                        leftIcon={<Github className="w-3.5 h-3.5" />}
                        disabled={project.links?.github?.isPlaceholder}
                        target={project.links?.github?.isPlaceholder ? undefined : '_blank'}
                        rel={project.links?.github?.isPlaceholder ? undefined : 'noopener noreferrer'}
                      >
                        {project.links?.github?.isPlaceholder
                          ? 'Coming Soon'
                          : (project.links?.github?.label || 'View Source Code')}
                      </Button>

                      <Button
                        href={project.links?.liveDemo?.url ?? '#'}
                        variant="secondary"
                        size="sm"
                        leftIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        disabled={project.links?.liveDemo?.isPlaceholder}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo {project.links?.liveDemo?.isPlaceholder ? '(Placeholder)' : ''}
                      </Button>

                      {project.links?.showcase && (
                        <Button
                          href={project.links.showcase.url}
                          variant="outline"
                          size="sm"
                          leftIcon={<ExternalLink className="w-3.5 h-3.5" />}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Showcase
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Wrench,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { SEO } from '@/components/common/SEO';
import { projects, getProjectBySlug } from '@/data/projects';

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="py-24 md:py-36 flex-1 flex items-center justify-center">
        <SEO title="Project Not Found" description="The requested project specification could not be located." />
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-2xl glass-card text-center space-y-6 max-w-lg mx-auto">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-heading text-text-primary">
                Project Not Found
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed">
                No project specification was found matching the identifier{' '}
                <code className="text-accent-primary font-mono bg-white/[0.04] px-2 py-0.5 rounded">
                  {slug}
                </code>
                .
              </p>
            </div>

            <div className="pt-2">
              <Button
                to="/#projects"
                variant="primary"
                size="md"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Return to Projects
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // Calculate Previous and Next projects for case-study pagination
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Page-Specific Dynamic SEO & Structured Data */}
      <SEO
        title={`${project.title} — ${project.subtitle || project.tagline}`}
        description={project.description}
        canonicalPath={`/projects/${project.slug}`}
        ogType="article"
      />

      <Container size="wide">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-primary transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 space-y-5 max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/25 text-accent-secondary font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-border-subtle text-text-muted">
              {project.role}
            </span>
            <span className="text-xs font-mono text-text-muted">
              {project.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-text-primary tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-accent-primary font-medium font-heading">
            {project.subtitle || project.tagline}
          </p>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Context note if any */}
          {project.contextNote && (
            <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-xs text-text-secondary flex items-center gap-2 max-w-2xl">
              <Sparkles className="w-4 h-4 text-accent-secondary shrink-0" />
              <span>{project.contextNote}</span>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              href={project.links?.github?.url ?? '#'}
              variant="outline"
              size="md"
              leftIcon={<Github className="w-4 h-4" />}
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
              variant="primary"
              size="md"
              leftIcon={<ExternalLink className="w-4 h-4" />}
              disabled={project.links?.liveDemo?.isPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo {project.links?.liveDemo?.isPlaceholder ? '(Placeholder)' : ''}
            </Button>

            {project.links?.showcase && (
              <Button
                href={project.links.showcase.url}
                variant="secondary"
                size="md"
                leftIcon={<ExternalLink className="w-4 h-4" />}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.links.showcase.label}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Visual Blueprint / Interface Mockup */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 max-w-4xl"
        >
          <div className="p-2 sm:p-4 rounded-2xl glass-card">
            <ProjectMockup
              projectId={project.id}
              image={project.image}
              imageAlt={project.imageAlt}
              title={project.title}
              liveUrl={project.links?.liveDemo?.url}
            />
            <p className="text-center text-[11px] font-mono text-text-muted mt-3">
              {project.image
                ? `Fig 1.1: Live Application Interface Preview for ${project.title}`
                : `Fig 1.1: Functional Interface Architecture Blueprint for ${project.title}`}
            </p>
          </div>
        </motion.div>

        {/* Deep Dive Case Study Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <section className="p-7 sm:p-8 rounded-2xl glass-card space-y-4">
              <h2 className="font-heading font-bold text-xl text-text-primary flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent-primary" />
                <span>Project Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="p-7 rounded-2xl glass-card space-y-3 border-l-2 border-l-rose-500/60">
                <h3 className="font-heading font-bold text-lg text-text-primary flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>The Problem</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.problemStatement}
                </p>
              </section>

              <section className="p-7 rounded-2xl glass-card space-y-3 border-l-2 border-l-emerald-500/60">
                <h3 className="font-heading font-bold text-lg text-text-primary flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                  <span>The Solution</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* Core Features */}
            <section className="p-7 sm:p-8 rounded-2xl glass-card space-y-4">
              <h2 className="font-heading font-bold text-xl text-text-primary flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent-secondary" />
                <span>Key Engineered Features</span>
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Personal Contribution */}
            <section className="p-7 sm:p-8 rounded-2xl glass-card space-y-4">
              <h2 className="font-heading font-bold text-xl text-text-primary flex items-center gap-2">
                <Wrench className="w-5 h-5 text-accent-primary" />
                <span>My Contribution</span>
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                {project.personalContribution.map((contrib, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent-primary font-bold">•</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Challenges */}
            <section className="p-7 sm:p-8 rounded-2xl glass-card space-y-4">
              <h2 className="font-heading font-bold text-xl text-text-primary flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Engineering Challenges Solved</span>
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Sidebar: Tech Stack & System Specifications */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <h3 className="font-heading font-semibold text-base text-text-primary">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-border-subtle text-text-secondary hover:border-accent-primary/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.architectureNotes && (
              <div className="p-6 rounded-2xl glass-card space-y-3">
                <h3 className="font-heading font-semibold text-base text-text-primary">
                  Architecture Notes
                </h3>
                <ul className="space-y-2 text-xs text-text-secondary leading-relaxed">
                  {project.architectureNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-secondary font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-border-subtle space-y-3">
              <h3 className="font-heading font-semibold text-sm text-text-primary">
                Interested in this Architecture?
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Let's discuss how this system pattern can be applied to your engineering team's requirements.
              </p>
              <Button to="/#contact" variant="primary" size="sm" className="w-full">
                Reach Out
              </Button>
            </div>
          </div>
        </div>

        {/* Project Pagination (Previous & Next Case Study) */}
        <div className="mt-16 pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="p-5 rounded-xl glass-card hover:border-accent-primary/40 transition-colors flex flex-col items-start gap-1 group"
          >
            <span className="text-xs font-mono text-text-muted flex items-center gap-1 group-hover:text-accent-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project ({prevProject.number})</span>
            </span>
            <span className="font-heading font-semibold text-base text-text-primary">
              {prevProject.title}
            </span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="p-5 rounded-xl glass-card hover:border-accent-primary/40 transition-colors flex flex-col items-end text-right gap-1 group"
          >
            <span className="text-xs font-mono text-text-muted flex items-center gap-1 group-hover:text-accent-secondary transition-colors">
              <span>Next Project ({nextProject.number})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-heading font-semibold text-base text-text-primary">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

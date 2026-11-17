import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Download,
  ArrowRight,
  Sparkles,
  Maximize2,
  X,
  CheckCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { certificatesData } from '@/data/certificates';

export const CertificatesSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<string | null>(null);

  const hasCertificates = certificatesData.length > 0;

  return (
    <section id="certificates" className="py-20 lg:py-28 border-t border-border-subtle/50 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="RECOGNITION & CREDENTIALS"
            title="Verified Technical Certifications."
            subtitle="Official hackathon recognitions, technical event participation, and verified credentials."
          />
        </motion.div>

        {hasCertificates ? (
          <div className="mt-14 space-y-10">
            {certificatesData.map((cert, index) => (
              <motion.article
                key={cert.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative rounded-2xl glass-card border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden"
              >
                {/* Spotlight hover effect */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-primary/10 rounded-full blur-[90px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Certificate Visual Preview Frame */}
                  <div className="lg:col-span-6 flex flex-col items-center">
                    <div
                      onClick={() => cert.image && setSelectedPreviewImage(cert.image)}
                      className={`relative w-full rounded-xl overflow-hidden border border-border-subtle bg-bg-secondary/80 group/cert cursor-pointer shadow-card transition-all duration-300 ${
                        shouldReduceMotion ? '' : 'hover:scale-[1.015] hover:border-accent-primary/50'
                      }`}
                    >
                      {cert.image ? (
                        <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900/60">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/cert:scale-105"
                            loading="lazy"
                          />
                          {/* Hover Overlay with Enlarge prompt */}
                          <div className="absolute inset-0 bg-bg-primary/50 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card/90 border border-white/20 text-xs font-medium text-white shadow-lg">
                              <Maximize2 className="w-3.5 h-3.5 text-accent-secondary" />
                              <span>Click to Expand</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-[16/11] flex items-center justify-center p-8 text-center text-text-muted">
                          <Award className="w-16 h-16 text-accent-primary/40" />
                        </div>
                      )}

                      {/* Bottom strip on image */}
                      <div className="px-4 py-2.5 bg-bg-card/90 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                        <span className="flex items-center gap-1.5 text-text-secondary">
                          <Award className="w-3.5 h-3.5 text-accent-primary" />
                          <span>Official Certificate</span>
                        </span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Verified</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Certificate Meta, Story, Project link & Actions */}
                  <div className="lg:col-span-6 space-y-5">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/25">
                        <Award className="w-3.5 h-3.5" />
                        {cert.issuer}
                      </span>

                      {cert.period && (
                        <span className="text-xs font-mono text-text-muted bg-white/[0.03] px-2.5 py-1 rounded-full border border-border-subtle">
                          {cert.period}
                        </span>
                      )}

                      {cert.isVerified && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                          <ShieldCheck className="w-3 h-3" />
                          Official Credential
                        </span>
                      )}
                    </div>

                    {/* Title & Presented To */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>
                      {cert.recipient && (
                        <p className="text-xs sm:text-sm font-mono text-accent-secondary">
                          Presented to: <span className="text-text-primary font-medium">{cert.recipient}</span>
                        </p>
                      )}
                    </div>

                    {/* Associated Project Banner */}
                    {cert.projectTitle && (
                      <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Sparkles className="w-4 h-4 text-accent-secondary shrink-0" />
                          <div className="min-w-0">
                            <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                              Submitted Hackathon Project
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-text-primary truncate">
                              {cert.projectTitle}
                            </p>
                          </div>
                        </div>
                        {cert.projectSlug && (
                          <Link
                            to={`/projects/${cert.projectSlug}`}
                            className="inline-flex items-center gap-1 text-xs font-mono text-accent-primary hover:text-white transition-colors shrink-0"
                          >
                            <span>Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    {cert.description && (
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {cert.description}
                      </p>
                    )}

                    {/* Signatory / Authority */}
                    {cert.signatory && (
                      <div className="flex items-center gap-2 text-xs font-mono text-text-muted pt-1">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
                        <span>Signatory: <strong className="text-text-secondary font-medium">{cert.signatory}</strong></span>
                      </div>
                    )}

                    {/* Skills Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] border border-border-subtle text-text-secondary select-none"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      {cert.credentialUrl && (
                        <Button
                          href={cert.credentialUrl}
                          variant="primary"
                          size="sm"
                          leftIcon={<ExternalLink className="w-4 h-4" />}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:shadow-accent-glow"
                        >
                          Verify on ETHGlobal Showcase
                        </Button>
                      )}

                      {cert.pdfUrl && (
                        <Button
                          href={cert.pdfUrl}
                          variant="outline"
                          size="sm"
                          leftIcon={<Download className="w-4 h-4" />}
                          download={cert.pdfFilename || 'certificate.pdf'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Certificate (PDF)
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : null}
      </Container>

      {/* Lightbox Modal for Enlarge Image */}
      <AnimatePresence>
        {selectedPreviewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPreviewImage(null)}
            className="fixed inset-0 z-50 bg-bg-primary/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl glass-card border border-border-highlight overflow-hidden shadow-2xl p-2 sm:p-3"
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-primary" />
                  <span className="text-xs font-mono text-text-primary">Official ETHGlobal Mumbai Certificate</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPreviewImage(null)}
                  className="p-1 rounded-lg text-text-muted hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-2 rounded-lg overflow-hidden bg-bg-primary">
                <img
                  src={selectedPreviewImage}
                  alt="Enlarged Certificate Preview"
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
              </div>

              <div className="mt-3 pt-2 px-2 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-muted">
                <span>ETHGlobal Mumbai — November 5–7, 2026</span>
                <a
                  href="/certificates/ETHGlobal-Mumbai-Subham-Tiwari.pdf"
                  download="ETHGlobal-Mumbai-Subham-Tiwari.pdf"
                  className="inline-flex items-center gap-1.5 text-accent-primary hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Original PDF</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

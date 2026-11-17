import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
  Phone,
  MapPin,
  Download,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { ContactFormData } from '@/types';

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please provide a valid email address.' }),
  inquiryType: z.enum(['job', 'freelance', 'collaboration', 'other'], {
    errorMap: () => ({ message: 'Please select an inquiry type.' }),
  }),
  subject: z
    .string()
    .min(4, { message: 'Subject must be at least 4 characters.' })
    .max(150, { message: 'Subject cannot exceed 150 characters.' }),
  message: z
    .string()
    .min(15, { message: 'Message must be at least 15 characters to explain your idea.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
});

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      inquiryType: 'job',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');

    try {
      // Frontend-only simulation delay representing third-party service integration point
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmittedData(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleSendAnother = () => {
    reset();
    setSubmittedData(null);
    setStatus('idle');
  };

  // Pre-generate mailto link fallback with user-entered information
  const mailtoHref = submittedData
    ? `mailto:${siteConfig.identity.emailPlaceholder}?subject=${encodeURIComponent(
        `[${submittedData.inquiryType.toUpperCase()}] ${submittedData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${submittedData.fullName} (${submittedData.email})\n\n${submittedData.message}`
      )}`
    : `mailto:${siteConfig.identity.emailPlaceholder}`;

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-border-subtle/50 relative">
      <Container size="wide">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="LET'S CONNECT"
            title="Have an Idea? Let's Build Something."
            subtitle="I'm open to full stack developer roles, freelance software engineering, and technical collaborations."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Outreach & Social Details */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-2xl glass-card space-y-5">
              <h3 className="font-heading font-bold text-xl text-text-primary">
                Direct Channels
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you have an upcoming project, an engineering role to fill, or want to discuss full-stack architectures, feel free to reach out directly.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Email Channel */}
                <a
                  href={siteConfig.socials.email}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-accent-primary/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-text-muted">Email Address</p>
                    <p className="text-xs sm:text-sm font-semibold text-text-primary truncate">
                      {siteConfig.identity.emailPlaceholder}
                    </p>
                  </div>
                </a>

                {/* Phone Channel */}
                <a
                  href={siteConfig.socials.phone || 'tel:+917021979501'}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-accent-secondary/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 flex items-center justify-center text-accent-secondary group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-text-muted">Phone Number</p>
                    <p className="text-xs sm:text-sm font-semibold text-text-primary">
                      {siteConfig.identity.phone || '+91 7021979501'}
                    </p>
                  </div>
                </a>

                {/* Location Channel */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-border-subtle">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-text-muted">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-text-primary">
                      {siteConfig.identity.locationPlaceholder || 'Santacruz, Mumbai, India'}
                    </p>
                  </div>
                </div>

                {/* Prominent Resume Download Card */}
                <a
                  href={siteConfig.identity.resumeUrl}
                  download={siteConfig.identity.resumeFilename || 'Subham-Satish-Tiwari-Resume.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-accent-primary/10 border border-accent-primary/30 hover:border-accent-primary hover:bg-accent-primary/15 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform">
                      <Download className="w-4 h-4 text-accent-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-primary">Official Resume (PDF)</p>
                      <p className="text-[11px] font-mono text-text-muted">Subham-Satish-Tiwari-Resume.pdf</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent-secondary group-hover:translate-x-0.5 transition-transform">
                    Download &darr;
                  </span>
                </a>

                {/* Social Profiles */}
                <div className="pt-2 grid grid-cols-3 gap-2">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-accent-primary/40 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-accent-secondary" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-accent-primary/40 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {siteConfig.socials.twitter && (
                    <a
                      href={siteConfig.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/[0.02] border border-border-subtle hover:border-accent-primary/40 text-xs text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <Twitter className="w-3.5 h-3.5 text-accent-secondary" />
                      <span>Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-2xl glass-card border border-border-subtle">
              {status === 'success' ? (
                /* Honest Success State with Fallback Direct Mailto */
                <div className="text-center py-8 space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-text-primary">
                      Message Formatted & Validated
                    </h3>
                    <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-text-primary font-semibold">{submittedData?.fullName}</span>. Your inquiry regarding <span className="text-accent-secondary">"{submittedData?.subject}"</span> has passed client-side validation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-border-subtle max-w-md mx-auto text-xs text-text-muted text-left space-y-2">
                    <p className="font-semibold text-text-primary">
                      Direct Email Backup Option:
                    </p>
                    <p>
                      Because this is a serverless client-side portfolio build, you can also launch your local mail client with this pre-formatted message:
                    </p>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 text-accent-primary hover:text-white transition-colors font-mono font-medium"
                    >
                      <span>Send directly via Email Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="pt-2">
                    <Button onClick={handleSendAnother} variant="outline" size="sm">
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-mono font-medium text-text-secondary"
                      >
                        Full Name <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Your name"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        {...register('fullName')}
                        className={`w-full px-4 py-2.5 rounded-xl bg-bg-primary/80 border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all ${
                          errors.fullName
                            ? 'border-rose-500/70'
                            : 'border-border-subtle focus:border-accent-primary'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-xs text-rose-400 font-mono">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-text-secondary"
                      >
                        Email Address <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@domain.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        {...register('email')}
                        className={`w-full px-4 py-2.5 rounded-xl bg-bg-primary/80 border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all ${
                          errors.email
                            ? 'border-rose-500/70'
                            : 'border-border-subtle focus:border-accent-primary'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-400 font-mono">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label
                        htmlFor="inquiryType"
                        className="block text-xs font-mono font-medium text-text-secondary"
                      >
                        Inquiry Type <span className="text-accent-primary">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        {...register('inquiryType')}
                        aria-invalid={!!errors.inquiryType}
                        className="w-full px-4 py-2.5 rounded-xl bg-bg-primary/80 border border-border-subtle text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all"
                      >
                        <option value="job" className="bg-bg-card">Job Opportunity</option>
                        <option value="freelance" className="bg-bg-card">Freelance Project</option>
                        <option value="collaboration" className="bg-bg-card">Collaboration</option>
                        <option value="other" className="bg-bg-card">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-mono font-medium text-text-secondary"
                      >
                        Subject <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project or role subject"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        {...register('subject')}
                        className={`w-full px-4 py-2.5 rounded-xl bg-bg-primary/80 border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all ${
                          errors.subject
                            ? 'border-rose-500/70'
                            : 'border-border-subtle focus:border-accent-primary'
                        }`}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-rose-400 font-mono">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-text-secondary"
                    >
                      Message <span className="text-accent-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, timelines, or technology requirements..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-xl bg-bg-primary/80 border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all resize-y ${
                        errors.message
                          ? 'border-rose-500/70'
                          : 'border-border-subtle focus:border-accent-primary'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-400 font-mono">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred during submission. Please try again or email directly.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto"
                      leftIcon={
                        status === 'submitting' ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                    >
                      {status === 'submitting' ? 'Validating...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

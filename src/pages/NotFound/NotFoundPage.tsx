import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center py-24 md:py-36">
      <SEO title="Page Not Found (404)" description="The requested route does not exist within the portfolio application." />
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-2xl glass-card text-center space-y-6 max-w-lg mx-auto"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <span>HTTP 404</span>
            <span className="text-border-subtle">•</span>
            <span>Route Undefined</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-bold font-heading text-text-primary tracking-tight">
              404
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold font-heading text-text-primary">
              Page Not Found
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed">
            The requested route does not exist or has been relocated within the portfolio application architecture.
          </p>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'space-y-3',
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase',
            'bg-accent-primary/10 text-accent-primary border border-accent-primary/20',
            isCenter && 'mx-auto'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-text-primary">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

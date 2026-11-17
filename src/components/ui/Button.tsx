import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

export type ButtonAsButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
    to?: undefined;
  };

export type ButtonAsLinkProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    to?: undefined;
    isExternal?: boolean;
  };

export type ButtonAsRouterLinkProps = BaseButtonProps & {
  to: string;
  href?: undefined;
  children?: React.ReactNode;
};

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsLinkProps
  | ButtonAsRouterLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-primary text-white hover:bg-accent-primary-hover shadow-subtle border border-accent-primary/50 hover:shadow-accent-glow hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-bg-secondary text-text-primary hover:bg-bg-card border border-border-subtle hover:border-border-highlight hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'bg-transparent text-text-primary hover:bg-white/[0.04] border border-border-subtle hover:border-accent-primary/60 hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
  md: 'text-sm px-4 py-2.5 rounded-interactive gap-2',
  lg: 'text-base px-6 py-3 rounded-interactive gap-2.5 font-semibold',
};

const baseStyles =
  'inline-flex items-center justify-center font-medium font-sans transition-all duration-200 select-none cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      className,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...rest
    } = props;

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
      className
    );

    // React Router Link
    if ('to' in props && props.to) {
      if (disabled) {
        return (
          <span className={classes} aria-disabled="true">
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </span>
        );
      }
      return (
        <Link
          to={props.to}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    // External or Standard Link
    if ('href' in props && props.href) {
      if (disabled) {
        return (
          <span className={classes} aria-disabled="true">
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </span>
        );
      }
      const isExternal =
        props.isExternal ?? (props.href.startsWith('http') || props.href.startsWith('mailto:'));
      const { href, target, rel, isExternal: _isExt, ...anchorRest } = props;
      return (
        <a
          href={href}
          className={classes}
          target={target ?? (isExternal ? '_blank' : undefined)}
          rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...anchorRest}
        >
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    // Standard Button
    const { type = 'button', onClick, ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonRest}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-primary ' +
  'disabled:cursor-not-allowed disabled:opacity-50 active:scale-95';

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 active:shadow-md',
  accent: 'bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/25 active:shadow-md',
  secondary:
    'bg-white text-ink ring-2 ring-primary/20 hover:ring-primary/40 hover:bg-surface/50 focus-visible:ring-primary shadow-sm transition-all',
  ghost: 'bg-transparent text-ink hover:bg-primary/10 active:bg-primary/20 focus-visible:ring-primary',
};

// min-h keeps every target ≥44px tall for WCAG 2.5.5 / pointer ergonomics.
const sizes: Record<Size, string> = {
  md: 'min-h-[44px] px-5 py-2.5 text-sm',
  lg: 'min-h-[52px] px-7 py-3 text-base',
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, type, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type ?? 'button'}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
});

export type ButtonLinkProps = LinkProps &
  BaseProps & {
    className?: string;
    children: React.ReactNode;
  } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

/** A link styled as a button — for navigation (uses next/link). */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}

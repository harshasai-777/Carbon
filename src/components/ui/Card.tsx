import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

/**
 * EcoSync Card Component - Modern glassmorphism design with gradient borders.
 * Flexible semantic element support with smooth hover states.
 */
interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'article' | 'li';
}

export function Card({ as: Tag = 'div', className, children, ...rest }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-2xl bg-white/80 hover:bg-white/90 backdrop-blur-xl p-6 sm:p-8 ' +
        'shadow-sm hover:shadow-md ring-1 ring-primary/10 hover:ring-primary/20 ' +
        'transition-all duration-200 hover:border-primary/20',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

import { memo } from 'react';
import { Card, Badge, Icon } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { ComparisonStatus } from '@/lib';

/**
 * Maps a comparison status to an accessible label, tone, and icon. The status is
 * always conveyed in words and an icon — never by color alone.
 */
const STATUS_META: Record<
  ComparisonStatus,
  { label: string; tone: 'primary' | 'warning' | 'danger'; icon: 'check' | 'target' | 'spark' }
> = {
  below: { label: 'On track', tone: 'primary', icon: 'check' },
  near: { label: 'Close', tone: 'warning', icon: 'target' },
  above: { label: 'Over', tone: 'danger', icon: 'spark' },
};

export interface ComparisonCardProps {
  title: string;
  status: ComparisonStatus;
  /** The headline figure, e.g. "2.6× the target" or "82% of average". */
  headline: string;
  /** A sentence explaining the comparison in plain language. */
  detail: string;
}

export const ComparisonCard = memo(function ComparisonCard({ title, status, headline, detail }: ComparisonCardProps) {
  const meta = STATUS_META[status];
  return (
    <Card className="group relative overflow-hidden flex flex-col gap-4 border-2 border-accent/10 hover:border-accent/30 transition-all h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent/70 group-hover:text-accent transition-colors">{title}</p>
        <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br', 'bg-accent/10 text-accent', 'group-hover:scale-110 transition-transform')}>
          <Icon name={meta.icon} size={22} />
        </div>
      </div>
      <p className="relative font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{headline}</p>
      <p className="relative text-sm text-ink/70 leading-relaxed">{detail}</p>
      <Badge tone={meta.tone} className="relative w-fit">
        <Icon name={meta.icon} size={14} />
        {meta.label}
      </Badge>
    </Card>
  );
});


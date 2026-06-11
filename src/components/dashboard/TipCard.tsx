import { Badge, Icon } from '@/components/ui';
import { formatCo2, type Tip } from '@/lib';
import { CATEGORY_META, EFFORT_LABELS } from '@/components/labels';

const EFFORT_TONE = {
  low: 'primary',
  medium: 'warning',
  high: 'neutral',
} as const;

export interface TipCardProps {
  tip: Tip;
  /** 1-based rank used as a visible ordinal. */
  rank: number;
}

/** A single ranked reduction action, showing estimated saving and effort. */
export function TipCard({ tip, rank }: TipCardProps) {
  const category = CATEGORY_META[tip.category];
  const effortColor = tip.effort === 'low' ? 'from-accent to-primary' : tip.effort === 'medium' ? 'from-warning to-accent' : 'from-primary to-accent';
  return (
    <li className="group relative flex gap-5 rounded-2xl border-2 border-primary/10 hover:border-primary/20 bg-white hover:bg-white/80 hover:shadow-lg transition-all p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <span
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-all"
        aria-hidden="true"
      >
        <Icon name={category.icon} size={22} />
      </span>
      <div className="relative flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 text-xs font-bold text-primary">#{rank}</span>
              <h3 className="font-display font-semibold text-ink group-hover:text-primary transition-colors">{tip.title}</h3>
            </div>
            <p className="text-sm text-ink/70">{tip.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-primary/10 group-hover:border-primary/20 transition-colors">
          <Badge tone="primary" className="bg-gradient-to-r from-accent/20 to-primary/20 text-primary font-semibold">
            <Icon name="leaf" size={14} />
            Save ~{formatCo2(tip.estimatedSavingKg)}/yr
          </Badge>
          <Badge tone={EFFORT_TONE[tip.effort]} className={`bg-gradient-to-r ${effortColor} text-white font-semibold`}>
            {EFFORT_LABELS[tip.effort]}
          </Badge>
          <Badge tone="neutral" className="bg-primary/10 text-primary/80">{category.label}</Badge>
        </div>
      </div>
    </li>
  );
}

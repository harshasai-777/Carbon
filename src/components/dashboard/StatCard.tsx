import { memo } from 'react';
import type { ReactNode } from 'react';
import { Card, Icon } from '@/components/ui';
import type { IconName } from '@/components/ui';

export interface StatCardProps {
  label: string;
  value: string;
  icon?: IconName;
  children?: ReactNode;
}

/** Modern headline metric card with gradient icon and enhanced typography. */
export const StatCard = memo(function StatCard({ label, value, icon, children }: StatCardProps) {
  return (
    <Card className="group relative overflow-hidden flex flex-col gap-3 border-2 border-primary/10 hover:border-primary/30 transition-all h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-center gap-3">
        {icon ? (
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
            <Icon name={icon} size={24} />
          </span>
        ) : null}
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 group-hover:text-primary transition-colors">{label}</p>
      </div>
      <p className="relative font-display text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{value}</p>
      {children && <div className="relative text-sm text-ink/70">{children}</div>}
    </Card>
  );
});


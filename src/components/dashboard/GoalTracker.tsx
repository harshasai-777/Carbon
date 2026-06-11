'use client';

import { useEffect, useState } from 'react';
import {
  clearGoal,
  formatPercent,
  formatTonnes,
  goalProgress,
  loadGoal,
  saveGoal,
  TARGET_TONNES,
  type Goal,
} from '@/lib';
import { Button, Card, Icon, NumberField, ProgressBar } from '@/components/ui';

export interface GoalTrackerProps {
  /** Current annual footprint in tonnes, used as the baseline and for progress. */
  currentTonnes: number;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/**
 * Set and track a reduction goal. The goal is persisted via the storage layer; its
 * baseline is captured from the footprint at the moment it's set, so progress is
 * measured against where you started, not the latest number.
 */
export function GoalTracker({ currentTonnes }: GoalTrackerProps) {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [loaded, setLoaded] = useState(false);
  const suggested = Math.max(TARGET_TONNES, round1(currentTonnes * 0.8));
  const [target, setTarget] = useState(suggested);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setGoal(loadGoal());
    setLoaded(true);
  }, []);

  function handleSet() {
    if (!Number.isFinite(target) || target <= 0) {
      setError('Enter a target greater than zero.');
      return;
    }
    if (target >= currentTonnes) {
      setError('Your target should be below your current footprint to be a reduction.');
      return;
    }
    const next: Goal = {
      targetTonnes: round1(target),
      baselineTonnes: round1(currentTonnes),
      createdAt: new Date().toISOString(),
    };
    saveGoal(next);
    setGoal(next);
    setError(undefined);
  }

  function handleClear() {
    clearGoal();
    setGoal(null);
    setTarget(suggested);
  }

  if (!loaded) {
    // Avoid an SSR/CSR mismatch: render nothing definitive until the goal is read.
    return <Card className="h-40 animate-pulse bg-primary/5" aria-hidden="true" />;
  }

  if (!goal) {
    return (
      <Card className="border-2 border-accent/10 hover:border-accent/30 transition-all">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent">
              <Icon name="target" size={24} />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">🎯 Set a Reduction Goal</h3>
          </div>
          <p className="text-sm text-ink/70">
            Pick an annual target below your current <span className="font-bold text-primary">{formatTonnes(currentTonnes)}</span>. We&apos;ll track your progress as you recalculate over time.
          </p>
          <div className="max-w-xs bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-4">
            <NumberField
              label="Annual target"
              value={target}
              unit="t CO₂e"
              min={0}
              step={0.1}
              error={error}
              onChange={setTarget}
            />
          </div>
          <div>
            <Button onClick={handleSet} className="bg-gradient-to-r from-accent to-primary">
              <Icon name="check" size={18} />
              Set Goal
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  const progress = goalProgress(goal, currentTonnes);

  return (
    <Card className="border-2 border-accent/10 hover:border-accent/30 transition-all">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent">
              <Icon name="target" size={24} />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">🎯 Reduction Goal</h3>
          </div>
          <Button variant="ghost" size="md" onClick={handleClear} className="text-ink/60 hover:text-ink">
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1">Baseline</p>
            <p className="font-display text-3xl font-bold text-primary">
              {formatTonnes(goal.baselineTonnes)}
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent/70 mb-1">Current</p>
            <p className="font-display text-3xl font-bold text-accent">{formatTonnes(currentTonnes)}</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1">Target</p>
            <p className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {formatTonnes(goal.targetTonnes)}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <ProgressBar
            value={progress.progressPercent}
            label="Progress toward your reduction goal"
            valueText={`${formatPercent(progress.progressPercent)} of the way from baseline to target`}
            tone={progress.achieved ? 'primary' : 'accent'}
          />
          <p aria-live="polite" className="text-sm font-semibold text-ink">
            {progress.achieved ? (
              <span className="inline-flex items-center gap-2 text-primary">
                <Icon name="trophy" size={18} />
                🎉 Target reached! You&apos;ve cut {formatTonnes(progress.reducedTonnes)} from your baseline.
              </span>
            ) : (
              <span className="text-ink/80">{formatPercent(progress.progressPercent)} progress · <span className="text-accent font-bold">{formatTonnes(progress.remainingTonnes)} to go</span> to reach your target.</span>
            )}
          </p>
        </div>
      </div>
    </Card>
  );
}

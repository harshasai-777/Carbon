import { describe, expect, it } from 'vitest';
import { goalProgress } from './goal';
import type { Goal } from './schemas';

function makeGoal(baseline: number, target: number): Goal {
  return { baselineTonnes: baseline, targetTonnes: target, createdAt: '2026-01-01T00:00:00Z' };
}

describe('goalProgress', () => {
  it('reports goal achieved when current is at the target', () => {
    const p = goalProgress(makeGoal(5, 3), 3);
    expect(p.achieved).toBe(true);
    expect(p.progressPercent).toBe(100);
    expect(p.remainingTonnes).toBe(0);
    expect(p.reducedTonnes).toBeCloseTo(2);
  });

  it('reports goal achieved when current is below the target', () => {
    const p = goalProgress(makeGoal(5, 3), 2);
    expect(p.achieved).toBe(true);
    expect(p.remainingTonnes).toBe(0);
  });

  it('computes partial progress correctly', () => {
    const p = goalProgress(makeGoal(10, 6), 8);
    // Needed: 10 - 6 = 4. Reduced: 10 - 8 = 2. Progress: 50%.
    expect(p.neededTonnes).toBeCloseTo(4);
    expect(p.reducedTonnes).toBeCloseTo(2);
    expect(p.progressPercent).toBe(50);
    expect(p.remainingTonnes).toBeCloseTo(2);
    expect(p.achieved).toBe(false);
  });

  it('reports zero progress when current equals baseline', () => {
    const p = goalProgress(makeGoal(5, 3), 5);
    expect(p.reducedTonnes).toBe(0);
    expect(p.progressPercent).toBe(0);
    expect(p.achieved).toBe(false);
    expect(p.remainingTonnes).toBeCloseTo(2);
  });

  it('reports 100% when baseline equals target (nothing to reduce)', () => {
    const p = goalProgress(makeGoal(3, 3), 3);
    expect(p.progressPercent).toBe(100);
    expect(p.neededTonnes).toBe(0);
  });

  it('reports 100% when baseline is below target', () => {
    const p = goalProgress(makeGoal(2, 5), 2);
    expect(p.progressPercent).toBe(100);
  });

  it('clamps reducedTonnes at zero when current exceeds baseline', () => {
    const p = goalProgress(makeGoal(5, 3), 7);
    expect(p.reducedTonnes).toBe(0);
    expect(p.progressPercent).toBe(0);
  });
});

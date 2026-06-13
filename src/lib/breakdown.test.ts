import { describe, expect, it } from 'vitest';
import { categoryBreakdown } from './breakdown';
import type { FootprintResult } from './schemas';

function makeResult(categories: Record<string, number>): FootprintResult {
  const transport = categories.transport ?? 0;
  const home = categories.home ?? 0;
  const food = categories.food ?? 0;
  const consumption = categories.consumption ?? 0;
  const totalKg = transport + home + food + consumption;
  return {
    totalKg,
    totalTonnes: totalKg / 1000,
    categories: { transport, home, food, consumption },
    details: { car: 0, transit: 0, flights: 0, electricity: 0, heating: 0 },
  };
}

describe('categoryBreakdown', () => {
  it('sorts categories by kg, largest first', () => {
    const result = makeResult({ transport: 100, home: 300, food: 200, consumption: 50 });
    const breakdown = categoryBreakdown(result);
    expect(breakdown.map((b) => b.key)).toEqual(['home', 'food', 'transport', 'consumption']);
  });

  it('computes percentages rounded to one decimal', () => {
    const result = makeResult({ transport: 333, home: 333, food: 334, consumption: 0 });
    const breakdown = categoryBreakdown(result);
    const totalPercent = breakdown.reduce((sum, b) => sum + b.percent, 0);
    // Percentages should be close to 100 in aggregate (rounding may cause ±0.1).
    expect(totalPercent).toBeCloseTo(100, 0);
    // Each non-zero category should have a percentage > 0.
    expect(breakdown.find((b) => b.key === 'transport')?.percent).toBeGreaterThan(0);
  });

  it('returns all-zero percentages when total is zero (no divide-by-zero)', () => {
    const result = makeResult({ transport: 0, home: 0, food: 0, consumption: 0 });
    const breakdown = categoryBreakdown(result);
    expect(breakdown.every((b) => b.percent === 0)).toBe(true);
    expect(breakdown.every((b) => b.kg === 0)).toBe(true);
  });

  it('assigns ~100% to a single dominant category', () => {
    const result = makeResult({ transport: 5000, home: 0, food: 0, consumption: 0 });
    const breakdown = categoryBreakdown(result);
    expect(breakdown[0]?.key).toBe('transport');
    expect(breakdown[0]?.percent).toBe(100);
  });

  it('always returns exactly 4 entries (one per category)', () => {
    const result = makeResult({ transport: 10, home: 20, food: 30, consumption: 40 });
    expect(categoryBreakdown(result)).toHaveLength(4);
  });
});

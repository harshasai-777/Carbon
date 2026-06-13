import { describe, expect, it } from 'vitest';
import {
  CAR_FUEL_FACTOR,
  CAR_FUELS,
  DIET_FACTOR,
  DIETS,
  FLIGHT_FACTOR,
  FOOD_WASTE_LEVELS,
  FOOD_WASTE_MULTIPLIER,
  GRID_INTENSITY,
  HEATING_FUEL_FACTOR,
  HEATING_FUEL_UNIT,
  HEATING_FUELS,
  HEAT_PUMP_COP,
  MONTHS_PER_YEAR,
  PER_CAPITA_AVERAGE_TONNES,
  RECYCLING_MULTIPLIER,
  REGIONS,
  SHOPPING_FACTOR,
  SHOPPING_LEVELS,
  TARGET_TONNES,
  TRANSIT_FACTOR,
  WEEKS_PER_YEAR,
} from './emission-factors';

describe('emission factor data integrity', () => {
  it('defines all regions with positive grid intensities', () => {
    expect(REGIONS.length).toBeGreaterThan(0);
    for (const region of REGIONS) {
      expect(GRID_INTENSITY[region]).toBeGreaterThan(0);
      expect(Number.isFinite(GRID_INTENSITY[region])).toBe(true);
    }
  });

  it('defines all car fuels with non-negative factors', () => {
    expect(CAR_FUELS.length).toBeGreaterThan(0);
    for (const fuel of CAR_FUELS) {
      expect(CAR_FUEL_FACTOR[fuel]).toBeGreaterThanOrEqual(0);
      expect(Number.isFinite(CAR_FUEL_FACTOR[fuel])).toBe(true);
    }
  });

  it('defines all diets with positive annual factors', () => {
    expect(DIETS.length).toBeGreaterThan(0);
    for (const diet of DIETS) {
      expect(DIET_FACTOR[diet]).toBeGreaterThan(0);
    }
  });

  it('defines all food waste levels with multipliers ≥ 1', () => {
    expect(FOOD_WASTE_LEVELS.length).toBeGreaterThan(0);
    for (const level of FOOD_WASTE_LEVELS) {
      expect(FOOD_WASTE_MULTIPLIER[level]).toBeGreaterThanOrEqual(1);
    }
  });

  it('defines all shopping levels with positive factors', () => {
    expect(SHOPPING_LEVELS.length).toBeGreaterThan(0);
    for (const level of SHOPPING_LEVELS) {
      expect(SHOPPING_FACTOR[level]).toBeGreaterThan(0);
    }
  });

  it('has positive flight factors for both haul types', () => {
    expect(FLIGHT_FACTOR.shortHaul).toBeGreaterThan(0);
    expect(FLIGHT_FACTOR.longHaul).toBeGreaterThan(FLIGHT_FACTOR.shortHaul);
  });

  it('has a positive transit factor', () => {
    expect(TRANSIT_FACTOR).toBeGreaterThan(0);
  });

  it('has a recycling multiplier between 0 and 1 (inclusive)', () => {
    expect(RECYCLING_MULTIPLIER).toBeGreaterThan(0);
    expect(RECYCLING_MULTIPLIER).toBeLessThanOrEqual(1);
  });

  it('has a positive heat pump COP', () => {
    expect(HEAT_PUMP_COP).toBeGreaterThan(1);
  });

  it('defines a heating fuel unit label for every heating fuel', () => {
    for (const fuel of HEATING_FUELS) {
      expect(typeof HEATING_FUEL_UNIT[fuel]).toBe('string');
    }
  });

  it('defines combustion heating factors for non-electric fuels', () => {
    const combustion = HEATING_FUELS.filter((f) => f !== 'electric' && f !== 'heatpump');
    for (const fuel of combustion) {
      expect(HEATING_FUEL_FACTOR[fuel]).toBeGreaterThanOrEqual(0);
    }
  });

  it('defines positive per-capita averages for every region', () => {
    for (const region of REGIONS) {
      expect(PER_CAPITA_AVERAGE_TONNES[region]).toBeGreaterThan(0);
    }
  });

  it('has a positive 1.5°C-aligned target', () => {
    expect(TARGET_TONNES).toBeGreaterThan(0);
  });

  it('uses standard calendar constants', () => {
    expect(WEEKS_PER_YEAR).toBe(52);
    expect(MONTHS_PER_YEAR).toBe(12);
  });
});

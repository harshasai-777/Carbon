import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { toFieldErrors, validateStep } from './validation';

const testSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().int().nonnegative('Age must be non-negative'),
});

describe('toFieldErrors', () => {
  it('extracts field-keyed errors from a Zod error', () => {
    const result = testSchema.safeParse({ name: '', age: -1 });
    if (result.success) throw new Error('Expected parse failure');
    const errors = toFieldErrors(result.error);
    expect(errors.name).toBeDefined();
    expect(errors.age).toBeDefined();
  });

  it('keeps only the first error per field', () => {
    // A schema that can produce multiple issues per field.
    const multiSchema = z.object({
      value: z.string().min(2, 'Too short').max(1, 'Too long'),
    });
    const result = multiSchema.safeParse({ value: '' });
    if (result.success) throw new Error('Expected parse failure');
    const errors = toFieldErrors(result.error);
    // Only one error for 'value', whichever fires first.
    expect(typeof errors.value).toBe('string');
  });

  it('uses _root as key when path is empty', () => {
    const enumSchema = z.enum(['a', 'b']);
    const result = enumSchema.safeParse('c');
    if (result.success) throw new Error('Expected parse failure');
    const errors = toFieldErrors(result.error);
    expect(errors._root).toBeDefined();
  });
});

describe('validateStep', () => {
  it('returns ok with parsed data for valid input', () => {
    const result = validateStep(testSchema, { name: 'Alice', age: 30 });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.name).toBe('Alice');
      expect(result.data.age).toBe(30);
    }
  });

  it('returns errors for invalid input', () => {
    const result = validateStep(testSchema, { name: '', age: -5 });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toBeDefined();
      expect(result.errors.age).toBeDefined();
    }
  });

  it('applies schema defaults', () => {
    const withDefault = z.object({ value: z.string().default('hello') });
    const result = validateStep(withDefault, {});
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.value).toBe('hello');
    }
  });
});

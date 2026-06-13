import type { Metadata } from 'next';
import { CalculatorForm } from '@/components/calculator/CalculatorForm';

export const metadata: Metadata = {
  title: 'Carbon Calculator — EcoSync',
  description:
    'Answer a quick 6-step questionnaire to calculate your annual carbon footprint. Get personalized insights and actionable recommendations.',
};

/**
 * Calculator route with modern design system. A thin Server Component shell around
 * the interactive client form with enhanced visual hierarchy and gradient styling.
 */
export default function CalculatorPage() {
  return (
    <main id="main" className="min-h-screen bg-gradient-to-b from-surface via-white to-surface/50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Decorative gradient elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-bl from-primary/10 to-accent/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-40 left-0 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl"
        />
        
        <header className="mb-12 text-center sm:text-left">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            <span aria-hidden="true">🧮 </span>Carbon Calculator
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink mb-4 leading-tight">
            Calculate Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Carbon Impact</span>
          </h1>
          <p className="mt-4 text-lg text-ink/70 max-w-2xl">
            Answer 6 simple questions about your lifestyle. Your answers stay completely private on your device, and you can update them anytime.
          </p>
        </header>
        <CalculatorForm />
      </div>
    </main>
  );
}

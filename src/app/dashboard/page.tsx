import type { Metadata } from 'next';
import { DashboardLoader } from '@/components/dashboard/DashboardLoader';

export const metadata: Metadata = {
  title: 'Your Results & Recommendations — EcoSync',
  description:
    'View your carbon footprint breakdown, regional comparisons, personalized sustainability recommendations, and track your reduction goals.',
};

/**
 * Dashboard route with modern analytics-style design. Server Component shell around
 * the interactive client loader with enhanced visualization and metrics display.
 */
export default function DashboardPage() {
  return (
    <main id="main" className="min-h-screen bg-gradient-to-b from-surface via-white to-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Decorative gradient elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-32 right-10 -z-10 h-80 w-80 rounded-full bg-gradient-to-bl from-accent/15 to-primary/15 blur-3xl"
        />
        
        <header className="mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            <span aria-hidden="true">📊 </span>Your Dashboard
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink leading-tight">
                Your Impact
              </h1>
              <p className="mt-4 text-lg text-ink/70 max-w-2xl">
                Your personalized carbon footprint analysis with actionable recommendations to reduce your environmental impact.
              </p>
            </div>
          </div>
        </header>
        <DashboardLoader />
      </div>
    </main>
  );
}

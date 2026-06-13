import { ButtonLink, Card, Icon } from '@/components/ui';
import type { IconName } from '@/components/ui';
import Link from 'next/link';

/**
 * EcoSync Landing Page - Modern, engaging introduction to carbon footprint tracking.
 * Pure Server Component with optimized performance and comprehensive feature showcase.
 */

const STEPS: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'spark',
    title: 'Quick & Easy Assessment',
    body: 'Answer just 6 simple questions about your lifestyle - transportation, home energy, diet, and consumption habits. Takes only 2 minutes.',
  },
  {
    icon: 'chart',
    title: 'Detailed Impact Breakdown',
    body: 'Get your complete annual CO₂e footprint with a visual category breakdown, plus how you compare to regional averages and climate targets.',
  },
  {
    icon: 'target',
    title: 'Actionable Recommendations',
    body: 'Receive AI-ranked sustainability actions personalized to your situation, each showing the exact CO₂e savings you\'d achieve.',
  },
];

const TRUST: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'shield',
    title: '100% Private & Secure',
    body: 'All calculations run locally in your browser. Your data never leaves your device - no servers, no tracking, no accounts needed.',
  },
  {
    icon: 'globe',
    title: 'Science-Based Accuracy',
    body: 'Built on published emission factors from DEFRA, US EPA, IEA, and peer-reviewed climate research for reliable results.',
  },
  {
    icon: 'leaf',
    title: 'Goal Tracking & Progress',
    body: 'Set personal reduction targets, track your progress over time, and revisit your dashboard whenever you need motivation and clarity.',
  },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero Section - Premium gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-surface to-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-accent/15 to-primary/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:border-primary/40 transition-colors">
              <Icon name="leaf" size={16} />
              AI-Powered Carbon Intelligence
            </span>
            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-tight">
              Know Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Carbon Impact</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ink/75 font-medium">
              Calculate your annual CO₂e footprint in just 2 minutes. Get personalized sustainability actions, track your progress, and make a real environmental impact.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/calculator" size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25">
                Start Carbon Assessment
                <Icon name="arrow-right" size={20} />
              </ButtonLink>
              <ButtonLink href="/dashboard" size="lg" variant="secondary" className="border-2 border-primary/30 hover:border-primary/60">
                View Dashboard
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-ink/60 font-medium">
              <span aria-hidden="true">💚 </span>Free · <span aria-hidden="true">🔒 </span>Completely Private · <span aria-hidden="true">🌍 </span>Science-Based · <span aria-hidden="true">⚡ </span>Instant Results
            </p>
          </div>
        </div>
      </section>

      {/* How it works - Feature Showcase */}
      <section aria-labelledby="how-heading" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">How EcoSync Works</span>
          <h2 id="how-heading" className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Simple Steps to Climate Action
          </h2>
          <p className="mt-4 text-lg text-ink/70">From assessment to personalized impact in three straightforward stages</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {STEPS.map((step, i) => (
            <div key={step.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
              <Card className="relative flex flex-col gap-5 h-full border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-semibold text-xl">
                    {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon name={step.icon} size={24} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-ink/70 leading-relaxed">{step.body}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section aria-labelledby="trust-heading" className="relative py-20 sm:py-28 bg-gradient-to-b from-white/50 to-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="trust-heading" className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
              Why Trust EcoSync
            </h2>
            <p className="mt-4 text-lg text-ink/70">Built on science, protected by privacy, designed for impact</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {TRUST.map((item) => (
              <div key={item.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative flex gap-5 border-2 border-accent/10 hover:border-accent/30 transition-colors h-full">
                  <span className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 text-accent group-hover:from-accent/30 group-hover:to-primary/30 transition-colors">
                    <Icon name={item.icon} size={26} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.body}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-ink/60 font-medium">
              Our methodology and emission factors are fully documented and based on latest climate science.{' '}
              <Link href="/" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-colors">
                Learn more about our approach
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Premium gradient styling */}
      <section aria-labelledby="cta-heading" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-xl opacity-60" />
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-10 sm:p-14 lg:p-16 text-center text-white shadow-2xl ring-1 ring-white/20">
          <h2 id="cta-heading" className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Ready to Take Climate Action?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 font-medium">
            Discover your carbon footprint in 2 minutes. Get personalized sustainability recommendations and start making a measurable environmental impact today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/calculator" size="lg" variant="secondary" className="font-semibold">
              Calculate Now
              <Icon name="arrow-right" size={20} />
            </ButtonLink>
            <ButtonLink href="/dashboard" size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold">
              View Dashboard
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/75 font-medium">
            <span aria-hidden="true">✨ </span>Join thousands making informed climate decisions
          </p>
        </div>
      </section>
    </main>
  );
}

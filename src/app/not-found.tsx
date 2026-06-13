import { ButtonLink, Icon } from '@/components/ui';

/**
 * Premium 404 Not Found Page.
 * Features a modern gradient background, glassmorphism illustration, and links back to the app.
 */
export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-b from-surface via-white to-surface/50 px-4 py-16 text-center">
      {/* Decorative gradient blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl"
      />

      <div className="flex flex-col items-center max-w-md">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary animate-bounce">
          <Icon name="spark" size={48} />
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-ink/70 mb-8 leading-relaxed">
          {"The page you are looking for doesn't exist or has been moved. Let's get you back on track to sync with the planet!"}
        </p>


        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <ButtonLink href="/calculator" size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25">
            Start Assessment
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
          <ButtonLink href="/" size="lg" variant="secondary" className="border-2 border-primary/20 hover:border-primary/40">
            Go Home
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}

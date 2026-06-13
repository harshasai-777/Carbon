'use client';

import { useEffect } from 'react';
import { Button, Icon } from '@/components/ui';

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Premium Error Boundary component.
 * Catches runtime failures gracefully and allows resetting the boundary or navigating back.
 */
export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics service or server console if needed
    // eslint-disable-next-line no-console
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <main id="main" className="flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-b from-surface via-white to-surface/50 px-4 py-16 text-center">
      {/* Decorative gradient blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-red-500/5 to-primary/10 blur-3xl"
      />

      <div className="flex flex-col items-center max-w-md">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500/10 to-primary/10 text-red-600">
          <Icon name="spark" size={48} className="rotate-45" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">
          Something went wrong
        </h1>

        <p className="text-lg text-ink/70 mb-8 leading-relaxed">
          {"Don't worry, your data remains safely stored locally."}
        </p>


        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button onClick={reset} size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25">
            Try Again
            <Icon name="check" size={18} />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="border border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-primary"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Go Home
          </Button>
        </div>
      </div>
    </main>
  );
}

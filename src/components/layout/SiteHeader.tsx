import Link from 'next/link';
import { Icon } from '@/components/ui';

/**
 * Top navigation with EcoSync branding. Server Component with sticky positioning,
 * modern gradient styling, and accessible focus states.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gradient-to-r from-primary/10 via-accent/10 to-primary/10 bg-gradient-to-r from-white/80 via-white/80 to-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="EcoSync home"
          className="flex items-center gap-2 rounded-xl px-2 py-1 font-display text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:from-primary/80 hover:via-accent/80 hover:to-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
            <Icon name="leaf" size={22} />
          </span>
          EcoSync
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/calculator"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-ink/80 hover:bg-primary/10 hover:text-ink transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Calculator
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 text-primary hover:from-primary/20 hover:to-accent/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

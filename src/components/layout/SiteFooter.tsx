import { Icon } from '@/components/ui';

/**
 * Modern footer with EcoSync branding, transparency note, and social/legal links.
 * Static Server Component with gradient styling.
 */
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-gradient-to-r from-primary/10 via-accent/10 to-primary/10 bg-gradient-to-b from-white/50 to-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-md">
                <Icon name="leaf" size={20} />
              </span>
              <span className="font-display text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EcoSync</span>
            </div>
            <p className="max-w-sm text-sm text-ink/70">
              Track your environmental impact and take meaningful climate action today.
            </p>
          </div>
          <div className="text-sm text-ink/60">
            <p className="font-semibold text-ink mb-2">About this tool</p>
            <p className="max-w-md">
              Estimates are for awareness and relative comparison, not audit-grade carbon accounting. 
              Your data stays on your device — nothing is sent to servers, completely private and secure.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} EcoSync · Intelligent Carbon Footprint Tracker · All Rights Reserved
          </p>
          <div className="flex gap-4 text-xs text-ink/50">
            <a href="/" className="hover:text-primary transition-colors">Privacy</a>
            <span>·</span>
            <a href="/" className="hover:text-primary transition-colors">Terms</a>
            <span>·</span>
            <a href="/" className="hover:text-primary transition-colors">Methodology</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

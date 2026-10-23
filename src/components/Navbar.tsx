import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'O mnie', href: '#o-mnie' },
    { label: 'Proces', href: '#proces' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafafa]/90 backdrop-blur-md border-b border-zinc-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark (1 line, display font) */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 uppercase whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {PROFILE_DATA.name}
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-zinc-950 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 rounded hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-zinc-900 focus-visible:outline-offset-2"
          >
            <span>Napisz do mnie</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-zinc-900 rounded"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-[#fafafa] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2 border-b border-zinc-100 hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={handleLinkClick}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-zinc-900 rounded hover:bg-zinc-800 transition-colors"
            >
              <span>Napisz do mnie</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

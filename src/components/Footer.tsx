import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161530] border-t border-[#23214a] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Name and year */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-zinc-200 uppercase tracking-wider">
            {PROFILE_DATA.name}
          </span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>© {currentYear} Portfolio graficzne</span>
        </div>

        {/* Right: Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white py-1 px-2 rounded"
          aria-label="Przewiń stronę na samą górę"
        >
          <span>Powrót na górę</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

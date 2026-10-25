import { ArrowDown, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';
import heroBgImage from '../assets/images/hero_minimal_bg_1792952660339.jpg';

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-zinc-200/60">
      {/* Background image: visible minimalist background with high contrast for text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src={heroBgImage}
          alt=""
          role="presentation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa]/70 via-[#fafafa]/45 to-[#fafafa]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa]/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Subtle discipline kicker (Unboxed text with typographic separators) */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-wider uppercase text-zinc-500 mb-6">
            {PROFILE_DATA.disciplines.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span>{item}</span>
                {index < PROFILE_DATA.disciplines.length - 1 && (
                  <span className="text-zinc-300 select-none">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#161530] leading-[1.08] mb-8 [text-wrap:balance]">
            {PROFILE_DATA.heroHeadline}
          </h1>

          {/* Subtitle / Statement */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-normal leading-relaxed max-w-3xl mb-12 [text-wrap:pretty]">
            {PROFILE_DATA.heroSubtitle}
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#161530] rounded hover:bg-[#161530]/90 transition-all duration-150 shadow-sm focus-visible:outline-2 focus-visible:outline-[#161530] focus-visible:outline-offset-2 group"
            >
              <span>Zobacz moje prace</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-700 bg-white/80 backdrop-blur-xs hover:bg-zinc-100 rounded border border-zinc-300 transition-colors focus-visible:outline-2 focus-visible:outline-[#161530]"
            >
              <MessageSquare className="w-4 h-4 text-zinc-500" />
              <span>Porozmawiajmy</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

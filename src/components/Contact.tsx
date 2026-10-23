import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      window.location.href = `mailto:${PROFILE_DATA.contact.email}`;
    }
  };

  return (
    <section id="kontakt" className="py-24 md:py-36 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
            Kontakt
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
            Masz pomysł? Stwórzmy coś dobrego.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-12 max-w-2xl">
            Szukasz identyfikacji wizualnej, nowego projektu opakowania, czy materiałów promocyjnych? Napisz do mnie — chętnie porozmawiam o Twoich potrzebach i przygotuję wstępną wycenę.
          </p>

          {/* Interactive Direct Contact Card */}
          <div className="p-6 sm:p-8 rounded-lg bg-zinc-900 border border-zinc-800 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Napisz bezpośrednio
                </span>
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="text-xl sm:text-2xl font-bold text-white hover:text-zinc-200 transition-colors break-all focus-visible:outline-2 focus-visible:outline-white"
                >
                  {PROFILE_DATA.contact.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors border border-zinc-700 focus-visible:outline-2 focus-visible:outline-white"
                  title="Skopiuj adres e-mail do schowka"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Skopiowano!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Kopiuj adres</span>
                    </>
                  )}
                </button>

                {/* Open Mail Client Button */}
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}?subject=Zapytanie%20o%20projekt%20graficzny`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white hover:bg-zinc-200 text-zinc-950 rounded transition-colors focus-visible:outline-2 focus-visible:outline-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>Wyślij e-mail</span>
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>{PROFILE_DATA.contact.location}</span>
              </div>
              <div className="text-zinc-400">
                {PROFILE_DATA.contact.status}
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Profile w sieci i portfolio zewnętrzne
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PROFILE_DATA.contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all flex items-center justify-between group focus-visible:outline-2 focus-visible:outline-white"
                >
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-zinc-200">
                      {social.name}
                    </div>
                    <div className="text-[11px] text-zinc-500 truncate max-w-[120px]">
                      {social.name}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

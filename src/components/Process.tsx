import { PROFILE_DATA } from '../data/profile.ts';

export function Process() {
  return (
    <section id="proces" className="py-24 md:py-32 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            Jak pracuję
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#161530] mb-4">
            Proces projektowy
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            Każdy projekt opiera się na przejrzystym, sprawdzonym schemacie współpracy — od pierwszego spotkania po przekazanie gotowych plików produkcyjnych.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE_DATA.processSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-lg border border-zinc-200 bg-white flex flex-col justify-between hover:border-zinc-300 transition-colors"
            >
              <div>
                <div className="text-2xl font-bold text-zinc-300 mb-6 font-mono tabular-nums">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#161530] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Krok {step.number} z 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

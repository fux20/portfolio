import { Layers, Sparkles, Printer, Monitor } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export function About() {
  const getIconForSpec = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-zinc-900" />;
      case 1:
        return <Printer className="w-5 h-5 text-zinc-900" />;
      default:
        return <Monitor className="w-5 h-5 text-zinc-900" />;
    }
  };

  return (
    <section id="o-mnie" className="py-24 md:py-32 border-b border-zinc-200/60 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Specialties */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
                O mnie
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-6">
                Kilka słów o mnie
              </h2>
              {/* Highlighted Lead Paragraph */}
              <p className="text-lg sm:text-xl text-zinc-800 font-medium leading-relaxed mb-6 [text-wrap:pretty]">
                {PROFILE_DATA.aboutLead}
              </p>
              {/* Narrative paragraphs */}
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                {PROFILE_DATA.aboutDescription.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Specializations Cards */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                W czym mogę Ci pomóc
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROFILE_DATA.specializations.map((spec, i) => (
                  <div
                    key={spec.title}
                    className="p-5 rounded-lg border border-zinc-200 bg-[#fafafa] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded bg-zinc-200/60 flex items-center justify-center mb-3">
                        {getIconForSpec(i)}
                      </div>
                      <h4 className="text-sm font-bold text-zinc-950 mb-2">
                        {spec.title}
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software & Tools */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Oprogramowanie i środowisko pracy
              </h3>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-zinc-100 border border-zinc-200/80 text-xs text-zinc-800"
                  >
                    <span className="font-semibold">{tool.name}</span>
                    <span className="text-zinc-400">·</span>
                    <span className="text-zinc-500 text-[11px]">{tool.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Studio / Designer Visual */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="aspect-4/3 sm:aspect-1/1 lg:aspect-4/3 w-full rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xs">
                <ImageWithFallback
                  src={PROFILE_DATA.studioImage}
                  alt="Stanowisko pracy grafika"
                  fallbackTitle="Studio graficzne"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Discreet Caption */}
              <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                <span>Stanowisko robocze & prototypowanie</span>
                <span className="font-mono tabular-nums">Polska</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

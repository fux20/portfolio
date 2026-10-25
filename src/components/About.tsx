import { Sparkles, Printer, Monitor } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export function About() {
  const getIconForSpec = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-[#235d94]" />;
      case 1:
        return <Printer className="w-5 h-5 text-[#235d94]" />;
      default:
        return <Monitor className="w-5 h-5 text-[#235d94]" />;
    }
  };

  return (
    <section id="o-mnie" className="py-24 md:py-32 border-b border-zinc-200/60 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl space-y-12">
          {/* Biography */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#235d94] font-semibold mb-2">
              O mnie
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#161530] mb-6">
              Kilka słów o mnie
            </h2>
            {/* Highlighted Lead Paragraph */}
            <p className="text-lg sm:text-xl text-[#161530]/90 font-medium leading-relaxed mb-6 [text-wrap:pretty]">
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
                    <div className="w-8 h-8 rounded bg-[#235d94]/10 flex items-center justify-center mb-3">
                      {getIconForSpec(i)}
                    </div>
                    <h4 className="text-sm font-bold text-[#161530] mb-2">
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
        </div>
      </div>
    </section>
  );
}

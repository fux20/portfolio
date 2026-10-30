import { useState, useMemo } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS, CATEGORIES, Project, ProjectCategory } from '../data/projects.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import { ProjectModal } from './ProjectModal.tsx';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'Wszystkie'>('Wszystkie');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Wszystkie') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => {
      if (p.category === selectedCategory) return true;
      if (typeof p.category === 'string' && p.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
        return true;
      }
      return false;
    });
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 md:py-32 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-sm sm:text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
              Wybrane realizacje
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#161530]">
              Projekty graficzne
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 rounded-lg border border-zinc-200/80">
            <button
              type="button"
              onClick={() => setSelectedCategory('Wszystkie')}
              className={`px-3.5 py-1.5 text-sm sm:text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedCategory === 'Wszystkie'
                  ? 'bg-white text-[#161530] shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-[#161530]'
              }`}
            >
              Wszystkie ({PROJECTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = PROJECTS.filter((p) =>
                p.category === cat || (typeof p.category === 'string' && p.category.toLowerCase().includes(cat.toLowerCase()))
              ).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-sm sm:text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-white text-[#161530] shadow-xs font-semibold'
                      : 'text-zinc-600 hover:text-[#161530]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Columns Desktop / 1 Column Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            return (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Zobacz szczegóły projektu ${project.title}`}
                className="group cursor-pointer flex flex-col bg-white rounded-lg border border-zinc-200 overflow-hidden hover:border-zinc-400/80 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#161530]"
              >
                {/* Visual Thumbnail - Always Square (1:1) */}
                <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#161530]" />
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Unboxed Metadata with typographic separator */}
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs text-zinc-500 font-medium mb-1.5 sm:mb-2.5">
                      <span className="uppercase tracking-wider text-[#235d94] font-semibold truncate">{project.category}</span>
                      {project.year && (
                        <>
                          <span aria-hidden="true" className="text-zinc-300">·</span>
                          <span className="shrink-0">{project.year}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-lg lg:text-xl font-bold tracking-tight text-[#161530] mb-1.5 sm:mb-2 group-hover:text-[#235d94] transition-colors line-clamp-1 sm:line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* External Link button (np. Zobacz pełny projekt w Canva) with #235d94 accent */}
                    {project.externalLink && (
                      <div className="pt-2 sm:pt-3">
                        <a
                          href={project.externalLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-xs font-semibold text-white bg-[#235d94] rounded hover:bg-[#1c4b78] transition-colors shadow-xs group/btn"
                        >
                          <span>{project.externalLink.label}</span>
                          <ExternalLink className="w-3 h-3 text-white/80 group-hover/btn:text-white transition-colors" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Tools */}
                  <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-100 flex items-center justify-between text-xs sm:text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5 sm:gap-2 truncate max-w-[70%] sm:max-w-[75%]">
                      {project.tools.slice(0, 2).map((tool, idx) => (
                        <span key={tool} className="truncate">
                          {tool}
                          {idx < Math.min(project.tools.length, 2) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-[#235d94] font-semibold group-hover:underline shrink-0">
                      Szczegóły →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-zinc-50 rounded-lg border border-dashed border-zinc-300">
            <p className="text-base sm:text-sm text-zinc-500 mb-3">Brak projektów w wybranej kategorii.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('Wszystkie')}
              className="text-sm sm:text-xs font-semibold text-zinc-900 underline"
            >
              Pokaż wszystkie projekty
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        allProjects={filteredProjects}
        onClose={() => setActiveProject(null)}
        onSelectProject={(p) => setActiveProject(p)}
      />
    </section>
  );
}

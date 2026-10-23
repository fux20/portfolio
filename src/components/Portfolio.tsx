import { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 md:py-32 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
              Wybrane realizacje
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Projekty graficzne
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 rounded-lg border border-zinc-200/80">
            <button
              type="button"
              onClick={() => setSelectedCategory('Wszystkie')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedCategory === 'Wszystkie'
                  ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Wszystkie ({PROJECTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = PROJECTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento & Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            // Give featured items a 7 or 8 column span on large screens for visual interest
            const colSpanClass = project.featured
              ? 'lg:col-span-7'
              : 'lg:col-span-5';

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
                className={`group cursor-pointer flex flex-col bg-white rounded-lg border border-zinc-200 overflow-hidden hover:border-zinc-400/80 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-zinc-900 ${colSpanClass}`}
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-4/3 w-full bg-zinc-100 overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-zinc-900" />
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Unboxed Metadata with typographic separator */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-2.5">
                      <span className="uppercase tracking-wider text-zinc-900 font-semibold">{project.category}</span>
                      <span aria-hidden="true" className="text-zinc-300">·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-zinc-950 mb-2 group-hover:text-zinc-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Card Footer Tools */}
                  <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-2 truncate max-w-[80%]">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span key={tool} className="truncate">
                          {tool}
                          {idx < Math.min(project.tools.length, 3) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                    <span className="text-zinc-900 font-medium group-hover:underline">
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
            <p className="text-sm text-zinc-500 mb-3">Brak projektów w wybranej kategorii.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('Wszystkie')}
              className="text-xs font-semibold text-zinc-900 underline"
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

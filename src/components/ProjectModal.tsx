import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function ProjectModal({
  project,
  allProjects,
  onClose,
  onSelectProject
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, allProjects]);

  // Reset active image on project change
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handlePrev = () => {
    if (prevProject) onSelectProject(prevProject);
  };

  const handleNext = () => {
    if (nextProject) onSelectProject(nextProject);
  };

  const currentGallery = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.thumbnail];

  const currentDisplayImage = currentGallery[activeImageIndex] || project.thumbnail;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#ffffff] rounded-lg shadow-2xl border border-zinc-200 overflow-hidden my-auto animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-[#fafafa]">
          <div className="flex items-center gap-3 text-xs text-zinc-500 font-medium">
            <span className="uppercase tracking-wider text-zinc-900 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            {project.client && (
              <>
                <span aria-hidden="true">·</span>
                <span className="hidden sm:inline text-zinc-600">{project.client}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Prev / Next Switchers */}
            <button
              type="button"
              onClick={handlePrev}
              title="Poprzedni projekt (Strzałka w lewo)"
              className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors"
              aria-label="Poprzedni projekt"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              title="Następny projekt (Strzałka w prawo)"
              className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors"
              aria-label="Następny projekt"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              title="Zamknij (Klawisz ESC)"
              className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded transition-colors ml-2"
              aria-label="Zamknij okno szczegółów projektu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
          {/* Visual Display */}
          {project.grid2x2 ? (
            /* Siatka 2x2 bez przewijanej galerii i bez podpisów */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.grid2x2.map((img, idx) => (
                <div key={idx} className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} - plansza ${idx + 1}`}
                      fallbackTitle={`${project.title} ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : project.bannerShowcase ? (
            <div className="space-y-4">
              {/* Pierwszy rząd: dwa banery kwadratowe obok siebie (oba w kwadracie, nieprzycięte) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={project.bannerShowcase.square1.image}
                      alt={project.bannerShowcase.square1.title}
                      fallbackTitle={project.bannerShowcase.square1.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={project.bannerShowcase.square2.image}
                      alt={project.bannerShowcase.square2.title}
                      fallbackTitle={project.bannerShowcase.square2.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Drugi rząd: baner prostokątny, dostosowany do pełnej szerokości, nieprzycięty */}
              <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                <div className="w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                  <ImageWithFallback
                    src={project.bannerShowcase.wide.image}
                    alt={project.bannerShowcase.wide.title}
                    fallbackTitle={project.bannerShowcase.wide.title}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Standardowy pojedynczy podgląd z miniaturami galerii */
            <div className="space-y-3">
              <div className="w-full max-h-[520px] rounded bg-zinc-100 overflow-hidden flex items-center justify-center border border-zinc-200">
                <ImageWithFallback
                  src={currentDisplayImage}
                  alt={project.title}
                  fallbackTitle={project.title}
                  className="w-full max-h-[520px] object-contain"
                />
              </div>

              {/* Gallery thumbnails if multiple */}
              {currentGallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto py-2">
                  {currentGallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-zinc-900 shadow-sm'
                          : 'border-zinc-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            {/* Left Column: Title and Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-3"
                >
                  {project.title}
                </h2>
                <p className="text-zinc-600 text-base leading-relaxed">
                  {project.description}
                </p>
                {project.externalLink && (
                  <div className="pt-4">
                    <a
                      href={project.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 rounded hover:bg-zinc-800 transition-colors shadow-xs group"
                    >
                      <span>{project.externalLink.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                )}
              </div>

              {/* Tools list */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Użyte narzędzia i technologie
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-700">
                  {project.tools.map((tool, i) => (
                    <span key={tool} className="flex items-center gap-2">
                      <span className="bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200/80">{tool}</span>
                      {i < project.tools.length - 1 && <span className="text-zinc-300">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Scope & Solutions */}
            <div className="lg:col-span-5 space-y-6 bg-zinc-50/70 p-6 rounded border border-zinc-200/80">
              {((project.scopeGroups && project.scopeGroups.length > 0) || (project.scope && project.scope.length > 0)) && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                    Zakres zrealizowanych prac
                  </h3>
                  {project.scopeGroups && project.scopeGroups.length > 0 ? (
                    <div className="space-y-4">
                      {project.scopeGroups.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-2">
                          <h4 className="text-xs font-bold text-zinc-900 tracking-wide">
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5 pl-1 text-xs sm:text-sm text-zinc-600">
                            {group.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                      {project.scope?.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-zinc-800 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {project.solutions && project.solutions.length > 0 && (
                <div className="pt-4 border-t border-zinc-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                    Zastosowane rozwiązania
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                    {project.solutions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Niewykorzystane koncepcje */}
          {project.unusedConcepts && (
            <div className="pt-8 border-t border-zinc-200 space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 mb-1">
                  {project.unusedConcepts.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {project.unusedConcepts.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {project.unusedConcepts.concepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden hover:border-zinc-300 transition-all"
                  >
                    <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center overflow-hidden p-2">
                      <ImageWithFallback
                        src={concept.image}
                        alt={concept.name}
                        fallbackTitle={concept.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with CTA */}
        <div className="px-6 py-4 bg-[#fafafa] border-t border-zinc-200 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Podoba Ci się ten projekt? Porozmawiajmy o podobnej realizacji.
          </span>
          <a
            href="#kontakt"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 rounded hover:bg-zinc-800 transition-colors"
          >
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </div>
  );
}

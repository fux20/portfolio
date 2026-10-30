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

  const handlePrevSlide = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : currentGallery.length - 1));
  };

  const handleNextSlide = () => {
    setActiveImageIndex((prev) => (prev < currentGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#161530]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#ffffff] rounded-lg shadow-2xl border border-zinc-200 overflow-hidden my-auto animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-zinc-200 bg-[#fafafa]">
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-xs text-zinc-500 font-medium">
            <span className="uppercase tracking-wider text-[#235d94] font-semibold">{project.category}</span>
            {project.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </>
            )}
            {project.client && (
              <>
                <span aria-hidden="true">·</span>
                <span className="hidden sm:inline text-zinc-600">{project.client}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Quick Prev / Next Project Switchers */}
            <button
              type="button"
              onClick={handlePrev}
              title="Poprzedni projekt"
              className="p-1.5 text-zinc-500 hover:text-[#161530] hover:bg-zinc-200 rounded transition-colors"
              aria-label="Poprzedni projekt"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              title="Następny projekt"
              className="p-1.5 text-zinc-500 hover:text-[#161530] hover:bg-zinc-200 rounded transition-colors"
              aria-label="Następny projekt"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              title="Zamknij (Klawisz ESC)"
              className="p-1.5 text-zinc-500 hover:text-[#161530] hover:bg-zinc-200 rounded transition-colors ml-1 sm:ml-2"
              aria-label="Zamknij okno szczegółów projektu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 flex-1">
          {/* Visual Display */}
          {project.topAndRow ? (
            /* Układ Mogalo: baner prostokątny na górze, 4 kwadratowe zdjęcia w rzędzie, oraz ulotki na końcu */
            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                <div className="w-full bg-zinc-100 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                  <ImageWithFallback
                    src={project.topAndRow.top}
                    alt={`${project.title} - logotyp prostokątny`}
                    fallbackTitle={`${project.title} - prostokąt`}
                    objectFit="contain"
                    className="w-full flex items-center justify-center"
                    imgClassName="w-full h-auto max-h-[380px] object-contain mx-auto"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {project.topAndRow.row.map((img, idx) => (
                  <div key={idx} className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                    <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                      <ImageWithFallback
                        src={img}
                        alt={`${project.title} - element ${idx + 1}`}
                        fallbackTitle={`${project.title} ${idx + 1}`}
                        objectFit="contain"
                        className="w-full h-full flex items-center justify-center"
                        imgClassName="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : project.grid2x2 ? (
            /* Siatka 2x2 bez przewijanej galerii */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.grid2x2.map((img, idx) => (
                <div key={idx} className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} - plansza ${idx + 1}`}
                      fallbackTitle={`${project.title} ${idx + 1}`}
                      objectFit="contain"
                      className="w-full h-full flex items-center justify-center"
                      imgClassName="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : project.sideBySide ? (
            /* Dwa zdjęcia prezentowane jedno koło drugiego (2 kolumny) */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.sideBySide.map((img, idx) => (
                <div key={idx} className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} - plansza ${idx + 1}`}
                      fallbackTitle={`${project.title} ${idx + 1}`}
                      objectFit="contain"
                      className="w-full h-full flex items-center justify-center"
                      imgClassName="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : project.bannerShowcase ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={project.bannerShowcase.square1.image}
                      alt={project.bannerShowcase.square1.title}
                      fallbackTitle={project.bannerShowcase.square1.title}
                      objectFit="contain"
                      className="w-full h-full flex items-center justify-center"
                      imgClassName="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                    <ImageWithFallback
                      src={project.bannerShowcase.square2.image}
                      alt={project.bannerShowcase.square2.title}
                      fallbackTitle={project.bannerShowcase.square2.title}
                      objectFit="contain"
                      className="w-full h-full flex items-center justify-center"
                      imgClassName="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                <div className="w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                  <ImageWithFallback
                    src={project.bannerShowcase.wide.image}
                    alt={project.bannerShowcase.wide.title}
                    fallbackTitle={project.bannerShowcase.wide.title}
                    objectFit="contain"
                    className="w-full flex items-center justify-center"
                    imgClassName="w-full h-auto max-h-[500px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Prezentacja pojedyncza / karuzela galerii (np. Lionelo, Broszura siatkówka) */
            <div className="space-y-3">
              <div className="relative w-full rounded bg-zinc-100 overflow-hidden flex items-center justify-center border border-zinc-200 p-2 sm:p-4 group">
                <ImageWithFallback
                  src={currentDisplayImage}
                  alt={`${project.title} - podgląd ${activeImageIndex + 1}`}
                  fallbackTitle={project.title}
                  objectFit="contain"
                  className="w-full flex items-center justify-center"
                  imgClassName="max-h-[520px] sm:max-h-[600px] w-auto h-auto max-w-full object-contain mx-auto block transition-transform duration-200"
                />

                {/* Karuzela: Przyciski Poprzednie / Następne zdjęcie */}
                {currentGallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      title="Poprzednie zdjęcie w karuzeli"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-zinc-800 shadow-md flex items-center justify-center border border-zinc-200/80 transition-all hover:scale-105 active:scale-95 focus:outline-hidden"
                      aria-label="Poprzednie zdjęcie"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextSlide}
                      title="Następne zdjęcie w karuzeli"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-zinc-800 shadow-md flex items-center justify-center border border-zinc-200/80 transition-all hover:scale-105 active:scale-95 focus:outline-hidden"
                      aria-label="Następne zdjęcie"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Licznik slajdów karuzeli */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#161530]/80 backdrop-blur-xs text-white text-xs font-medium shadow-sm">
                      {activeImageIndex + 1} / {currentGallery.length}
                    </div>
                  </>
                )}
              </div>

              {/* Gallery thumbnails if multiple */}
              {currentGallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto py-2">
                  {currentGallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Wybierz zdjęcie ${idx + 1}`}
                      className={`relative w-20 h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#235d94] shadow-sm ring-2 ring-[#235d94]/30'
                          : 'border-zinc-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        objectFit="contain"
                        className="w-full h-full bg-zinc-50 flex items-center justify-center"
                        imgClassName="w-full h-full object-contain p-0.5"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tytuł projektu umieszczony pod zdjęciami */}
          <div className="pt-2 border-b border-zinc-100 pb-3">
            <h2
              id="modal-project-title"
              className="text-[26px] sm:text-3xl font-bold tracking-tight text-[#161530]"
            >
              {project.title}
            </h2>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            {/* Left Column: Narrative and Tools */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-zinc-600 text-lg sm:text-base leading-relaxed">
                  {project.description}
                </p>
                {project.externalLink && (
                  <div className="pt-4">
                    <a
                      href={project.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-xs font-semibold uppercase tracking-wider text-white bg-[#235d94] rounded hover:bg-[#1c4b78] transition-colors shadow-xs group"
                    >
                      <span>{project.externalLink.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                )}
              </div>

              {/* Tools list */}
              <div>
                <h4 className="text-sm sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Użyte narzędzia i technologie
                </h4>
                <div className="flex flex-wrap gap-2 text-sm sm:text-xs font-medium text-zinc-700">
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
            <div className="lg:col-span-5 space-y-6 bg-zinc-50/70 p-5 sm:p-6 rounded border border-zinc-200/80">
              {((project.scopeGroups && project.scopeGroups.length > 0) || (project.scope && project.scope.length > 0)) && (
                <div>
                  <h3 className="text-sm sm:text-xs font-bold uppercase tracking-wider text-[#161530] mb-3">
                    Zakres zrealizowanych prac
                  </h3>
                  {project.scopeGroups && project.scopeGroups.length > 0 ? (
                    <div className="space-y-4">
                      {project.scopeGroups.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-2">
                          <h4 className="text-sm sm:text-xs font-bold text-[#161530] tracking-wide">
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5 pl-1 text-sm sm:text-sm text-zinc-600">
                            {group.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#235d94] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 text-sm sm:text-sm text-zinc-600">
                      {project.scope?.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#235d94] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {project.solutions && project.solutions.length > 0 && (
                <div className="pt-4 border-t border-zinc-200">
                  <h3 className="text-sm sm:text-xs font-bold uppercase tracking-wider text-[#161530] mb-3">
                    Zastosowane rozwiązania
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-sm text-zinc-600">
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

          {/* Dodatkowa sekcja "Projekty" (np. Mogalo - ulotki, Beton i Knot - Banery reklamowe) */}
          {project.additionalSection && (
            <div className="pt-8 border-t border-zinc-200 space-y-6">
              <div>
                <h3 className="text-base sm:text-sm font-bold uppercase tracking-wider text-[#161530]">
                  {project.additionalSection.title}
                </h3>
              </div>

              {/* Wariant: Pojedyncza plansza projektu (np. Mogalo - ulotki) */}
              {project.additionalSection.singleImage && (
                <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                  <div className="w-full bg-zinc-100 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                    <ImageWithFallback
                      src={project.additionalSection.singleImage}
                      alt={`${project.title} - ${project.additionalSection.title}`}
                      fallbackTitle={`${project.title} - ${project.additionalSection.title}`}
                      objectFit="contain"
                      className="w-full flex items-center justify-center"
                      imgClassName="w-full h-auto max-h-[600px] object-contain mx-auto"
                    />
                  </div>
                </div>
              )}

              {/* Wariant: Podsekcje (np. Beton i Knot - Banery reklamowe) */}
              {project.additionalSection.subsections && project.additionalSection.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  {sub.title && (
                    <h4 className="text-sm sm:text-xs font-bold uppercase tracking-wider text-[#235d94]">
                      {sub.title}
                    </h4>
                  )}

                  {sub.layout === 'bik-banners' && sub.images && sub.images.length >= 4 && (
                    <div className="space-y-4">
                      {/* Pierwszy rząd: dwa zdjęcia obok siebie (BiK - baner 2 i BiK - baner 4) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                          <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                            <ImageWithFallback
                              src={sub.images[0]}
                              alt={`${project.title} - ${sub.title || 'baner'} 2`}
                              fallbackTitle="BiK - baner (2)"
                              objectFit="contain"
                              className="w-full h-full flex items-center justify-center"
                              imgClassName="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                          <div className="aspect-square w-full bg-zinc-100 flex items-center justify-center p-2 overflow-hidden">
                            <ImageWithFallback
                              src={sub.images[1]}
                              alt={`${project.title} - ${sub.title || 'baner'} 4`}
                              fallbackTitle="BiK - baner (4)"
                              objectFit="contain"
                              className="w-full h-full flex items-center justify-center"
                              imgClassName="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Drugi rząd i kolejne: dwa kolejne zdjęcia jeden pod drugim (BiK - baner 3 i BiK - baner 1) */}
                      <div className="space-y-4">
                        <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                          <div className="w-full bg-zinc-100 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                            <ImageWithFallback
                              src={sub.images[2]}
                              alt={`${project.title} - ${sub.title || 'baner'} 3`}
                              fallbackTitle="BiK - baner (3)"
                              objectFit="contain"
                              className="w-full flex items-center justify-center"
                              imgClassName="w-full h-auto max-h-[500px] object-contain mx-auto"
                            />
                          </div>
                        </div>

                        <div className="bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                          <div className="w-full bg-zinc-100 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                            <ImageWithFallback
                              src={sub.images[3]}
                              alt={`${project.title} - ${sub.title || 'baner'} 1`}
                              fallbackTitle="BiK - baner (1)"
                              objectFit="contain"
                              className="w-full flex items-center justify-center"
                              imgClassName="w-full h-auto max-h-[500px] object-contain mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Niewykorzystane koncepcje */}
          {project.unusedConcepts && (
            <div className="pt-8 border-t border-zinc-200 space-y-4">
              <div>
                <h3 className="text-base sm:text-sm font-bold uppercase tracking-wider text-[#161530] mb-1">
                  {project.unusedConcepts.title}
                </h3>
                <p className="text-base sm:text-sm text-zinc-600 leading-relaxed">
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
                        objectFit="contain"
                        className="w-full h-full flex items-center justify-center"
                        imgClassName="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with CTA */}
        <div className="px-5 sm:px-6 py-4 bg-[#fafafa] border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="text-sm sm:text-xs text-zinc-500 leading-snug">
            <span>Podoba Ci się ten projekt?</span>
            <span className="block text-zinc-700 font-medium sm:inline sm:ml-1 sm:text-zinc-500 sm:font-normal">
              Porozmawiajmy o podobnej realizacji.
            </span>
          </div>
          <a
            href="#kontakt"
            onClick={onClose}
            className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-2.5 text-sm sm:text-xs font-semibold uppercase tracking-wider text-white bg-[#161530] rounded hover:bg-[#161530]/90 transition-colors shrink-0 shadow-xs"
          >
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </div>
  );
}

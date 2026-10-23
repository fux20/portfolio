/**
 * ============================================================================
 * PLIK Z DANYMI PROJEKTÓW PORTFOLIO (src/data/projects.ts)
 * ============================================================================
 * 
 * Ten plik jest jedynym miejscem, w którym edytujesz swoje projekty graficzne.
 * Strona automatycznie zaktualizuje listę prac, galerie i filtry!
 * 
 * ----------------------------------------------------------------------------
 * JAK PODMIENIĆ GRAFIKI NA WŁASNE?
 * ----------------------------------------------------------------------------
 * 1. Skopiuj swoje pliki graficzne (JPG, PNG, WebP) do folderu:
 *    public/images/projects/
 * 2. W polach `thumbnail` oraz `gallery` poniżej wpisz ścieżkę do Twojego pliku, np.:
 *    thumbnail: 'images/projects/moj_projekt.jpg'
 *    (Uwaga: używaj ścieżki bez wiodącego ukośnika lub z nim, np. 'images/projects/nazwa.jpg',
 *    dzięki czemu grafiki działają bezbłędnie na GitHub Pages!)
 * 
 * ----------------------------------------------------------------------------
 * JAK DODAĆ NOWY PROJEKT?
 * ----------------------------------------------------------------------------
 * 1. Skopiuj cały blok jednego projektu (od { do },)
 * 2. Wklej go na końcu tablicy `PROJECTS` (przed znakiem `];`)
 * 3. Nadaj unikalne pole `id` (np. 'nowy-projekt-2025')
 * 4. Ustaw właściwą kategorię: 'Branding' | 'Digital' | 'Social Media' | 'Print'
 * 
 * ----------------------------------------------------------------------------
 * JAK USTAWIĆ PROJEKT JAKO WYRÓŻNIONY?
 * ----------------------------------------------------------------------------
 * Ustaw `featured: true` (wyróżnione projekty mają większą ekspozycję w siatce).
 * ============================================================================
 */

// Importy bezpośrednie obrazów demonstracyjnych (gwarantują 100% działanie w bundlerze Vite)
import imgBranding from '../assets/images/project_branding_identity_1792791546176.jpg';
import imgPackaging from '../assets/images/project_packaging_design_1792791546790.jpg';
import imgSocial from '../assets/images/project_social_campaign_1792791547290.jpg';
import imgPoster from '../assets/images/project_poster_design_1792791548422.jpg';
import imgPrint from '../assets/images/project_print_editorial_1792791549505.jpg';
import imgDigital from '../assets/images/project_digital_design_1792791549799.jpg';

export type ProjectCategory = 'Branding' | 'Digital' | 'Social Media' | 'Print';

export interface Project {
  /** Unikalny identyfikator projektu (np. "lumen-branding") */
  id: string;
  /** Tytuł projektu wyświetlany w portfolio */
  title: string;
  /** Kategoria projektu: 'Branding' | 'Digital' | 'Social Media' | 'Print' */
  category: ProjectCategory;
  /** Krótki opis na karcie projektu (1-2 zdania) */
  shortDescription: string;
  /** Pełny opis projektu w oknie szczegółów */
  description: string;
  /** Ścieżka do miniatury głównej */
  thumbnail: string;
  /** Lista dodatkowych grafik do galerii w oknie szczegółów */
  gallery: string[];
  /** Wykorzystane narzędzia i programy */
  tools: string[];
  /** Rok realizacji */
  year: string;
  /** Czy projekt jest wyróżniony (większy format w siatce) */
  featured: boolean;
  /** Klient / marka (opcjonalnie) */
  client?: string;
  /** Zakres zrealizowanych prac (opcjonalnie) */
  scope?: string[];
  /** Zastosowane rozwiązania projektowe (opcjonalnie) */
  solutions?: string[];
}

export const CATEGORIES: ProjectCategory[] = [
  'Branding',
  'Digital',
  'Social Media',
  'Print'
];

export const PROJECTS: Project[] = [
  {
    id: 'aeterna-identity',
    title: 'AETERNA — Identyfikacja Wizualna',
    category: 'Branding',
    shortDescription: 'Kompleksowa identyfikacja wizualna i system papeterii dla studia architektonicznego.',
    description: 'Projekt objął stworzenie minimalistycznego znaku graficznego, księgi identyfikacji wizualnej, papeterii firmowej, teczek ofertowych oraz wytycznych dla materiałów akcydensowych. Zastosowano surową, geometryczną typografię połączoną ze szlachetną fakturą papieru bawełnianego i dyskretnym tłoczeniem.',
    thumbnail: imgBranding,
    gallery: [
      imgBranding,
      'images/projects/branding.jpg'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    year: '2024',
    featured: true,
    client: 'Aeterna Architecture Studio',
    scope: [
      'Projekt logotypu i sygnetu',
      'Księga znaku (Brand Guidelines)',
      'Akcydensy i papeteria firmowa',
      'Dobór papierów barwionych w masie i technologii uszlachetnień'
    ],
    solutions: [
      'Stworzenie modularnego znaku opartego na prostych podziałach geometrycznych',
      'Paleta kolorystyczna inspirowana surowym betonem, piaskowcem i naturalnym lnem',
      'Hierarchia typograficzna zapewniająca maksymalną czytelność dokumentacji przetargowej'
    ]
  },
  {
    id: 'aurora-packaging',
    title: 'AURORA — Linia Opakowań Kosmetyków',
    category: 'Branding',
    shortDescription: 'Projekt opakowań i etykiet dla organicznej serii pielęgnacyjnej ze szkła i kartonu.',
    description: 'Seria opakowań kosmetycznych łączących luksusowy minimalizm z ekologicznym podejściem. Projekt obejmuje matowe etykiety na butelki z matowego szkła oraz biodegradowalne kartoniki z tłoczeniem wklęsłym i minimalistyczną typografią.',
    thumbnail: imgPackaging,
    gallery: [
      imgPackaging,
      'images/projects/packaging.jpg'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Blender'],
    year: '2024',
    featured: true,
    client: 'Aurora Botanicals Ltd.',
    scope: [
      'Projekt etykiet i siatek wykrojników',
      'Matryce pod tłoczenia strukturalne (blind deboss)',
      'Wizualizacje produktowe 3D',
      'Przygotowanie plików produkcyjnych DTP'
    ],
    solutions: [
      'Zredukowanie ilości farby drukarskiej na korzyść tłoczeń bezbarwnych',
      'Czytelna architektura informacji o składnikach aktywnych na małych powierzchniach',
      'Zapewnienie spójności wizualnej pomiędzy różnymi pojemnościami opakowań'
    ]
  },
  {
    id: 'urban-silhouette-social',
    title: 'Urban Silhouette — Kampania Social Media',
    category: 'Social Media',
    shortDescription: 'Siatka publikacji na Instagram, formaty Stories i animowane materiały promujące kolekcję.',
    description: 'Kompleksowy system wizualny dla kampanii odzieży jesienno-zimowej w mediach społecznościowych. Dynamiczne zestawienie szwajcarskiej typografii z minimalistycznymi kadrami modowymi, stworzone z myślą o natychmiastowym przyciąganiu uwagi użytkownika.',
    thumbnail: imgSocial,
    gallery: [
      imgSocial,
      'images/projects/social.jpg'
    ],
    tools: ['Photoshop', 'Figma', 'After Effects'],
    year: '2024',
    featured: false,
    client: 'Silhouette Urban Fashion',
    scope: [
      'System szablonów postów statycznych i karuzel',
      'Dynamiczne formaty pionowe 9:16 (Stories & Reels)',
      'Krótkie formy motion design dla nagłówków',
      'Przewodnik po stylu publikacji i kadrach'
    ],
    solutions: [
      'Wyrazista hierarchia tekstowa czytelna na ekranach smartfonów w ułamku sekundy',
      'Spójny rytm siatki profilu łączący detale odzieży z mocnymi hasłami',
      'Formaty zoptymalizowane pod kątem zaangażowania i wskaźnika klikalności (CTR)'
    ]
  },
  {
    id: 'zurich-kulturstadt-poster',
    title: 'Zürich Kulturstadt — Plakat Wystawowy',
    category: 'Print',
    shortDescription: 'Plakat wielkoformatowy dla retrospektywy modernizmu w sztuce i architekturze.',
    description: 'Projekt plakatu opartego na rygorystycznej siatce modułowej, asymetrycznym układzie tekstu i klasycznym akcencie cynobrowym. Praca eksponowana w przestrzeniach miejskich (citylight) oraz w galerii sztuki współczesnej.',
    thumbnail: imgPoster,
    gallery: [
      imgPoster,
      'images/projects/poster.jpg'
    ],
    tools: ['Adobe InDesign', 'Adobe Illustrator'],
    year: '2023',
    featured: true,
    client: 'Galerie Nord Zürich / ETH Kultur',
    scope: [
      'Formaty wystawowe B1 (700 x 1000 mm)',
      'Adaptacja do nośników miejskich Citylight',
      'Katalog towarzyszący wystawie',
      'Druk pigmentowy i offsetowy'
    ],
    solutions: [
      'Czyste nawiązanie do klasycznej międzynarodowej szkoły typografii (Swiss Style)',
      'Ograniczenie palety do czerni, bieli i jednego wyrazistego akcentu czerwieni',
      'Precyzyjny podział przestrzeni za pomocą cienkich linii konstrukcyjnych'
    ]
  },
  {
    id: 'archive-monograph',
    title: 'Archive — Monografia Sztuki & Magazyn',
    category: 'Print',
    shortDescription: 'Układ typograficzny monografii książkowej oraz magazynu o rzeźbie i wzornictwie.',
    description: '160-stronicowa publikacja o współczesnej rzeźbie i architekturze formy. Projekt kładzie szczególny nacisk na harmonię białej przestrzeni (marginesów), rytm kolumn tekstowych oraz szlachetny dobór krojów pisma. Wydanie w twardej oprawie płóciennej.',
    thumbnail: imgPrint,
    gallery: [
      imgPrint,
      'images/projects/print.jpg'
    ],
    tools: ['Adobe InDesign', 'Adobe Photoshop'],
    year: '2024',
    featured: false,
    client: 'Studio Archive Publishing',
    scope: [
      'Architektura wielostronicowego layoutu książkowego',
      'Skład i łamanie tekstu (DTP)',
      'Projekt okładki twardej, kapitałki i tłoczenia grzbietu',
      'Koordynacja druku i dobór papieru Munken Pure'
    ],
    solutions: [
      'Zapewnienie czytelnikowi przestrzeni na kontemplację fotografii dzieł sztuki',
      'Dwujęzyczny układ tekstu bez utraty przejrzystości kolumn',
      'Nadzór nad kalibracją profili kolorów CMYK na papierze niepowlekanym'
    ]
  },
  {
    id: 'creative-digital-platform',
    title: 'Nexus Design — Strona Internetowa',
    category: 'Digital',
    shortDescription: 'Projekt interfejsu UI/UX dla studia projektowego z przejrzystą architekturą informacji.',
    description: 'Nowoczesny projekt cyfrowy zorientowany na ekspozycję prac kreatywnych. Oszczędna forma, przemyślana siatka 12-kolumnowa, płynne mikro-interakcje oraz responsywny układ dostosowany do każdego urządzenia.',
    thumbnail: imgDigital,
    gallery: [
      imgDigital,
      'images/projects/digital.jpg'
    ],
    tools: ['Figma', 'Design Systems', 'Web Guidelines'],
    year: '2024',
    featured: false,
    client: 'Nexus Interactive Systems',
    scope: [
      'Architektura informacji i makiety UX',
      'Projekt interfejsu (UI) dla desktopu i mobile',
      'System komponentów (Design System)',
      'Specyfikacja mikro-interakcji dla programistów'
    ],
    solutions: [
      'Ciemny motyw interfejsu minimalizujący zmęczenie wzroku i eksponujący multimedia',
      'Nawigacja zorientowana na maksymalnie 2 kliknięcia do dowolnego studium przypadku',
      'Zgodność ze standardami dostępności WCAG AA'
    ]
  }
];

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
import imgMaksLogoFox from '../assets/images/maks_logo_fox.jpg';
import imgMaksConceptRobot from '../assets/images/maks_concept_robot.png';
import imgMaksConceptBoy from '../assets/images/maks_concept_boy.png';
import imgMaksBannerV1Square from '../assets/images/Maks_2026_-_baner_v1_-_kwadrat.jpg';
import imgMaksBannerV3Square from '../assets/images/Maks_2026_-_baner_v3_-_kwadrat.jpg';
import imgMaksBannerV2Wide from '../assets/images/Maks_2026_-_baner_v2_-_prostokat.jpg';
import imgMaksBroszuraCover from '../assets/images/MOCK_-_Maks_2026_-_broszura_okladka.png';
import imgMaksBroszura23 from '../assets/images/MOCK_-_Maks_2026_-_broszura_2-3.png';
import imgMaksBroszura45 from '../assets/images/MOCK_-_Maks_2026_-_broszura_4-5.png';
import imgMaksBroszura67 from '../assets/images/MOCK_-_Maks_2026_-_broszura_6-7.png';
import imgRaypathMock01 from '../assets/images/Raypath_kompendium_mock_01.jpg';
import imgRaypathMock02 from '../assets/images/Raypath_kompendium_mock_02.jpg';
import imgRaypathMock03 from '../assets/images/Raypath_kompendium_mock_03.jpg';
import imgRaypathMock04 from '../assets/images/Raypath_kompendium_mock_04.jpg';
import imgMaksDyplomA5 from '../assets/images/Maks_2026_-_dyplom_A5.jpg';

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
  /** Strukturyzowane grupy zakresu prac (opcjonalnie) */
  scopeGroups?: {
    title: string;
    items: string[];
  }[];
  /** Zastosowane rozwiązania projektowe (opcjonalnie) */
  solutions?: string[];
  /** Niewykorzystane / alternatywne koncepcje (opcjonalnie) */
  unusedConcepts?: {
    title: string;
    description: string;
    concepts: {
      name: string;
      image: string;
    }[];
  };
  /** Specjalny układ prezentacji banerów reklamowych (opcjonalnie) */
  bannerShowcase?: {
    square1: { title: string; image: string };
    square2: { title: string; image: string };
    wide: { title: string; image: string };
  };
  /** Opcjonalny zewnętrzny link do pełnego projektu (np. Canva) */
  externalLink?: {
    label: string;
    url: string;
  };
  /** Prezentacja grafik w siatce 2x2 w oknie podglądu (opcjonalnie) */
  grid2x2?: string[];
}

export const CATEGORIES: ProjectCategory[] = [
  'Branding',
  'Digital',
  'Social Media',
  'Print'
];

export const PROJECTS: Project[] = [
  {
    id: 'maks-matematyczny',
    title: 'Maks Matematyczny - logo',
    category: 'Branding',
    shortDescription: 'Projekt logotypu łączący świat matematyki z przyjazną, lekką estetyką dedykowaną młodszym uczestnikom.',
    description: 'W tej części portfolio prezentuję proces tworzenia logotypu. Zadaniem było opracowanie znaku, który połączy świat matematyki z przyjazną, lekką estetyką odpowiednią dla młodszych uczestników.',
    thumbnail: imgMaksLogoFox,
    gallery: [
      imgMaksLogoFox
    ],
    tools: ['InkScape', 'Canva'],
    year: '2026',
    featured: true,
    client: 'Maks Matematyczny',
    scope: [
      'Badanie kontekstu i szkice koncepcyjne',
      'Projekt wektorowy logotypu i sygnetu',
      'Dobór palety barw i typografii'
    ],
    unusedConcepts: {
      title: 'Niewykorzystane koncepcje',
      description: 'Dwie wersje logo, które zostały odrzucone na etapie projektowym przez klienta.',
      concepts: [
        {
          name: 'Koncepcja: Robot',
          image: imgMaksConceptRobot
        },
        {
          name: 'Koncepcja: Chłopiec',
          image: imgMaksConceptBoy
        }
      ]
    }
  },
  {
    id: 'maks-matematyczny-banery',
    title: 'Maks Matematyczny - banery',
    category: 'Social Media',
    shortDescription: 'Opracowanie zestawu banerów reklamowych do postów na Facebooku oraz emisji display na branżowych stronach www.',
    description: 'Opracowanie spójnego projektu graficznego trzech banerów reklamowych dla ogólnopolskiego konkursu Maks Matematyczny. Pierwszy z nich to kreacja w formacie kwadratowym, przygotowana specjalnie do publikacji w poście oraz kampaniach sponsorowanych na Facebooku. Dwa kolejne formaty zoptymalizowano pod kątem emisji displayowej na branżowych portalach edukacyjnych i stronach partnerskich.',
    thumbnail: imgMaksBannerV1Square,
    gallery: [
      imgMaksBannerV1Square,
      imgMaksBannerV3Square,
      imgMaksBannerV2Wide
    ],
    tools: ['Canva'],
    year: '2026',
    featured: true,
    client: 'Maks Matematyczny',
    scope: [
      'Projekt graficzny banera kwadratowego pod post na Facebooku (1080 × 1080 px)',
      'Projektowanie banerów displayowych na edukacyjne portale branżowe',
      'Adaptacja formatów poziomych i kwadratowych z zachowaniem spójności identyfikacji'
    ],
    bannerShowcase: {
      square1: {
        title: 'Maks 2026 - baner v1 - kwadrat',
        image: imgMaksBannerV1Square
      },
      square2: {
        title: 'Maks 2026 - baner v3 - kwadrat',
        image: imgMaksBannerV3Square
      },
      wide: {
        title: 'Maks 2026 - baner v2 - prostokąt',
        image: imgMaksBannerV2Wide
      }
    }
  },
  {
    id: 'maks-matematyczny-broszura',
    title: 'Maks matematyczny - broszura',
    category: 'Print',
    shortDescription: 'Opracowanie projektu graficznego broszury informacyjnej, łączącego czytelną strukturę treści z estetyczną formą wizualną.',
    description: 'Opracowanie projektu graficznego broszury informacyjnej, łączącego czytelną strukturę treści z estetyczną formą wizualną. Projekt obejmuje kompozycję, typografię i kolorystykę oraz przygotowanie plików do profesjonalnego druku.',
    thumbnail: imgMaksBroszuraCover,
    gallery: [
      imgMaksBroszuraCover,
      imgMaksBroszura23,
      imgMaksBroszura45,
      imgMaksBroszura67
    ],
    grid2x2: [
      imgMaksBroszuraCover,
      imgMaksBroszura23,
      imgMaksBroszura45,
      imgMaksBroszura67
    ],
    tools: ['Canva'],
    year: '2026',
    featured: true,
    client: 'Maks Matematyczny',
    externalLink: {
      label: 'Zobacz pełny projekt w Canva',
      url: 'https://canva.link/enlc4eg372zeahj'
    },
    scope: [
      'Projekt graficzny wielostronicowej broszury informacyjnej',
      'Opracowanie spójnej siatki layoutu, typografii i struktury kolumn',
      'Skład treści, infografik, tabel oraz elementów identyfikacji',
      'Przygotowanie plików produkcyjnych do profesjonalnego druku'
    ]
  },
  {
    id: 'maks-matematyczny-projekty-do-druku',
    title: 'Maks Matematyczny - projekty do druku',
    category: 'Print',
    shortDescription: 'Zestaw trzech projektów graficznych obejmujących plakat, dyplom oraz list do dyrektora, przygotowanych do profesjonalnego druku.',
    description: 'Zestaw trzech projektów graficznych obejmujących plakat, dyplom oraz list do dyrektora. Każdy z nich został opracowany z uwzględnieniem przeznaczenia, estetyki i czytelności przekazu, a następnie przygotowany do druku z dbałością o detale kompozycyjne i spójność wizualną.',
    thumbnail: imgMaksDyplomA5,
    gallery: [
      imgMaksDyplomA5
    ],
    tools: ['Canva'],
    year: '2026',
    featured: true,
    client: 'Maks Matematyczny',
    scope: [
      'Projekt graficzny oficjalnego plakatu konkursowego',
      'Opracowanie pamiątkowego dyplomu w formacie A5',
      'Projekt oficjalnego listu do dyrektora szkoły',
      'Dopracowanie estetyki, typografii i spójności wizualnej zestawu materiałów',
      'Przygotowanie plików produkcyjnych do profesjonalnego druku'
    ]
  },
  {
    id: 'raypath-kompendium-wiedzy',
    title: 'Raypath - kompendium wiedzy',
    category: 'Digital',
    shortDescription: 'Projekt katalogu łączącego funkcję informacyjną z nowoczesną, przejrzystą formą wizualną. Publikacja prezentuje ofertę marki, kluczowe cechy produktów oraz sposób ich zastosowania.',
    description: 'Projekt katalogu łączącego funkcję informacyjną z nowoczesną, przejrzystą formą wizualną. Publikacja prezentuje ofertę marki, kluczowe cechy produktów oraz sposób ich zastosowania.',
    thumbnail: imgRaypathMock01,
    gallery: [
      imgRaypathMock01,
      imgRaypathMock02,
      imgRaypathMock03,
      imgRaypathMock04
    ],
    grid2x2: [
      imgRaypathMock01,
      imgRaypathMock02,
      imgRaypathMock03,
      imgRaypathMock04
    ],
    tools: ['Canva'],
    year: '2025',
    featured: false,
    client: 'Raypath',
    externalLink: {
      label: 'Zobacz pełny projekt w Canva',
      url: 'https://canva.link/23st588rsuc24c5'
    },
    scopeGroups: [
      {
        title: '1. Wizualna prezentacja:',
        items: [
          'opracowanie elementów graficznych',
          'przygotowanie wizualizacji grafik produktowych'
        ]
      },
      {
        title: '2. Struktura i skład:',
        items: [
          'skład i łamanie tekstu',
          'porządkowanie treści i budowanie przejrzystej publikacji',
          'projektowanie układu poszczególnych stron'
        ]
      },
      {
        title: '3. Spójność:',
        items: [
          'dopracowanie detali i budowanie jednolitego języka wizualnego',
          'przygotowanie gotowego katalogu w formie cyfrowej'
        ]
      }
    ],
    scope: [
      'Wizualna prezentacja: opracowanie elementów graficznych i przygotowanie wizualizacji grafik produktowych',
      'Struktura i skład: skład i łamanie tekstu, porządkowanie treści oraz projektowanie układu stron',
      'Spójność: dopracowanie detali, budowanie jednolitego języka wizualnego i przygotowanie katalogu cyfrowego'
    ]
  }
];

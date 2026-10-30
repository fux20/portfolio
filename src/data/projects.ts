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
import imgMaksMatematyczny1 from '../assets/images/maks_matematyczny_1.png';
import imgMaksMatematyczny2 from '../assets/images/maks_matematyczny_2.png';
import imgMaksMatematyczny3 from '../assets/images/maks_matematyczny_3.png';
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
import imgLioneloCombined from '../assets/images/lionelo_dwa_polaczone.jpg';
import imgLionelo1 from '../assets/images/lionelo_1.png';
import imgLionelo2 from '../assets/images/lionelo_2.png';
import img4parejoSquare from '../assets/images/4parejo_kwadrat.png';
import img4parejoSingle from '../assets/images/4parejo.jpg';
import imgMogaloSquare from '../assets/images/mogalo_logo_kwadrat.png';
import imgMogaloLogoProstokat from '../assets/images/mogalo_logo_prostokat.png';
import imgMogaloLogo2 from '../assets/images/mogalo_logo_2.png';
import imgMogaloWizytowka1 from '../assets/images/mogalo_wizytowka_1.png';
import imgMogaloWizytowka3 from '../assets/images/mogalo_wizytowka_3.png';
import imgMogaloLogo3 from '../assets/images/mogalo_logo_3.png';
import imgRaypathPrint1 from '../assets/images/raypath_print_1.png';
import imgRaypathPrint2 from '../assets/images/raypath_print_2.png';
import imgRaypathPrint3 from '../assets/images/raypath_print_3.png';
import imgRaypathPrint4 from '../assets/images/raypath_print_4.png';
import imgMogaloUlotki from '../assets/images/mogalo_ulotki.jpg';
import imgSiatkowkaKwadrat from '../assets/images/siatkowka_broszura_kwadrat.png';
import imgSiatkowka1 from '../assets/images/siatkowka_broszura_1.jpg';
import imgSiatkowka2 from '../assets/images/siatkowka_broszura_2.jpg';
import imgSiatkowka3 from '../assets/images/siatkowka_broszura_3.jpg';
import imgSiatkowka4 from '../assets/images/siatkowka_broszura_4.jpg';
import imgBiKKwadrat from '../assets/images/bik_kwadrat.png';
import imgBiKProstokat from '../assets/images/bik_prostokat.png';
import imgBiKBaner1 from '../assets/images/bik_baner_1.jpg';
import imgBiKBaner2 from '../assets/images/bik_baner_2.jpg';
import imgBiKBaner3 from '../assets/images/bik_baner_3.jpg';
import imgBiKBaner4 from '../assets/images/bik_baner_4.jpg';

export type ProjectCategory = 'Branding' | 'Digital' | 'Social Media' | 'Print' | 'Digital i Branding' | 'Digital, Branding, DTP';

export interface Project {
  /** Unikalny identyfikator projektu (np. "lumen-branding") */
  id: string;
  /** Tytuł projektu wyświetlany w portfolio */
  title: string;
  /** Kategoria projektu: 'Branding' | 'Digital' | 'Social Media' | 'Print' | 'Digital i Branding' */
  category: ProjectCategory | string;
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
  /** Rok realizacji (opcjonalnie) */
  year?: string;
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
  /** Specjalny układ: zdjęcie panoramiczne/prostokątne na górze, a pod nim 4 kwadratowe zdjęcia w rzędzie (opcjonalnie) */
  topAndRow?: {
    top: string;
    row: string[];
    bottom?: string;
  };
  /** Opcjonalny zewnętrzny link do pełnego projektu (np. Canva) */
  externalLink?: {
    label: string;
    url: string;
  };
  /** Prezentacja grafik w siatce 2x2 w oknie podglądu (opcjonalnie) */
  grid2x2?: string[];
  /** Prezentacja grafik jedno koło drugiego w oknie podglądu bez przewijanej galerii (opcjonalnie) */
  sideBySide?: string[];
  /** Czy wymusić prezentację w karuzeli (opcjonalnie) */
  isCarousel?: boolean;
  /** Dodatkowa sekcja na dole podglądu pod zakresem prac (np. "Projekty") */
  additionalSection?: {
    title: string;
    singleImage?: string;
    subsections?: {
      title?: string;
      layout?: 'bik-banners' | 'single' | 'grid2' | 'stacked';
      images?: string[];
    }[];
  };
}

export const CATEGORIES: ('Branding' | 'Digital' | 'Social Media' | 'Print')[] = [
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
    thumbnail: imgMaksMatematyczny1,
    sideBySide: [
      imgMaksMatematyczny2,
      imgMaksMatematyczny3
    ],
    gallery: [
      imgMaksMatematyczny2,
      imgMaksMatematyczny3
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
  },
  {
    id: 'raypath-projekty-do-druku',
    title: 'Raypath - projekty do druku',
    category: 'Print',
    shortDescription: 'Dwa projekty do druku dla marki Raypath: minimalistyczna, elegancka wizytówka oraz nowoczesna, dwustronna ulotka informacyjna.',
    description: 'Kompleksowy zestaw materiałów poligraficznych przygotowanych dla marki Raypath. Realizacja obejmuje dwa spójne projekty do profesjonalnego druku:\n\n• Wizytówka firmowa: Prosta, elegancka forma oparta na czytelnej typografii i spójnej identyfikacji wizualnej marki. Buduje zaufanie i profesjonalny wizerunek w bezpośrednim kontakcie z klientem.\n• Ulotka informacyjna: Nowoczesna, dwustronna forma łącząca wysoką funkcjonalność z estetyką. Przejrzysty układ i świadoma hierarchia treści ułatwiają szybki i intuicyjny odbiór kluczowych informacji o produktach i technologii Nanosilver.\n\nProjekty przygotowano z dbałością o detale kompozycyjne, spójność z brandbookiem oraz techniczne wymogi profesjonalnego druku.',
    thumbnail: imgRaypathPrint1,
    gallery: [
      imgRaypathPrint1,
      imgRaypathPrint2,
      imgRaypathPrint3,
      imgRaypathPrint4
    ],
    grid2x2: [
      imgRaypathPrint1,
      imgRaypathPrint2,
      imgRaypathPrint3,
      imgRaypathPrint4
    ],
    tools: ['Canva'],
    year: '2025',
    featured: false,
    client: 'Raypath',
    scope: [
      'Projekt graficzny minimalistycznej, eleganckiej wizytówki firmowej',
      'Projekt nowoczesnej, dwustronnej ulotki informacyjno-produktowej',
      'Opracowanie czytelnej siatki typograficznej i przejrzystej hierarchii treści',
      'Harmonijne wdrożenie identyfikacji wizualnej i palety kolorystycznej Raypath',
      'Przygotowanie kompletnych plików DTP do profesjonalnego druku ze spadami'
    ]
  },
  {
    id: 'beton-i-knot',
    title: 'Beton i Knot',
    category: 'Digital, Branding, DTP',
    shortDescription: 'Kompleksowa identyfikacja wizualna, etykiety produktowe, sklep internetowy WooCommerce oraz kreacje reklamowe i materiały DTP dla marki świec sojowych.',
    description: 'Kompleksowy projekt identyfikacji wizualnej, oprawy graficznej oraz platformy e-commerce dla manufaktury Beton i Knot, specjalizującej się w ręcznym tworzeniu świec zapachowych w szkle oraz unikalnych, rzemieślniczych osłonach betonowych.\n\nMoim zadaniem było całościowe opracowanie wizerunku marki: od zaprojektowania nowoczesnego logo odzwierciedlającego kształt betonowej osłony z centralnie usytuowanym knotem (geometryczny rzut świecy z góry), przez projekt etykiet produktowych i naklejek na szklane słoje, po zaprojektowanie i wdrożenie funkcjonalnego sklepu internetowego w WooCommerce. Przygotowałem również spójną oprawę marketingową – banery reklamowe display, szablony postów na Instagram oraz komplet materiałów poligraficznych do druku, w tym wizytówki, eleganckie ulotki informacyjne i materiały promocyjne dodawane do zamówień klientów.',
    thumbnail: imgBiKKwadrat,
    gallery: [
      imgBiKProstokat
    ],
    tools: ['Canva', 'InkScape'],
    year: '2022',
    featured: false,
    client: 'Beton i Knot',
    scope: [
      'Projekt oficjalnego logo marki (geometryczna koncepcja betonowej osłony z knotem od góry)',
      'Projekt etykiet produktowych oraz naklejek na szkło na świece zapachowe',
      'Zaprojektowanie i wykonanie responsywnego sklepu internetowego opartego o WooCommerce',
      'Kreacja banerów reklamowych oraz spójnych grafik do postów na Instagramie',
      'Projekt materiałów akcydensowych do druku: wizytówek firmowych oraz ulotek reklamowych',
      'Opracowanie materiałów promocyjnych i podziękowań dołączanych do zamówień klientów'
    ],
    additionalSection: {
      title: 'Projekty',
      subsections: [
        {
          title: 'Banery reklamowe',
          layout: 'bik-banners',
          images: [
            imgBiKBaner2,
            imgBiKBaner4,
            imgBiKBaner3,
            imgBiKBaner1
          ]
        }
      ]
    }
  },
  {
    id: 'lionelo-logo',
    title: 'Lionelo - logo',
    category: 'Digital i Branding',
    shortDescription: 'Projekt konkursowy identyfikacji wizualnej dla marki Lionelo z branży edukacji dziecięcej, prezentujący dwa warianty logotypu z autorskim sygnetem.',
    description: 'Projekt konkursowy identyfikacji wizualnej dla marki Lionelo, dedykowanej edukacji i wszechstronnemu rozwojowi dzieci. Koncepcja opiera się na stworzeniu ciepłego, przyjaznego i budzącego zaufanie wizerunku, który przemawia zarówno do najmłodszych, jak i ich rodziców. Opracowanie obejmuje dwa warianty logotypu konkursowego z autorskim sygnetem uśmiechniętego lwa, subtelną muszką oraz miękką, dynamiczną typografią hasła "fun and learning".',
    thumbnail: imgLioneloCombined,
    gallery: [
      imgLionelo1,
      imgLionelo2
    ],
    tools: ['Canva', 'InkScape'],
    featured: false,
    client: 'Lionelo',
    scope: [
      'Analiza briefu konkursowego i specyfiki branży edukacji dziecięcej',
      'Opracowanie koncepcji plastycznej przyjaznego sygnetu lwa',
      'Precyzyjna wektoryzacja kształtów i linii w programie InkScape',
      'Dobór łagodnej typografii dla nazwy marki i hasła towarzyszącego',
      'Zaprojektowanie dwóch unikalnych wariantów kompozycyjnych logotypu',
      'Przygotowanie ciepłej, zbalansowanej palety kolorystycznej'
    ]
  },
  {
    id: '4parejo-logo',
    title: '4parejo - logo',
    category: 'Digital i Branding',
    shortDescription: 'Projekt konkursowy logo dla serwisu i sklepu motoryzacyjnego 4parejo.pl. Dynamiczny znak łączący motyw tłoka silnikowego z nowoczesną estetyką e-commerce.',
    description: 'Projekt konkursowy logo stworzony dla firmy 4parejo.pl, specjalizującej się w sprzedaży części samochodowych. Celem było zaprojektowanie wyrazistego, nowoczesnego i technicznego znaku, który budzi skojarzenia z precyzją, mocą i niezawodnością. Główny sygnet wkomponowuje motyw tłoka silnikowego w dynamiczny, aerodynamiczny trapez, uzupełniony mocną, geometryczną typografią z kontrastowym akcentem barwnym.',
    thumbnail: img4parejoSquare,
    gallery: [
      img4parejoSingle
    ],
    tools: ['Canva', 'InkScape'],
    featured: false,
    client: '4parejo.pl',
    scope: [
      'Analiza rynku e-commerce części samochodowych i założeń konkursu',
      'Projekt autorskiego sygnetu integrującego motyw tłoka silnika',
      'Wektorowa konstrukcja geometryczna i optymalizacja w InkScape',
      'Dobór solidnej, bezszeryfowej typografii dla domeny 4parejo.pl',
      'Opracowanie kontrastowej palety barw opartej na energetycznej czerwieni i technicznej szarości',
      'Przygotowanie plików produkcyjnych dla platformy sklepowej i materiałów promocyjnych'
    ]
  },
  {
    id: 'mogalo-branding',
    title: 'Mogalo',
    category: 'Digital i Branding',
    shortDescription: 'Kompleksowa identyfikacja wizualna platformy edukacyjnej Mogalo. Opracowanie logo, postaci maskotek do konkursów przedmiotowych, materiałów drukowanych DTP i multimediów.',
    description: 'Kompleksowy projekt identyfikacji wizualnej i oprawy graficznej dla marki Mogalo, specjalizującej się w interaktywnych konkursach edukacyjnych dla dzieci z matematyki, języka angielskiego, niemieckiego oraz polskiego, rozwiązywanych bezpośrednio na urządzeniach mobilnych.\n\nJako główny projektant odpowiadałem za całość prac graficznych: od stworzenia nowoczesnego logo łączącego motyw urządzenia mobilnego (tabletu) z biretem absolwenta i literą „M”, przez opracowanie dedykowanych postaci-maskotek dla poszczególnych dziedzin konkursowych, aż po przygotowanie kompletnego pakietu materiałów do druku (broszury informacyjne, wizytówki, plakaty) oraz zasobów cyfrowych i multimedialnych (banery internetowe, stopki mailingowe i grafiki promocyjne).',
    thumbnail: imgMogaloSquare,
    topAndRow: {
      top: imgMogaloLogoProstokat,
      row: [
        imgMogaloLogo2,
        imgMogaloWizytowka1,
        imgMogaloWizytowka3,
        imgMogaloLogo3
      ]
    },
    gallery: [
      imgMogaloLogoProstokat,
      imgMogaloLogo2,
      imgMogaloWizytowka1,
      imgMogaloWizytowka3,
      imgMogaloLogo3
    ],
    tools: ['Canva', 'InkScape'],
    featured: false,
    client: 'Mogalo',
    scope: [
      'Projekt oficjalnego logo marki Mogalo (motyw tabletu edukacyjnego i symbolu wiedzy)',
      'Opracowanie unikalnych postaci-maskotek dedykowanych konkursom tematycznym: matematycznemu, angielskiemu, niemieckiemu i polskiemu',
      'Projekt materiałów firmowych i akcydensów biznesowych (wizytówki firmowe, teczki, papier firmowy)',
      'Kompleksowe przygotowanie materiałów do druku DTP (broszury informacyjne, ulotki, plakaty promocyjne)',
      'Kreacja materiałów cyfrowych i multimedialnych: banery reklamowe, kreacje display, grafiki do aplikacji oraz profesjonalne stopki mailingowe',
      'Zapewnienie pełnej spójności wizualnej pomiędzy środowiskiem mobilnym a materiałami drukowanymi'
    ],
    additionalSection: {
      title: 'Projekty',
      singleImage: imgMogaloUlotki
    }
  },
  {
    id: 'broszura-siatkowka-mistrzostwa-2014',
    title: 'Broszura "Droga Polaków do mistrzostwa świata"',
    category: 'Print',
    shortDescription: 'Projekt pamiątkowej broszury dokumentującej historyczną drogę reprezentacji Polski w siatkówce mężczyzn do zdobycia tytułu Mistrzów Świata 2014.',
    description: 'Kompleksowy projekt graficzny pamiątkowej publikacji okolicznościowej, dokumentującej historyczną drogę reprezentacji Polski w siatkówce mężczyzn do zdobycia tytułu Mistrzów Świata podczas turnieju FIVB 2014 rozgrywanego w Polsce.\n\nBroszura łączy dynamiczną, pełną emocji narrację wizualną z rygorystyczną, profesjonalną siatką typograficzną. Układ stron został zaprojektowany tak, aby oddać podniosłą atmosferę turnieju – od spektakularnego meczu otwarcia na Stadionie Narodowym w Warszawie po finałowy triumf w katowickim Spodku. Projekt łączy wielkoformatowe fotografie reporterskie, przejrzyste tabele statystyczne, cytaty z wypowiedzi zawodników oraz spójne akcenty barw narodowych w nowoczesnym, eleganckim wydaniu.',
    thumbnail: imgSiatkowkaKwadrat,
    gallery: [
      imgSiatkowka1,
      imgSiatkowka3,
      imgSiatkowka4,
      imgSiatkowka2
    ],
    tools: ['InDesign'],
    year: '2014',
    featured: false,
    client: 'Polska Siatkówka',
    isCarousel: true,
    scope: [
      'Opracowanie koncepcji kreatywnej oraz spójnej makiety wydawniczej broszury w programie Adobe InDesign',
      'Projekt wielokolumnowej siatki layoutu, hierarchii typograficznej i stylów akapitowych',
      'Selekcja, kadrowanie i obróbka reporterskich fotografii sportowych z turnieju',
      'Skład i łamanie tekstu, tabel wyników, statystyk meczowych oraz wyróżników graficznych',
      'Przygotowanie kompletnego projektu DTP do profesjonalnego druku offsetowego ze spadami i profilami barwnymi'
    ]
  }
];

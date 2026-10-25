/**
 * ============================================================================
 * PLIK Z DANYMI AUTORA I KONTAKTU (src/data/profile.ts)
 * ============================================================================
 * 
 * Zmień poniższe dane na swoje własne (imię, e-mail, linki społecznościowe, opis).
 * Wszystkie teksty i sekcje na stronie automatycznie zaktualizują się!
 * ============================================================================
 */

import imgStudio from '../assets/images/designer_studio_profile_1792791567181.jpg';

export interface ProfileData {
  /** Twoje imię i nazwisko (np. 'JAN KOWALSKI') */
  name: string;
  /** Tytuł zawodowy */
  role: string;
  /** Słowa kluczowe w nagłówku */
  disciplines: string[];
  /** Główny nagłówek sekcji Hero */
  heroHeadline: string;
  /** Podtytuł sekcji Hero */
  heroSubtitle: string;
  /** Sekcja O mnie - tekst przewodni */
  aboutLead: string;
  /** Dodatkowy opis doświadczenia i podejścia */
  aboutDescription: string[];
  /** Specjalizacje */
  specializations: {
    title: string;
    description: string;
  }[];
  /** Oprogramowanie i narzędzia projektowe */
  tools: {
    name: string;
    category: string;
  }[];
  /** Etapy procesu projektowego */
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  /** Dane kontaktowe */
  contact: {
    email: string;
    location: string;
    status: string;
    socials: {
      name: string;
      url: string;
      label: string;
    }[];
  };
  /** Zdjęcie do sekcji O mnie */
  studioImage: string;
}

export const PROFILE_DATA: ProfileData = {
  name: 'ARTUR JASKULSKI',
  role: 'Projektant Graficzny & Brand Designer',
  disciplines: ['Grafika', 'Branding', 'Digital design', 'DTP & Druk'],
  
  // --- NAGŁÓWEK GŁÓWNY (HERO) ---
  heroHeadline: 'Projektuję rzeczy, które przyciągają uwagę.',
  heroSubtitle: 'Jestem grafikiem. Tworzę przemyślane identyfikacje wizualne, materiały reklamowe i projekty cyfrowe, łącząc estetykę z funkcjonalnością.',
  
  // --- SEKCJA O MNIE ---
  aboutLead: 'Wierzę, że dobry projekt graficzny to połączenie estetyki, czytelności i dobrego pomysłu. W swojej pracy stawiam na przemyślane rozwiązania, dbałość o szczegóły i spójność wizualną.',
  aboutDescription: [
    'Specjalizuję się w tworzeniu identyfikacji wizualnych dla marek, które chcą wyróżnić się na rynku profesjonalnym i spójnym wizerunkiem.',
    'Do każdego zadania podchodzę indywidualnie: analizuję kontekst rynkowy, grupę odbiorców oraz specyfikę nośników. Łączę rygor typograficzny z nowoczesną estetyką cyfrową.'
  ],
  
  // --- SPECJALIZACJE ---
  specializations: [
    {
      title: 'Identyfikacja wizualna',
      description: 'Logotypy, księgi znaku, systemy kolorów, dobór typografii oraz pełne wytyczne brandingu.'
    },
    {
      title: 'Materiały drukowane & DTP',
      description: 'Katalogi, publikacje książkowe, opakowania, plakaty, akcydensy oraz przygotowanie do druku.'
    },
    {
      title: 'Digital & Social Media',
      description: 'Spójne systemy postów na Instagram, materiały reklamowe, bannery oraz projekty stron www.'
    }
  ],
  
  // --- NARZĘDZIA PROJEKTOWE ---
  tools: [
    { name: 'InkScape', category: 'Wektory i logotypy' },
    { name: 'Canva', category: 'Kompozycja i grafika' },
    { name: 'Adobe Illustrator', category: 'Grafika wektorowa' },
    { name: 'Adobe Photoshop', category: 'Obróbka zdjęć i mockupy' },
    { name: 'Adobe InDesign', category: 'Skład DTP' },
    { name: 'Figma', category: 'UI/UX i digital design' }
  ],
  
  // --- PROCES PROJEKTOWY ---
  processSteps: [
    {
      number: '01',
      title: 'Poznanie potrzeb',
      description: 'Zbieram informacje o marce, analizuję konkurencję i wspólnie ustalamy cele projektu oraz harmonogram.'
    },
    {
      number: '02',
      title: 'Pomysł i koncepcja',
      description: 'Tworzę moodboardy, szkice i pierwsze propozycje kierunków wizualnych, sprawdzając ich spójność.'
    },
    {
      number: '03',
      title: 'Projektowanie',
      description: 'Rozwijam wybraną koncepcję, dopracowuję typografię, kompozycję oraz przygotowuję wstępne wdrożenia.'
    },
    {
      number: '04',
      title: 'Dopracowanie i finalizacja',
      description: 'Wprowadzam uzgodnione korekty, przygotowuję kompletne pliki produkcyjne (DTP/Web) i przekazuję materiały.'
    }
  ],
  
  // --- DANE KONTAKTOWE I LINKI ---
  contact: {
    // Podmień na swój adres e-mail:
    email: 'af.jaskulski@gmail.com',
    location: 'Polska · Dostępny zdalnie',
    status: 'Otwarty na nowe projekty i współpracę',
    socials: [
      { name: 'LinkedIn', url: 'https://linkedin.com', label: 'linkedin.com/in/twoj-profil' },
      { name: 'Behance', url: 'https://behance.net', label: 'behance.net/twoj-profil' },
      { name: 'Dribbble', url: 'https://dribbble.com', label: 'dribbble.com/twoj-profil' },
      { name: 'Instagram', url: 'https://instagram.com', label: 'instagram.com/twoj-profil' }
    ]
  },
  
  studioImage: imgStudio
};

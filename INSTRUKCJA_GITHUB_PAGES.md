# Instrukcja obsługi i publikacji portfolio na GitHub Pages

Gratulacje! Twoje portfolio grafika komputerowego zostało w pełni przygotowane. Jest nowoczesne, minimalistyczne, zoptymalizowane pod urządzenia mobilne i komputery oraz w 100% gotowe do bezpłatnej publikacji jako statyczna strona na **GitHub Pages**.

---

## ⚠️ WIDZISZ PUSTĄ / BIAŁĄ STRONĘ PO WDROŻENIU? OTO ROZWIĄZANIE:

Jeśli po wejściu na link z GitHuba widzisz pusty biały ekran, powodem jest to, że **GitHub Pages domyślnie próbuje uruchomić surowy kod źródłowy zamiast skompilowanego projektu**.

W przeglądarce pod klawiszem **F12** w konsoli pojawia się wtedy błąd:
`Failed to load resource: /src/main.tsx (404 Not Found)`
Przeglądarki internetowe nie rozumieją plików TypeScript (`.tsx`) — potrzebują plików JavaScript z folderu `dist/` stworzonych przez polecenie `npm run build`.

### Jak to naprawić? (Wybierz 1 z 2 prostych sposobów):

### 🌟 SPOSÓB 1 (Zalecany — automatyczny przez GitHub Actions):
1. Wejdź na stronę swojego repozytorium na GitHubie.
2. Wejdź w zakładkę **Settings** (Ustawienia) na górze.
3. Po lewej stronie kliknij **Pages**.
4. W sekcji **Build and deployment** znajdź pole **Source** i zmień z *Deploy from a branch* na:
   👉 **GitHub Actions**
5. Sprawdź uprawnienia: w menu po lewej kliknij **Actions** → **General**, zjedź na sam dół do sekcji **Workflow permissions** i zaznacz:
   ☑ **Read and write permissions** → kliknij **Save**.
6. Wejdź w zakładkę **Actions** na samej górze repozytorium. Zobaczysz działający proces publikacji, który po ~1 minucie zakończy się zielonym ptaszkiem, a strona natychmiast ożyje!

---

### 🚀 SPOSÓB 2 (Alternatywny — błyskawiczna publikacja jedną komendą):
W projekcie skonfigurowaliśmy dla Ciebie bibliotekę `gh-pages`. Wystarczy, że w terminalu wpiszesz:
```bash
npm run deploy
```
To polecenie automatycznie zbuduje stronę (`npm run build`) i wyśle gotowe pliki produkcyjne na gałąź `gh-pages`. Następnie w **Settings** → **Pages** jako Source wybierz gałąź **gh-pages** i folder **/ (root)**.

---

## 1. Jakie pliki otrzymałeś w projekcie?

- **`src/data/projects.ts`** — **Główny plik z Twoimi projektami**. To tutaj dodajesz nowe prace, zmieniasz opisy, narzędzia i kategorie.
- **`src/data/profile.ts`** — **Plik z Twoimi danymi osobowymi**. Tutaj zmieniasz swoje imię i nazwisko, nagłówki, bio, adres e-mail i linki społecznościowe (LinkedIn, Behance, Dribbble, Instagram).
- **`public/images/projects/`** — Folder przygotowany na Twoje własne pliki graficzne (JPG, PNG, WebP).
- **`src/components/`** — Komponenty strony:
  - `Navbar.tsx` — proste menu nawigacyjne z wersją mobilną;
  - `Hero.tsx` — sekcja otwierająca z mocną typografią i przyciskami;
  - `Portfolio.tsx` — siatka projektów z działającymi filtrami kategorii;
  - `ProjectModal.tsx` — estetyczne okno szczegółów projektu z galerią, zakresem prac i nawigacją klawiaturą (ESC / strzałki);
  - `About.tsx` — sekcja „O mnie” ze specjalizacjami, narzędziami i zdjęciem studia;
  - `Process.tsx` — 4-etapowy proces projektowy;
  - `Contact.tsx` — sekcja kontaktowa z przyciskiem szybkiego kopiowania e-maila i bezpośrednim otwieraniem poczty;
  - `Footer.tsx` — stopka z automatycznym rokiem i powrotem na górę;
  - `ImageWithFallback.tsx` — bezpieczne wyświetlanie grafik z eleganckim placeholderem na wypadek braku pliku.
- **`.github/workflows/deploy.yml`** — Automatyczna akcja GitHub Actions, która po każdym wysłaniu zmian buduje stronę i publikuje ją na GitHub Pages.
- **`vite.config.ts`** — Skonfigurowana baza ścieżek (`base: './'`), dzięki czemu strona działa pod dowolną domeną i subfolderem repozytorium GitHub.

---

## 2. Jak uruchomić stronę lokalnie na swoim komputerze?

1. Zainstaluj darmowe środowisko [Node.js](https://nodejs.org/) (jeśli jeszcze go nie masz).
2. Otwórz terminal (lub wiersz poleceń) w folderze projektu.
3. Zainstaluj zależności wpisując:
   ```bash
   npm install
   ```
4. Uruchom lokalny serwer deweloperski:
   ```bash
   npm run dev
   ```
5. W terminalu pojawi się link (zazwyczaj `http://localhost:5173` lub `http://localhost:3000`). Otwórz go w przeglądarce. Wszelkie zmiany w plikach zobaczysz od razu.

---

## 3. Jak zmienić dane kontaktowe i teksty?

Otwórz plik:
👉 **`src/data/profile.ts`**

Wszystkie pola są opisane po polsku:
- `name`: wpisz swoje imię i nazwisko (np. `'ANNA NOWAK'`);
- `heroHeadline`: główny nagłówek na samej górze;
- `heroSubtitle`: opis pod nagłówkiem;
- `aboutLead` i `aboutDescription`: teksty w sekcji „O mnie”;
- `contact.email`: Twój adres e-mail (np. `'kontakt@annareact.pl'`);
- `contact.socials`: wklej bezpośrednie linki do swoich profili na LinkedIn, Behance, Dribbble lub Instagramie.

---

## 4. Jak podmienić przykładowe grafiki na własne prace?

1. Zapisz swoje grafiki (np. `moj_logotyp.jpg`, `opakowanie.png`) w folderze:
   👉 **`public/images/projects/`**
2. Otwórz plik:
   👉 **`src/data/projects.ts`**
3. W wybranym projekcie w polach `thumbnail` oraz `gallery` podaj nazwę swojego pliku:
   ```typescript
   thumbnail: 'images/projects/moj_logotyp.jpg',
   gallery: [
     'images/projects/moj_logotyp.jpg',
     'images/projects/kolejne_ujecie.jpg'
   ],
   ```

---

## 5. Jak dodać kolejny projekt do portfolio?

W pliku **`src/data/projects.ts`** przejdź na koniec listy `PROJECTS` i wklej nowy blok:

```typescript
{
  id: 'moj-nowy-projekt',
  title: 'Nazwa Twojego Projektu',
  category: 'Branding', // Dostępne: 'Branding' | 'Digital' | 'Social Media' | 'Print'
  shortDescription: 'Krótki opis widoczny na karcie projektu.',
  description: 'Szczegółowy opis projektu wyświetlany po otwarciu okna szczegółów.',
  thumbnail: 'images/projects/twoj_obrazek.jpg',
  gallery: [
    'images/projects/twoj_obrazek.jpg'
  ],
  tools: ['Adobe Illustrator', 'Photoshop'],
  year: '2025',
  featured: true, // true sprawia, że karta ma większy format w siatce
  client: 'Nazwa Klienta',
  scope: [
    'Projekt logotypu',
    'Papeteria firmowa',
    'Przygotowanie do druku'
  ],
  solutions: [
    'Zastosowanie minimalistycznej typografii',
    'Spójny system kolorów'
  ]
},
```

---

## 6. Jak przesłać pliki do repozytorium GitHub?

1. Załóż darmowe konto na [GitHub.com](https://github.com), jeśli go nie posiadasz.
2. Utwórz nowe repozytorium (kliknij zielony przycisk **New repository**), np. o nazwie `portfolio`.
3. Wybierz opcję **Public**.
4. W terminalu w folderze projektu wpisz komendy:
   ```bash
   git init
   git add .
   git commit -m "Pierwsza wersja portfolio"
   git branch -M main
   git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/portfolio.git
   git push -u origin main
   ```
   *(Zastąp `TWOJA_NAZWA_UZYTKOWNIKA` swoją nazwą użytkownika z GitHuba)*.

---

## 7. Jak włączyć bezpłatne GitHub Pages?

Dzięki przygotowanemu plikowi `.github/workflows/deploy.yml` wdrożenie jest w pełni zautomatyzowane:

1. Wejdź na stronę swojego repozytorium na GitHubie.
2. Kliknij zakładkę **Settings** (Ustawienia) na górze.
3. W menu po lewej stronie wybierz **Pages**.
4. W sekcji **Build and deployment** znajdź opcję **Source** i zmień z *Deploy from a branch* na:
   👉 **GitHub Actions**.
5. To wszystko! W zakładce **Actions** zobaczysz proces budowania strony. Po 1-2 minutach Twoja strona będzie dostępna pod adresem:
   `https://TWOJA_NAZWA_UZYTKOWNIKA.github.io/portfolio/`

---

## 8. Jak sprawdzić, czy ścieżki i grafiki działają poprawnie?

- W pliku `vite.config.ts` ustawiono `base: './'`. Oznacza to, że wszystkie pliki stylów, skryptów i obrazów ładują się ze ścieżek względnych.
- Dzięki temu strona działa bezbłędnie zarówno w domenie głównej (np. `mojadomena.pl`), jak i w podkatalogu GitHuba (`username.github.io/portfolio/`).
- Wbudowany komponent `ImageWithFallback` zabezpiecza stronę: jeśli którykolwiek plik graficzny zostanie omyłkowo usunięty lub wpiszesz złą nazwę, na stronie pojawi się estetyczny, neutralny blok zastępczy zamiast brzydkiego, uszkodzonego obrazu.

import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { About } from './components/About.tsx';
import { Process } from './components/Process.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* 1. Nawigacja górna */}
      <Navbar />

      {/* Główna treść strony single-page */}
      <main className="flex-1">
        {/* 2. Sekcja Hero */}
        <Hero />

        {/* 3. Portfolio z filtrami i modalem szczegółów */}
        <Portfolio />

        {/* 4. O mnie, specjalizacje i narzędzia */}
        <About />

        {/* 5. Proces projektowy */}
        <Process />

        {/* 6. Kontakt bezpośredni i social media */}
        <Contact />
      </main>

      {/* 7. Stopka */}
      <Footer />
    </div>
  );
}

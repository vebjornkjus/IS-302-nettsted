import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle.jsx';

const Reflection = () => {

  const formatContent = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, index) => {
      if (!line.trim()) return <br key={index} />;

      if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-6 mb-2">
            {line.substring(1).trim()}
          </li>
        );
      }

      if (line.trim().startsWith('"') && line.trim().endsWith('"')) {
        return (
          <blockquote key={index} className="italic border-l-4 border-capgemini-500 pl-4 my-4 text-gray-600 dark:text-gray-400">
            {line.trim().slice(1, -1)}
          </blockquote>
        );
      }

      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-4">
            {parts.map((part, i) =>
              i % 2 === 0 ? part : <strong key={i} className="font-semibold text-capgemini-600 dark:text-capgemini-400">{part}</strong>
            )}
          </p>
        );
      }

      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/#statusrapporter"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-capgemini-600 dark:hover:text-capgemini-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Tilbake til Statusrapporter</span>
          </Link>

          <DarkModeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-capgemini-600 via-capgemini-500 to-blue-600 bg-clip-text text-transparent">
              Refleksjon fra Praksisperioden
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Våre tanker og erfaringer fra tiden hos Capgemini
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
              Høst 2025
            </div>
          </div>

          {/* Content Container */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">

            {/* Vebjørn's Reflection */}
            <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-capgemini-600 to-blue-600"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Vebjørns Refleksjon
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Text Content */}
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <div className="prose dark:prose-invert max-w-none">
                    {formatContent(`**Erfaringer**
Noe av det jeg likte aller best med praksisen var å få pratet med alle ansatte i bedriften. Man bygger i bunn og grunn et nettverk gjennom hele praksisperioden, så det er viktig å være åpen og omgjengelig. Utenom det har jeg lært mye om hvordan hverdagen til en konsulent ser ut!
Vi møtte på en del utfordringer på veien, gjerne teknisk. Heldigvis var det lav terskel for å få hjelp med hva enn man lurte på.
Jeg tror det jeg likte aller best med hele praksisperioden var det å føle litt på hvordan det faktisk er å jobbe med IT. Og jeg tror det gir et stort fortrinn seinere når jeg skal ut i verden for å søke jobb.

**Teknisk læring**
I den perioden her har jeg fått prøvd meg på masse nytt og finpussa litt på tidligere kunnskap! I prosjektet har jeg fått jobbet med mikrokontrollere av typen esp32 s3. For å programmere disse må man bruke C++ eller MicroPython. Så da benyttet jeg muligheten til å prøve meg på C++.
Applikasjonen vi jobbet videre på var skrevet i C# med .NET rammeverket. Vi var tredje gruppen som jobbet på dette og fikk oppleve hvor viktig det er at man holder på med god kodepraksis når man skriver kode som andre skal ta over senere. Dette prosjektet krevde mye tid for å sette seg inn i alt som var blitt gjort, og vi fikk ryddet opp i over 30 filer.

**Personlig utvikling**
Jeg har nok en enda lavere terskel for å spørre om hjelp nå enn når praksisperioden starta. Og det er noe jeg tror er veldig viktig når man er ny innen IT, man må lære fra noen og da må man tørre å spørre!`)}
                  </div>
                </div>

                {/* Image Column */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/VebjornBilde.jpg"
                      alt="Vebjørn"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4 bg-gray-50 dark:bg-neutral-700 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-300">Vebjørn</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Kristian's Reflection */}
            <section className="p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-capgemini-600 to-blue-600"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Kristians Refleksjon
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Text Content */}
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <div className="prose dark:prose-invert max-w-none">
                    {formatContent(`**Erfaringer**
Etter praksisperioden sitter jeg igjen med mange nyttige erfaringer som jeg vet jeg vil få bruk for videre. Jeg fikk jobbet med mye nytt, testet ulike løsninger og opplevde hvordan det er å jobbe i praksis mot et reelt prosjekt. Vi fikk god støtte fra de ansatte, som alltid stilte opp når vi lurte på noe, og de ga oss samtidig et innblikk i hvordan de jobber til daglig. Jeg ble også introdusert til Azure platformen, noe jeg tror blir verdifullt for meg fremover.

**Teknisk læring**
Gjennom praksisprosjektet fikk jeg muligheten til å jobbe med mange forskjellige deler av systemet. Jeg jobbet blant annet med frontend-design til monitorsiden, og fikk utforske hvordan man bygger et tydelig og stabilt brukergrensesnitt. I tillegg fikk jeg teste mikrokontrollere (ESP32) og lære mer om hvordan de fungerer i samspill med resten av systemet

En annen viktig erfaring var hvor avgjørende god kodestruktur og ryddighet er for at andre skal kunne ta over et prosjekt senere. Det var litt mye rot i filene, blant annet ubrukte filer og avhengigheter. Selv om det var mye nytt å sette seg inn i, og det til tider føltes litt overveldende, gjorde det også at jeg fikk en god helhetsforståelse av koden. Jeg måtte innom mange deler av prosjektet for å finne ut hvordan ting hang sammen, og det lærte jeg mye av.

**Personlig utvikling**
Personlig har jeg fått en bedre forståelse av samspillet mellom det fysiske (som mikrokontrollerne/kortscannere) og det tekniske systemet bak. Jeg har også lært viktigheten av å prioritere riktig og gå rett på sak når tiden er begrenset. Dette gjorde at jeg lærte mye på kort tid.

Jeg tar med meg gode erfaringer både fra det tekniske arbeidet og fra samarbeidet med de ansatte. Praksisperioden har gitt meg verdifull innsikt, ny kunnskap og trygghet som jeg kommer til å få bruk for videre, både i studier og arbeidsliv.`)}
                  </div>
                </div>

                {/* Image Column */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/KristianBilde.jpg"
                      alt="Kristian"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4 bg-gray-50 dark:bg-neutral-700 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-300">Kristian</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;

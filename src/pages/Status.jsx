import React, { useEffect, useState } from 'react'
import StatusCard from '../components/StatusCard'

const Status = () => {
  const [selectedTag, setSelectedTag] = useState('alle')
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const statusPosts = [
    {
      id: 1,
      title: "Prosjektoppstartsmøte",
      date: "18-08-2025",
      excerpt: "Møte med bedriften og definering av prosjektets omfang og mål.",
      tags: ["planlegging", "møter"],
      content: "I dag hadde vi vårt første møte med Capgemini. Vi gikk gjennom prosjektets mål og definerte tydelige krav for appen vi skal vidreutvikle. Hovedfokuset er å skape en brukervennlig løsning som motiverer ansatte til å være mer fysisk aktive."
    },
    {
      id: 2,
      title: "Introduksjonsdag",
      date: "27-08-2025",
      excerpt: "Fått tilganger og kjapp gjennomgang av Azure DevOps.",
      tags: ["planlegging", "møter"],
      content: "I dag fikk vi adgangskort, og tilganger til bedriftens systemer. Vi har også fått opplæring i Azure DevOps, som vi skal bruke til prosjektet."
    },
    {
      id: 3,
      title: "Arbeid med nettside og applikasjon",
      date: "28-08-2025",
      excerpt: "Jobbet med nettside, og gått gjennom CapTrapp applikasjonen.",
      tags: ["research", "analyse"],
      content: "I dag jobbet vi på nettsiden og la til alle sidene som skal være med. Vi gikk også gjennom koden vi skal jobbe med i prosjektet, for å bli bedre kjent med den."
    },
    {
      id: 4,
      title: "Levering av nettside og applikasjon",
      date: "29-08-2025",
      excerpt: "Ferdigstilte nettside.",
      tags: ["research", "analyse"],
      content: "I dag finpusset vi på nettsiden og la til det om manglet."
    },
    {
      id: 5,
      title: "Klona repository og litt gjennomgang",
      date: "02-09-2025",
      excerpt: "Klona repo",
      tags: ["research","analyse"],
      content: "Fikk klonet repoet ned på egne PC-er, sliter litt med å få starta prosjektet."
    },
    {
      id: 6,
      title: "Gjennomgang av Azure DevOp",
      date: "05-09-2025",
      excerpt: "Startet sprint-planlegging",
      tags: ["planlegging","analyse"],
      content: "Fått grundig gjennomgang av Azure DevOps og de viktigste funksjonene der. Prosjektet kjører lokalt på PC-ene våres også nå."
    },
    {
      id: 7,
      title: "Jobbet med CapTrapp applikasjonen",
      date: "09-09-2025",
      excerpt: "Begynt på Monitorsiden",
      tags: ["prototype","design"],
      content: "Fått laget en monitorside, som skal vise statistikk og fremgang for de ansatte på en skjerm"
    },
    {
      id: 8,
      title: "Formatering og Mikrokontroller",
      date: "12-09-2025",
      excerpt: "Satt opp en PC med Windows på minnepenn og tester mikrokontrollere",
      tags: ["prototype","research"],
      content: "Fått en kompakt PC for å sette opp prosjektet vårt på denne til testing. Har også fått mikrokontrollere som må konfigureres til prosjektet vårt."
    },
    {
      id: 9,
      title: "Satt opp PC",
      date: "16-09-2025",
      excerpt: "Fått satt opp PC-en med Windows og nødvendige programmer",
      tags: ["planlegging"],
      content: "Fikk ny minnepenn med windows installert, og fikk satt opp PC-en klart til å kjøre prosjektet"
    },
    {
      id: 10,
      title: "Fikset mikrokontroller og lastet opp kode",
      date: "17-09-2025",
      excerpt: "Fikk endelig fikset mikrokontrollerne og lastet opp kode til dem.",
      tags: ["research", "prototype"],
      content: "Fant ut at vi trengte noen drivere på mac for å få dette til å fungere. Videre skal vi jobbe med å få til RFID scanneren"
    },
    {
      id: 11,
      title: "Veiledning av Svein",
      date: "23-09-2025",
      excerpt: "Fikk veiledning til oppsett av mikrokontrollere.",
      tags: ["planlegging", "møter"],
      content: "Fikk filer vi trengte for prosjektet. Fikk disse over på mac og fikk kjørt koden."
    },
    {
      id: 12,
      title: "Jobbet med oppsett av mikrokontrollere mot applikasjonen",
      date: "24-09-2025",
      excerpt: "Jobbet med oppsettet og integrere mikrokontrollerne mot applikasjonen og databasen.",
      tags: ["research", "prototype"],
      content: "Kodet logikk som gjorde at mikrokontrolleren kan kommunisere med applikasjonens backend."
    },
    {
      id: 13,
      title: "Fikset kortscanner",
      date: "08-10-2025",
      excerpt: "Vi får nå scannet kortet og lagret det i databasen.",
      tags: ["design", "prototype"],
      content: "Kortet scannes nå og lagres. Vi bruker Cloudfare for å sende dataene, så mikrokontrolleren og pcen kan være på froskjellige nett og snakke sammen."
    },
    {
      id: 14,
      title: "Design på mikrokontroller",
      date: "16-10-2025",
      excerpt: "Lært hvordan man legger til bilder på en mikrokontroller.",
      tags: ["esp32", "design"],
      content: "Møtte på mye utfordringer rundt bildet som skulle vises på mikrokontrolleren fordi den ikke kan vise vanlige bildefiler. Brukte derfor AI til å gjøre om bilde til en c-array hvor hver piksel får en fargeverdig i RGB-format."
    },
    {
      id: 15,
      title: "Flere endringer på monitor-siden",
      date: "17-10-2025",
      excerpt: "Monitor-siden har fått nye funksjoner og design-elementer.",
      tags: ["UX", "design"],
      content: "Monitor-siden viser nå pågående økter i trappene og hvor lang tid hver person bruker, raskeste tider vises også på forsiden. Og de personene med flest trapper i løpet av måneden vises på et scoreboard."
    },
    {
      id: 16,
      title: "Ny mikrokontroller!",
      date: "21-10-2025",
      excerpt: "Vi fikk enda en mikrokontroller sånn at vi kan teste med én i første og én i åttende etasje.",
      tags: ["esp32", "backend"],
      content: "Nå som vi har to mikrokontrollere må vi skrive om litt av koden på mikrokontrollerene og i backenden vår for at hver kontroller skal utføre forskjellige handlinger utifra hvilken etasje de skal være plassert i."
    },
    {
      id: 17,
      title: "Ryddedag",
      date: "22-10-2025",
      excerpt: "Ryddet og slettet i prosjektfiler fra tildigere utvikling.",
      tags: ["planlegging", "rydding"],
      content: "Satte av store deler av dagen til å rydde opp i gamle prosjektfiler som ikke brukes lenger eller er helt tomme. Dette resulterte i nesten 20 slettede filer og like mange endringer."
    },
    {
      id: 18,
      title: "Migrering og MySQL",
      date: "29-10-2025",
      excerpt: "Opprettet migrering for å oppdatere 'live' databasen.",
      tags: ["backend", "hjelp"],
      content: "Fikk hjelp av Marius til å finne ut hvordan vi skal jobbe fremover mot levering og hva som gjenstår for å levere et fungerende produkt. Vi fikk en enkel plan og opprettet en ny migrering og lastet ned MySQL Workbench."
    },
    {
      id: 19,
      title: "Intervju og medaljer",
      date: "05-11-2025",
      excerpt: "Intervjuet ansatte og skrevet om kode så medaljer vises på brukerprofiler.",
      tags: ["møter", "backend"],
      content: "Mange på kontoret var syke idag, resulterte i at vi ikke fikk gjort så mye som vi ville på prosjektet. Men fikk brukt tiden til å filme og intervjue ansatte til videoen som skal leveres 14. november."
    },
  ]

  const tags = ['alle', 'daglig', 'planlegging', 'UX', 'design', 'møter', 'research', 'prototype', 'analyse', 'backend', 'esp32', 'sosialt', 'hjelp', 'rydding']

  const filteredPosts = (selectedTag === 'alle'
    ? statusPosts
    : statusPosts.filter(post => post.tags.includes(selectedTag))
  ).sort((a, b) => {
    // Parse dd-mm-yyyy format
    const [dayA, monthA, yearA] = a.date.split('-').map(Number)
    const [dayB, monthB, yearB] = b.date.split('-').map(Number)
    const dateA = new Date(yearA, monthA - 1, dayA)
    const dateB = new Date(yearB, monthB - 1, dayB)
    return dateB - dateA // newest first
  })

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTag])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / itemsPerPage))
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage)
  const rangeStart = filteredPosts.length === 0 ? 0 : startIndex + 1
  const rangeEnd = Math.min(startIndex + itemsPerPage, filteredPosts.length)

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="modern-card p-12 rounded-2xl min-h-[820px] flex flex-col">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
            Prosjektdagbok
          </h1>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 interactive-element ${
                    selectedTag === tag
                      ? 'bg-gradient-capgemini-bright text-black shadow-lg'
                      : 'bg-white dark:bg-neutral-900 text-light-900 dark:text-neutral-100 border border-light-300 dark:border-neutral-700 hover:border-capgemini-500/50'
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch flex-1">
            {currentPosts.map(post => (
              <StatusCard
                key={post.id}
                post={post}
                isExpanded={expandedCards.has(post.id)}
                onToggle={() => {
                  const next = new Set(expandedCards)
                  if (next.has(post.id)) next.delete(post.id)
                  else next.add(post.id)
                  setExpandedCards(next)
                }}
              />
            ))}
          </div>

          {filteredPosts.length > 0 && (
            <div className="mt-auto pt-6 flex flex-col items-center gap-3">
              <div className="text-sm text-slate-500 dark:text-neutral-400">
                Viser {rangeStart}-{rangeEnd} av {filteredPosts.length} oppdateringer
              </div>

              {filteredPosts.length > itemsPerPage && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 interactive-element ${
                      currentPage === 1
                        ? 'opacity-50 cursor-not-allowed border-light-300 dark:border-neutral-700 text-light-700 dark:text-neutral-400'
                        : 'bg-white dark:bg-neutral-900 border-light-300 dark:border-neutral-700 hover:border-capgemini-500/50 text-light-900 dark:text-neutral-100'
                    }`}
                  >
                    Nyere
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 interactive-element ${
                        currentPage === page
                          ? 'bg-gradient-capgemini-bright text-black shadow-lg'
                          : 'bg-white dark:bg-neutral-900 text-light-900 dark:text-neutral-100 border border-light-300 dark:border-neutral-700 hover:border-capgemini-500/50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 interactive-element ${
                      currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed border-light-300 dark:border-neutral-700 text-light-700 dark:text-neutral-400'
                        : 'bg-white dark:bg-neutral-900 border-light-300 dark:border-neutral-700 hover:border-capgemini-500/50 text-light-900 dark:text-neutral-100'
                    }`}
                  >
                    Eldre
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Status

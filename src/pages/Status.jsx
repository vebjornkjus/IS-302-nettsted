import React, { useState } from 'react'
import StatusCard from '../components/StatusCard'

const Status = () => {
  const [selectedTag, setSelectedTag] = useState('alle')
  const [expandedCards, setExpandedCards] = useState(new Set())

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
  ]

  const tags = ['alle', 'planlegging', 'UX', 'design', 'møter', 'research', 'prototype', 'analyse']

  const filteredPosts = (selectedTag === 'alle'
    ? statusPosts
    : statusPosts.filter(post => post.tags.includes(selectedTag))
  ).sort((a, b) => {
    // Parse dd-mm-yyyy format
    const [dayA, monthA, yearA] = a.date.split('-').map(Number)
    const [dayB, monthB, yearB] = b.date.split('-').map(Number)
    const dateA = new Date(yearA, monthA - 1, dayA)
    const dateB = new Date(yearB, monthB - 1, dayB)
    return dateB - dateA // Sort oldest first
  })

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="modern-card p-12 rounded-2xl">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
            Daglige Oppdateringer
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredPosts.map(post => (
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
        </div>
      </div>
    </div>
  )
}

export default Status
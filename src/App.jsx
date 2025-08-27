import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Hjem', href: '/' },
    { name: 'Hva vi gjør', href: '/hva-vi-gjor' },
    { name: 'Status', href: '/status' },
    { name: 'Team', href: '/team' },

  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-light-300 transition-all duration-300 hover:bg-light-100/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-capgemini-bright bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            Praksis 2025
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === item.href
                      ? 'bg-gradient-capgemini-bright text-black px-4 py-2 rounded-lg shadow-lg'
                      : 'text-light-800 hover:text-capgemini-400 hover:bg-light-200/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-800 hover:text-capgemini-400 hover:scale-110 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-light-300">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === item.href
                      ? 'bg-gradient-capgemini-bright text-black shadow-lg'
                      : 'text-light-800 hover:text-capgemini-400 hover:bg-light-200/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// Footer Component
const Footer = () => (
  <footer className="bg-white text-light-900 border-t border-light-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
          <p className="text-light-800">Kristian.kalleberg@hotmail.no</p>
          <p className="text-light-800">Vebjorn.kjus.gmail.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Partnere</h3>
          <div className="space-y-2">
            <a href="https://www.uia.no" className="text-light-800 hover:text-light-900 block transition-colors">
              Universitetet i Agder
            </a>
            <a href="https://www.capgemini.com" className="text-light-800 hover:text-light-900 block transition-colors">
              Capgemini
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-light-800">
        <p>Praksis 2025 – Vebjørn & Kristian</p>
      </div>
    </div>
  </footer>
)

// Home Page Component
const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-light text-light-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Praksis 2025 – Vebjørn & Kristian
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Vi utvikler en web-app som oppfordrer Capgemini-ansatte til å blant annet ta trappa i stedet for heisen. Målet er å få de ansatte til å være mer fysisk aktive i hverdagen.
        </p>
        <Link
          to="/hva-vi-gjor"
          className="inline-block bg-gradient-capgemini-bright text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Les mer om prosjektet
        </Link>
      </div>
    </section>

    {/* Quick Overview */}
    <section className="py-16 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-bright-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900">Brukeropplevelse & design</h3>
            <p className="text-light-800">Et intuitivt og brukervennlig grensesnitt som gjør appen enkel å bruke</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900">Oppmuntrende varslinger</h3>
            <p className="text-light-800">Varsler og funksjoner som hjelper brukeren å holde fokus og motivasjon</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-tech w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900">Analyse & rapportering</h3>
            <p className="text-light-800">Sporing av fremgang og detaljerte statusrapporter</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// Hva vi gjør Page
const HvaViGjor = () => (
  <div className="py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
        Hva vi gjør
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border border-light-300">
          <p className="text-lg text-light-800 leading-relaxed mb-6">
            Som del av vårt praksisprosjekt hos Capgemini utvikler vi en innovativ mobilapplikasjon 
            som har som mål å oppfordre ansatte til å velge trappen fremfor heisen i hverdagen. 
            Prosjektet kombinerer moderne teknologi med atferdspsykologi for å skape positive 
            helsegevinster på arbeidsplassen. Vi fokuserer på brukersentrert design og 
            evidensbaserte nudging-teknikker for å motivere til sunnere valg. Gjennom grundige 
            UX-eksperimenter kartlegger vi brukerens behov og preferanser, mens vi samtidig 
            implementerer smarte påminnelsessystemer og belønningsmekanismer. Vårt arbeid 
            inkluderer også omfattende dataanalyse og kontinuerlig rapportering av fremdrift 
            til alle interessenter.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-light-100 rounded-lg p-8 border border-light-300">
          <h2 className="text-2xl font-semibold mb-6 text-light-900">Våre hovedfokusområder:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-capgemini-bright w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-light-800"><strong className="text-capgemini-400">UX-eksperimenter:</strong> Brukersentert design og testing</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-accent w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-light-800"><strong className="text-capgemini-400">Nudging-mekanismer:</strong> Motiverende påminnelser</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-capgemini-bright w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-light-800"><strong className="text-capgemini-400">Enkle analyser:</strong> Datasporing og innsikt</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-tech w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-light-800"><strong className="text-capgemini-400">Statusrapportering:</strong> Kontinuerlig kommunikasjon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Status Page
const Status = () => {
  const [selectedTag, setSelectedTag] = useState('alle')
  
  const statusPosts = [
    {
      id: 1,
      title: "Prosjektoppstartsmøte",
      date: "2025-08-18",
      excerpt: "Møte med bedriften og definering av prosjektets omfang og mål.",
      tags: ["planlegging", "møter"],
      content: "I dag hadde vi vårt første møte med Capgemini. Vi gikk gjennom prosjektets mål og definerte tydelige krav for appen vi skal vidreutvikle. Hovedfokuset er å skape en brukervennlig løsning som motiverer ansatte til å være mer fysisk aktive."
    },
    {
      id: 2,
      title: "Introduksjonsdag",
      date: "2025-08-27",
      excerpt: "Fått tilganger og opplæring i Azure devops.",
      tags: ["planlegging", "møter"],
      content: "I dag fikk vi adgangskort, og tilganger til bedriftens systemer. Vi har også fått opplæring i Azure DevOps, som vi skal bruke til prosjektet."
    },
   
  ]

  const tags = ['alle', 'planlegging', 'UX', 'design', 'møter', 'research', 'prototype', 'analyse']

  const filteredPosts = selectedTag === 'alle' 
    ? statusPosts 
    : statusPosts.filter(post => post.tags.includes(selectedTag))

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
          Status
        </h1>

        {/* Filter Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedTag === tag
                    ? 'bg-gradient-capgemini-bright text-black shadow-lg'
                    : 'bg-white text-light-900 border border-light-300 hover:border-capgemini-500/50'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Status Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <StatusCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Status Card Component
const StatusCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-light-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-light-800">{post.date}</span>
          <div className="flex flex-wrap gap-1">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gradient-capgemini-subtle text-black text-xs rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-3 text-light-900">{post.title}</h3>
        <p className="text-light-800 mb-4">{post.excerpt}</p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-capgemini-400 hover:text-capgemini-300 font-medium text-sm"
        >
          {isExpanded ? 'Vis mindre' : 'Les mer'}
        </button>
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-light-300">
            <p className="text-light-800">{post.content}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Team Page
const Team = () => {
  const teamMembers = [
    {
      name: "Vebjørn",
      bio: "IT-student med interesse for maskinlæring og maskinsyn. Erfaring innen universal utforming, databaser og prosjektledelse.",
      image: "/images/VebjornBilde.jpg",
      linkedin: "https://www.linkedin.com/in/vebjørn-kjus-16b309258/",
      github: "https://github.com/vebjornkjus"
    },
    {
      name: "Kristian Kalleberg", 
      bio: "Erfaring innenfor IT- og informasjonssystemer. Har interesse for systemutvikling og digitalisering.",
      image: "https://via.placeholder.com/200x200/a855f7/ffffff?text=K",
      linkedin: "https://www.linkedin.com/feed/",
      github: "https://github.com/Kristiank02"
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
          Teamet vårt
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Team Member Component
const TeamMember = ({ member }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-light-300">
    <div className="p-8 text-center">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      <h3 className="text-2xl font-bold mb-4 text-light-900">{member.name}</h3>
      <p className="text-light-800 mb-6 leading-relaxed">{member.bio}</p>
      <div className="flex justify-center space-x-4">
        <a href={member.linkedin} className="text-capgemini-400 hover:text-capgemini-300 hover:scale-125 transition-all duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={member.github} className="text-light-800 hover:text-light-900 hover:scale-125 transition-all duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
)

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hva-vi-gjor" element={<HvaViGjor />} />
            <Route path="/status" element={<Status />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

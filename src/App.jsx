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
    { name: 'Kontakt', href: '/kontakt' }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Praksis 2025
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-gradient-primary text-white'
                      : 'text-gray-700 hover:text-primary-600'
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
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-gradient-primary text-white'
                      : 'text-gray-700 hover:text-primary-600'
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
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
          <p className="text-gray-300">praksis2025@student.uia.no</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Partnere</h3>
          <div className="space-y-2">
            <a href="https://www.uia.no" className="text-gray-300 hover:text-white block transition-colors">
              Universitetet i Agder
            </a>
            <a href="https://www.capgemini.com" className="text-gray-300 hover:text-white block transition-colors">
              Capgemini
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Praksis 2025 – Vebjørn & Kristian. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

// Home Page Component
const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Praksis 2025 – Vebjørn & Kristian
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Vi utvikler en innovativ app som oppfordrer Capgemini-ansatte til å ta trappa i stedet for heisen – 
          for bedre helse og miljø.
        </p>
        <Link
          to="/hva-vi-gjor"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Les mer om prosjektet
        </Link>
      </div>
    </section>

    {/* Quick Overview */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">UX-eksperimenter</h3>
            <p className="text-gray-600">Brukeropplevelse og design som motiverer til sunnere valg</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nudging-mekanismer</h3>
            <p className="text-gray-600">Gentle påminnelser og motivasjon for bedre vaner</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyse & rapportering</h3>
            <p className="text-gray-600">Sporing av fremgang og detaljerte statusrapporter</p>
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
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
        Hva vi gjør
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
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

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Våre hovedfokusområder:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><strong>UX-eksperimenter:</strong> Brukersentert design og testing</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><strong>Nudging-mekanismer:</strong> Motiverende påminnelser</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><strong>Enkle analyser:</strong> Datasporing og innsikt</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><strong>Statusrapportering:</strong> Kontinuerlig kommunikasjon</span>
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
      title: "Prosjektoppstart og kravspesifikasjon",
      date: "2025-01-15",
      excerpt: "Møte med stakeholders og definering av prosjektets omfang og mål.",
      tags: ["planlegging", "møter"],
      content: "I dag hadde vi vårt første store møte med alle stakeholders fra både UiA og Capgemini. Vi gikk grundig gjennom prosjektets mål og definerte tydelige krav for appen vår. Hovedfokuset er å skape en brukervenlig løsning som motiverer ansatte til å velge trappen fremfor heisen. Vi identifiserte viktige KPIer som vi vil måle suksess på, inkludert brukertilfredshet og faktisk endring i atferd."
    },
    {
      id: 2,
      title: "UX Research og brukerintervjuer",
      date: "2025-01-22",
      excerpt: "Gjennomført intervjuer med potensielle brukere for å forstå deres behov og motivasjon.",
      tags: ["UX", "research"],
      content: "Vi har gjennomført 12 dybdeintervjuer med Capgemini-ansatte for å forstå deres daglige rutiner og motivasjon rundt fysisk aktivitet på jobben. Funnene viser at de fleste er positive til konseptet, men ønsker enkle og ikke-påtrengende løsninger. Hovedbarrierene er tidsmangel og bekvemmelighet. Dette vil påvirke vår designstrategi betydelig."
    },
    {
      id: 3,
      title: "Prototype og designsystem",
      date: "2025-02-01",
      excerpt: "Første prototype klar for testing, med fokus på enkel navigasjon og motiverende elementer.",
      tags: ["design", "prototype"],
      content: "Vi har fullført vår første interaktive prototype i Figma, komplett med et konsistent designsystem. Prototypen inkluderer hovedfunksjonaliteten: daglige utfordringer, fremgangssporing, og sosiale elementer for teamkonkurranse. Designet følger Capgeminis brand guidelines men med vår egen moderne twist. Neste steg er brukertesting med 8-10 testpersoner."
    }
  ]

  const tags = ['alle', 'planlegging', 'UX', 'design', 'møter', 'research', 'prototype', 'analyse']

  const filteredPosts = selectedTag === 'alle' 
    ? statusPosts 
    : statusPosts.filter(post => post.tags.includes(selectedTag))

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Status
        </h1>

        {/* Filter Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-gradient-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{post.date}</span>
          <div className="flex flex-wrap gap-1">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
        >
          {isExpanded ? 'Vis mindre' : 'Les mer'}
        </button>
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700">{post.content}</p>
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
      name: "Kristian", 
      bio: "Fokuserer på teknisk utvikling og dataanalyse. Ekspert på backend-systemer og API-integrasjon. Ansvarlig for teknisk arkitektur og implementering.",
      image: "https://via.placeholder.com/200x200/a855f7/ffffff?text=K",
      linkedin: "#",
      github: "#"
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
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
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div className="p-8 text-center">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{member.name}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
      <div className="flex justify-center space-x-4">
        <a href={member.linkedin} className="text-primary-600 hover:text-primary-700 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={member.github} className="text-gray-700 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
)

// Contact Page
const Kontakt = () => (
  <div className="py-16">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
        Kontakt oss
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <ContactForm />
      </div>
    </div>
  </div>
)

// Contact Form Component
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    const subject = `Henvendelse fra ${name} via nettside`
    const body = `Navn: ${name}\nE-post: ${email}\n\nMelding:\n${message}`
    
    window.location.href = `mailto:praksis2025@student.uia.no?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Melding
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-gradient-primary text-white py-2 px-4 rounded-md font-medium hover:opacity-90 transition-opacity"
      >
        Send melding
      </button>
    </form>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hva-vi-gjor" element={<HvaViGjor />} />
            <Route path="/status" element={<Status />} />
            <Route path="/team" element={<Team />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
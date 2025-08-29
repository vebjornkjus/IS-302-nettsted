import React from 'react'

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-card content-spacing rounded-3xl max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl gradient-text mb-8">
            Praksis 2025 – Vebjørn & Kristian
          </h1>
          <p className="text-2xl md:text-3xl mb-12 enhanced-text text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Vi utvikler en web-app som oppfordrer Capgemini-ansatte til å blant annet ta trappa i stedet for heisen. Målet er å få de ansatte til å være mer fysisk aktive i hverdagen.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#hva-vi-gjor')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-blue-900 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl interactive-element"
          >
            Les mer om prosjektet
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    {/* Quick Overview */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="modern-card text-center p-8 rounded-2xl">
            <div className="bg-gradient-bright-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900 dark:text-neutral-100">Brukeropplevelse & design</h3>
            <p className="text-light-800 dark:text-neutral-300">Et intuitivt og brukervennlig grensesnitt som gjør appen enkel å bruke</p>
          </div>
          <div className="modern-card text-center p-8 rounded-2xl">
            <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900 dark:text-neutral-100">Oppmuntrende varslinger</h3>
            <p className="text-light-800 dark:text-neutral-300">Varsler og funksjoner som hjelper brukeren å holde fokus og motivasjon</p>
          </div>
          <div className="modern-card text-center p-8 rounded-2xl">
            <div className="bg-gradient-tech w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900 dark:text-neutral-100">Analyse & rapportering</h3>
            <p className="text-light-800 dark:text-neutral-300">Sporing av fremgang og detaljerte statusrapporter</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Home
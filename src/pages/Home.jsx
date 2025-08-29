import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="relative min-h-[60vh] py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/home-bg.jpg" alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-white/70 md:bg-white/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-capgemini-bright bg-clip-text text-transparent">
          Praksis 2025 – Vebjørn & Kristian
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-light-900">
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
    <section className="py-16 bg-light-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-bright-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900 dark:text-neutral-100">Brukeropplevelse & design</h3>
            <p className="text-light-800 dark:text-neutral-300">Et intuitivt og brukervennlig grensesnitt som gjør appen enkel å bruke</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light-900 dark:text-neutral-100">Oppmuntrende varslinger</h3>
            <p className="text-light-800 dark:text-neutral-300">Varsler og funksjoner som hjelper brukeren å holde fokus og motivasjon</p>
          </div>
          <div className="text-center">
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
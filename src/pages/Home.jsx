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
            Vi utvikler en web-app som oppfordrer Capgemini-ansatte til å ta trappa i stedet for heisen. Målet er å få de ansatte til å være mer fysisk aktive i hverdagen.
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
  </div>
)

export default Home
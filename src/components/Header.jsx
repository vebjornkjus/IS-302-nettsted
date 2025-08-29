import React, { useState, useEffect } from 'react'
import DarkModeToggle from './DarkModeToggle.jsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navigation = [
    { name: 'Hjem', href: '#home' },
    { name: 'Hva vi gjør', href: '#hva-vi-gjor' },
    { name: 'Status', href: '#status' },
    { name: 'Team', href: '#team' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'hva-vi-gjor', 'status', 'team']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/95 dark:bg-neutral-900/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-light-300 dark:border-neutral-800 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('#home')}
            className="text-xl font-bold bg-gradient-capgemini-bright bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Praksis 2025
          </button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                        : 'text-slate-600 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-neutral-800/60'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-800 dark:text-neutral-200 hover:text-capgemini-400 hover:scale-110 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-900 border-t border-light-300 dark:border-neutral-800">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                        : 'text-slate-600 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-neutral-800/60'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
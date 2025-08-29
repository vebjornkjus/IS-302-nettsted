import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle.jsx'

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
    <header className="bg-white/95 dark:bg-neutral-900/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-light-300 dark:border-neutral-800 transition-all duration-300">
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
                      : 'text-light-800 dark:text-neutral-200 hover:text-capgemini-400 hover:bg-light-200/50 dark:hover:bg-neutral-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === item.href
                      ? 'bg-gradient-capgemini-bright text-black shadow-lg'
                      : 'text-light-800 dark:text-neutral-200 hover:text-capgemini-400 hover:bg-light-200/50 dark:hover:bg-neutral-800/60'
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

export default Header
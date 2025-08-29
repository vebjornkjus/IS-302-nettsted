import React from 'react'

const Footer = () => (
  <footer className="relative z-20 mt-24 mb-8">
    <div className="modern-card mx-4 sm:mx-6 lg:mx-8 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-800 dark:text-slate-200">Kontakt</h3>
            <div className="space-y-2">
              <p className="text-slate-600 dark:text-slate-400">Kristian.kalleberg@hotmail.no</p>
              <p className="text-slate-600 dark:text-slate-400">Vebjorn.kjus@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-800 dark:text-slate-200">Partnere</h3>
            <div className="flex justify-center space-x-12">
              <a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo1.png" alt="Universitetet i Agder" className="h-24 w-auto object-contain" />
              </a>
              <a href="https://www.uia.no" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo2.png" alt="Capgemini" className="h-24 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-600 text-center text-slate-600 dark:text-slate-300">
          <p>Praksis 2025 – Vebjørn & Kristian</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
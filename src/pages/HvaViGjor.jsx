import React from 'react'

const HvaViGjor = () => (
  <div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="modern-card p-12 rounded-2xl max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
          Hva vi gjør
        </h1>
        
        <div className="space-y-8">
          <div className="modern-card rounded-xl p-8">
            <p className="text-lg enhanced-text text-light-800 dark:text-neutral-300 leading-relaxed">
              Vi videreutvikler en intern applikasjon som motiverer ansatte til å 
              velge trappene fremfor heisen. Løsningen er bygget med ASP.NET Core Blazor Server og MySQL-database. 
              I praksisperioden fokuserer vi på å rydde i mappestruktur og forbedre 
              kodekvalitet, samt å legge til gamification-elementer 
              (poeng, badges og vennlige konkurranser) som øker engasjementet. 
              Vi skal også gjøre registreringen av trappeturer så enkel som mulig, og 
              utforsker forskjellige løsninger på dette.
            </p>
          </div>

          <div className="modern-card rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-light-900 dark:text-neutral-100">Våre hovedfokusområder:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Refaktorering: God kodepraksis for enklere vedlikehold",
                "Nudging-mekanismer: Motiverende påminnelser",
                "Gamifikasjon: Spillaktige elementer",
                "Tilgjengelighet: Enkel registrering",
              ].map((t, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="enhanced-text text-slate-700 dark:text-slate-300">
                    <strong className="text-blue-600 dark:text-blue-400">{t.split(':')[0]}:</strong> {t.split(':')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HvaViGjor
import React from 'react'

const HvaViGjor = () => (
  <div className="py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
        Hva vi gjør
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-8 mb-8 border border-light-300 dark:border-neutral-700">
          <p className="text-lg text-light-800 dark:text-neutral-300 leading-relaxed mb-6">
            Vi videreutvikler en intern applikasjon som motiverer ansatte til å 
            velge trappene fremfor heisen. Løsningen er bygget i C# med MVC-arkitektur. 
            I praksisperioden fokuserer vi på å rydde i mappestruktur og forbedre 
            kodekvalitet, samt å legge til gamification-elementer 
            (poeng, badges og vennlige konkurranser) som øker engasjementet. 
            Vi skal også gjøre registreringen av trappeturer så enkel som mulig, og 
            utforsker forskjellige løsninger på dette.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-light-100 dark:from-neutral-800 dark:to-neutral-900 rounded-lg p-8 border border-light-300 dark:border-neutral-700">
          <h2 className="text-2xl font-semibold mb-6 text-light-900 dark:text-neutral-100">Våre hovedfokusområder:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Refaktorering: God kodepraksis for enklere vedlikehold",
              "Nudging-mekanismer: Motiverende påminnelser",
              "Gamifikasjon: Spillaktige elementer",
              "Tilgjengelighet: Enkel registrering",
            ].map((t, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="bg-gradient-capgemini-bright w-6 h-6 rounded-full flex-shrink-0 mt-1 shadow-sm" />
                <span className="text-light-800 dark:text-neutral-300">
                  <strong className="text-capgemini-400">{t.split(':')[0]}:</strong> {t.split(':')[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HvaViGjor
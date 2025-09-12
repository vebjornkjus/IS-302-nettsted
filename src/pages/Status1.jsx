import { Link } from 'react-router-dom'
import DarkModeToggle from '../components/DarkModeToggle.jsx'

const Status1 = () => {
  const formatContent = (content) => {
    return content.trim().split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>
      }
      
      if (line.startsWith('•')) {
        return (
          <div key={index} className="ml-6 flex items-start mb-3">
            <span className="text-capgemini-500 mr-3 mt-1">•</span>
            <span className="leading-relaxed">{line.slice(1).trim()}</span>
          </div>
        )
      }
      
      if (line.includes('**') && line.endsWith('**')) {
        const boldText = line.replace(/\*\*(.*?)\*\*/g, '$1')
        return (
          <h3 key={index} className="font-bold text-gray-900 dark:text-white mt-6 mb-4 text-xl">
            {boldText}
          </h3>
        )
      }
      
      if (line.includes('**')) {
        return (
          <div 
            key={index} 
            className="mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
            }}
          />
        )
      }
      
      if (line.startsWith('"') && line.endsWith('"')) {
        return (
          <div key={index} className="my-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-l-4 border-capgemini-500">
            <div className="italic text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {line}
            </div>
          </div>
        )
      }
      
      return (
        <div key={index} className="mb-3 leading-relaxed">
          {line}
        </div>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/#statusrapporter"
            className="inline-flex items-center text-capgemini-600 dark:text-capgemini-400 hover:text-capgemini-700 dark:hover:text-capgemini-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tilbake til Statusrapporter
          </Link>
          <DarkModeToggle />
        </div>

        
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-capgemini-bright bg-clip-text text-transparent">
            Status 1
          </h1>
          <p className="text-2xl text-slate-600 dark:text-neutral-400 max-w-4xl mx-auto mb-6">
            Første måned i praksis hos Capgemini - erfaringer, læringspunkter og refleksjoner
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-capgemini-100 dark:bg-capgemini-900/30 rounded-full">
            <div className="w-3 h-3 bg-capgemini-500 rounded-full mr-3"></div>
            <span className="text-lg text-capgemini-700 dark:text-capgemini-300 font-medium">
              12. september 2025
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Bedriften Section */}
          <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Om bedriften
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {formatContent(`
**Bransje:** Capgemini er et globalt konsulentselskap som spesialiserer seg på teknologi og digitale transformasjoner.

**Hva de driver med:**
• Konsulentvirksomhet innen teknologi og digitalisering
• Utvikling av IT-løsninger for store bedrifter
• Cloud-tjenester og infrastruktur
• Kunstig intelligens og dataanalyse

**Særtrekk:**
• Kontinuerlig læring og utvikling
• Innovativ tilnærming til teknologi
• Globalt nettverk med lokal ekspertise

**Størrelse og omsetning:**
• Over 360 000 ansatte globalt
• Årlig omsetning på over 220 milliarder kroner
• Tilstede i mer enn 50 land
• En av verdens største IT-konsulentselskap
                `)}
              </div>
              
              {/* Image: Capgemini kontoret */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/BygHøyt.jpg" 
                  alt="Capgemini kontoret – Bilde fra arbeidsplassen"
                  className="w-full h-[380px] md:h-[420px] object-cover"
                />
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-xl">
                    Capgemini kontoret
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Bilde fra arbeidsplassen
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Våre arbeidsoppgaver Section */}
          <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Våre arbeidsoppgaver
            </h2>
            
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
              {formatContent(`
**Hovedprosjekt - CapTrapp:**
Vi arbeider med videreutvikling av en intern nettside som oppfordrer Capgemini-ansatte til å velge trappa fremfor heisen. Prosjektet fokuserer på å øke den fysiske aktiviteten blant de ansatte gjennom teknologi og konkurranser.

**Konkrete arbeidsoppgaver:**
• Kartlegging og analyse av eksisterende kodebase
• Design og utvikling av nye funksjoner i appen

**Tekniske verktøy og metoder:**
• Azure DevOps for prosjektstyring og versjonskontroll
• .NET for backend-utvikling
• Sprint-planlegging
              `)}
            </div>

            {/* Media grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CapTrapp demo video */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <video 
                  controls 
                  className="w-full h-[250px] object-cover rounded-t-xl"
                >
                  <source src="/videos/UserPage.mov" type="video/quicktime" />
                  <source src="/videos/UserPage.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-lg">
                    CapTrapp - Brukerside
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                    Demonstrasjon av appens eksisterende funksjonalitet
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/KristianJobber.JPG" 
                  alt="Kristian på jobb hos Capgemini"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-lg">
                    Praksisgruppen på jobb
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                    Kristian i aksjon på arbeidsplassen
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Spesielle utfordringer eller spennende ting Section */}
          <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Spesielle utfordringer og spennende aspekter
            </h2>
            
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {formatContent(`
**Spennende aspekter ved prosjektet:**
• Få erfaring med profesjonelle arbeidsprosesser og verktøy
• Lære av erfarne utviklere og designere

**Utfordringer vi har møtt:**
• Forstå og navigere i komplekse, eksisterende kodesystemer
• Tilpasse seg nye verktøy og arbeidsmetoder

              `)}
            </div>
          </section>

          {/* Annet Section */}
          <section className="p-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Annet
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {formatContent(`
**Planer og mål fremover:**
• Implementere enklere måter å registrere etasjer
• Utivkle et universelt og visuelt appelerende grensesnitt

                `)}
              </div>
              
              {/* AdminPage image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/AdminPage.png" 
                  alt="CapTrapp Admin-side som vi har jobbet med"
                  className="w-full h-auto object-contain bg-gray-50 dark:bg-gray-800"
                />
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-lg">
                    CapTrapp - Admin-side
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                    Det vi har jobbet med hittil
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Fun coffee video section */}
        <div className="mt-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
          <section className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <span className="mr-3">☕</span>
              Bonus: Kaffepause
              <span className="ml-3"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
              Fordi kaffe er viktig i praksisperioden også...
            </p>
            
            {/* Coffee montage video */}
            <div className="max-w-2xl mx-auto">
              <video 
                controls 
                className="w-full rounded-xl shadow-lg"
                poster="/images/coffee-poster.jpg"
              >
                <source src="/videos/KaffeMontageEdit.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-4 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  En liten kaffepause i den ellers så seriøse statusrapporten ☕
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Status1

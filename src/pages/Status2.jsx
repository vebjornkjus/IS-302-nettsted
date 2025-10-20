import { Link } from 'react-router-dom'
import DarkModeToggle from '../components/DarkModeToggle.jsx'

const Status2 = () => {
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
            Status 2
          </h1>
          <p className="text-2xl text-slate-600 dark:text-neutral-400 max-w-4xl mx-auto mb-6">
            Andre måned i praksis hos Capgemini - fordypning, utvikling og nye innsikter
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-capgemini-100 dark:bg-capgemini-900/30 rounded-full">
            <div className="w-3 h-3 bg-capgemini-500 rounded-full mr-3"></div>
            <span className="text-lg text-capgemini-700 dark:text-capgemini-300 font-medium">
              16. oktober 2025
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Bedriften*/}
          <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Bedriften
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {formatContent(`
**Organisasjon og samarbeid:**
• Jobbet videre med CapTrapp og fått en fungerende løsning som er klar for testing.

**Nye relasjoner denne måneden:**
• Drift & sikkerhet: Vi har hatt konkrete avklaringer om hvordan en skanner på ett nett kan registrere data i en database på et annet.
• Produkt & design: Innsikt i hvilke dashboard-tall som faktisk betyr noe for ansatte (lag, etasje, bygg).
• Kontorhverdagen: Vi kjenner flere kolleger ved navn nå, og det har senket terskelen for å be om og gi tilbakemeldinger.
                `)}
              </div>

              {/* CapTrapp workplace image */}
              <div className="flex justify-center items-center">
                <img
                  src="/images/CapTrappLogo.png"
                  alt="CapTrapp logo"
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Oppgaver og utvikling Section */}
          <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Oppgaver og bidrag
            </h2>

            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
              {formatContent(`
**Hovedoppgaver i måned 2:**
I andre måned har vi fortsatt å jobbe med CapTrapp-prosjektet.

• Frontend-utvikling: Implementering av nye funksjoner i brukergrensesnittet med fokus på brukervennlighet
• Backend-integrasjon: Arbeid med API-er og dataflyt mellom frontend og backend
• Kodereview: Gjennomgang av hverandres kode for å sikre kvalitet
• Sprintplanlegging: Planlegging og estimering av oppgaver

**Utfordringer vi har møtt:**
• Kompleks kodebase: Fortsatt utfordrende å navigere i prosjektet med mange filer og avhengigheter (Litt spaghettikode fra tildigere studenter)
• Nye teknologier: Måtte lære oss hvordan mikrokontrolleren esp32 fungerer
• Brannmur: Finne kreative løsninger rundt brannmur på Wifi for å kunne sende signal fra ett nettverk til et annet
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
                  <source src="/videos/IMG_2339.mov" type="video/quicktime" />
                  <source src="/videos/IMG_2339.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-lg">
                    CapTrapp - Monitorsiden
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                    Demonstrasjon av kortscanning og live oppdatering
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/VebjornJobber.JPG" 
                  alt="Vebjørn på jobb hos Capgemini"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-lg">
                    Praksisgruppen på jobb
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                    Vebjørn i aksjon på arbeidsplassen
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Læring og utvikling Section */}
          <section className="p-12 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Hva vi har lært så langt
            </h2>

            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {formatContent(`
**Teknisk læring:**
• Nettverk og separasjon: Hvordan la maskinvare på ett nett snakke sikkert med en tjeneste på et annet, uten å åpne unødvendige flater.
• Pålitelighet i kant-enheter: Buffering, retry-strategier og idempotens gjør at skannerne oppfører seg forutsigbart.
• Observability: Strukturerte logger og enkle målepunkt (latency, feilrate, duplikater) gjør feilsøking rask.

**Samarbeid:**
• Kortere vei til de rette folka gir raskere avklaringer. Det å kjenne navn, roller og ansvar har spart oss for både e-poster og venting.
              `)}
            </div>
          </section>

          {/* Videre fremover Section */}
          <section className="p-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-capgemini-bright rounded-full mr-4"></div>
              Videre fremover
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {formatContent(`
**Mål for neste måned:**
• Innstallere pc og scanner i begge etasjer, for å gjøre klart til testing med ekte brukere.
• Få innsikt fra Capgemini-ansatte gjennom brukertesting og tilbakemeldinger.
• Implementere applikasjonen i Azure.
• Jobbe med design på ESP32 skanneren for å gjøre den mer brukervennlig og estetisk.

**Suksesskriterier:**
• Stabil og rask registrering på tvers av nettverk.
• Scoreboard som oppleves rettferdig, forklarbart og motiverende.
                `)}
              </div>

              {/* ESP32 display image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/ESP32CapgeminiLogo.jpg"
                  alt="ESP32 display med Capgemini-logo"
                  className="w-full h-auto object-contain bg-gray-50 dark:bg-gray-800"
                />
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-1 text-center text-lg">
                    ESP32 Display
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                    Arbeid fra måned 2
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default Status2

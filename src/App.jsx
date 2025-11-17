import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TitleJokester from './components/TitleJokester.jsx'
import Home from './pages/Home.jsx'
import HvaViGjor from './pages/HvaViGjor.jsx'
import Status from './pages/Status.jsx'
import Statusrapporter from './pages/Statusrapporter.jsx'
import Status1 from './pages/Status1.jsx'
import Status2 from './pages/Status2.jsx'
import Reflection from './pages/Reflection.jsx'
import Team from './pages/Team.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function MainPage() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      
      {/* Hva Vi Gjør Section */}
      <section id="hva-vi-gjor" className="modern-section">
        <HvaViGjor />
      </section>
      
      {/* Prosjektdagbok Section */}
      <section id="daglige-oppdateringer" className="modern-section">
        <Status />
      </section>
      
      {/* Statusrapporter Section */}
      <section id="statusrapporter" className="modern-section">
        <Statusrapporter />
      </section>

      {/* Refleksjon Section */}
      <section id="refleksjon" className="modern-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-12 rounded-2xl">
            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
              Refleksjon fra Praksisperioden
            </h1>

            <p className="text-center text-slate-600 dark:text-neutral-400 mb-12 text-lg">
              Våre personlige refleksjoner og erfaringer fra tiden hos Capgemini
            </p>

            <div className="text-center">
              <Link
                to="/reflection"
                className="inline-flex items-center px-8 py-4 bg-gradient-capgemini-bright text-black rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg font-medium"
              >
                Les refleksjonene våre
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="modern-section">
        <Team />
      </section>
    </>
  )
}

function App() {
  const location = useLocation()
  const isStatusPage = location.pathname.startsWith('/status') || location.pathname.startsWith('/reflection')

  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <TitleJokester />
      
      {/* Modern Background with glass support */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-slate-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,136,255,0.06)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,136,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)]"></div>
      </div>
      
      {/* Header - only show on main page, not on status pages */}
      {!isStatusPage && <Header />}
      
      {/* Scrollable Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/status1" element={<Status1 />} />
          <Route path="/status2" element={<Status2 />} />
          <Route path="/reflection" element={<Reflection />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App

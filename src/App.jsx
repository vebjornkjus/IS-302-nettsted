import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TitleJokester from './components/TitleJokester.jsx'
import Home from './pages/Home.jsx'
import HvaViGjor from './pages/HvaViGjor.jsx'
import Status from './pages/Status.jsx'
import Statusrapporter from './pages/Statusrapporter.jsx'
import Status1 from './pages/Status1.jsx'
import Status2 from './pages/Status2.jsx'
import Team from './pages/Team.jsx'

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
      
      {/* Daglige Oppdateringer Section */}
      <section id="daglige-oppdateringer" className="modern-section">
        <Status />
      </section>
      
      {/* Statusrapporter Section */}
      <section id="statusrapporter" className="modern-section">
        <Statusrapporter />
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
  const isStatusPage = location.pathname.startsWith('/status')

  return (
    <div className="min-h-screen relative">
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
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
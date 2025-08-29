import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TitleJokester from './components/TitleJokester.jsx'
import Home from './pages/Home.jsx'
import HvaViGjor from './pages/HvaViGjor.jsx'
import Status from './pages/Status.jsx'
import Team from './pages/Team.jsx'

function App() {
  return (
    <Router>
      <TitleJokester />
      <div className="min-h-screen bg-light-50 dark:bg-neutral-900 text-light-900 dark:text-neutral-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hva-vi-gjor" element={<HvaViGjor />} />
            <Route path="/status" element={<Status />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
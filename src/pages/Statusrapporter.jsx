import { Link } from 'react-router-dom'

const Statusrapporter = () => {
  const statusReports = [
    {
      id: 1,
      title: "Status 1 - Første måned i praksis",
      date: "12-09-2025",
      excerpt: "Oppsummering av første måned hos Capgemini med fokus på bedriften, arbeidsoppgaver og læringspunkter.",
      image: "/images/ByggBredt.jpg",
      link: "/status1",
      completed: true
    },
    {
      id: 2,
      title: "Status 2 - Kommer snart",
      date: "Oktober 2025",
      excerpt: "Neste statusrapport kommer om ca. en måned med oppdateringer om prosjektets fremgang.",
      image: "/api/placeholder/400/250",
      link: "#status2",
      completed: false
    }
  ]

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="modern-card p-12 rounded-2xl">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-capgemini-bright bg-clip-text text-transparent">
            Statusrapporter
          </h1>

          <p className="text-center text-slate-600 dark:text-neutral-400 mb-12 text-lg">
            Formelle rapporter og refleksjoner fra praksisperioden
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {statusReports.map(report => (
              <div key={report.id} className="modern-card rounded-xl overflow-hidden group hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {/* Image or placeholder */}
                <div className="relative h-48 overflow-hidden">
                  {report.completed && report.image ? (
                    <img 
                      src={report.image} 
                      alt={report.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-capgemini-100 to-blue-100 dark:from-capgemini-900/30 dark:to-blue-900/30 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-capgemini-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-capgemini-600 dark:text-capgemini-400 font-medium">
                          {report.completed ? 'Status 1' : 'Kommer snart'}
                        </span>
                      </div>
                    </div>
                  )}
                  {!report.completed && (
                    <div className="absolute top-3 right-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      Planlagt
                    </div>
                  )}
                  {report.completed && (
                    <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Ferdig
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-light-900 dark:text-neutral-100 mb-3 group-hover:text-capgemini-600 dark:group-hover:text-capgemini-400 transition-colors">
                    {report.title}
                  </h2>
                  <p className="text-slate-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {report.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-capgemini-600 dark:text-capgemini-400 font-medium">
                      {report.date}
                    </span>
                    {report.completed ? (
                      <Link
                        to={report.link}
                        className="inline-flex items-center px-4 py-2 bg-gradient-capgemini-bright text-black rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium"
                      >
                        Les rapport
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <div className="text-slate-400 dark:text-neutral-500 text-sm italic">
                        Kommer snart
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-slate-100 dark:bg-neutral-800 rounded-full px-6 py-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-600 dark:text-neutral-400">Status 1 ferdig</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-neutral-600"></div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span className="text-sm text-slate-600 dark:text-neutral-400">Status 2 planlagt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statusrapporter
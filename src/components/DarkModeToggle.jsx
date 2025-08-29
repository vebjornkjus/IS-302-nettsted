import React from 'react'

const DarkModeToggle = () => {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
<button
  onClick={toggle}
  aria-label="Bytt tema"
  title="Bytt mellom lys og mørk"
  className="w-24 h-9 flex items-center justify-center gap-2 
             rounded-lg border border-light-300 dark:border-neutral-700 
             bg-white/70 dark:bg-neutral-900/70 backdrop-blur 
             hover:scale-105 transition
             text-light-900 dark:text-neutral-100 text-sm"
>
  {theme === 'dark' ? '☀️ Lys' : '🌙 Mørk'}
</button>
  )
}

export default DarkModeToggle
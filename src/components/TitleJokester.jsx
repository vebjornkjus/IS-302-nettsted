import React from 'react'

const TitleJokester = () => {
  React.useEffect(() => {
    const original = document.title
    const onBlur = () => { document.title = 'Tok du trappen i dag?!?' }
    const onFocus = () => { document.title = original }

    window.addEventListener('blur', onBlur)
    window.addEventListener('focus', onFocus)
    return () => {
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('focus', onFocus)
      document.title = original
    }
  }, [])

  return null
}

export default TitleJokester
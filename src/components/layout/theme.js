import React, { useState } from 'react'

export const ThemeContext = React.createContext({
  isDarkMode: true,
  setDarkMode: undefined,
})

export function useDarkMode() {
  const stored =
    typeof window !== 'undefined' && window.localStorage.getItem('prefers-dark')
  const [isDarkMode, setDarkMode] = useState(
    stored == null || stored === 'true'
  )

  const _setDarkMode = _isDarkMode => {
    localStorage.setItem('prefers-dark', JSON.stringify(_isDarkMode))
    if (_isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    setDarkMode(_isDarkMode)
  }

  return [isDarkMode, _setDarkMode]
}

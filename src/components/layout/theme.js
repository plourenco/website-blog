import React, { useEffect, useState } from 'react'

export const ThemeContext = React.createContext({
  isDarkMode: true,
  setDarkMode: undefined,
})

export function useTheme() {
  const [isDarkMode, setDarkMode] = useState(null)

  useEffect(() => {
    // SSR friendly approach to load localStorage
    const stored = localStorage.getItem('prefers-dark')
    setDarkMode(stored == null || stored === 'true')
  }, [])

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

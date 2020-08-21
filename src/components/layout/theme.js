import React, { useEffect, useState } from 'react'

export const ThemeContext = React.createContext({
  isDarkMode: true,
  setDarkMode: undefined,
})

export function useDarkMode(initial) {
  const storage = localStorage.getItem('dark')
  const [isDarkMode, setDarkMode] = useState(
    storage === undefined ? initial : storage === 'true'
  )

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.body.classList.remove('light')
      return
    }
    document.body.className = 'light'
  }, [isDarkMode])

  return [isDarkMode, setDarkMode]
}

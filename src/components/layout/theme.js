import React, { useEffect } from 'react'

export const ThemeContext = React.createContext({
  isDarkMode: true,
  setDarkMode: undefined,
})

export function useThemeEffect(isDarkMode) {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light')
      return
    }
    document.body.className = 'light'
  }, [isDarkMode])
}

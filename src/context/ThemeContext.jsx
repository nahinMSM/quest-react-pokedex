import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const LightTheme = {
  background: '#fff',
  color: '#000',
}

const DarkTheme = {
  background: '#000',
  color: '#fff',
}

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider }
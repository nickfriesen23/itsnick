import { createContext, useContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

// Define our theme with the mustard and medium blue color scheme
const theme = {
  colors: {
    // Primary colors
    mustard: '#FFDB58',
    mediumBlue: '#0057B8',
    
    // Secondary colors
    darkBlue: '#1A1F2E',
    lightGray: '#F5F5F5',
    white: '#FFFFFF',
    
    // Accent colors
    lightMustard: '#FFE78A',
    darkMustard: '#E6C14F',
    lightBlue: '#4D8FD6',
    darkBlue2: '#004494',
    
    // UI colors
    background: '#1A1F2E',
    text: '#FFFFFF',
    textGray: '#A0A0A0',
    cardBg: 'rgba(255, 255, 255, 0.08)'
  },
  
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  
  fontSizes: {
    h1: '4.5rem',
    h2: '2.5rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem'
  },
  
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  
  spacing: {
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem'
  },
  
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%'
  },
  
  transitions: {
    default: 'all 0.3s ease'
  },
  
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
}

// Create the context
const ThemeContext = createContext(null)

// Create a custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme)
  
  // We could add functionality to switch between light/dark themes here
  // For now, we'll just use the default theme
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
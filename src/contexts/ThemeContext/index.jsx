import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const themeDefaultValues = {
  light: false,
  setLight: () => null,
}

export const ThemeContext = createContext(themeDefaultValues)

const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false)
  return (
    <ThemeContext.Provider
      value={{
        light,
        setLight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider

import React from 'react'
import { ThemeProvider } from 'styled-components'
import LeftMenu from '../LeftMenu'
import { GlobalStyles } from './GlobalStyles'
import { darkTheme } from './theme'

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <LeftMenu />
      {children}
    </ThemeProvider>
  )
}

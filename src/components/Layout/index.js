import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LeftMenu from '../LeftMenu'
import { GlobalStyles } from './GlobalStyles'
import { darkTheme } from './theme'

export const Layout = () => {
  const storedUserMenu = useSelector(state => state.app.userMenu)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles showUserMenu={storedUserMenu} />
      <LeftMenu />
      <Outlet />
    </ThemeProvider>
  )
}

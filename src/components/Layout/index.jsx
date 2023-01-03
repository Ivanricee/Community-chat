import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'
import LeftMenu from '../LeftMenu'
import { GlobalStyles } from './GlobalStyles'
import { darkTheme } from './theme'
import { useToggleUserList } from '../../hooks/useToggleUserList'

export const Layout = () => {
  const [showUserList, setShowUserList] = useToggleUserList()

  useEffect(() => {
    const firstRenderMatchMQ = window.matchMedia('(max-width: 1023px)').matches
    if (firstRenderMatchMQ) setShowUserList(false)
    const handleDevice = e => {
      const isMatchingMQ = e.matches
      setShowUserList(!isMatchingMQ)
    }
    window
      .matchMedia('(max-width: 1023px)')
      .addEventListener('change', handleDevice)
    return () => {
      window.removeEventListener('change', handleDevice)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles showUserMenu={showUserList} />
      <LeftMenu />
      <Outlet />
    </ThemeProvider>
  )
}

import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LeftMenu from '../LeftMenu'
import { GlobalStyles } from './GlobalStyles'
import { darkTheme } from './theme'
import { setUserMenu } from '../../store/actions/AppActions'

export const Layout = () => {
    const storedUserMenu = useSelector(state => state.app.userMenu)

    const dispatch = useDispatch()
    useEffect(() => {
        const firstRenderMatchMQ = window.matchMedia(
            '(max-width: 1023px)'
        ).matches
        if (firstRenderMatchMQ) dispatch(setUserMenu(false))
        const handleDevice = e => {
            const isMatchingMQ = e.matches
            dispatch(setUserMenu(!isMatchingMQ))
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
            <GlobalStyles showUserMenu={storedUserMenu} />
            <LeftMenu />
            <Outlet />
        </ThemeProvider>
    )
}

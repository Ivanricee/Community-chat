import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import Main from '../components/Main'
import User from '../components/User'

export const Home = () => {
    const params = useParams()
    const { channel, server } = params

    return (
        <>
            <Helmet>
                <title> Home </title>
                <meta name="description" content="Home del template" />
            </Helmet>
            <Outlet />
            <Main params={{ server, channel }} />
            <User server={server} />
            <Header />
        </>
    )
}

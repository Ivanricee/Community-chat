import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, useParams } from 'react-router-dom'
import { Loader } from '../components/Loader'

const Header = React.lazy(() => import('../components/Header'))
const Main = React.lazy(() => import('../components/Main'))
const User = React.lazy(() => import('../components/User'))

export const Home = () => {
    const params = useParams()
    const { channel, server } = params

    return (
        <>
            <Helmet>
                <title> Home </title>
                <meta name="description" content="Home de discord" />
            </Helmet>
            <Outlet />
            <Suspense
                fallback={
                    <Loader justifyContent="center" alignItems="center" />
                }
            >
                <Main params={{ server, channel }} />
                <User server={server} />
                <Header />
            </Suspense>
        </>
    )
}

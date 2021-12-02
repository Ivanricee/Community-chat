import React from 'react'
import { Helmet } from 'react-helmet'

import TopMenu from '../components/TopMenu'
import LeftMenu from '../components/LeftMenu'
import Channel from '../components/Channel'
import Main from '../components/Main'
import User from '../components/User'

export const Home = () => {
    return (
        <>
            <Helmet>
                <title> Home - Template</title>
                <meta name="description" content="Home del template" />
            </Helmet>
            <TopMenu />
            <LeftMenu />
            <Channel />
            <Main />
            <User />
        </>
    )
}

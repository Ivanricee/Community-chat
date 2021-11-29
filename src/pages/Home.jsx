import React from 'react'
import { Helmet } from 'react-helmet'

import { Title } from '../components/Title'

export const Home = () => {
    return (
        <>
            <Helmet>
                <title> Home - Template</title>
                <meta name="description" content="Home del template" />
            </Helmet>
            <Title text="home" />
        </>
    )
}

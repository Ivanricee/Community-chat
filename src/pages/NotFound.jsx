import React from 'react'
import { Helmet } from 'react-helmet'
import { Title } from '../components/Title'

export const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Not found</title>
                <meta name="description" content="404 Not found" />
            </Helmet>
            <header>
                <Title text="notfound" />
            </header>
        </>
    )
}

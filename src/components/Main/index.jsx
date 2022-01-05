import React from 'react'
import { useParams } from 'react-router-dom'

import { StyledMain } from './styles'

const Main = () => {
    const params = useParams()
    const { channel, server } = params
    return (
        <StyledMain>
            <h1>MAIN</h1>
            <h1>{channel}</h1>
            <h2>{server}</h2>
        </StyledMain>
    )
}

export default Main

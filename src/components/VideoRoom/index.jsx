import React, { useState } from 'react'

import { UserRegister } from './UserRegister'
import { StyledVideoRoom } from './styles'
import { Room } from './Room'

export const VideoRoom = ({ channelTitle }) => {
    const [tokenBody, setTokenBody] = useState({
        token: null,
        identity: '',
        room: '',
    })

    const userRegisterToken = (token, form) => {
        setTokenBody({
            token,
            ...form,
        })
    }
    const userLogout = () => {
        // eslint-disable-next-line no-shadow
        setTokenBody(tokenBody => ({ ...tokenBody, token: null }))
    }
    return (
        <StyledVideoRoom>
            {tokenBody.token === null ? (
                <UserRegister
                    channelTitle={channelTitle}
                    userRegisterToken={userRegisterToken}
                />
            ) : (
                <Room
                    channelTitle={channelTitle}
                    token={tokenBody.token}
                    identity={tokenBody.identity}
                    roomName={tokenBody.room}
                    userLogout={userLogout}
                />
            )}
        </StyledVideoRoom>
    )
}

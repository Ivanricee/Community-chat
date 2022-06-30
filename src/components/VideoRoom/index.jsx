import React, { useState } from 'react'

import { UserRegister } from './UserRegister'
import { StyledVideoRoom } from './styles'
// import { Video } from './Video'
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
                />
                /* <Video
                    channelTitle={channelTitle}
                    token={tokenBody.token}
                    identity={tokenBody.identity}
                    room={tokenBody.room}
                /> */
            )}
        </StyledVideoRoom>
    )
}

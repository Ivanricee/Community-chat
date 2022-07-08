import React, { useState } from 'react'

import { UserRegister } from './UserRegister'
import { StyledVideoRoom } from './styles'
import { Room } from './Room'

export const VideoRoom = ({ channelTitle }) => {
    const [tokenBody, setTokenBody] = useState({
        token: null,
        identity: '',
        room: '',
        message: '',
    })

    const userRegisterToken = (token, form) => {
        setTokenBody({
            token,
            ...form,
        })
    }
    const userLogout = (unmount, message) => {
        // eslint-disable-next-line no-shadow
        if (!unmount)
            setTokenBody(prevTokenBody => ({
                ...prevTokenBody,
                token: null,
                message,
            }))
    }
    const userCloseMessage = () => {
        setTokenBody(prevTokenBody => ({
            ...prevTokenBody,
            message: '',
        }))
    }
    return (
        <StyledVideoRoom>
            {tokenBody.token === null ? (
                <UserRegister
                    message={tokenBody.message}
                    channelTitle={channelTitle}
                    userRegisterToken={userRegisterToken}
                    userCloseMessage={userCloseMessage}
                />
            ) : (
                <Room
                    channelTitle={channelTitle}
                    token={tokenBody.token}
                    roomName={tokenBody.room}
                    userLogout={userLogout}
                />
            )}
        </StyledVideoRoom>
    )
}

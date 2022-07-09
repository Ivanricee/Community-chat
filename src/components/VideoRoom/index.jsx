import React, { useState } from 'react'

import { UserRegister } from './UserRegister'
import { StyledVideoRoom } from './styles'
import { Room } from './Room'
import { useVideoConnect } from '../../hooks/useVideoConnect'

export const VideoRoom = ({ channelTitle }) => {
    const [tokenBody, setTokenBody] = useState({
        token: null,
        identity: '',
        room: '',
        message: '',
    })
    const [room, cleanRoom] = useVideoConnect(
        tokenBody.room,
        tokenBody.token,
        // eslint-disable-next-line no-use-before-define
        userLogout
    )
    function userLogout(unmount, message) {
        // eslint-disable-next-line no-shadow
        if (!unmount) {
            cleanRoom()
            setTokenBody(prevTokenBody => ({
                ...prevTokenBody,
                token: null,
                message,
            }))
        }
    }

    const userRegisterToken = (token, form) => {
        setTokenBody({
            token,
            ...form,
        })
    }
    const userCloseMessage = () => {
        setTokenBody(prevTokenBody => ({
            ...prevTokenBody,
            message: '',
        }))
    }
    return (
        <StyledVideoRoom>
            {console.log('room register ', room)}
            {tokenBody.token === null || room === null ? (
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
                    room={room}
                    // eslint-disable-next-line react/jsx-no-bind
                    userLogout={userLogout}
                />
            )}
        </StyledVideoRoom>
    )
}

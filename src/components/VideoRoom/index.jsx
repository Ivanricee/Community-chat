import React, { Suspense, useState } from 'react'

import { UserRegister } from './UserRegister'
import { StyledVideoRoom } from './styles'
import { Loader } from '../Loader'
import { useVideoConnect } from '../../hooks/useVideoConnect'

const Room = React.lazy(() => import('./Room'))

const VideoRoom = ({ channelTitle }) => {
    const [videoOptions, setVideoOptions] = useState({
        token: null,
        identity: '',
        room: {},
        roomLoading: false,
        message: '',
    })
    const [room, isRoomLoading, cleanRoom] = useVideoConnect(
        videoOptions.room,
        videoOptions.token,
        // eslint-disable-next-line no-use-before-define
        userLogout
    )
    function userLogout(unmount, message) {
        // eslint-disable-next-line no-shadow
        if (!unmount) {
            cleanRoom()
            setVideoOptions(prevVideoOptions => ({
                ...prevVideoOptions,
                token: null,
                message,
            }))
        }
    }

    const userRegisterToken = (token, form) => {
        setVideoOptions({
            token,
            ...form,
        })
    }
    const userCloseMessage = () => {
        setVideoOptions(prevVideoOptions => ({
            ...prevVideoOptions,
            message: '',
        }))
    }

    return (
        <StyledVideoRoom>
            {videoOptions.token === null || room === null ? (
                <UserRegister
                    message={videoOptions.message}
                    channelTitle={channelTitle}
                    userRegisterToken={userRegisterToken}
                    isRoomLoading={isRoomLoading}
                    userCloseMessage={userCloseMessage}
                />
            ) : (
                <Suspense
                    fallback={
                        <Loader justifyContent="center" alignItems="center" />
                    }
                >
                    <Room
                        channelTitle={channelTitle}
                        token={videoOptions.token}
                        roomName={videoOptions.room}
                        room={room}
                        // eslint-disable-next-line react/jsx-no-bind
                        userLogout={userLogout}
                    />
                </Suspense>
            )}
        </StyledVideoRoom>
    )
}
export default VideoRoom

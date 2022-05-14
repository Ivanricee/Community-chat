import React, { useEffect, useState } from 'react'
import { Room } from './Room'

export const VideoRoom = ({ className }) => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        // crear token con nombre de la sala y las keys de twilio
        const handle = async () => {
            const data = await fetch(process.env.REACT_TWILIO_VIDEO, {
                method: 'POST',
                body: JSON.stringify({
                    identity: 'usernameIvnRice',
                    room: 'roomNameRice',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
            setToken(data.token)
            // console.log('setToken', data.token)
        }
        handle()
        // request: conectarse a video a traves de nombre de la sala y token

        // const room =
        // response: obj Room, participant list (change with time)
        // const participants =
    }, [])
    console.log('path videio ', process.env.REACT_APOLO_API_URL)
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <div className={className}>
            <h1>Video</h1>
            {token ? (
                <Room roomName="roomNameRice" token={token} />
            ) : (
                <div>Sin token, mostrar lobby para registrar user</div>
            )}
        </div>
    )
}

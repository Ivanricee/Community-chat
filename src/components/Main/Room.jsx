import React, { useState, useEffect } from 'react'
import Video from 'twilio-video'
import Participant from './Participant'

export const Room = ({ roomName, token }) => {
    const [room, setRoom] = useState(null)
    const [participants, setParticipants] = useState([])

    const remoteParticipants = participants.map(participant => (
        <Participant key={participant.sid} participant={participant} />
    ))
    useEffect(() => {
        const participantConnected = participant => {
            setParticipants(prevParticipants => [
                ...prevParticipants,
                participant,
            ])
        }
        const participantDisconnected = participant => {
            setParticipants(prevParticipants =>
                prevParticipants.filter(p => p !== participant)
            )
        }
        Video.connect(token, {
            name: roomName,
        }).then(responseRoom => {
            setRoom(responseRoom)
            responseRoom.on('participantConnected', participantConnected)
            responseRoom.on('participantDisconnected', participantDisconnected)
            // que hace y para que?
            responseRoom.participants.forEach(participantConnected)
        })
        return () => {
            setRoom(prevRoom => {
                if (
                    prevRoom &&
                    prevRoom.localParticipant.state === 'connected'
                ) {
                    prevRoom.localParticipant.tracks.forEach(
                        trackPublication => {
                            trackPublication.track.stop()
                        }
                    )
                    prevRoom.disconnect()
                    return null
                }
                return prevRoom
            })
        }
    }, [roomName, token])

    return (
        <div className="room">
            <h2>Room: {roomName}</h2>

            <div className="local-participant">
                {room ? (
                    <Participant
                        key={room.localParticipant.sid}
                        participant={room.localParticipant}
                    />
                ) : (
                    ''
                )}
            </div>
            <h3>Remote Participants</h3>
            <div className="remote-participants">{remoteParticipants}</div>
        </div>
    )
}

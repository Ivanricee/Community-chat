/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Video from 'twilio-video'
import { IoMdVideocam } from 'react-icons/io'
import { MdScreenShare } from 'react-icons/md'
import { FaUserPlus, FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa'
import { HiPhoneMissedCall } from 'react-icons/hi'
import { GiSpeaker } from 'react-icons/gi'
import { FiMaximize, FiMinimize } from 'react-icons/fi'
import Participant from './Participant'
import { StyledRoom } from './styles'
import { useFullscreen } from '../../../hooks/useFullscreen'
import { UserInvite } from '../UserInvite'

export const Room = ({ channelTitle, token, identity, roomName }) => {
    const [elementFullsc, isFullscreen, setFullscreen] = useFullscreen()
    const [room, setRoom] = useState(null)
    const [openUserInvite, setOpenUserInvite] = useState(false)
    const [isMPhoneOn, setIsMPhoneOn] = useState(false)
    const [participants, setParticipants] = useState([])

    const remoteParticipants = participants.map(participant => (
        <Participant
            channelTitle={channelTitle}
            token={token}
            identity={identity}
            roomName={roomName}
            key={participant.sid}
            participant={participant}
        />
    ))
    const handleFullscreen = () => {
        setFullscreen()
    }
    const handleUserInvite = () => {
        // sale de fullscreen para abrir el modal
        if (isFullscreen) handleFullscreen()
        setOpenUserInvite(!openUserInvite)
    }
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
        <StyledRoom ref={elementFullsc}>
            <div className="video_settings top">
                <div>
                    <GiSpeaker />
                    <span>{channelTitle}</span>
                </div>
            </div>
            {room && (
                <Participant
                    key={room.localParticipant.sid}
                    participant={room.localParticipant}
                    channelTitle={channelTitle}
                    token={token}
                    identity={identity}
                    roomName={roomName}
                />
            )}

            {remoteParticipants}
            <div className="video_settings down">
                <div>
                    <FaUserPlus onClick={handleUserInvite} />
                </div>
                <div>
                    <IoMdVideocam />
                    <MdScreenShare />
                    {isMPhoneOn ? (
                        <FaMicrophone />
                    ) : (
                        <FaMicrophoneSlash className="isActive" />
                    )}
                    <HiPhoneMissedCall className="call" />
                </div>
                <div>
                    {isFullscreen ? (
                        <FiMinimize onClick={handleFullscreen} />
                    ) : (
                        <FiMaximize onClick={handleFullscreen} />
                    )}
                </div>
                {openUserInvite && <UserInvite channelTitle={channelTitle} />}
            </div>
        </StyledRoom>
    )
}

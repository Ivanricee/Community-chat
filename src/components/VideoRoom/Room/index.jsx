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
import { useVideoGrid } from '../../../hooks/useVideoGrid'

export const Room = ({ channelTitle, token, identity, roomName }) => {
    const [elementFullsc, isFullscreen, setFullscreen] = useFullscreen()
    const [room, setRoom] = useState(null)
    const [openUserInvite, setOpenUserInvite] = useState(false)
    const [isMPhoneOn, setIsMPhoneOn] = useState(false)
    const [participants, setParticipants] = useState([])
    const [itemInlineSize, reloadEl, setReloadEl, elementGrid] = useVideoGrid()

    const remoteParticipants = participants.map(participant => (
        <Participant
            key={participant.sid}
            participant={participant}
            channelTitle={channelTitle}
            token={token}
            identity={identity}
            roomName={roomName}
            itemInlineSize={itemInlineSize}
        />
    ))
    const handleFullscreen = () => {
        setFullscreen()
    }
    const clickUserInvite = event => {
        // sale de fullscreen para abrir el modal
        if (isFullscreen) handleFullscreen()
        setOpenUserInvite(!openUserInvite)
    }
    const keyDownUserInvite = event => {
        if (event.keyCode === 27) {
            // sale de fullscreen para abrir el modal
            if (isFullscreen) handleFullscreen()
            setOpenUserInvite(!openUserInvite)
        }
    }

    // para testear solo comentar useEffect
    useEffect(() => {
        let isVideoConnected = true
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
        const videoDisconnect = roomDisconnect => {
            roomDisconnect.localParticipant.tracks.forEach(trackPublication => {
                trackPublication.track.stop()
            })
            roomDisconnect.disconnect()
            return null
            // eslint-disable-next-line no-else-return
        }

        if (!room && isVideoConnected)
            Video.connect(token, {
                name: roomName,
            }).then(responseRoom => {
                if (isVideoConnected) {
                    responseRoom.on(
                        'participantConnected',
                        participantConnected
                    )
                    responseRoom.on(
                        'participantDisconnected',
                        participantDisconnected
                    )
                    responseRoom.participants.forEach(participantConnected)
                    // console.log('responseRoom mount', responseRoom.localParticipant.state)
                    setRoom(responseRoom)
                } else if (
                    responseRoom &&
                    responseRoom.localParticipant.state === 'connected'
                ) {
                    videoDisconnect(responseRoom)
                }
            })
        return () => {
            isVideoConnected = false

            if (!isVideoConnected)
                if (room && room.localParticipant.state === 'connected') {
                    room.localParticipant.tracks.forEach(trackPublication => {
                        trackPublication.track.stop()
                    })
                    room.disconnect()
                }
        }
    }, [roomName, token, room])
    useEffect(() => {
        if (room) setReloadEl(reloadEl + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [room, setReloadEl])
    return (
        <StyledRoom ref={elementFullsc} itemInlineSize={itemInlineSize}>
            <div className="video_settings top">
                <div>
                    <GiSpeaker />
                    <span>{channelTitle}</span>
                </div>
            </div>
            <div className="video__wrapper-participant" ref={elementGrid}>
                {
                    // poner un loader mientras carga el video
                }
                {room && (
                    <Participant
                        key={room.localParticipant.sid}
                        participant={room.localParticipant}
                        channelTitle={channelTitle}
                        token={token}
                        identity={identity}
                        roomName={roomName}
                        itemInlineSize={itemInlineSize}
                    />
                )}
                {participants.length > 0 ? (
                    remoteParticipants
                ) : (
                    <div className="video_welcome">
                        <div>
                            <div className="video_content">
                                <img
                                    alt="Enviar invitacion para unirse"
                                    src="https://res.cloudinary.com/ivanrice-c/image/upload/v1655315312/discord-clone/icons8-agregar-usuario-masculino-100_bqg1ab.png"
                                />
                                <p>
                                    Todavía no hay nadie. Invita a gente para
                                    que se una a ti!
                                </p>
                                <button type="button">Invitación </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="video_settings down">
                <div>
                    <FaUserPlus onClick={clickUserInvite} />
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
                {openUserInvite && (
                    <UserInvite
                        clickUserInvite={clickUserInvite}
                        keyDownUserInvite={keyDownUserInvite}
                        channelTitle={channelTitle}
                        role="dialog"
                    />
                )}
            </div>
        </StyledRoom>
    )
}

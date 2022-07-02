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

    useEffect(() => {
        // para testear solo comentar useEffect
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
                console.log('unmounted video')
                return prevRoom
            })
        }
    }, [roomName, token])
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
                {remoteParticipants}
                <div className="video_welcome">
                    <div>
                        <div className="video_content">
                            <img
                                alt="Enviar invitacion para unirse"
                                src="https://res.cloudinary.com/ivanrice-c/image/upload/v1655315312/discord-clone/icons8-agregar-usuario-masculino-100_bqg1ab.png"
                            />
                            <p>
                                Todavía no hay nadie. Invita a gente para que se
                                una a ti!
                            </p>
                            <button type="button">Invitación </button>
                        </div>
                    </div>
                </div>
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

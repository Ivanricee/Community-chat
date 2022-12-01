/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Suspense } from 'react'
import { IoMdVideocam } from 'react-icons/io'
import { MdScreenShare } from 'react-icons/md'
import { FaUserPlus, FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa'
import { HiPhoneMissedCall } from 'react-icons/hi'
import { GiSpeaker } from 'react-icons/gi'
import { FiMaximize, FiMinimize } from 'react-icons/fi'
import Participant from './Participant'
import { StyledRoom } from './styles'
import { useFullscreen } from '../../../hooks/useFullscreen'
import { useVideoGrid } from '../../../hooks/useVideoGrid'
import { Loader } from '../../Loader'

const UserInvite = React.lazy(() => import('../UserInvite'))

const Room = ({ channelTitle, roomName, room, userLogout }) => {
  const [elementFullsc, isFullscreen, setFullscreen] = useFullscreen()
  const [openUserInvite, setOpenUserInvite] = useState(false)
  const [isMPhoneOn, setIsMPhoneOn] = useState(true)
  const [participants, setParticipants] = useState([])
  const [itemInlineSize, elementGrid] = useVideoGrid(room)

  const handleFullscreen = () => {
    setFullscreen()
  }
  const clickUserInvite = () => {
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
  const handleEnableAudio = (roomAudio = null) => {
    roomAudio.localParticipant.audioTracks.forEach(track => {
      track.track.enable()
      setIsMPhoneOn(true)
    })
  }
  const handleDisableAudio = (roomAudio = null) => {
    roomAudio.localParticipant.audioTracks.forEach(track => {
      track.track.disable()
      setIsMPhoneOn(false)
    })
  }
  const videoDisconnect = (roomDisconnect, unmount = false) => {
    const message = 'Hasta la proxima'
    userLogout(unmount, message)
    if (roomDisconnect !== null) {
      roomDisconnect.localParticipant.tracks.forEach(trackPublication => {
        trackPublication.track.stop()
        trackPublication.unpublish()
      })
      roomDisconnect.disconnect()
    }
  }
  const remoteParticipants = participants.map(participant => (
    <Participant
      key={participant.sid}
      type="remote"
      participant={participant}
      channelTitle={channelTitle}
      identity={participant.identity}
      roomName={roomName}
      itemInlineSize={itemInlineSize}
    />
  ))

  useEffect(() => {
    let isVideoConnected = true
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant])
    }
    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      )
    }

    if (room && isVideoConnected) {
      room.on('participantConnected', participantConnected)
      room.on('participantDisconnected', participantDisconnected)
      room.participants.forEach(participantConnected)
    }
    return () => {
      isVideoConnected = false

      if (!isVideoConnected) {
        if (room && room.localParticipant.state === 'connected') {
          const unmount = true
          videoDisconnect(room, unmount)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomName, room])

  return (
    <StyledRoom ref={elementFullsc} itemInlineSize={itemInlineSize}>
      <div className="video_settings top">
        <div>
          <GiSpeaker />
          <span>{channelTitle}</span>
        </div>
      </div>
      <div className="video__wrapper-participant" ref={elementGrid}>
        {room && (
          <Participant
            key={room.localParticipant.sid}
            type="local"
            participant={room.localParticipant}
            isMPhoneOn={isMPhoneOn}
            channelTitle={channelTitle}
            identity={room.localParticipant.identity}
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
                  Todavía no hay nadie. Invita a gente para que se una a ti!
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
            <FaMicrophone onClick={() => handleDisableAudio(room)} />
          ) : (
            <FaMicrophoneSlash
              className="isActive"
              onClick={() => handleEnableAudio(room)}
            />
          )}
          <HiPhoneMissedCall
            className="call"
            onClick={() => videoDisconnect(room)}
          />
        </div>
        <div>
          {isFullscreen ? (
            <FiMinimize onClick={handleFullscreen} />
          ) : (
            <FiMaximize onClick={handleFullscreen} />
          )}
        </div>
        {openUserInvite && (
          <Suspense
            fallback={<Loader justifyContent="center" alignItems="center" />}
          >
            <UserInvite
              clickUserInvite={clickUserInvite}
              keyDownUserInvite={keyDownUserInvite}
              channelTitle={channelTitle}
              role="dialog"
            />
          </Suspense>
        )}
      </div>
    </StyledRoom>
  )
}
export default Room

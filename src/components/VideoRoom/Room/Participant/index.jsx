/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react'
import { FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa'
import { StyledParticipant } from './styles'

const Participant = ({
  type,
  participant,
  isMPhoneOn = null,
  identity,
  itemInlineSize,
}) => {
  const [videoTracks, setVideoTracks] = useState([])
  const [audioTracks, setAudioTracks] = useState([])
  const [isAudioRemote, setIsAudioRemote] = useState(true)
  const videoRef = useRef()
  const audioRef = useRef()

  const trackpubsToTracks = trackMap =>
    Array.from(trackMap.values())
      .map(publication => publication.track)
      .filter(track => track !== null)
  const audioTrack = () => {
    let isEnabled
    if (type === 'local') {
      isEnabled = isMPhoneOn
    } else {
      isEnabled = isAudioRemote
    }
    return isEnabled
  }
  useEffect(() => {
    const trackSubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(prevVideoTracks => [...prevVideoTracks, track])
      } else {
        setAudioTracks(prevAudioTracks => [...prevAudioTracks, track])
        track.on('disabled', () => {
          if (isMPhoneOn === null) setIsAudioRemote(false)
        })
        track.on('enabled', () => {
          if (isMPhoneOn === null) setIsAudioRemote(true)
        })
      }
    }

    const trackUnsubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(prevVideoTracks =>
          prevVideoTracks.filter(v => v !== track)
        )
      } else {
        setAudioTracks(prevAudioTracks =>
          prevAudioTracks.filter(a => a !== track)
        )
      }
    }
    setVideoTracks(trackpubsToTracks(participant.videoTracks))
    setAudioTracks(trackpubsToTracks(participant.audioTracks))

    participant.on('trackSubscribed', trackSubscribed)
    participant.on('trackUnsubscribed', trackUnsubscribed)

    return () => {
      setVideoTracks([])
      setAudioTracks([])
      participant.removeAllListeners()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participant])

  useEffect(() => {
    const videoTrack = videoTracks[0]
    if (videoTrack) {
      videoTrack.attach(videoRef.current)
      return () => {
        videoTrack.detach()
      }
    }
  }, [videoTracks])
  useEffect(() => {
    const audioTrackLoc = audioTracks[0]

    if (audioTrackLoc) {
      audioTrackLoc.attach(audioRef.current)
      return () => {
        audioTrackLoc.detach()
      }
    }
  }, [audioTracks])
  return (
    <StyledParticipant itemInlineSize={itemInlineSize}>
      <div>
        <div className="video_participant">
          {videoTracks.length !== 0 ? (
            <>
              <video ref={videoRef} autoPlay />
              <audio ref={audioRef} autoPlay />
            </>
          ) : (
            <div className="video__img-wrapper">
              <div className="video__img">
                {identity.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
          <div className="video__metadata">
            <div>
              <span>{identity}</span>
            </div>
            <div>
              {audioTrack() ? (
                <FaMicrophone />
              ) : (
                <FaMicrophoneSlash className="isActive" />
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledParticipant>
  )
}

export default Participant

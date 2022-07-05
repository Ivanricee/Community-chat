/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import React, { useState, useEffect, useRef } from 'react'
import { FaUserPlus, FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa'
import { StyledParticipant } from './styles'

const Participant = ({ participant, identity, itemInlineSize }) => {
    const [videoTracks, setVideoTracks] = useState([])
    const [audioTracks, setAudioTracks] = useState([])
    const [isMPhoneOn, setIsMPhoneOn] = useState(false)
    const videoRef = useRef()
    const audioRef = useRef()

    const trackpubsToTracks = trackMap => {
        return Array.from(trackMap.values())
            .map(publication => publication.track)
            .filter(track => track !== null)
    }

    useEffect(() => {
        const trackSubscribed = track => {
            if (track.kind === 'video') {
                setVideoTracks(videoTracks => [...videoTracks, track])
            } else {
                setAudioTracks(audioTracks => [...audioTracks, track])
                setIsMPhoneOn(true)
            }
        }

        const trackUnsubscribed = track => {
            if (track.kind === 'video') {
                setVideoTracks(videoTracks =>
                    videoTracks.filter(v => v !== track)
                )
            } else {
                setAudioTracks(audioTracks =>
                    audioTracks.filter(a => a !== track)
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
        const audioTrack = audioTracks[0]
        if (audioTrack) {
            audioTrack.attach(videoRef.current)
            return () => {
                audioTrack.detach()
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
                            <audio ref={audioRef} autoPlay muted />
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
                            {isMPhoneOn ? (
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
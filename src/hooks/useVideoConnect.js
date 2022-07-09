import { useEffect, useState } from 'react'
import Video from 'twilio-video'

export const useVideoConnect = (roomName, token, userLogout) => {
  const [room, setRoom] = useState(null)
  const cleanRoom = () => {
    setRoom(null)
  }
  useEffect(() => {
    let isVideoConnected = true
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

    if (!room && isVideoConnected && token !== null)
      Video.connect(token, {
        name: roomName,
      })
        .then(responseRoom => {
          if (isVideoConnected && responseRoom) {
            setRoom(responseRoom)
          } else if (
            responseRoom &&
            responseRoom.localParticipant.state === 'connected'
          ) {
            const unmount = true
            videoDisconnect(responseRoom, unmount)
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          const unmount = false
          userLogout(unmount, error.message)
        })

    return () => {
      isVideoConnected = false
      if (!isVideoConnected)
        if (room && room.localParticipant.state === 'connected') {
          const unmount = true
          videoDisconnect(room, unmount)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, room])
  return [room, cleanRoom]
}

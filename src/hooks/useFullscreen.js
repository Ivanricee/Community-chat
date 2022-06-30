import { useEffect, useRef, useState } from 'react'
import { getFullscreen, detectFullScreen, deactivateFullscreen } from '../utils'

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const elementRef = useRef(null)

  // detecta si hay un elemento en fullscreen, sino realiza fullscreen mode
  const setFullscreen = async () => {
    const isFullscreenDetected = detectFullScreen()
    if (elementRef.current === null) return
    await getFullscreen(elementRef.current)
    if (isFullscreenDetected !== undefined) await deactivateFullscreen()
  }
  // cuando detecte cualqueir cambio pondra un estado local
  const handleFullscreenChange = () => {
    const isFullscreenDetected = detectFullScreen()
    if (elementRef.current === null) return
    if (isFullscreenDetected) {
      setIsFullscreen(true)
    } else {
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    document.onfullscreenchange = handleFullscreenChange
    // eslint-disable-next-line no-return-assign
    return () => (document.onfullscreenchange = null)
  })

  return [elementRef, isFullscreen, setFullscreen]
}

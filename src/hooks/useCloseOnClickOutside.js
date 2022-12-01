import { useEffect, useRef, useState } from 'react'

export const useCloseOnClickOutside = () => {
  const refClickElement = useRef(null)
  const refIsFirst = useRef(true)
  const [isOutside, setIsOutside] = useState(false)
  useEffect(() => {
    const handleClickOutside = e => {
      if (refClickElement.current && !refIsFirst.current) {
        const isOutsideElement = !refClickElement.current.contains(e.target)
        if (isOutsideElement) setIsOutside(isOutsideElement)
      }
      if (refIsFirst.current) refIsFirst.current = false
    }
    const keyDownClose = event => {
      if (event.keyCode === 27 && !refIsFirst.current) handleClickOutside(event)
      if (refIsFirst.current) refIsFirst.current = false
    }
    document.addEventListener('click', handleClickOutside, false)
    document.addEventListener('keydown', keyDownClose, false)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', keyDownClose)
    }
  }, [])

  return [refClickElement, isOutside]
}

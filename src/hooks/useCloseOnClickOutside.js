import { useEffect, useRef, useState } from 'react'

export const useCloseOnClickOutside = () => {
  const refClickElement = useRef(null)
  const [isOutside, setIsOutside] = useState(false)
  useEffect(() => {
    const handleClickOutside = e => {
      if (refClickElement.current) {
        const isOutsideElement = !refClickElement.current.contains(e.target)
        if (isOutsideElement) setIsOutside(isOutsideElement)
      }
    }
    const keyDownClose = event => {
      if (event.keyCode === 27) handleClickOutside(event)
    }
    document.addEventListener('click', handleClickOutside, false)
    document.addEventListener('keydown', keyDownClose, false)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', keyDownClose)
    }
  }, [isOutside])

  return [refClickElement, isOutside]
}

import { useState, useEffect, useRef } from 'react'
import { debounce, renderGrid } from '../utils'

const setGrid = elementRef => {
  if (elementRef.current === null) return null
  const totalItems = elementRef.current.children.length
  const containerInline = elementRef.current.offsetWidth
  const containerBlock = elementRef.current.offsetHeight
  const itemGrid = renderGrid(totalItems, containerInline, containerBlock)

  return itemGrid.itemInlineSize
}
export function useVideoGrid() {
  const [itemInlineSize, setItemInlineSize] = useState(null)
  const [reloadEl, setReloadEl] = useState(1)
  const elementRef = useRef(null)

  useEffect(() => {
    let isMounted = true
    const debounceFunction = debounce(() => {
      if (isMounted) setItemInlineSize(setGrid(elementRef))
    }, 300)

    window.addEventListener('resize', debounceFunction)
    return () => {
      isMounted = false
      window.removeEventListener('resize', debounceFunction)
    }
  }, [elementRef])

  useEffect(() => {
    setItemInlineSize(setGrid(elementRef))
  }, [elementRef, reloadEl])

  return [itemInlineSize, reloadEl, setReloadEl, elementRef]
}

import React, { useEffect } from 'react'
import { useCloseOnClickOutside } from '../../../hooks/useCloseOnClickOutside'
import { StyledDialogImg } from './styles'

const ImageComment = ({ isInline, inline, block, img, handleClickClose }) => {
  const [refClickElement, isOutside] = useCloseOnClickOutside()
  useEffect(() => {
    if (isOutside) handleClickClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOutside])
  return (
    <StyledDialogImg isInline={isInline} inline={inline} block={block}>
      <img ref={refClickElement} src={img} alt="" />
    </StyledDialogImg>
  )
}

export default ImageComment

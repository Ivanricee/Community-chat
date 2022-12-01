import React from 'react'
import { StyledImgContainer } from './styles'

export const ImgContainer = ({
  img,
  alt,
  content,
  inlineSize,
  blockSize,
  translateX,
  display,
  greenBullet,
  borderColor,
}) => {
  return (
    <StyledImgContainer
      content={content}
      inlineSize={inlineSize}
      blockSize={blockSize}
      translateX={translateX}
      display={display}
      greenBullet={greenBullet}
      borderColor={borderColor}
    >
      <div className="item-cover">
        <img src={img} alt={alt} />
      </div>
    </StyledImgContainer>
  )
}

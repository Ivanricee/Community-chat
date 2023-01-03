import React from 'react'
import { ImgContainer } from '../ImgContainer'

export const ItemWrapper = ({
  className,
  img,
  alt,
  notification,
  borderColor,
}) => {
  return (
    <div className={className}>
      <ImgContainer
        img={img}
        alt={alt}
        content={notification.content}
        inlineSize={notification.inlineSize}
        translateX={notification.translateX}
        display={notification.display}
        borderColor={borderColor}
      />
    </div>
  )
}

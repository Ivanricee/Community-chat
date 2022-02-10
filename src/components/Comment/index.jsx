import React, { useRef, useState } from 'react'
import { StyledComment, StyledMediaImg, StyledDialogImg } from './style'
import { ImgContainer } from '../ImgContainer'

const handleImgDimension = (width, height) => {
    let isInline = true
    let widthSize = 25
    let heightSize = 19
    if (height >= width) {
        isInline = false
    }
    if (width < 400) {
        widthSize = width / 16
    }
    if (height < 304) {
        heightSize = height / 16
    }
    return { isInline, widthSize, heightSize }
}
const handleShowDialog = imgDimensionSize => {
    const widthSize =
        imgDimensionSize.widthSize === 25 ? 37.5 : imgDimensionSize.widthSize
    const heightSize =
        imgDimensionSize.heightSize === 19 ? 35 : imgDimensionSize.heightSize
    return {
        isOpen: true,
        isInline: imgDimensionSize.isInline,
        widthSize,
        heightSize,
    }
}
export const Comment = ({ img, texto, react, nombre, date, userImg, role }) => {
    console.log(react)
    const imgRef = useRef(null)
    const [imgDimensionSize, setImgDimensionSize] = useState({
        isInline: true,
        widthSize: 25,
        heightSize: 19,
    })
    const [showDialogImg, setShowDialogImg] = useState({
        isOpen: false,
        isInline: true,
        widthSize: 37.5,
        heightSize: 31,
    })
    console.log('valor de show img', showDialogImg)
    return (
        <StyledComment role={role}>
            <div className="comment__wrapper">
                <div className="comment__perfil-wrapper">
                    <div className="comment__perfil">
                        <ImgContainer display="none" img={userImg} />
                    </div>
                </div>

                <div className="comment__message-content">
                    <div className="comment__user-date">
                        <p type="button">{nombre}</p>
                        <span>
                            <small>{date}</small>
                        </span>
                    </div>
                    <div className="comment__message">{texto}</div>
                    {img !== '' && (
                        <StyledMediaImg
                            isInline={imgDimensionSize.isInline}
                            inline={imgDimensionSize.widthSize}
                            block={imgDimensionSize.heightSize}
                        >
                            <img
                                ref={imgRef}
                                src={img}
                                alt=""
                                onClick={() =>
                                    setShowDialogImg(
                                        handleShowDialog(imgDimensionSize)
                                    )
                                }
                                role="presentation"
                                onLoad={() =>
                                    setImgDimensionSize(
                                        handleImgDimension(
                                            imgRef.current.naturalWidth,
                                            imgRef.current.naturalHeight
                                        )
                                    )
                                }
                            />
                        </StyledMediaImg>
                    )}
                </div>
            </div>
            {showDialogImg.isOpen && (
                <StyledDialogImg
                    onClick={() =>
                        setShowDialogImg({
                            ...showDialogImg,
                            isOpen: false,
                        })
                    }
                    isInline={showDialogImg.isInline}
                    inline={showDialogImg.widthSize}
                    block={showDialogImg.heightSize}
                >
                    {imgRef.current !== null && <img src={img} alt="" />}
                </StyledDialogImg>
            )}
        </StyledComment>
    )
}

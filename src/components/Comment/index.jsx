/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react'
import { BsFillReplyFill, BsThreeDots } from 'react-icons/bs'
import {
    StyledComment,
    StyledMediaImg,
    StyledDialogImg,
    StyledUrl,
    StyledReact,
    StyledDate,
} from './style'
import { ImgContainer } from '../ImgContainer'
import { useUsers } from '../../graphql/custom-hook'

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
const styleTextMarks = (texto, data) => {
    const regex = /@.[a-zA-Z\u00C0-\u00FF\s]{1,32}/gi
    const usersRaw = texto.match(regex)
    if (usersRaw !== null) {
        let usersFiltered = []
        // let regexFilter = ""
        if (data) {
            for (let j = 0; j < usersRaw.length; j += 1) {
                const matchedusersk = data.getUsers.filter(user => {
                    // eslint-disable-next-line prefer-regex-literals
                    const regexMatch = new RegExp(`@${user.name}`, 'i').test(
                        usersRaw[j]
                    )
                    return regexMatch
                })

                if (matchedusersk.length === 1) {
                    usersFiltered = [
                        ...usersFiltered,
                        `@${matchedusersk[0].name}`,
                    ]
                }
            }

            // Nuevo regex para los usuarios encontrados
            const regexFilter = usersFiltered.join('|')
            const regexDos = new RegExp(`^${regexFilter}`, 'gi')
            const usersInText = texto.match(regexDos)
            const textArraySplit = texto.split(regexDos)

            return textArraySplit.map((mark, i) => (
                <React.Fragment key={i}>
                    {mark}
                    {i + 1 <= usersInText.length && (
                        <span key={i}>{usersInText[i]}</span>
                    )}
                </React.Fragment>
            ))
        }
    } else {
        return texto
    }

    return 'loading comment..'
}
const dateFormatted = (date, type) => {
    let options = {}
    if (type === 'long') {
        options = { year: 'numeric', month: 'long', day: 'numeric' }
    } else {
        options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    }
    return date.toLocaleDateString(navigator.language, options)
}
export const Comment = ({
    img,
    url,
    texto,
    react,
    nombre,
    date: { dateFormat, showLine },
    userImg,
    role,
}) => {
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

    const { data } = useUsers()
    return (
        <>
            {showLine && (
                <StyledDate>
                    <small>{dateFormatted(dateFormat, 'long')}</small>
                </StyledDate>
            )}

            <StyledComment role={role}>
                <div className="comment__submenu">
                    <div>
                        <i className="ico-add ico-select" />
                        <BsFillReplyFill />
                        <BsThreeDots />
                    </div>
                </div>
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
                                <small>
                                    {dateFormatted(dateFormat, 'short')}
                                </small>
                            </span>
                        </div>
                        <div className="comment__message">
                            {styleTextMarks(texto, data)}
                        </div>

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
                        {url !== '' && (
                            <StyledUrl>
                                <a href={url} target="_blank" rel="noreferrer">
                                    {url}
                                </a>
                            </StyledUrl>
                        )}
                        {react.length >= 0 && (
                            <StyledReact>
                                {react.map(emojis => {
                                    return (
                                        <div key={emojis.unicode}>
                                            {emojis.emoji}
                                            <span>{emojis.count}</span>
                                        </div>
                                    )
                                })}
                                <i className="ico-add ico-select" />
                            </StyledReact>
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
        </>
    )
}

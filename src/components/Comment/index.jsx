/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react'
import { BsFillReplyFill, BsThreeDots, BsFillImageFill } from 'react-icons/bs'
import { Loader } from '../Loader'
import {
  StyledComment,
  StyledMediaImg,
  StyledUrl,
  StyledReact,
  StyledDate,
  StyledReply,
} from './style'
import { ImgContainer } from '../ImgContainer'
import { useUsers } from '../../graphql/custom-hook'
import ImageComment from './ImageComment'
import {
  resizeOnLoadImg,
  resizeFullScreenImg,
  dateFormatted,
} from '../../utils'

const styleTextMarks = (texto, userListData, replyClass) => {
  const regex = /@.[a-zA-Z\u00C0-\u00FF\s]{1,32}/gi
  const usersRaw = texto.match(regex)
  if (usersRaw) {
    if (userListData) {
      const usersFiltered = []
      usersRaw.forEach(userRaw => {
        const usersFound = userListData.getUsers.filter(user =>
          new RegExp(`@${user.name}`, 'i').test(userRaw)
        )
        if (usersFound.length) usersFiltered.push(`@${usersFound[0].name}`)
      })
      // Nuevo regex para los usuarios encontrados
      const regexFilter = usersFiltered.join('|')
      const regexDos = new RegExp(`^${regexFilter}`, 'gi')
      const textArraySplit = texto.split(regexDos)

      const usersInText = texto.match(regexDos)
      console.log({
        usersFiltered,
        regexFilter,
        regexDos,
        usersInText,
        textArraySplit,
      })

      return textArraySplit.map((mark, i) => (
        <React.Fragment key={i}>
          {mark}
          {i + 1 <= usersInText.length && (
            <span className={replyClass} key={i}>
              {usersInText[i]}
            </span>
          )}
        </React.Fragment>
      ))
    }
  } else {
    return texto
  }

  return <Loader justifyContent="start" alignItems="center" />
}

export const Comment = ({
  img,
  url,
  texto,
  react,
  reply,
  nombre,
  date: { dateFormat, showLine },
  userImg,
  roleNo,
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

  const { data: userListData } = useUsers()
  const handleClickClose = () => {
    setShowDialogImg(prevShowDialogImg => ({
      ...prevShowDialogImg,
      isOpen: false,
    }))
  }
  const loadImg = () => {
    return (
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
            setShowDialogImg(resizeFullScreenImg(imgDimensionSize))
          }
          role="presentation"
          onLoad={() =>
            setImgDimensionSize(
              resizeOnLoadImg(
                imgRef.current.naturalWidth,
                imgRef.current.naturalHeight
              )
            )
          }
        />
      </StyledMediaImg>
    )
  }
  const replyComment = () => {
    return (
      <StyledReply role={reply.role}>
        <div className="comment__message">
          <div>
            <p className="comment__reply-user">{reply.nombre}</p>
            {styleTextMarks(reply.texto, userListData, 'reply')}
          </div>
          {reply.img && (
            <div className="comment__reply-img">
              <BsFillImageFill />
            </div>
          )}
        </div>
      </StyledReply>
    )
  }
  return (
    <>
      {showLine && (
        <StyledDate>
          <small>{dateFormatted(dateFormat, 'long')}</small>
        </StyledDate>
      )}

      <StyledComment colorRole={roleNo}>
        <div className="comment__submenu">
          <div>
            <i className="ico-add ico-select" />
            <BsFillReplyFill />
            <BsThreeDots />
          </div>
        </div>
        {reply._id && replyComment()}
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
                <small>{dateFormatted(dateFormat, 'numeric')}</small>
              </span>
            </div>
            <div className="comment__message">
              {styleTextMarks(texto, userListData)}
            </div>

            {img !== '' && loadImg()}
            {url !== '' && (
              <StyledUrl>
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
              </StyledUrl>
            )}
            {react.length >= 0 && (
              <StyledReact>
                {react.map(emojis => (
                  <div key={emojis.unicode}>
                    {emojis.emoji}
                    <span>{emojis.count}</span>
                  </div>
                ))}
                <i className="ico-add ico-select" />
              </StyledReact>
            )}
          </div>
        </div>
        {showDialogImg.isOpen && (
          <ImageComment
            isInline={showDialogImg.isInline}
            inline={showDialogImg.widthSize}
            block={showDialogImg.heightSize}
            img={img}
            handleClickClose={handleClickClose}
          />
        )}
      </StyledComment>
    </>
  )
}

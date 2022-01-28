import React from 'react'
import { StyledComment } from './style'
import { ImgContainer } from '../ImgContainer'

export const Comment = ({ img, texto, react }) => {
    console.log(img)

    console.log(react)

    return (
        <StyledComment>
            <div className="comment__wrapper">
                <div className="comment__perfil-wrapper">
                    <div className="comment__perfil">
                        <ImgContainer
                            display="none"
                            img="https://res.cloudinary.com/ivanrice-c/image/upload/f_auto,q_auto:good/v1642023517/discord-clone/server/ivnrice_logo_grzmki.png"
                        />
                    </div>
                </div>

                <div className="comment__message-content">
                    <div className="comment__user-date">
                        <p type="button">Usuario</p>
                        <span>
                            <small>hoy a las 10:05</small>
                        </span>
                    </div>
                    <div className="comment__message">{texto}</div>
                </div>
            </div>
        </StyledComment>
    )
}

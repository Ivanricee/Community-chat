import React, { useState, useCallback /* , useRef */ } from 'react'
import { ImgContainer } from '../ImgContainer'

export const UserProfileItem = ({
    className,
    StyledUserDetail,
    user,
    userRoleName,
    /* handleCloseDetailUser, */
}) => {
    const [insetBlockStart, setInsetBlockStart] = useState({
        blockStart: 0,
        showDetail: false,
    })
    const [closeUserDetail, setCloseUserDetail] = useState(null)
    const handleUserItemClick = useCallback(
        e => {
            const minBlockSize = 376
            const remSize = 16
            const itemTopDistance = e.target.getBoundingClientRect().top
            const totalBlockSize = minBlockSize + itemTopDistance
            const { body } = document
            const html = document.documentElement
            let detailData = {}
            const documentBlockSize = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            )

            if (totalBlockSize > documentBlockSize) {
                detailData = { blockStart: 0, showDetail: true }
            } else {
                detailData = {
                    blockStart: itemTopDistance / remSize,
                    showDetail: true,
                }
            }
            setInsetBlockStart({
                ...insetBlockStart,
                ...detailData,
            })
            if (closeUserDetail) setCloseUserDetail(false)
        },

        [closeUserDetail, insetBlockStart]
    )

    const handleCloseDetailClick = e => {
        e.stopPropagation()
        // handleCloseDetailUser()
    }
    return (
        <div
            role="button"
            tabIndex={0}
            className={className}
            onKeyDown={e => {
                e.stopPropagation()
                handleUserItemClick(e)
            }}
            onFocus={e => {
                e.stopPropagation()
                handleUserItemClick(e)
            }}
        >
            <StyledUserDetail
                displayShow={insetBlockStart.showDetail}
                insetBlockStart={insetBlockStart.blockStart}
                role="button"
                roleUser={user.role}
                tabIndex={-1}
                onFocus={e => {
                    e.stopPropagation()
                }}
            >
                <button onClick={handleCloseDetailClick} type="button">
                    boton
                </button>
                <header>
                    <div className="user__detail-header-banner" />
                    <div className="user__detail-header-info">
                        <div className="user__detail-wrapper-img">
                            <ImgContainer
                                img={user.img}
                                greenBullet="2"
                                content=""
                                inlineSize={1.1}
                                blockSize={1.1}
                                borderColor="black"
                            />
                        </div>
                        <h1>
                            {user.name}

                            <span>#{user.hash}</span>
                        </h1>
                        <hr />
                    </div>
                </header>
                <section>
                    <h2>ROL</h2>
                    <div className="user__detail-roles">
                        <span>{userRoleName}</span>
                    </div>
                    <h2>NOTA</h2>
                    <div
                        className="user__detail-note-wrapper"
                        role="button"
                        tabIndex="-1"
                        htmlFor="iNotes"
                    >
                        <input
                            id="iNotes"
                            type="text"
                            placeholder="Haz clic para añadir una nota"
                        />
                    </div>
                </section>
                <footer>
                    <input
                        type="text"
                        placeholder={`Enviar mensaje a @${user.userName}`}
                    />
                </footer>
            </StyledUserDetail>
            <div className="user__image-wrapper" tabIndex="-1">
                <ImgContainer
                    img={user.img}
                    greenBullet="1"
                    content=""
                    inlineSize={0.58}
                    blockSize={0.58}
                    borderColor="black2"
                />
            </div>
            <span>{user.name}</span>
        </div>
    )
}

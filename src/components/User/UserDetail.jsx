import React from 'react'

import { ImgContainer } from '../ImgContainer'

export const UserDetail = ({
    className,
    img,
    userName,
    userHash,
    userRoleName,
}) => {
    return (
        <div
            role="button"
            tabIndex={-1}
            className={className}
            onClick={e => {
                e.stopPropagation()
            }}
            onKeyDown={e => {
                e.stopPropagation()
            }}
        >
            <header>
                <div className="user__detail-header-banner" />
                <div className="user__detail-header-info">
                    <div className="user__detail-wrapper-img">
                        <ImgContainer
                            img={img}
                            greenBullet="2"
                            content=""
                            inlineSize={1.1}
                            blockSize={1.1}
                            borderColor="black"
                        />
                    </div>
                    <h1>
                        {userName}
                        <span>#{userHash}</span>
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
                    placeholder={`Enviar mensaje a @${userName}`}
                />
            </footer>
        </div>
    )
}

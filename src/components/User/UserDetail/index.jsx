import React, { useRef, useEffect } from 'react'
import { StyledUserDetail } from './styles'
import { ImgContainer } from '../../ImgContainer'

export const UserDetail = ({
    img,
    userName,
    userHash,
    userRoleName,
    displayShow,
    insetBlockStart,
    insetBlockEnd,
    userItemModalOpen,
    onKeyDownCloseModal,
    handleOutsideClickClose,
}) => {
    const refElement = useRef(null)
    useEffect(() => {
        refElement.current.focus()
    }, [])
    useEffect(() => {
        const handleOutsideClick = e => {
            if (refElement.current) {
                const isOutside = !refElement.current.contains(e.target)
                if (isOutside) handleOutsideClickClose()
            }
        }
        document.addEventListener('click', handleOutsideClick, false)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledUserDetail
            ref={refElement}
            role="dialog"
            tabIndex={-1}
            aria-label="Info user"
            aria-modal="true"
            displayShow={displayShow}
            insetBlockStart={insetBlockStart}
            insetBlockEnd={insetBlockEnd}
            userItemModalOpen={userItemModalOpen}
            onKeyDown={onKeyDownCloseModal}
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
        </StyledUserDetail>
    )
}

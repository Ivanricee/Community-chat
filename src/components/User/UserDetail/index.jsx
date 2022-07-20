import React, { useEffect } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { StyledUserDetail } from './styles'
import { ImgContainer } from '../../ImgContainer'
import { useCloseOnClickOutside } from '../../../hooks/useCloseOnClickOutside'

const UserDetail = ({
    img,
    userName,
    userHash,
    userRoleName,
    displayShow,
    insetBlockStart,
    insetBlockEnd,
    userItemModalOpen,
    onKeyDownCloseModal,
    handleClickClose,
}) => {
    const [refClickElement, isOutside] = useCloseOnClickOutside()
    useEffect(() => {
        refClickElement.current.focus()
    }, [refClickElement])

    useEffect(() => {
        if (isOutside) handleClickClose()
    }, [handleClickClose, isOutside])

    return (
        <StyledUserDetail
            ref={refClickElement}
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
                <div className="user__detail-header-banner">
                    <button
                        type="button"
                        aria-label="Close Modal"
                        onClick={handleClickClose}
                        tabIndex="0"
                    >
                        <IoCloseSharp />
                    </button>
                </div>
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
export default UserDetail

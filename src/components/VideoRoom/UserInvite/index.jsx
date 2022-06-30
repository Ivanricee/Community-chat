import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { GiSpeaker } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { StyledUserInvite } from './styles'
import { Portal } from '../../Portal'
import { ImgContainer } from '../../ImgContainer'
import { debounce } from '../../../utils'

export const UserInvite = ({ channelTitle }) => {
    const [clipbboard, setClipbboard] = useState(false)
    const storedServerTitle = useSelector(state => state.app.server)
    const { location } = window

    const handleClipboard = e => {
        e.preventDefault()
        if (!clipbboard) setClipbboard(true)
        const debFunct = debounce(() => {
            const inputText = e.target[0].value
            navigator.clipboard.writeText(inputText).then(
                () => {
                    setClipbboard(false)
                },
                () => {
                    setClipbboard(null)
                }
            )
        }, 700)
        if (!clipbboard) debFunct()
    }

    return (
        <Portal>
            <StyledUserInvite clipbboard={clipbboard}>
                <div>
                    <header>
                        <h1>Invitar amigos a {storedServerTitle}</h1>
                        <IoCloseSharp />
                    </header>
                    <main>
                        <div className="invite__channel">
                            <GiSpeaker />
                            <h2>{channelTitle}</h2>
                        </div>
                        <div className="invite__input-search">
                            <input type="text" />
                            <BsSearch />
                        </div>
                        <hr />
                        <div className="invite__user-found">
                            <div>
                                <ImgContainer
                                    display="none"
                                    img="https://randomuser.me/api/portraits/men/71.jpg"
                                />
                                <p>rudolphhop</p>
                            </div>
                            <button type="button">Invitar</button>
                        </div>
                        <hr />
                        <div className="invite__copy-clipboard">
                            <h2>
                                O ENVÍA UN ENLACE DE INITACIÓN AL SERVIDOR DE UN
                                AMIGO
                            </h2>
                            <div>
                                <form onSubmit={e => handleClipboard(e)}>
                                    <input
                                        type="text"
                                        placeholder={location}
                                        value={location}
                                        readOnly
                                    />
                                    <button type="submit">
                                        {clipbboard ? 'copiando ' : `Copiar`}
                                    </button>
                                </form>
                            </div>
                            <small>
                                Tu enlace de invitacion expira en 7 dias.{' '}
                                <span> Editar enlace de invitación</span>
                            </small>
                        </div>
                    </main>
                    <footer>
                        <div>
                            <p>
                                Añade una imagen a tu enlace de invitacion con
                                mejoras
                            </p>
                        </div>
                        <div>
                            <span>Más información</span>
                        </div>
                    </footer>
                </div>
            </StyledUserInvite>
        </Portal>
    )
}

import React, { useState, useRef, useEffect } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { GiSpeaker } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { StyledUserInvite } from './styles'
import { Portal } from '../../Portal'
import { ImgContainer } from '../../ImgContainer'
import { debounce } from '../../../utils'

const UserInvite = ({
  channelTitle,
  clickUserInvite,
  role,
  keyDownUserInvite,
}) => {
  const [clipbboard, setClipbboard] = useState(false)
  const { server } = useParams()
  const storedServerTitle = useSelector(state => state.app.server)
  const serverTitle = () => storedServerTitle[server] || 'No title'
  const closeBtnRef = useRef(null)
  const modalBox = useRef(null)
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
  const closeUserInvite = event => {
    clickUserInvite(event)
  }
  const keyDowncloseUserInvite = event => {
    keyDownUserInvite(event)
  }
  useEffect(() => {
    closeBtnRef.current.focus()
  }, [])
  useEffect(() => {
    const handleOutsideClick = e => {
      if (modalBox.current) {
        const isOutside = !modalBox.current.contains(e.target)
        if (isOutside) closeUserInvite()
      }
    }
    document.addEventListener('click', handleOutsideClick, false)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Portal>
      <StyledUserInvite
        clipbboard={clipbboard}
        aria-label="Invitar usuarios"
        tabIndex="-1"
        ref={closeBtnRef}
        onKeyDown={keyDowncloseUserInvite}
      >
        <aside
          tabIndex="-1"
          aria-label="dialog"
          aria-modal="true"
          role={role}
          ref={modalBox}
        >
          <header role="heading" aria-level="1">
            <h1>Invitar amigos a {serverTitle()}</h1>
            <button
              type="button"
              aria-label="Close Modal"
              onClick={closeUserInvite}
              tabIndex="0"
            >
              <IoCloseSharp />
            </button>
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
              <h2>O ENVÍA UN ENLACE DE INITACIÓN AL SERVIDOR DE UN AMIGO</h2>
              <div>
                <form onSubmit={e => handleClipboard(e)}>
                  <input
                    type="text"
                    placeholder={location}
                    value={location}
                    readOnly
                  />
                  <button type="submit">
                    {clipbboard ? 'copiando ' : 'Copiar'}
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
              <p>Añade una imagen a tu enlace de invitacion con mejoras</p>
            </div>
            <div>
              <span>Más información</span>
            </div>
          </footer>
        </aside>
      </StyledUserInvite>
    </Portal>
  )
}
export default UserInvite

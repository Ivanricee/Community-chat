import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { GiSpeaker } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner'
import { StyledUserRegister } from './styles'
import { getTwilioToken } from '../../utils'

export const UserRegister = ({
    userRegisterToken,
    channelTitle,
    message,
    isRoomLoading,
    userCloseMessage,
}) => {
    const location = useLocation()
    const storedServerTitle = useSelector(state => state.app.server)
    const [form, setForm] = useState({
        identity: 'Nombre de usuario',
        room: `${storedServerTitle}${channelTitle}${location.pathname}`,
    })

    const handleUserRegister = async e => {
        e.preventDefault()
        const submitButton = Array.from(e.target).find(
            elemnt => elemnt.type === 'submit'
        )
        submitButton.disabled = true
        try {
            const token = await getTwilioToken(form.identity, form.room)
            submitButton.disabled = true
            userRegisterToken(token, form)
        } catch (err) {
            throw new Error('err: ', err)
        }
    }
    const handleUserChange = e => {
        // eslint-disable-next-line no-shadow
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <StyledUserRegister message={message}>
            <section className="register__wrapper" aria-label="register form">
                <div className="register__message">
                    <small>{message}</small>
                    <button type="button" onClick={userCloseMessage}>
                        <IoCloseSharp />
                    </button>
                </div>
                <div>
                    <header>
                        <h1>Registro en {storedServerTitle}</h1>
                    </header>
                    <main>
                        <div className="register__channel">
                            <GiSpeaker />
                            <h2>{channelTitle}</h2>
                        </div>
                        {isRoomLoading ? (
                            <div className="register_loading-room">
                                <ThreeDots
                                    color="#dfe3e0"
                                    height={60}
                                    width={70}
                                    ariaLabel="Loading Room"
                                />
                            </div>
                        ) : (
                            <form onSubmit={handleUserRegister}>
                                <div className="register__input-search">
                                    <input
                                        name="identity"
                                        placeholder={
                                            form.identity === ''
                                                ? 'Nombre de usuario'
                                                : form.identity
                                        }
                                        type="text"
                                        pattern="[a-zA-Z0-9_&-]+([ ]?[a-zA-Z0-9_&-]+)*"
                                        minLength="3"
                                        maxLength="20"
                                        required
                                        onChange={handleUserChange}
                                    />
                                    <span>
                                        <BsSearch />
                                    </span>
                                </div>
                                <hr />
                                <div className="register__user-found">
                                    <div>
                                        <div className="video__img">
                                            {form.identity
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>
                                        <p>{form.identity}</p>
                                    </div>
                                    <button type="submit">Entrar</button>
                                </div>
                            </form>
                        )}
                        <hr />
                    </main>
                </div>
            </section>
        </StyledUserRegister>
    )
}

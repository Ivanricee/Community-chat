import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { GiSpeaker } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { StyledUserRegister } from './styles'
import { getTwilioToken } from '../../utils'

export const UserRegister = ({ userRegisterToken, channelTitle }) => {
    const location = useLocation()
    const storedServerTitle = useSelector(state => state.app.server)
    const [form, setForm] = useState({
        identity: 'Nombre de usuario',
        room: `${storedServerTitle}${channelTitle}${location.pathname}`,
    })

    const handleUserRegister = async e => {
        e.preventDefault()
        try {
            const token = await getTwilioToken(form.identity, form.room)
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
        <StyledUserRegister>
            <div>
                <header>
                    <h1>Registro en {storedServerTitle}</h1>
                </header>
                <main>
                    <div className="register__channel">
                        <GiSpeaker />
                        <h2>{channelTitle}</h2>
                    </div>
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
                            <BsSearch />
                        </div>
                        <hr />
                        <div className="register__user-found">
                            <div>
                                <div className="video__img">
                                    {form.identity.charAt(0).toUpperCase()}
                                </div>
                                <p>{form.identity}</p>
                            </div>
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                    <hr />
                </main>
            </div>
        </StyledUserRegister>
    )
}

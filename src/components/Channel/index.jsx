import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
    StyledChannel,
    StyledHeader,
    StyledChannelDetails,
    StyledDetails,
    StyledNavlink,
    StyledFooter,
} from './styles'
import { setRedBullet } from '../../utils'
import { ImgContainer } from '../ImgContainer'

import { useServer } from '../../graphql/custom-hook'

const Channel = () => {
    const params = useParams()
    const { server } = params
    const channelDetailsRef = useRef(null)
    const [detailListPadding, setDetailListPadding] = useState(0)
    const [serverChannels, setServerChannels] = useState(null)

    // graphql hook
    const { data, error, loading } = useServer(server)

    const handleResize = () => {
        const { scrollHeight } = channelDetailsRef.current
        const { clientHeight } = channelDetailsRef.current
        if (scrollHeight > clientHeight) {
            setDetailListPadding(1)
        } else {
            setDetailListPadding(0)
        }
    }

    // set greenbullet
    // despues del primer pintado:
    // se realiza la llamada a apollo
    // el estado local sigue siendo el anterior por lo que pinta eso
    // se ejecuta useEffect (porque cambio el server) para cambiar el estado local
    // SE realiza otro render para cambiar el estado local y pintar el nuevo estado
    const greenBullet = setRedBullet('1')

    useEffect(() => {
        if (serverChannels) setServerChannels(null)
        if (data) setServerChannels(data.findServer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [server, data])

    if (error) return <span>Error de conexión</span>
    return (
        <StyledChannel aria-label="channel">
            <StyledHeader>
                {loading || serverChannels === null
                    ? 'Loading'
                    : serverChannels.title}
            </StyledHeader>
            <StyledChannelDetails
                aria-label="channel-details"
                paddingLeft={detailListPadding}
                ref={channelDetailsRef}
            >
                {loading || serverChannels === null ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {serverChannels.channels.map(detail => (
                            <StyledDetails
                                open
                                key={detail._id}
                                onToggle={handleResize}
                            >
                                <summary id="summary">{detail.title}</summary>
                                <nav aria-label={detail.title}>
                                    <ul>
                                        {detail.summary.map(channelItem => {
                                            const redBullet = setRedBullet(
                                                channelItem.notification
                                            )
                                            return (
                                                <li key={channelItem._id}>
                                                    <StyledNavlink
                                                        to={channelItem.to}
                                                        className={
                                                            channelItem.notification !==
                                                            '0'
                                                                ? 'notification'
                                                                : ''
                                                        }
                                                        inlinesize={
                                                            redBullet.inlineSize
                                                        }
                                                        color={
                                                            channelItem.notification !==
                                                            '0'
                                                                ? 'true'
                                                                : ''
                                                        }
                                                    >
                                                        <span>
                                                            #{' '}
                                                            {channelItem.title}
                                                        </span>
                                                        <span>
                                                            {redBullet.content}
                                                        </span>
                                                    </StyledNavlink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </StyledDetails>
                        ))}
                    </div>
                )}
            </StyledChannelDetails>
            <StyledFooter>
                <div
                    className="footer-perfil-status"
                    aria-label="perfil estatus"
                >
                    <div>
                        <ImgContainer
                            img="https://res.cloudinary.com/ivanrice-c/image/upload/f_auto,q_auto:good/v1642023517/discord-clone/server/ivnrice_logo_grzmki.png"
                            alt="perfil de usuario"
                            content=""
                            inlineSize="0.7"
                            blockSize="0.7"
                            greenBullet="1"
                            borderColor="black2"
                            display={greenBullet.display}
                        />
                    </div>
                    <div>
                        <p>ivanrice</p>
                        <p>#5463</p>
                    </div>
                </div>

                <div
                    className="footer-tools"
                    aria-label="tools, audio controls"
                >
                    <div>
                        <i className="ico-mute" />
                    </div>
                    <div>
                        <i className="ico-deafen" />
                    </div>
                    <div>
                        <i className="ico-settings" />
                    </div>
                </div>
            </StyledFooter>
        </StyledChannel>
    )
}

export default Channel

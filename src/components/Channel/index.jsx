import React, { useRef, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../Loader'
import {
    setChnlCmntsToggleMenu,
    getChannel,
    getServer,
} from '../../store/actions/AppActions'
import {
    StyledChannel,
    StyledHeader,
    StyledChannelDetails,
    StyledDetails,
    StyledLink,
    StyledFooter,
} from './styles'
import { setBullet } from '../../utils'
import { ImgContainer } from '../ImgContainer'

import { useServer } from '../../graphql/custom-hook'

const Channel = () => {
    const params = useParams()
    const showHeaderAndComments = useSelector(
        state => state.app.showHeaderAndComments
    )
    const storedUserMenu = useSelector(state => state.app.userMenu)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { server, channel } = params

    const channelDetailsRef = useRef(null)
    const [detailListPadding, setDetailListPadding] = useState(0)
    let channelTitle = ''
    let serverName = ''

    // graphql hook
    const { data, error, loading } = useServer(server)
    // onToggle datail, arregla la longituz del element
    const handleResize = () => {
        const { scrollHeight, clientHeight } = channelDetailsRef.current
        if (scrollHeight > clientHeight) {
            setDetailListPadding(1)
        } else {
            setDetailListPadding(0)
        }
    }
    // setbullet
    const greenBullet = setBullet('1')

    // navigate on click
    const handleNavigation = (e, idChannel, titleChannel, nameServer) => {
        e.preventDefault()
        // enable Comments and header
        dispatch(setChnlCmntsToggleMenu(!showHeaderAndComments))
        // then display comments
        dispatch(getChannel(titleChannel))
        dispatch(getServer(nameServer))
        navigate(`/${server}/${idChannel}`)
    }
    // Navigate on refresh
    useEffect(() => {
        // if (channel === undefined) navigate('1')
        if (channelTitle) {
            dispatch(getChannel(channelTitle))
            dispatch(getServer(serverName))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    if (error) return <span>Error de conexión</span>

    return (
        <StyledChannel aria-label="channel" storedUserMenu={storedUserMenu}>
            <StyledHeader>
                {loading ? (
                    <Loader justifyContent="start" alignItems="center" />
                ) : (
                    data.findServer.title
                )}
            </StyledHeader>
            <StyledChannelDetails
                aria-label="channel-details"
                paddingLeft={detailListPadding}
                ref={channelDetailsRef}
            >
                {loading ? (
                    <Loader justifyContent="center" alignItems="center" />
                ) : (
                    <div>
                        {data.findServer.channels.map(detail => (
                            <StyledDetails
                                open
                                key={detail._id}
                                onToggle={handleResize}
                            >
                                <summary id="summary">{detail.title}</summary>
                                <nav aria-label={detail.title}>
                                    <ul>
                                        {detail.summary.map(channelItem => {
                                            const redBullet = setBullet(
                                                channelItem.notification
                                            )
                                            const classNotification =
                                                channelItem.notification !== '0'
                                                    ? 'notification'
                                                    : ''
                                            let classActive = ''
                                            if (channelItem._id === channel) {
                                                classActive = 'active'
                                                channelTitle = channelItem.title
                                                serverName =
                                                    data.findServer.title
                                            }
                                            const className = `${classNotification} ${classActive}`
                                            return (
                                                <li key={channelItem._id}>
                                                    <StyledLink
                                                        href={channelItem.to}
                                                        className={className}
                                                        inlinesize={
                                                            redBullet.inlineSize
                                                        }
                                                        onClick={e =>
                                                            handleNavigation(
                                                                e,
                                                                channelItem._id,
                                                                channelItem.title,
                                                                data.findServer
                                                                    .title
                                                            )
                                                        }
                                                        color_active={
                                                            channelItem.notification !==
                                                            '0'
                                                                ? true
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
                                                    </StyledLink>
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
                            inlineSize="0.58"
                            blockSize="0.58"
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

import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Loader } from '../Loader'
import { setChannel } from '../../store/actions/AppActions'
import { useToggleChannel } from '../../hooks/useToggleChannel'
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
  const { server, channel } = useParams()
  const [showChannel, setShowChannel] = useToggleChannel()
  const { data, error, loading } = useServer(server)
  const dispatch = useDispatch()

  const channelDetailsRef = useRef(null)
  const channelActive = useRef('')
  const [detailListPadding, setDetailListPadding] = useState(0)

  // onToggle datail, fix width when scroll is overflowing
  const handleChnnlWidth = e => {
    e.stopPropagation()
    const { scrollHeight, clientHeight } = channelDetailsRef.current
    if (scrollHeight > clientHeight) return setDetailListPadding(1)
    return setDetailListPadding(0)
  }
  const handleNewChannel = titleChannel => {
    // if mobile, hide channel/header and set new channel
    setShowChannel(false)

    dispatch(setChannel(titleChannel))
  }
  const channelList = detail => {
    const channelListRender = detail.summary.map(channelItem => {
      const redBullet = setBullet(channelItem.notification)
      const hasNotif = channelItem.notification !== '0' ? 'notification' : ''

      if (channelItem._id === channel) channelActive.current = channelItem.title

      return (
        <li key={channelItem._id}>
          <StyledLink
            to={channelItem.to}
            className={hasNotif}
            inlinesize={redBullet.inlineSize}
            onClick={() => handleNewChannel(channelItem.title)}
            color_active={channelItem.notification !== '0' ? 'isWhite' : null}
          >
            <span>{channelItem.title}</span>
            <span>{redBullet.content}</span>
          </StyledLink>
        </li>
      )
    })
    return channelListRender
  }
  const channelState = () => {
    if (error) return <span className=".app-error">Error de conexión</span>
    if (loading && typeof data?.findServer === 'undefined')
      return <Loader justifyContent="start" alignItems="center" />
    channelActive.current = null
    if (data.findServer === null)
      return <span className=".app-error">Channels not found</span>
    return null
  }
  useEffect(() => {
    if (channelActive.current || channelActive.current === null)
      dispatch(setChannel(channelActive.current))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <StyledChannel aria-label="channel" showChannel={showChannel}>
      <StyledHeader>
        {channelState() === null ? data.findServer.title : channelState()}
      </StyledHeader>
      <StyledChannelDetails
        aria-label="channel-details"
        paddingLeft={detailListPadding}
        ref={channelDetailsRef}
      >
        {channelState() === null && (
          <>
            {data.findServer.channels.map(detail => (
              <StyledDetails
                open
                key={detail._id}
                onToggleCapture={handleChnnlWidth}
              >
                <summary id="summary">{detail.title}</summary>
                <nav aria-label={detail.title}>
                  <ul>{channelList(detail)}</ul>
                </nav>
              </StyledDetails>
            ))}
          </>
        )}
      </StyledChannelDetails>
      <StyledFooter>
        <div className="footer-perfil-status" aria-label="perfil estatus">
          <div>
            <ImgContainer
              img="https://res.cloudinary.com/ivanrice-c/image/upload/f_auto,q_auto:good/v1642023517/discord-clone/server/ivnrice_logo_grzmki.png"
              alt="perfil de usuario"
              content=""
              inlineSize="0.58"
              blockSize="0.58"
              greenBulletType="1"
              borderColor="black2"
            />
          </div>
          <div>
            <p>ivanrice</p>
            <p>#5463</p>
          </div>
        </div>
        <div className="footer-tools" aria-label="tools, audio controls">
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

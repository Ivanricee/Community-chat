import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Loader } from '../Loader'
import {
  StyledLeftMenu,
  StyledNavlinkServerItem,
  StyledServerImg,
} from './styles'
import { setBullet } from '../../utils'
import { useServers } from '../../graphql/custom-hook'
import { setServer } from '../../store/actions/AppActions'
import { useToggleChannel } from '../../hooks/useToggleChannel'

const LeftMenu = () => {
  const { server } = useParams()
  const { data, error, loading } = useServers()
  const [showChannel] = useToggleChannel()
  const dispatch = useDispatch()
  const servers = useRef({})
  const navigate = useNavigate()
  const severList = () => {
    const serverDomList = data.servers.map(item => {
      const redBullet = setBullet(item.content)
      servers.current[item._id] = item.title
      return (
        <li key={item._id}>
          <StyledNavlinkServerItem
            aria-label={item.alt}
            to={item.path}
            className={`${item.path === `/${server}/1` ? 'active' : ''}`}
          >
            <StyledServerImg
              img={item.img}
              alt={item.alt}
              notification={redBullet}
              borderColor="black"
            />
          </StyledNavlinkServerItem>
        </li>
      )
    })
    return serverDomList
  }
  useEffect(() => {
    if (servers) dispatch(setServer(servers.current))
    if (typeof server === 'undefined') navigate('1')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (error) return <span>Error</span>
  if (loading) return <Loader justifyContent="center" alignItems="center" />

  return (
    <StyledLeftMenu aria-label="Server" showChannel={showChannel}>
      <ul>{severList()}</ul>
    </StyledLeftMenu>
  )
}
export default LeftMenu

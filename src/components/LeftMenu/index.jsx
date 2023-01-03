import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
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

const LeftMenu = () => {
  const { server } = useParams()
  const { data, error, loading } = useServers()
  const dispatch = useDispatch()
  const servers = useRef({})
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
    if (servers) {
      dispatch(setServer(servers.current))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (error) return <span>Error</span>
  if (loading) return <Loader justifyContent="center" alignItems="center" />

  return (
    <StyledLeftMenu aria-label="Server">
      <ul>{severList()}</ul>
    </StyledLeftMenu>
  )
}
export default LeftMenu

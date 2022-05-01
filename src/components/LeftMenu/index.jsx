import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    StyledLeftMenu,
    StyledNavlinkServerItem,
    StyledItemWrapper,
} from './styles'
import { setBullet } from '../../utils'
import { ImgContainer } from '../ImgContainer'
import { useServers } from '../../graphql/custom-hook'

const LeftMenu = () => {
    const params = useParams()
    const { server } = params
    const storedUserMenu = useSelector(state => state.app.userMenu)
    // realiza peticion asyncrona del query
    const { data, error, loading } = useServers()
    if (error)
        return (
            <pre>
                <span>Error</span>
            </pre>
        )

    return (
        <StyledLeftMenu aria-label="primary" storedUserMenu={storedUserMenu}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                data.servers.map(item => {
                    const redBullet = setBullet(item.content)
                    return (
                        <StyledNavlinkServerItem
                            aria-label={item.alt}
                            role="menuitem"
                            key={item._id}
                            to={item.path}
                            className={`${
                                item.path === `/${server}/1` ? 'active' : ''
                            }`}
                        >
                            <StyledItemWrapper>
                                <ImgContainer
                                    img={item.img}
                                    alt={item.alt}
                                    content={redBullet.content}
                                    inlineSize={redBullet.inlineSize}
                                    translateX={redBullet.translateX}
                                    display={redBullet.display}
                                    borderColor="black"
                                />
                            </StyledItemWrapper>
                        </StyledNavlinkServerItem>
                    )
                })
            )}
        </StyledLeftMenu>
    )
}
export default LeftMenu

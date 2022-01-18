import React from 'react'
import {
    StyledLeftMenu,
    StyledNavlinkServerItem,
    StyledItemWrapper,
} from './styles'
import { setRedBullet } from '../../utils'
import { ImgContainer } from '../ImgContainer'
import { useServers } from '../../graphql/custom-hook'

const LeftMenu = () => {
    // realiza peticion asyncrona del query
    const { data, error, loading } = useServers()

    if (error)
        return (
            <pre>
                <span>Error</span>
            </pre>
        )
    return (
        <StyledLeftMenu aria-label="primary">
            {loading ? (
                <p>Loading...</p>
            ) : (
                data.servers.map(item => {
                    const redBullet = setRedBullet(item.content)
                    return (
                        <StyledNavlinkServerItem
                            aria-label={item.alt}
                            role="menuitem"
                            key={item._id}
                            to={item.path}
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

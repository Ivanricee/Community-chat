import React from 'react'
import {
    StyledLeftMenu,
    StyledNavlinkServerItem,
    StyledItemWrapper,
} from './styles'
import ivnriceLogo from '../../assets/ivnrice_logo.png'
import hgLogo from '../../assets/hg_logo.png'
import { setRedBullet } from '../../utils'
import { ImgContainer } from '../ImgContainer'

const server = {
    serverItem: [
        {
            id: 1,
            img: ivnriceLogo,
            alt: 'server, ivanrice',
            content: '8',
            path: '/ivnr',
        },
        {
            id: 2,
            img: hgLogo,
            alt: 'server, healthy gamer gg',
            content: '61',
            path: '/hgg',
        },
        {
            id: 3,
            img: ivnriceLogo,
            alt: 'server, ivanrice',
            content: '333',
            path: '/ivnrr',
        },
        {
            id: 4,
            img: hgLogo,
            alt: 'server, healthy gamer gg',
            content: '611',
            path: '/hggg',
        },
        {
            id: 5,
            img: ivnriceLogo,
            alt: 'serverrr, ivanrice',
            content: '0',
            path: '/ivnrrr',
        },
    ],
}

const LeftMenu = () => {
    return (
        <StyledLeftMenu aria-label="primary">
            {server.serverItem.map(item => {
                const redBullet = setRedBullet(item.content)
                return (
                    <StyledNavlinkServerItem
                        aria-label={item.alt}
                        role="menuitem"
                        key={item.id}
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
            })}
        </StyledLeftMenu>
    )
}
export default LeftMenu

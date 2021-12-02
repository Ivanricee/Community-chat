import React from 'react'
import { StyledLeftMenu, StyledServer, StyledServerCover } from './styles'
import ivnriceLogo from '../../assets/ivnrice_logo.png'
import hgLogo from '../../assets/hg_logo.png'

const LeftMenu = () => (
    <StyledLeftMenu>
        <StyledServer>
            <div className="serverCover-active">
                <StyledServerCover>
                    <img src={ivnriceLogo} alt="server, healthy gamer gg" />
                </StyledServerCover>
            </div>
        </StyledServer>
        <StyledServer>
            <div className="serverCover-active">
                <StyledServerCover>
                    <img src={hgLogo} alt="server, healthy gamer gg" />
                </StyledServerCover>
            </div>
        </StyledServer>
    </StyledLeftMenu>
)
export default LeftMenu

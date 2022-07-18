import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoMdMenu } from 'react-icons/io'
import { HeaderSearchHelp } from '../HeaderSearchHelp'
import { setChnlCmntsToggleMenu } from '../../store/actions/AppActions'
import { StyledHeader, StyledHeaderSearchHelp } from './styles'
import { Loader } from '../Loader'

const Header = () => {
    const dispatch = useDispatch()
    const storedChannelTitle = useSelector(state => state.app.channel)
    const storedUserMenu = useSelector(state => state.app.userMenu)
    const showChnlCmntsToggleMenu = useSelector(
        state => state.app.showChnlCmntsToggleMenu
    )

    return (
        <StyledHeader
            showChnlCmntsToggleMenu={showChnlCmntsToggleMenu}
            storedUserMenu={storedUserMenu}
        >
            <div className="haeder__title">
                <IoMdMenu
                    ismenu="hamburg"
                    onClick={() =>
                        dispatch(
                            setChnlCmntsToggleMenu(!showChnlCmntsToggleMenu)
                        )
                    }
                />
                {storedChannelTitle ? (
                    `# ${storedChannelTitle}`
                ) : (
                    <Loader justifyContent="start" alignItems="center" />
                )}
            </div>
            <StyledHeaderSearchHelp>
                <HeaderSearchHelp
                    headerItems={
                        showChnlCmntsToggleMenu ? 'headerDesk' : 'userMobile'
                    }
                />
            </StyledHeaderSearchHelp>
        </StyledHeader>
    )
}
export default Header

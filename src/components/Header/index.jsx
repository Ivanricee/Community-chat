/* eslint-disable no-shadow */

import React /* { useRef } */ from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { BsSearch, BsFillPinAngleFill, BsFillBellFill } from 'react-icons/bs'
// import { FaHashtag, FaUserFriends } from 'react-icons/fa'
// import { CgInbox } from 'react-icons/cg'
import { /* IoMdHelpCircle, */ IoMdMenu } from 'react-icons/io'
import { HeaderSearchHelp } from '../HeaderSearchHelp'
import {
    // setUserMenu,
    setShowHeaderAndComments,
} from '../../store/actions/AppActions'
import { StyledHeader, StyledHeaderSearchHelp } from './styles'

/* const handleShowSearch = showSearch => {
    return !showSearch
} */

export const Header = () => {
    const dispatch = useDispatch()
    const storedChannelTitle = useSelector(state => state.app.channel)
    const storedUserMenu = useSelector(state => state.app.userMenu)
    const showHeaderAndComments = useSelector(
        state => state.app.showHeaderAndComments
    )

    // const refSearch = useRef([])

    return (
        <StyledHeader
            showHeaderAndComments={showHeaderAndComments}
            storedUserMenu={storedUserMenu}
        >
            <div className="haeder__title">
                <IoMdMenu
                    ismenu="hamburg"
                    onClick={() =>
                        dispatch(
                            setShowHeaderAndComments(!showHeaderAndComments)
                        )
                    }
                />
                {storedChannelTitle ? `# ${storedChannelTitle}` : 'Loading...'}
            </div>
            <StyledHeaderSearchHelp>
                <HeaderSearchHelp
                    headerItems={
                        showHeaderAndComments ? 'headerDesk' : 'userMobile'
                    }
                />
            </StyledHeaderSearchHelp>
        </StyledHeader>
    )
}

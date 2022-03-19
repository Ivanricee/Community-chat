/* eslint-disable no-shadow */

import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsSearch, BsFillPinAngleFill, BsFillBellFill } from 'react-icons/bs'
import { FaHashtag, FaUserFriends } from 'react-icons/fa'
import { CgInbox } from 'react-icons/cg'
import { IoMdHelpCircle } from 'react-icons/io'
import { setUserMenu } from '../../store/actions/AppActions'

import { StyledHeader, StyledHeaderSearchHelp } from './styles'

/* const handleShowSearch = showSearch => {
    return !showSearch
} */

export const Header = () => {
    const dispatch = useDispatch()
    const storedChannelTitle = useSelector(state => state.app.channel)
    const storedUserMenu = useSelector(state => state.app.userMenu)

    const [showSearch, setShowSearch] = useState(false)
    const refSearch = useRef([])

    useEffect(() => {
        const handleShowSearch = e => {
            if (refSearch.current && !refSearch.current.isEqualNode(e.target)) {
                // outside
                setShowSearch(false)
            } else {
                // inside
                setShowSearch(true)
            }
        }
        document.addEventListener('mousedown', handleShowSearch)
        return () => {
            document.removeEventListener('nousedown', handleShowSearch)
        }
    }, [refSearch])

    return (
        <StyledHeader>
            {storedChannelTitle ? `# ${storedChannelTitle}` : 'Loading...'}
            <StyledHeaderSearchHelp showSearch={showSearch}>
                <div className="header__icons">
                    <FaHashtag />
                    <BsFillBellFill />
                    <BsFillPinAngleFill />
                    <FaUserFriends
                        onClick={() => {
                            dispatch(setUserMenu(!storedUserMenu))
                        }}
                    />
                </div>
                <div
                    className="header__wrapper-input"
                    role="button"
                    tabIndex="0"
                >
                    <div>
                        <input
                            ref={refSearch}
                            type="text"
                            placeholder="Buscar"
                            name="search"
                            id="search"
                        />
                    </div>
                    <div className="header__icons">
                        <BsSearch htmlFor="search" />
                    </div>
                </div>
                <CgInbox />
                <IoMdHelpCircle />
            </StyledHeaderSearchHelp>
        </StyledHeader>
    )
}

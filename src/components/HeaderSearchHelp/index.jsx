import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsSearch, BsFillPinAngleFill, BsFillBellFill } from 'react-icons/bs'
import { FaHashtag, FaUserFriends } from 'react-icons/fa'
import { CgInbox } from 'react-icons/cg'
import { IoMdHelpCircle } from 'react-icons/io'
import {
    setUserMenu,
    // setShowHeaderAndComments,
} from '../../store/actions/AppActions'
/*
 * headerResponsive, userResponsive, desk
 */
export const HeaderSearchHelp = (/* { headerItems } */) => {
    // headerItems.hash
    const dispatch = useDispatch()
    // const storedChannelTitle = useSelector(state => state.app.channel)
    const storedUserMenu = useSelector(state => state.app.userMenu)
    const refSearch = useRef([])
    // const userMobileOrDesk = headerItems === 'headerDesk'

    // console.log('comp search', headerItems)
    return (
        <>
            <div className="header__icons">
                {
                    // Header: En Desk se muestra pero en mobile no
                    // Users: en mobile se muestra en Desk no
                }

                <div className="header__icons-shift">
                    <FaHashtag />
                    <BsFillBellFill />
                    <BsFillPinAngleFill />
                </div>

                <FaUserFriends
                    onClick={() => {
                        dispatch(setUserMenu(!storedUserMenu))
                    }}
                />
            </div>
            <div className="header__wrapper-input" role="button" tabIndex="0">
                <div>
                    <input
                        ref={refSearch}
                        type="text"
                        placeholder="Buscar"
                        name="search"
                        id="search"
                    />
                </div>
                <div>
                    <BsSearch htmlFor="search" />
                </div>
            </div>
            <div className="header__icons-shift">
                <CgInbox />
                <IoMdHelpCircle />
            </div>
        </>
    )
}

import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { CgInbox } from 'react-icons/cg'
import { IoMdHelpCircle } from 'react-icons/io'
import {
    StyledUser,
    StyledUserProfileItem,
    StyledUserHeader,
    StyledUserList,
} from './styles'
import { useUsersInRoles } from '../../graphql/custom-hook'
import { ImgContainer } from '../ImgContainer'

const User = ({ server }) => {
    const { loading, data, error } = useUsersInRoles(server)
    console.table('user roles', data)
    if (error) {
        return <h1>error</h1>
    }
    return loading ? (
        <h2>Loading</h2>
    ) : (
        <StyledUser>
            <StyledUserHeader>
                <div className="user__header-wrapper-input">
                    <input type="text" placeholder="Buscar" />
                    <BsSearch />
                </div>
                <CgInbox />
                <IoMdHelpCircle />
            </StyledUserHeader>
            <StyledUserList>
                {data.findUsersRoles.map(usersRole => {
                    return (
                        <React.Fragment key={usersRole._id}>
                            <h2
                                key={usersRole._id}
                            >{`${usersRole.name} - ${usersRole.users.length}`}</h2>
                            {usersRole.users.map(user => {
                                return (
                                    <StyledUserProfileItem
                                        key={user._id}
                                        role={user.role}
                                    >
                                        <div className="user__image-wrapper">
                                            <ImgContainer
                                                img={user.img}
                                                greenBullet="1"
                                                content=""
                                                inlineSize={0.58}
                                                blockSize={0.58}
                                                borderColor="black2"
                                            />
                                        </div>
                                        <span>{user.name}</span>
                                    </StyledUserProfileItem>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </StyledUserList>
        </StyledUser>
    )
}

export default User

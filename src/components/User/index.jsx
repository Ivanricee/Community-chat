import React from 'react'
import { useSelector } from 'react-redux'
import { StyledUser, StyledUserProfileItem, StyledUserList } from './styles'
import { useUsersInRoles } from '../../graphql/custom-hook'
import { ImgContainer } from '../ImgContainer'

const User = ({ server }) => {
    const { loading, data, error } = useUsersInRoles(server)
    const storedUserMenu = useSelector(state => state.app.userMenu)

    if (error) {
        return <h1>error</h1>
    }
    return loading ? (
        <h2>Loading</h2>
    ) : (
        <StyledUser showUserMenu={storedUserMenu}>
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

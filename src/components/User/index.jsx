import React from 'react'
import { useSelector } from 'react-redux'
import { StyledUser, StyledUserProfileItem, StyledUserList } from './styles'
import { useUsersInRoles } from '../../graphql/custom-hook'

const User = ({ server }) => {
    const { loading, data, error } = useUsersInRoles(server)
    const storedUserMenu = useSelector(state => state.app.userMenu)

    // setUserItemModal
    if (error) {
        return <h1>Sin conexión.</h1>
    }
    return loading ? (
        <h2>Loading users.</h2>
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
                                        user={user}
                                        userRoleName={usersRole.name}
                                    />
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

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    StyledUser,
    StyledUserProfileItem,
    StyledUserList,
    StyledUserDetail,
} from './styles'
import { useUsersInRoles } from '../../graphql/custom-hook'

/* const handleCloseDetailUser = () => {
    console.log('click')
} */
const User = ({ server }) => {
    const { loading, data, error } = useUsersInRoles(server)
    const storedUserMenu = useSelector(state => state.app.userMenu)
    const [closeUserDetail, setCloseUserDetail] = useState(false)
    if (error) {
        return <h1>error</h1>
    }
    return loading ? (
        <h2>Loading</h2>
    ) : (
        <StyledUser showUserMenu={storedUserMenu}>
            <button type="button">boton 222</button>
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
                                        StyledUserDetail={StyledUserDetail}
                                        closeUserDetail={closeUserDetail}
                                        key={user._id}
                                        role={user.role}
                                        user={user}
                                        userRoleName={usersRole.name}
                                        handleCloseDetailUser={() =>
                                            setCloseUserDetail(true)
                                        }
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

import React from 'react'
import { useSelector } from 'react-redux'
import { StyledUser, StyledUserProfileItem, StyledUserList } from './styles'
import { useUsersInRoles } from '../../graphql/custom-hook'
import { Loader } from '../Loader'

const User = ({ server }) => {
  const { loading, data, error } = useUsersInRoles(server)
  const storedUserMenu = useSelector(state => state.app.userMenu)

  if (error) {
    return <h1>Sin conexión.</h1>
  }
  return loading ? (
    <Loader justifyContent="center" alignItems="center" />
  ) : (
    <StyledUser showUserMenu={storedUserMenu}>
      <StyledUserList>
        {data.findUsersRoles.map(usersRole => (
          <React.Fragment key={usersRole._id}>
            <h2 key={usersRole._id}>
              {`${usersRole.name} - ${usersRole.users.length}`}
            </h2>
            {usersRole.users.map(user => (
              <StyledUserProfileItem
                key={user._id}
                role={user.role}
                user={user}
                userRoleName={usersRole.name}
              />
            ))}
          </React.Fragment>
        ))}
      </StyledUserList>
    </StyledUser>
  )
}

export default User

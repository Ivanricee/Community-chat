import React from 'react'
import { StyledUser, StyledUserProfileItem, StyledUserList } from './styles'
import { useUsersInRoles } from '../../graphql/custom-hook'
import { Loader } from '../Loader'
import { useToggleUserList } from '../../hooks/useToggleUserList'

const User = ({ server }) => {
  const { loading, data, error } = useUsersInRoles(server)
  const [showUserList] = useToggleUserList()

  if (error)
    return (
      <StyledUser>
        <p>Error conexión.</p>
      </StyledUser>
    )

  return loading ? (
    <Loader justifyContent="center" alignItems="center" />
  ) : (
    <StyledUser showUserMenu={showUserList}>
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

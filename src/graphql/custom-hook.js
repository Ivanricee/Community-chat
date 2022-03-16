/* eslint-disable prettier/prettier */
import { useQuery } from '@apollo/client'
import {
  FIND_SERVER,
  SERVERS,
  FIND_COMMENTS,
  FIND_EMOJIS,
  USERS,
  FIND_USERS_AND_USERS_IN_ROLES,
} from './queries'

export const useServers = () => {
  return useQuery(SERVERS)
}
export const useUsers = () => {
  return useQuery(USERS)
}
export const useServer = (idServer, clientCache) => {
  if (clientCache) {
    const serverCached = clientCache.readQuery({
      query: FIND_SERVER,
      variables: { id: idServer },
    })
    return serverCached
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const result = useQuery(FIND_SERVER, {
    variables: { id: idServer },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  })
  return result
}
export const useChannelComment = (idServer, idChannel) => {
  const result = useQuery(FIND_COMMENTS, {
    variables: { idServer, idChannel },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  })
  return result
}
export const useEmojis = id => {
  const result = useQuery(FIND_EMOJIS, {
    variables: { id },
  })
  return result
}
export const useUsersInRoles = idServer => {
  const result = useQuery(FIND_USERS_AND_USERS_IN_ROLES, {
    variables: { idServer },
  })
  return result
}

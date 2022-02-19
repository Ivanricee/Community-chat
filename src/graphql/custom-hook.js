/* eslint-disable prettier/prettier */
import { useQuery } from '@apollo/client'
import { FIND_SERVER, SERVERS, FIND_COMMENTS } from './queries'

export const useServers = () => {
  return useQuery(SERVERS)
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

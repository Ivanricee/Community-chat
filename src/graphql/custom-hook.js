/* eslint-disable prettier/prettier */
import { useQuery, useLazyQuery } from '@apollo/client'
import { FIND_SERVER, SERVERS, FIND_COMMENTS } from './queries'

export const useServers = () => {
  return useQuery(SERVERS)
}

export const useServer = idServer => {
  const [getServerChannel, result] = useLazyQuery(FIND_SERVER, {
    variables: { id: idServer },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  })
  if (!result.called) {
    getServerChannel()
  }
  return result
}

export const useChannelComment = (idServer, idChannel) => {
  const result = useQuery(FIND_COMMENTS, {
    variables: { idServer, idChannel },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  })

  return result
}

/* eslint-disable prettier/prettier */
import { useQuery, useLazyQuery } from '@apollo/client'
import { FIND_SERVER, SERVERS } from './queries'

export const useServers = () => {
  return useQuery(SERVERS)
}

export const useServer = serverId => {
  const [getServerChannel, result] = useLazyQuery(FIND_SERVER, {
    variables: { id: serverId },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  })
  if (!result.called) {
    getServerChannel()
  }
  return result
}

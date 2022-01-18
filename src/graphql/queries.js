/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client'

export const SERVERS = gql`
  query Servers {
    servers {
      _id
      alt
      content
      img
      path
    }
  }
`
// hacer una busqueda por server
export const FIND_SERVER = gql`
  query findServer($id: ID!) {
    findServer(_id: $id) {
      title
      channels {
        _id
        title
        summary {
          _id
          title
          to
          notification
        }
      }
    }
  }
`

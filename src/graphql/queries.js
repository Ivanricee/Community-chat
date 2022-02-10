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
// hace una busqueda por channel - comments

export const FIND_COMMENTS = gql`
  query findComment($idServer: ID!, $idChannel: ID!) {
    findComment(_id_server: $idServer, _id_channel: $idChannel) {
      _id_channel
      title
      comments {
        _id
        texto
        img
        date
        _id_comment_reply
        img
        url
        react
        user {
          img
          name
          role
        }
      }
    }
  }
`

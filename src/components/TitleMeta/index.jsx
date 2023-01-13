import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

export const TitleMeta = ({ server, channelTitle }) => {
  const storedServersTitle = useSelector(state => state.app.server) || ''
  const serverTitle = idServer => storedServersTitle[idServer] || '404'
  let title = '404 Not found'
  if (server) title = `Discord ${serverTitle(server)}, ${channelTitle || ''}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={title} data-react-helmet="true" />
    </Helmet>
  )
}

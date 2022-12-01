import React from 'react'
import { useSelector } from 'react-redux'
import { StyledTitle } from './styles'

export const Title = ({ text }) => {
  const stateApp = useSelector(state => state.app)
  return (
    <StyledTitle>
      {text === 'notfound' ? '404 Page not found' : ` ${stateApp.templateInit}`}
    </StyledTitle>
  )
}

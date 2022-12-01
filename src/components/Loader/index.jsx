import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { StyledLoader } from './styles'

export const Loader = ({ justifyContent, alignItems }) => {
  return (
    <StyledLoader justifyContent={justifyContent} alignItems={alignItems}>
      <div>
        <ThreeDots
          color="#dfe3e0"
          height={22}
          width={40}
          ariaLabel="Loading section"
        />
      </div>
    </StyledLoader>
  )
}

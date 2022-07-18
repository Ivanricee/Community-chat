import styled from 'styled-components'

export const StyledLoader = styled.section`
  color: ${p => p.theme.white};
  display: flex;
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
  block-size: 100%;
`

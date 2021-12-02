import styled from 'styled-components'

export const StyledLeftMenu = styled.div`
  grid-area: left-menu;
  background-color: ${props => props.theme.black};
`

export const StyledServerCover = styled.div`
  border-radius: 50%;
  inline-size: 100%;
  block-size: 100%;
  overflow: hidden;
  transition: border-radius 0.2s;
  &:before {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.white};
    inset-block-start: 1.28rem;
    inset-block-end: 1.28rem;
    inset-inline-start: 0;
    inset-inline-end: 4.23rem;
    border-start-end-radius: 0.2rem;
    border-end-end-radius: 0.2rem;
    transition: inset-block-start 0.2s, inset-block-end 0.2s;
  }
`

export const StyledServer = styled.div`
  inline-size: 100%;
  block-size: auto;
  position: relative;
  margin: 0.5rem 0;
  & img {
    inline-size: 100%;
    block-size: auto;
  }
  & .serverCover-active {
    margin: 0 auto;
    inline-size: 3rem;
    block-size: 3rem;
    vertical-align: middle;
  }
  & .serverCover-active:hover ${StyledServerCover} {
    border-radius: 25%;
    &:before {
      inset-block-start: 1rem;
      inset-block-end: 1rem;
    }
  }
`

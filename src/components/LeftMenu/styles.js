import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ItemWrapper } from './ItemWrapper'

export const StyledLeftMenu = styled.nav`
  grid-area: left-menu;
  background-color: ${props => props.theme.black};
  overflow-x: hidden;
  ul {
    padding: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & p {
    color: white;
  }
  scrollbar-width: none; /* Firefox */
  @media ${p => p.theme.breakPointsDevice.tablet} {
    ${p => (!p.showChannel ? 'display: none;' : 'display: initial;')}
  }
`
export const StyledServerImg = styled(ItemWrapper)`
  margin: 0 auto;
  inline-size: 3rem;
  block-size: 3rem;
  &:before {
    //white-bullet
    content: '';
    position: absolute;
    background-color: ${props => props.theme.white};
    inset-block-start: 1.28rem;
    inset-block-end: 1.28rem;
    inset-inline-start: 0rem;
    inset-inline-end: 4.23rem;
    border-start-end-radius: 0.2rem;
    border-end-end-radius: 0.2rem;
    transition: inset-block-start 0.4s, inset-block-end 0.4s;
  }
  &:hover {
    &:before {
      inset-block-start: 1rem;
      inset-block-end: 1rem;
    }
  }
`
export const StyledNavlinkServerItem = styled(NavLink)`
  display: block;
  position: relative;
  margin: 0.5rem 0;
  &:first-child {
    margin-block-start: 1rem;
  }
  &.active ${StyledServerImg} {
    &:before {
      inset-block-start: 0rem;
      inset-block-end: 0rem;
    }
  }
  &.active .item-cover {
    border-radius: 25%;
  }
`

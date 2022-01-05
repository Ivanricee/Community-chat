import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ItemWrapper } from './ItemWrapper'

export const StyledLeftMenu = styled.nav`
  grid-area: left-menu;
  background-color: ${props => props.theme.black};
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`
export const StyledItemWrapper = styled(ItemWrapper)`
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
    transition: inset-block-start 0.2s, inset-block-end 0.2s;
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
  &.active ${StyledItemWrapper} {
    &:before {
      inset-block-start: 0rem;
      inset-block-end: 0rem;
    }
  }
  &.active .item-cover {
    border-radius: 25%;
  }
`

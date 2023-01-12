import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledChannel = styled.section`
  grid-area: channel;
  flex-direction: column;
  background-color: ${p => p.theme.black1};
  inline-size: 100%;
  @media ${p => p.theme.breakPointsDevice.tablet} {
    ${p => (!p.showChannel ? 'display: none;' : 'display: initial;')}
  }
  @media ${p => p.theme.breakPointsDevice.mobileL} {
    ${p => !p.showChannel && 'display: none;'}
  }
`
export const StyledHeader = styled.header`
  box-sizing: border-box;
  block-size: 3rem;
  padding-inline-start: 0.75rem;
  font: ${p => p.theme.body1Bold};
  font-size: 0.9rem;
  color: ${p => p.theme.white};
  border-block-end: 1px solid ${p => p.theme.black};
  line-height: 3rem;
  vertical-align: middle;
`
export const StyledDetails = styled.details`
  cursor: context-menu;

  padding-block-start: 0.55rem;
  padding-block-end: 0.55rem;
  padding-inline-start: 0.55rem;
  display: flex;
  width: inherit;

  & summary {
    font: ${p => p.theme.body2Semibold};
    font-size: 0.8rem;
    color: ${p => p.theme.grey};
    text-transform: uppercase;
    &:hover {
      color: ${p => p.theme.grey3};
    }
  }
  & nav ul {
    margin: 0;
    padding: 0;
  }
  & nav li {
    font: ${p => p.theme.body2Regular};
    color: ${p => p.theme.grey};
    list-style: none;
    position: relative;
  }
`
export const StyledChannelDetails = styled.section`
  scrollbar-width: thin; /* Firefox */

  &::-webkit-scrollbar {
    width: 0.35em;
    background-color: ${p => p.theme.black2};
  }
  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.black};
  }
  overflow-x: auto;
  overflow-x: overlay;
  block-size: calc(100vh - 6rem);
  & ${StyledDetails} {
    padding-inline-end: ${p => (p.paddingLeft === 0 ? '0.55rem' : '0.1rem')};
    transition: 0.15s padding-inline-end ease-out;
  }
`
export const StyledLink = styled(NavLink)`
  padding: 0.3rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin-block-start: 0.08rem;
  margin-block-end: 0.08rem;
  display: flex;
  position: relative;
  color: ${p => (p.color_active ? p.theme.white : 'inherit')};

  &:hover {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.blackHover};
  }
  &.active {
    background-color: ${p => p.theme.blackHover};
    color: ${p => p.theme.white};
  }
  & span:nth-child(1) {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: center;
  }
  &.notification span:nth-child(2) {
    background-color: #ed4245;
    color: ${props => props.theme.white};
    ${p => `inline-size:${p.inlinesize}rem;`}
    block-size: 1rem;
    border-radius: 1rem 1rem;
    border: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-inline-start: 0.15rem;
    font: ${props => props.theme.captionBold};
  }
  &.notification {
    ::before {
      content: '';
      position: absolute;
      background-color: ${props => props.theme.white};
      border-start-end-radius: 0.2rem;
      border-end-end-radius: 0.2rem;
      transition: inset-block-start 0.2s, inset-block-end 0.2s;
      inset-inline-start: -0.55rem;
      inline-size: 0.28rem;
      block-size: 0.44rem;
      transform: translateY(100%);
      z-index: 2;
    }
  }
`
export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.black2};
  padding: 0.5rem;
  block-size: 3rem;
  display: flex;
  box-sizing: border-box;
  & .footer-perfil-status {
    inline-size: 7.5rem;
    display: flex;

    div:nth-child(1) {
      inline-size: 2rem;
      margin-inline-end: 0.5rem;
    }

    div:nth-child(2) {
      flex: 1;
      p {
        inline-size: 100%;
        padding: 0;
        margin: 0;
      }
      p:nth-child(1) {
        font: ${p => p.theme.captionBold};
        color: ${p => p.theme.white};
      }
      p:nth-child(2) {
        font: ${p => p.theme.captionRegular};
        font-size: 0.7rem;
        color: ${p => p.theme.gray4};
      }
    }
  }

  & .footer-tools {
    flex: 1;
    margin-inline-start: 0.62rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    div {
      cursor: pointer;
      line-height: 1rem;
      padding: 0.35rem;
      & :hover {
        border-radius: 0.3rem;
        background-color: ${p => p.theme.blackHover};
        i {
          ::before {
            color: ${p => p.theme.grey3};
          }
        }
      }
    }
  }
`

import styled from 'styled-components'
import { UserDetail } from './UserDetail'
import { UserProfileItem } from './UserProfileItem'

export const StyledUser = styled.aside`
  grid-area: user;
  ${p => !p.showUserMenu && `display:none;`}
  background-color: ${p => p.theme.black1};
  & h2 {
    font: ${p => p.theme.body2Semibold};
    font-size: 0.83rem;
    color: ${p => p.theme.grey};
    margin: 0;
    margin-inline-start: 0.25rem;
    margin-block-start: 1rem;
  }
`
export const StyledUserHeader = styled.header`
  display: flex;
  align-items: center;
  block-size: 3rem;
  background-color: ${p => p.theme.bg};
  color: ${p => p.theme.grey2};
  & svg:not(.user__header-wrapper-input svg) {
    margin-inline-end: 1.2rem;
    font-size: 1.35rem;
  }
  & .user__header-wrapper-input {
    background-color: ${p => p.theme.black};
    inline-size: 9rem;
    block-size: min-content;
    margin-inline-end: 1.2rem;
    border-radius: 0.15rem;
    input {
      background-color: transparent;
      color: #ffffff;
      font: ${p => p.theme.captionRegular};
      border: 0;
      outline: none;
      inline-size: 7rem;
      padding: 0.23rem;
    }
    svg {
      vertical-align: middle;
      font-size: 0.8rem;
    }
  }
`
export const StyledUserList = styled.div`
  margin: 0;
  padding: 0.5rem;
  & h2 {
    text-transform: uppercase;
  }
`
export const StyledUserDetail = styled(UserDetail)`
  display: none;
  position: fixed;
  background: ${p => p.theme.black};
  inline-size: 18.65rem;
  inset-inline-end: 15rem;
  inset-block-start: ${p => p.insetBlockStart}rem;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: context-menu;
  min-block-size: 23.5rem;
  & header {
    & .user__detail-header-banner {
      background-color: ${p => p.theme.colorRole(p.role)};
      block-size: 3.75rem;
    }
    & .user__detail-header-info {
      padding-inline-start: 1rem;
      padding-inline-end: 1rem;
      & .user__detail-wrapper-img {
        inline-size: 5.5rem;
        block-size: 5.5rem;
        border: 0.4rem solid ${p => p.theme.black};
        border-radius: 50%;
        box-sizing: border-box;
        margin-block-start: -2.75rem;
      }
      & h1 {
        padding-block-start: 0.3rem;
        padding-block-start: 0.3rem;
      }
      & hr {
        margin: 0;
        color: ${p => p.theme.black1};
      }
      & h1,
      span {
        font: ${p => p.theme.headline3};
      }
      & span {
        color: ${p => p.theme.grey2};
      }
    }
  }
  & section {
    padding: 1rem;
    padding-block-start: 0.4rem;
    & h2 {
      font: ${p => p.theme.body1Bold};
      font-size: 0.85rem;
      color: ${p => p.theme.gray4};
      margin: 0;
      margin-block-end: 0.3rem;
    }
    & h2:nth-of-type(2) {
      margin-block-start: 1rem;
    }
    & .user__detail-roles {
      display: flex;
      flex-wrap: wrap;
      & span {
        font: ${p => p.theme.captionBold};
        background-color: ${p => p.theme.black1};
        color: ${p => p.theme.white};
        padding-inline-start: 1.5rem;
        padding-inline-end: 0.5rem;
        padding-block-start: 0.2rem;
        padding-block-end: 0.2rem;
        border-radius: 0.27rem;
        position: relative;
        :before {
          position: absolute;
          content: '';
          inline-size: 0.85rem;
          block-size: 0.85rem;
          inset-inline-start: 0.5rem;
          inset-block-start: 0.3rem;
          border-radius: 50%;
          background-color: ${p => p.theme.colorRole(p.role)};
        }
      }
    }
    & :focus-within .user__detail-note-wrapper {
      background-color: ${p => p.theme.black2};
    }
    & .user__detail-note-wrapper {
      background-color: ${p => p.theme.black};
      block-size: 2.3rem;
      border-radius: 0.3rem;
      overflow: hidden;
      cursor: text;
      input {
        box-sizing: border-box;
        padding: 0;
        font: ${p => p.theme.captionRegular};
        color: ${p => p.theme.white};
        background-color: transparent;
        border: 0;
        outline: none;
        inline-size: 100%;
        padding-inline-start: 0.3rem;
        padding-inline-end: 0.3rem;
        ::placeholder {
          color: ${p => p.theme.grey2};
        }
      }
    }
  }
  & footer {
    background: ${p => p.theme.black2};
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
    margin-block-end: 1rem;
    block-size: 2.5rem;
    overflow: hidden;
    border-radius: 0.2rem;
    input {
      color: ${p => p.theme.white};
      background-color: goldenrod;
      box-sizing: border-box;
      inline-size: 100%;
      padding-inline-start: 0.8rem;
      padding-inline-end: 0.8rem;
      background-color: transparent;
      block-size: inherit;
      border: 0;
      ::placeholder {
        color: ${p => p.theme.grey2};
      }
    }
  }
`
export const StyledUserProfileItem = styled(UserProfileItem)`
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding-inline-start: 0.37rem;
  padding-block-start: 0.25rem;
  padding-block-end: 0.25rem;
  span {
    font: ${p => p.theme.captionBold};
    font-size: 0.85rem;
    color: ${p => p.theme.colorRole(p.role)};
  }

  :hover {
    background-color: ${p => p.theme.blackHover};
    border-radius: 0.2rem;
  }

  & .user__image-wrapper {
    inline-size: 2rem;
    block-size: 2rem;
  }
  & :focus-within ${StyledUserDetail} {
    display: block;
  }
`

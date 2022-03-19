import styled from 'styled-components'

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
`
export const StyledUserProfileItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
`

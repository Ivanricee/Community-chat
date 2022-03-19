import styled from 'styled-components'

export const StyledHeader = styled.header`
  grid-area: top-menu;
  background-color: ${p => p.theme.bg};

  padding-inline-start: 0.75rem;
  font: ${p => p.theme.body1Bold};
  font-size: 0.9rem;
  color: ${p => p.theme.white};
  border-block-end: 1px solid ${p => p.theme.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledHeaderSearchHelp = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.bg};
  color: ${p => p.theme.grey2};
  & svg:not(.header__wrapper-input svg) {
    margin-inline-end: 1.2rem;
    font-size: 1.35rem;
    cursor: pointer;
  }
  & svg {
    vertical-align: middle;
    font-size: 0.8rem;
    :hover {
      color: ${p => p.theme.white};
    }
  }
  & :focus-within .header__wrapper-input {
    inline-size: 13.2rem;
  }
  & .header__wrapper-input {
    background-color: ${p => p.theme.black};
    transition: inline-size 0.4s;
    transition-timing-function: cubic-bezier(0.29, -0.07, 0, 1.35);
    inline-size: 9rem;
    block-size: min-content;
    margin-inline-end: 1rem;
    border-radius: 0.15rem;
    display: flex;
    justify-content: space-between;

    div:nth-of-type(1) {
      input {
        background-color: transparent;
        box-sizing: border-box;
        padding: 0.23rem;
        inline-size: 100%;
        color: ${p => p.theme.grey2};
        font: ${p => p.theme.captionRegular};
        border: 0;
        outline: none;
      }
    }
    div:nth-of-type(2) {
      padding-inline-end: 0.5rem;
      padding-inline-start: 0.5rem;
      cursor: text;
    }
  }
`

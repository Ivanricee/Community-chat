import styled from 'styled-components'

export const StyledMain = styled.main`
  grid-area: main;
`
export const StyledHeader = styled.header`
  background-color: ${p => p.theme.bg};
  block-size: 3rem;
  padding-inline-start: 0.75rem;
  font: ${p => p.theme.body1Bold};
  line-height: 3rem;
  font-size: 0.9rem;
  color: ${p => p.theme.white};
  border-block-end: 1px solid ${p => p.theme.black};
  box-sizing: border-box;
`

export const StyledCommentList = styled.section`
  block-size: calc(100vh - 7rem);
  scrollbar-width: thin; /* Firefox */

  &::-webkit-scrollbar {
    width: 0.35em;
    background-color: ${p => p.theme.black2};
  }
  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.black};
  }
  overflow-y: scroll;
`
export const StyledFooter = styled.footer`
  block-size: 4rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
`
export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-0.25rem);
  background-color: ${p => p.theme.gray5};
  border-radius: 0.5rem;
  block-size: 2.8rem;
  font-size: 1.7rem;
  inline-size: 3.5;
  overflow: hidden;

  & div:nth-child(1) {
    background-color: transparent;
    inline-size: 3.5rem;
    text-align: center;
    line-height: 0;
  }
  & div:nth-child(2) {
    background-color: transparent;
    flex: 1;
    line-height: 0;
    input[type='text'] {
      background-color: transparent;
      color: ${p => p.theme.white};
      font: ${p => p.theme.body2Regular};
      vertical-align: center;
      inline-size: 100%;
      border: 0;
      outline: none;
      &::placeholder {
        color: ${p => p.theme.grey};
      }
    }
  }
  & div:nth-child(3) {
    ${p => console.log('url ', p.urlEmoji)}
    background-color: transparent;
    box-sizing: border-box;
    padding-inline-start: 1rem;
    inline-size: 11rem;
    text-align: center;
    line-height: 0;
    i {
      padding: 0.35rem;
      &.ico-Grin {
        display: inline-block;
        block-size: 0.77rem;
        padding-inline-start: 2rem;
        background-color: red;
        background: no-repeat url(${p => p.urlEmoji});
        background-position-x: 0.35rem;
        filter: grayscale(100%);
        :hover {
          filter: grayscale(10%);
        }
      }
    }
  }
  i {
    cursor: pointer;
    :hover {
      ::before {
        color: ${p => p.theme.white};
      }
    }
  }
`

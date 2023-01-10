import styled from 'styled-components'
import { Introduction } from './Indroduction'

export const StyledMain = styled.main`
  grid-area: main;
  position: relative;
  z-index: 2;
  background-color: ${props => props.theme.bg};

  @media ${p => p.theme.breakPointsDevice.tablet} {
    ${p => !p.showChannel && 'transform: translateX(-19.5rem);'}
    ${p => p.showUserList && 'transform: translateX(-34.5rem);'}
    inline-size: 100vw;
    & .main__mobile-shadow-wrapper {
      position: absolute;
      inset: 0;
      background: rgba(19, 18, 21, 0.87);
      ${p => !p.showChannel && 'display: none;'}
      ${p => p.showUserList && 'display: block;'}
      z-index: 1;
    }
  }
  @media ${p => p.theme.breakPointsDevice.mobileL} {
    ${p => p.showUserList && 'transform: translateX(-2rem);'}
    ${p => p.showUserList && 'inline-size: calc(100% + 2rem);'}
  }
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    box-sizing: border-box;
    inline-size: 10.8rem;
    i {
      padding: 0.35rem;
      &.ico-Grin {
        display: block;
        inline-size: 1.5rem;
        block-size: 1.5rem;
        padding-inline-end: 0;
        transition: transform 0.17s ease-in-out;
        filter: grayscale(100%);
        img {
          inline-size: 100%;
        }
        :hover {
          filter: grayscale(10%);
          transform: scale(1.2);
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
export const StyledIntroduction = styled(Introduction)`
  margin: 1.2rem;
  margin-block-end: 4rem;
  & div > h1 {
    border-radius: 50%;
    inline-size: 4.25rem;
    block-size: 4.25rem;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font: ${p => p.theme.captionRegular};
    font-size: 2.8rem;
    background-color: #4d5159;
    color: ${p => p.theme.white};
  }
  & > h1 {
    font: ${p => p.theme.body1Bold};
    line-height: 2.5rem;
    font-size: 2rem;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
    color: ${p => p.theme.white};
  }
  & > span {
    color: ${p => p.theme.grey2};
  }
`

import styled from 'styled-components'

export const StyledDate = styled.div`
  //position: relative;
  border-block-start: 1px solid ${p => p.theme.separatorDate};
  margin-block-start: 0.5rem;
  text-align: center;
  font: ${p => p.theme.body2Regular};
  small {
    background-color: ${p => p.theme.bg};
    display: inline-block;
    color: ${p => p.theme.grey};
    transform: translateY(-50%);
    padding-inline-start: 0.5rem;
    padding-inline-end: 0.5rem;
  }
`

export const StyledComment = styled.div`
  inline-size: 100%;
  padding-block-start: 0.3rem;
  padding-block-end: 0.3rem;
  margin-block-end: 1rem;
  & .comment__submenu {
    position: relative;
    visibility: hidden;
    div {
      cursor: pointer;
      color: ${p => p.theme.grey2};
      font-size: 1.2rem;
      background-color: ${p => p.theme.bg};
      position: absolute;
      right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #292c31;
      border-radius: 0.35rem;
      transform: translateY(-50%);
      * {
        padding: 0.4rem;
        :hover {
          background-color: #3b3f46;
        }
      }
    }
  }
  :hover {
    background-color: ${p => p.theme.blackHover2};
    & .comment__submenu {
      visibility: visible;
    }
  }
  & .comment__wrapper {
    display: flex;
    box-sizing: border-box;
    & .comment__perfil-wrapper {
      margin-inline-end: 1rem;
      margin-inline-start: 1rem;
      & .comment__perfil {
        inline-size: 2.5rem;
        block-size: 2.5rem;
      }
    }
    & .comment__message-content {
      & .comment__user-date {
        inline-size: 100%;
        display: inline-block;
        p {
          display: inline-block;
          margin: 0;
          margin-inline-end: 0.25rem;
          font: ${p => p.theme.body2Bold};
          color: ${p => p.theme.colorRole(p.role)};
          cursor: pointer;
          :hover {
            text-decoration: underline;
          }
        }
        span {
          font: ${p => p.theme.captionRegular};
          color: ${p => p.theme.grey};
        }
      }
      & .comment__message {
        font: ${p => p.theme.captionRegular};
        line-height: 1.3rem;
        font-size: 0.87rem;
        color: ${p => p.theme.grey3};
        margin-inline-end: 4.5rem;
        padding-block-end: 0.28rem;
        span {
          font: ${p => p.theme.body2Semibold};
          padding-inline-start: 0.2rem;
          padding-inline-end: 0.2rem;

          background-color: ${p => p.theme.purple};
          border-radius: 0.25rem;
          :hover {
            cursor: pointer;
            background-color: ${p => p.theme.purpleHover};
          }
        }
      }
    }
  }
`
export const StyledMediaImg = styled.div`
  inline-size: ${p => (p.isInline ? `${p.inline}rem` : 'fit-content')};
  block-size: ${p => (p.isInline ? 'fit-content' : `${p.block}rem`)};
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    vertical-align: middle;
    cursor: pointer;
  }
`
export const StyledUrl = styled.div`
  color: ${p => p.theme.blue};
  font: ${p => p.theme.captionRegular};
  font-size: 0.87rem;
  margin-block-start: 0.25rem;
  margin-block-end: 0.25rem;
  margin-inline-end: 4.5rem;
  overflow-wrap: anywhere;
  a:visited,
  a:active {
    color: ${p => p.theme.blue};
  }
`
export const StyledReact = styled.div`
  display: inline-flex;
  margin-inline-end: 4.5rem;
  margin-block-start: 0.5rem;
  div {
    box-sizing: border-box;
    cursor: pointer;
    background-color: ${p => p.theme.bgReact};
    color: ${p => p.theme.grey3};
    padding: 0.3rem;
    padding-inline-end: 0.4rem;
    margin-inline-end: 0.22rem;
    border-radius: 0.3rem;
    font: ${p => p.theme.captionRegular};
    font-size: 1rem;
    transition: box-shadow 0.18s, background-color 0.15s;
    span {
      font-size: 0.9rem;
      padding-inline-start: 0.2rem;
    }
    :hover {
      background-color: ${p => p.theme.bg};
      box-shadow: 0px 0px 0px 1.5px ${p => p.theme.purple};
    }
  }
  .ico-add {
    font-size: 1.2rem;
    line-height: 1.4rem;
    cursor: pointer;
    visibility: hidden;
  }
  :hover {
    .ico-select {
      visibility: visible;
    }
  }
`
export const StyledDialogImg = styled.div`
  background-color: rgba(13, 14, 14, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 10;
  img {
    inline-size: ${p => (p.isInline ? `${p.inline}rem` : 'auto')};
    block-size: ${p => (p.isInline ? 'fit-auto' : `${p.block}rem`)};
  }
`

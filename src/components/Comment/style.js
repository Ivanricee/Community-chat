import styled from 'styled-components'

export const StyledComment = styled.div`
  inline-size: 100%;
  padding-block-start: 0.3rem;
  padding-block-end: 0.3rem;
  margin-block-end: 1rem;
  & .comment__wrapper {
    display: flex;
    box-sizing: border-box;
    :hover {
      background-color: ${p => p.theme.blackHover2};
    }
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
        margin-inline-end: 4.5rem;
        font: ${p => p.theme.body2Regular};
        color: ${p => p.theme.white};
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
  ${p => console.log('array result ', p.isInline[0])}
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

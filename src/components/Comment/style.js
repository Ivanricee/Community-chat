import styled from 'styled-components'

export const StyledComment = styled.div`
  inline-size: 100%;
  padding-block-start: 0.3rem;
  padding-block-end: 0.3rem;
  margin-block-end: 1rem;
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
          color: ${p => p.theme.yellow};
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

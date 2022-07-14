import styled from 'styled-components'

export const StyledUserInvite = styled.section`
  background-color: rgba(0, 6, 4, 0.83);
  color: ${p => p.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 3;
  & > aside {
    background-color: ${p => p.theme.bg};
    padding: 0.85rem;
    box-sizing: border-box;
    inline-size: 27.5rem;
    block-size: 25rem;
    border-radius: 0.3rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-block-end: 0.45rem;
    font-size: 1.5rem;
    h1 {
      font: ${p => p.theme.body1Bold};
      margin: 0;
    }
    button {
      cursor: pointer;
      color: ${p => p.theme.grey};
      background: transparent;
      border: 0;
      font-size: 1.5rem;
      :hover {
        color: ${p => p.theme.white};
      }
    }
  }
  main {
    & input {
      background-color: transparent;
      flex: 1;
      box-sizing: border-box;
      color: ${p => p.theme.grey2};
      border: 0;
      outline: none;
    }
    & .invite__channel {
      display: flex;
      align-items: center;
      margin-block-end: 0.65rem;
      font-size: 1.4rem;
      h2 {
        color: ${p => p.theme.grey3};
        display: inline;
        font: ${p => p.theme.captionRegular};
        font-size: 0.9rem;
        margin: 0;
        margin-inline-start: 0.5rem;
      }
    }
    & .invite__input-search {
      margin-block-end: 1.38rem;
      background-color: ${p => p.theme.black};
      padding: 0.4rem;
      border-radius: 0.35rem;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      input {
        font: ${p => p.theme.captionRegular};
        padding: 0;
      }
    }
    hr {
      border-color: ${p => p.theme.blackHover};
      margin-inline: -0.6rem;
      margin-block: 0.7rem;
    }
    & .invite__user-found {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-block-end: 0.9rem;
      padding: 0.35rem;
      :hover {
        background-color: ${p => p.theme.gray5};
        & button {
          background-color: ${p => p.theme.green};
        }
      }
      & > div {
        flex: 1;
        display: flex;
        align-items: center;
        pointer-events: none;
        div {
          inline-size: 2.25rem;
          block-size: 2.25rem;
        }
        p {
          margin: 0;
          margin-inline-start: 0.7rem;
        }
      }
      & button {
        block-size: 2rem;
        font: ${p => p.theme.button};
        inline-size: 4.5rem;
        background-color: transparent;
        border: 1px solid ${p => p.theme.green};
        color: ${p => p.theme.white};
        border-radius: 0.15rem;
        cursor: pointer;
        :hover {
          border: 0;
          background-color: #1b6c4a;
        }
        :active {
          opacity: 0.8;
        }
      }
    }
    & .invite__copy-clipboard {
      margin-block-start: 1rem;
      h2 {
        font: ${p => p.theme.captionBold};
        color: ${p => p.theme.gray4};
        margin: 0;
        font-size: 0.75rem;
        margin-block-end: 0.5rem;
      }
      & > div {
        background-color: ${p => p.theme.black};
        padding: 0.25rem;
        border-radius: 0.35rem;
        margin-block-end: 0.4rem;
        display: flex;
        form {
          flex: 1;
          display: flex;
          input {
            font-size: 0.9rem;
            color: ${p => p.theme.gray4};
            flex: 1;
          }
          button {
            color: ${p => p.theme.white};
            font: ${p => p.theme.button};
            block-size: 1.5rem;
            background-color: ${p =>
              p.clipbboard ? p.theme.green : p.theme.purpleBtn};
            border: 0;
            border-radius: 0.15rem;
            block-size: 2.1rem;
            inline-size: 4.5rem;
            cursor: pointer;
            :hover {
              background-color: ${p =>
                p.clipbboard ? p.theme.green : p.theme.purpleBtn};
            }
          }
        }
      }
      & small {
        margin-block-start: 1rem;
        font-size: 0.72rem;
        color: ${p => p.theme.gray4};
        span {
          color: ${p => p.theme.blue};
        }
      }
    }
  }
  footer {
    display: flex;
    align-items: center;
    padding: 0.7rem;
    margin-block-start: 1rem;
    font: ${p => p.theme.captionRegular};
    background-color: ${p => p.theme.bgReact};
    p {
      color: ${p => p.theme.gray4};
      margin: 0;
    }
    span {
      color: ${p => p.theme.blue};
    }
  }
`

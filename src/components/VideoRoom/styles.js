import styled from 'styled-components'

export const StyledVideoRoom = styled.div`
  background-color: #0d0f12;
  inset: 0;
  padding: 4rem 0.5rem;
  inset-inline-start: 19.5rem;
  position: absolute;
  z-index: 2;
  :hover {
    .top,
    .down,
    & .video_participant .video__metadata {
      opacity: 1;
    }
  }
  .button__back {
    background: transparent;
    border: 0;
    color: ${p => p.theme.white};
    position: absolute;
    inset-block-start: 2rem;
    inset-inline-start: 2rem;
    font-size: 1.7rem;
    border-radius: 50%;
    display: none;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;

    svg {
      transform: translateX(-6%);
    }
    :hover {
      background-color: ${p => p.theme.gray5};
    }
    :active {
      background-color: ${p => p.theme.greyBtnHover};
    }
    @media ${p => p.theme.breakPointsDevice.tablet} {
      display: flex;
    }
  }
  @media ${p => p.theme.breakPointsDevice.tablet} {
    inset-inline-start: 0rem;
  }
`
export const StyledUserRegister = styled.section`
  color: ${p => p.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  block-size: 100%;
  flex-wrap: wrap;
  .register__wrapper {
    & > div {
      background-color: ${p => p.theme.bg};
      padding: 0.85rem;
      box-sizing: border-box;
      inline-size: 27.5rem;
      block-size: 14rem;
      block-size: auto;
      border-radius: 0.3rem;
      transition: display 1s;
    }
    .register__message {
      display: ${p => (p.message && p.message.length > 0 ? 'flex' : 'none')};
      margin-block-end: 1rem;
      justify-content: space-between;
      align-items: center;
      small {
        margin: 0;
        inline-size: calc(100% - 2rem);
        font: ${p => p.theme.body2Semibold};
        font-size: 0.75rem;
      }
      button {
        cursor: pointer;
        color: ${p => p.theme.grey};
        background: transparent;
        border: 0px;
        border-radius: 0.3rem;
        transition: color 0.5s;
        :hover {
          color: ${p => p.theme.white};
        }
      }
      svg {
        font-size: 2.5rem;
      }
    }
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
    & .register__channel {
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
    & .register__input-search {
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
    & .register__user-found {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-block-end: 0.9rem;
      padding: 0.35rem;
      & .video__img {
        font: ${p => p.theme.headline1};
        font-size: 1.5rem;
        background: ${p => p.theme.green};
        block-size: 2.5rem;
        inline-size: 2.5rem;
        border-radius: 50%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
        :disabled {
          border-color: ${p => p.theme.grey2};
          color: ${p => p.theme.grey2};
          background-color: transparent;
        }
      }
    }
    & .register_loading-room {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media ${p => p.theme.breakPointsDevice.mobileL} {
    .register__wrapper {
      & > div {
        inline-size: 100vw;
      }
    }
  }
`

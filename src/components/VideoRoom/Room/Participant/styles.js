import styled from 'styled-components'

export const StyledParticipant = styled.div`
  background-color: #0d0f12;
  height: 100%;
  inline-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  & > div {
    & > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      block-size: 100%;
      margin: 0.25rem;
      border-radius: 0.5rem;
    }
    display: flex;
    flex-flow: column;
    box-sizing: border-box;
    aspect-ratio: 16/9;
    inline-size: ${p => p.itemInlineSize || 0}px;
    min-height: 0;
    transition: inline-size 0.15s;
    cursor: pointer;
    pointer-events: auto;
    & .video_participant {
      background-color: ${p => p.theme.black};
      position: relative;
      overflow: hidden;
      video {
        inline-size: 100%;
        aspect-ratio: 16/9;
      }
      & .video__metadata {
        display: flex;
        opacity: 0;
        justify-content: space-between;
        position: absolute;
        inset-inline-start: 0.5rem;
        inset-inline-end: 0.5rem;
        inset-block-end: 0.5rem;
        font: ${p => p.theme.captionRegular};
        font-size: 1rem;
        div {
          display: flex;
          border-radius: 0.4rem;
          padding: 0.5rem;
          background-color: rgba(0, 0, 0, 0.5);
          span {
            margin: auto 0;
          }
          :nth-of-type(2) {
            font-size: 1.2rem;
            border-radius: 50%;
          }
        }
      }
      .video__img-wrapper {
        position: absolute;
        & .video__img {
          font: ${p => p.theme.headline1};
          font-size: 2.5rem;
          background: blueviolet;
          block-size: 5rem;
          inline-size: 5rem;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    & .video_welcome {
      background-color: ${p => p.theme.black1};
      font: ${p => p.theme.body2Semibold};
      color: ${p => p.theme.white};
      padding: 0 1.5rem;
      img {
        display: ${p => (p.itemInlineSize > '450' ? 'block' : 'none')};
      }
      p {
        inline-size: 100%;
        margin-block-start: 0;
        text-align: center;
      }
      button {
        background-color: ${p => p.theme.greyBtn};
        border-radius: 5rem;
        display: inline-block;
        cursor: pointer;
        color: ${p => p.theme.white};
        font-family: Arial;
        font-size: 1rem;
        font: ${p => p.theme.body2Semibold};
        padding: 0.6rem 1.2rem;
        border: none;
        :hover {
          background-color: ${p => p.theme.greyBtnHover};
        }
      }
    }
  }
`

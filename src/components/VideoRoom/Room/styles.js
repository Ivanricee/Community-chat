import styled from 'styled-components'

export const StyledRoom = styled.div`
  block-size: 100%;
  .video__wrapper-participant {
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
    & .video_welcome {
      transition: inline-size 0.15s;
      inline-size: ${p => p.itemInlineSize || 0}px;
      padding: 0.25rem;
      box-sizing: border-box;
      aspect-ratio: 16/9;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${p => p.theme.black1};
        font: ${p => p.theme.body2Semibold};
        color: ${p => p.theme.white};
        padding: 0 1.5rem;
        block-size: 100%;
        border-radius: 0.5rem;

        .video_content {
          text-align: center;
          img {
            display: ${p => (p.itemInlineSize > '450' ? 'inline' : 'none')};
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
    }
  }
  & .video_settings {
    position: absolute;
    display: block;
    inline-size: calc(100% - 1rem);
    font-size: 1.5rem;
    block-size: 8rem;
    pointer-events: none;
    box-sizing: border-box;
    & div {
      svg {
        padding: 0.5rem;
        color: ${p => p.theme.grey2};
        :hover {
          color: ${p => p.theme.white};
        }
      }
    }
  }
  & .top {
    opacity: 0;
    transition: opacity ease-in-out 0.3s;
    inset-block-start: 0;
    padding-block-start: 0.5rem;
    background: linear-gradient(
      0deg,
      rgba(253, 187, 45, 0) 15%,
      rgba(10, 15, 15, 1) 100%
    );
    div {
      display: flex;
      align-items: center;
      span {
        font: ${p => p.theme.body1Bold};
      }
    }
  }
  & .down {
    display: flex;

    justify-content: space-between;
    align-items: end;
    opacity: 0;
    transition: opacity ease-in-out 0.3s;
    inset-block-end: 0;
    padding-block-end: 0.5rem;
    background: linear-gradient(
      0deg,
      rgba(10, 15, 15, 1) 0%,
      rgba(253, 187, 45, 0) 88%
    );
    & div {
      svg {
        padding: 1.15rem;
        pointer-events: all;
        cursor: pointer;
      }
    }
    & div:nth-of-type(1) {
      svg {
        padding-inline-start: 0.8rem;
      }
    }
    & div:nth-of-type(2) {
      svg {
        color: ${p => p.theme.white};
        border-radius: 50%;
        margin-inline-end: 0.8rem;
        background: ${p => p.theme.blackHover2};
        :not(.call):not(.isActive):hover {
          background-color: ${p => p.theme.black2};
        }
      }
      .call {
        background-color: ${p => p.theme.red};
      }
      .isActive {
        background: ${p => p.theme.white};
        color: ${p => p.theme.blackHover2};
        :hover {
          background-color: ${p => p.theme.grey3};
        }
      }
    }
  }
`

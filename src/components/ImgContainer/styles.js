import styled from 'styled-components'

export const StyledImgContainer = styled.div`
  inline-size: 100%;
  block-size: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  &::after {
    //red/green-bullet
    ${p => p.theme.redBullet}
    background-color: ${p =>
      p.greenBulletType === '1'
        ? props => props.theme.green
        : props => props.theme.red};

    border-color: ${p =>
      p.borderColor === 'black'
        ? props => props.theme.black
        : props => props.theme.black2};
    ${p => p.greenBulletType === '1' && 'inset-block-start: 1.21rem;'}
    ${p => p.greenBulletType === '1' && 'inset-inline-start: 1.23rem;'}
    ${p => p.greenBulletType === '2' && 'inset-block-start: 3.3rem;'}
    ${p => p.greenBulletType === '2' && 'inset-inline-start: 3.3rem;'}
    content: ${p => `"${p.content}"`};
    inline-size: ${p => p.inlineSize}rem;
    block-size: ${p => p.blockSize}rem;
    transform: translateX(-${p => p.translateX}rem);
    display: ${p => p.display};
  }
  & .item-cover {
    border-radius: 50%;
    inline-size: 100%;
    block-size: 100%;
    overflow: hidden;
    transition: border-radius 0.2s;
    & img {
      inline-size: inherit;
      block-size: auto;
    }
  }
`

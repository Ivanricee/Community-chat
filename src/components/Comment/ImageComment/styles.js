import styled from 'styled-components'

export const StyledDialogImg = styled.section`
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

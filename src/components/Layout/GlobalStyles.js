import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  background-color: ${props => props.theme.bg};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: 100vh;
  font-family: sans-serif;
}`

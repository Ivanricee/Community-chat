import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  background-color: azure;
  font-size: 16px;
  font-family: sans-serif;
}
body{
  margin:0px;
  padding:0px;
}
#app{
  background-color: ${props => props.theme.bg};
  block-size: 100vh;
  display: grid;
  grid-template-columns: 4.5rem 15rem 1fr 15rem;
  grid-template-rows: 3rem 1fr;
  grid-template-areas: "left-menu top-nav top-nav top-nav"
                       "left-menu channel main user"
}
`

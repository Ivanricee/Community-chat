import { createGlobalStyle } from 'styled-components'
import iconDiscordttf from '../../assets/icon/fonts/iconDiscord.ttf'
import iconDiscordwoff from '../../assets/icon/fonts/iconDiscord.woff'
import iconDiscordsvg from '../../assets/icon/fonts/iconDiscord.svg'

export const GlobalStyles = createGlobalStyle`
:root{
  font-size: 16px;
  font-family: sans-serif;
}
body{
  margin:0px;
  padding:0px;
  color:white;
}
#app{
  background-color: ${props => props.theme.bg};
  block-size: 100vh;
  display: grid;
  grid-template-columns: 4.5rem 15rem 1fr 15rem;
  grid-template-rows:  1fr;
  grid-template-areas: "left-menu channel main user"
}
@font-face {
  font-family: 'iconDiscord';
  src:
    url(${iconDiscordttf}) format('truetype'),
    url(${iconDiscordwoff}) format('woff'),
    url(${iconDiscordsvg}) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

i {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'iconDiscord' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ico-add:before {
  content: "\\e900";
  color: #b9bbbe;
}
.ico-addFile{
&::before {
  content: "\\e901";
  color: #b9bbbe;
}
}
.ico-deafen:before {
  content: "\\e902";
  color: #b9bbbe;
}
.ico-emoji:before {
  content: "\\e903";
  color: #b9bbbe;
}
.ico-gif:before {
  content: "\\e904";
  color: #b9bbbe;
}
.ico-gift:before {
  content: "\\e905";
  color: #b9bbbe;
}
.ico-menu:before {
  content: "\\e906";
}
.ico-mute:before {
  content: "\\e907";
  color: #b9bbbe;
}
.ico-settings:before {
  content: "\\e908";
  color: #b9bbbe;
}
.ico-sticker:before {
  content: "\\e909";
  color: #b9bbbe;
}
.ico-users:before {
  content: "\\e90a";
}
.ico-x:before {
  content: "\\e90b";
  color: #b9bbbe;
}

`

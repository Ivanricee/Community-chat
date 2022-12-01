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
  overflow: hidden;
  grid-template-columns: 4.5rem 15rem minmax(23rem, calc(100vw - 34.5rem)) 15rem;
  grid-template-rows:  3rem 1fr ;
  grid-template-areas: "left-menu channel top-menu top-menu"
                       "left-menu channel   main     ${p =>
                         p.showUserMenu ? 'user' : 'main'}"

}

@media ${p => p.theme.breakPointsDevice.tablet} {
  #app{
    position:relative;
    grid-template-columns: 4.5rem 15rem minmax(0rem, calc(100vw - 34.5rem)) 15rem;
    grid-template-areas: "left-menu channel top-menu user"
                         "left-menu channel   main     user"
  }
}
@media ${p => p.theme.breakPointsDevice.mobileL} {
  #app{
    position:relative;
    ${p => p.showUserMenu && 'justify-content: end;'}

    grid-template-columns: 4.5rem 15rem minmax(0rem, calc(100vw - 34.5rem)) 15rem;
     ${p =>
       p.showUserMenu &&
       'grid-template-areas:"top-menu  top-menu top-menu   user" "main main   main     user"'}
  }
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

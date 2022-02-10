import { css } from 'styled-components'
// import { scale } from './animation'

export const darkTheme = {
  black: '#202225',
  blue: '#4eacee',
  green: '#2bac76',
  white: '#ffffff',
  grey: '#8f9296',
  pink: '#d63864',
  red: '#ed4245',
  black1: '#2f3136',
  blackHover: '#3a3c42',
  blackHover2: '#32353c',
  bg: '#36393F',
  yellow: '#eac645',
  black2: '#292b2f',
  purple: '#414672',
  grey2: '#b9bbbe',
  grey3: '#dfe3e0',
  gray4: '#C7C9CB',
  gray5: '#40444B',
  headline1: '600 1.75rem/normal "Poppins", sans-serif',
  headline2: '600 1.5rem/normal "Poppins", sans-serif',
  headline3: '600 1.25rem/1.375rem "Poppins", sans-serif',
  button: '400 0.875rem/1rem "Poppins", sans-serif',
  body1Regular: '400 1rem/1.5rem "Poppins", sans-serif',
  body1Bold: '700 1rem/1.5rem "Poppins", sans-serif',
  body2Bold: '700 0.875rem/1.5rem "Poppins", sans-serif',
  body2Semibold: '500 0.875rem/1.5rem "Poppins", sans-serif',
  body2Regular: '400 0.875rem/1.35rem "Poppins", sans-serif',
  captionRegular: '400 0.75rem/1rem "Poppins", sans-serif',
  captionBold: '600 0.75rem/1rem "Poppins", sans-serif',
  redBullet: css`
    position: absolute;
    border: 0.23rem solid;
    border-radius: 1rem 1rem;
    font: ${props => props.theme.captionBold};
    color: ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    inline-size: 1rem;
    block-size: 1rem;
    inset-block-start: 1.78rem;
    inset-inline-start: 1.78rem;
  `,
  colorRole(role) {
    switch (role) {
      case '1': // admin
        return this.yellow
      case '2': // menber
        return this.green
      case '3': // twitch
        return this.pink
      case '4': // no rol
        return this.grey2
      default:
        return this.grey2
    }
  },
  /* scale: css`
    ${scale} .3s;
  `, */
}

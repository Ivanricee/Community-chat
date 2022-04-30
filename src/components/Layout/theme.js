import { css } from 'styled-components'
// import { scale } from './animation'

export const darkTheme = {
  black: '#202225',
  blue: '#288fea',
  green: '#2bac76',
  white: '#e3e9ec',
  grey: '#8f9296',
  separatorDate: '#44464a',
  pink: '#d63864',
  red: '#ed4245',
  black1: '#2f3136',
  blackHover: '#3a3c42',
  blackHover2: '#32353c',
  bgReact: '#2f3136',
  bg: '#36393F',
  yellow: '#eac645',
  black2: '#292b2f',
  purple: '#414672',
  purpleHover: '#5765d9',
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
    return (
      {
        1: this.yellow,
        2: this.green,
        3: this.pink,
        4: this.grey2,
        5: '#afea0e',
        6: '#eab30e',
        7: '#0eeac1',
      }[role] || this.grey2
    )
  },
  breakPointsDevice: {
    mobileL: 'screen and (max-width: 929px)',
    // tablet: 'screen and (min-width: 930px) and (max-width: 1023px)',
    tablet: 'screen and (max-width: 1023px)',
  },
  /* scale: css`
    ${scale} .3s;
  `, */
}

import { css } from 'styled-components'

import { Poppins, Montserrat } from '../assets/fonts/index'

export const MainFontFace = css`
  @font-face {
    font-family: 'Poppins';
    src: url('${Poppins}') format('opentype');
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('${Montserrat}}') format('opentype');
  }
`

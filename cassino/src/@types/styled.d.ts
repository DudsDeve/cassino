/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from '@/styles/theme'
import 'styled-components'

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}

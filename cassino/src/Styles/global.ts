import { createGlobalStyle } from "styled-components";
import { MainFontFace } from "./fonts";

export const GlobalStyle = createGlobalStyle`

${MainFontFace};

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  body{
    font-family: ${({theme}) => theme.FONT_FAMILY.Poppins};
  }

`
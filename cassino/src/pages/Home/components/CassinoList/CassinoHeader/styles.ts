import styled from 'styled-components'
import { pixelToRem } from '../../../../../utils/helpers'

export const Container = styled.div`
width: 100%;
height: ${pixelToRem(50)};
display: grid;
grid-template-columns: 20px 2fr 2fr 200px 200px 200px ;
background-color: black;
color: white;
align-items: center;
padding-left:  ${pixelToRem(25)};
span{
    display: flex;
    justify-content:start;
}
`
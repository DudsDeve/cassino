import styled from 'styled-components'
import { pixelToRem } from '../../../../../../utils/helpers'

export const Logo = styled.div`
width:100%;

display: flex;
    justify-content:start;

img{
    width: ${pixelToRem(150)};
    height: ${pixelToRem(100)};
}`
export const Bonus = styled.div`
display: flex;
align-items: center;
span{
    font-size:20px
}`
export const Credibilidade = styled.div`
display: flex;
align-items: center;
img{
    width: ${pixelToRem(130)};
    height: ${pixelToRem(100)}; 
}


`
export const Nota = styled.div`
display: flex;
align-items: center;
b{
    font-size: 60px;
}`
export const Jogar = styled.div`
display: flex;
align-items: center;`

export const Id = styled.div`

display: flex;
align-items: center;
background-color: #F8F9FA;
`
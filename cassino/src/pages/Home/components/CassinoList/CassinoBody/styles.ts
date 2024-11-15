import styled from 'styled-components'
import { pixelToRem } from '../../../../../utils/helpers'

export const Container = styled.div`
width: 100%;
height: 100vh;
`

export const Cassinos = styled.div`
width: 100%;
height: ${pixelToRem(100)};

align-items: center;
justify-content: center;
display: grid;
grid-template-columns: 20px 2fr 2fr 200px 200px  200px ;
padding-left: ${pixelToRem(20)};
border-bottom: 1px solid white;
`
export const Id = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
color: white;
border-right: 1px solid white;

`

export const Logo = styled.div`
img{
    width: ${pixelToRem(150)};
    height: ${pixelToRem(100)};
}`
export const Bonus = styled.div``
export const Credibilidade = styled.div``
export const Nota = styled.div``
export const Jogar = styled.div``





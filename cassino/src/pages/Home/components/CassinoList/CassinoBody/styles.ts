import styled from 'styled-components'
import { pixelToRem } from '../../../../../utils/helpers'

export const Container = styled.div`
width: 100%;
height: 100vh;

`

export const Cassinos = styled.div`
width: 100%;
height: ${pixelToRem(100)};
display: grid;
grid-template-columns: 20px 2fr 2fr 200px 200px 200px ;
padding-left: ${pixelToRem(20)};
border-bottom: 1px solid white;
background-color: white;
`






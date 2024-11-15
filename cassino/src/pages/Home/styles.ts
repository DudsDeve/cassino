import styled from 'styled-components'
import MoneyBG from '../../assets/moneyBG.jpg'

export const Background = styled.div`
width: 100%;
height: 100vh;
background-image: url(${MoneyBG});
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
z-index: -1;
`

export const Container = styled.div`
width: 70%;
height:100vh;
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,0.7931547619047619) 0%, rgba(0,39,121,0.7567401960784313) 100%);
`
import {
  Bonus,
  Cassinos,
  Container,
  Credibilidade,
  Id,
  Jogar,
  Logo,
  Nota,
} from "./styles";
import Bet365Logo from "../../../../../assets/cassinoLogo/bet65-logo.png"
export function CassinoBody() {
  return (
    <Container>
      <Cassinos>
        <Id>1</Id>
        <Logo><img src={Bet365Logo} alt="bet365"/></Logo>
        <Bonus>a</Bonus>
        <Credibilidade>a</Credibilidade>
        <Nota>a</Nota>
        <Jogar>a</Jogar>
      </Cassinos>
    </Container>
  );
}

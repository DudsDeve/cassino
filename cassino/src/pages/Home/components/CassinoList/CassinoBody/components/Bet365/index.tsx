import Bet365Logo from "../../../../../assets/cassinoLogo/bet365-logo.png";
import StarsIcon from "../../../../../assets/cassinoLogo/stars-icon.svg";
import { Button } from "../../../../../../../components/Button";
import { Id, Logo, Bonus, Credibilidade, Nota, Jogar } from "../styles";
export function Bet365() {
  return (
    <>
      <Id>1</Id>
      <Logo>
        <img src={Bet365Logo} alt="bet365" />
      </Logo>
      <Bonus>
        <span>100 giradas grátis</span>
      </Bonus>
      <Credibilidade>
        <img src={StarsIcon} alt="stars" />
      </Credibilidade>
      <Nota>
        <b>9.9</b>
      </Nota>
      <Jogar>
        <Button />
      </Jogar>
    </>
  );
}

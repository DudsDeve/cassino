import { CassinoBody } from "./CassinoBody";
import { CassinoHeader } from "./CassinoHeader";
import { Container } from "./styles";

export function CassinoList() {
  return (
    <Container>
      <CassinoHeader />
      <CassinoBody/>
    </Container>
  );
}

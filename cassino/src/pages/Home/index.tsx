import { CassinoList } from "./components/CassinoList";
import { Background, Container } from "./styles";

export function Home() {
  return (
    <Background>
      <Container>
        <CassinoList />
      </Container>
    </Background>
  );
}

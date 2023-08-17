import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <ButtonText title="Voltar" />
          <Note
            isFilled
            data={{
              title: "Interstellar",
              tags: [
                { id: 1, name: "Sci-fi" },
                { id: 2, name: "Christopher Nolan" },
              ],
            }}
          >
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se comunicar com ela. Pai e
              filha descobrem que o "fantasma" é uma inteligência desconhecida.
            </p>
          </Note>
        </header>
      </Content>
    </Container>
  );
}

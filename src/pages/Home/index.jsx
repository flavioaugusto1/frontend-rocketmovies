import { FiPlus } from "react-icons/fi";

import { Container, Title, Content } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />

      <Title>
        <h1>Meus filmes</h1>
        <Button title="Adicionar filme" icon={FiPlus} />
      </Title>

      <Content>
        <main>
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

          <Note
            isFilled
            data={{
              title: "Harry Potter e a Câmara Secreta",
              tags: [{ id: 1, name: "Fantasia" }],
            }}
          >
            <p>
              Harry Potter e a Câmara Secreta é o segundo livro da série de J.K.
              Rowling12. A história se passa na Escola de Magia e Bruxaria de
              Hogwarts e envolve a lenda de uma câmara secreta que abriga um
              monstro que pode matar bruxos que não provém de famílias mágicas1.
              Harry Potter, Rony Weasley e Hermione Granger tentam desvendar e
              resolver o mistério dos alunos petrificados1. O livro foi aclamado
              por críticos literários e escritores, embora alguns comentários
              digam que a trama é igual a de Pedra Filosofal1. Harry Potter e a
              Câmara Secreta também foi adaptado para um filme de fantasia e
              aventura3.
            </p>
          </Note>

          <Note
            isFilled
            data={{
              title: "A Origem",
              tags: [
                { id: 1, name: "Sci-fi" },
                { id: 2, name: "Christopher Nolan" },
              ],
            }}
          >
            <p>
              A Origem é um filme de ficção científica que conta a história de
              como um grupo de golpistas utiliza uma "máquina de invadir sonhos"
              para poder conquistar os seus objetivos mais audaciosos1.
            </p>
          </Note>

          <Note
            isFilled
            data={{
              title: "Os suspeitos",
              tags: [{ id: 1, name: "Suspense" }],
            }}
          >
            <p>
              Ambientada em Boston, a história gira em torno do carpinteiro
              Keller Dover (Jackman), que está vivendo um pesadelo como pai: a
              filha de apenas seis anos e sua amiga desaparecem misteriosamente,
              sem deixar rastros. No entanto, quando ele suspeita que o detetive
              Loki (Gyllenhaal), encarregado das buscas, já desistiu de procurar
              pelo culpado por falta de mais evidências, Dover fica cada vez
              mais desesperado. Ao saber que a vida da filha está em jogo, ele
              passa a investigar o caso sozinho e procura fazer justiça com as
              próprias mãos.
            </p>
          </Note>
        </main>
      </Content>
    </Container>
  );
}

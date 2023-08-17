import { Container, Content, Form } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>
        <h1>Novo Filme</h1>
        <Form>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota de (0 a 5)" />

          <TextArea placeholder="Observações" />

          <section>
            <h2>Marcadores</h2>
            <div>
              <NoteItem placeholder="Novo marcador" value="Fantasia" />
              <NoteItem placeholder="Novo marcador" value="Fantasia" />
              <NoteItem placeholder="Novo marcador" value="Fantasia" />
              <NoteItem placeholder="Novo marcador" value="Fantasia" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </section>

          <Button title="Excluir filme" className="delete" />
          <Button title=" Salvar alterações" />
        </Form>
      </Content>
    </Container>
  );
}

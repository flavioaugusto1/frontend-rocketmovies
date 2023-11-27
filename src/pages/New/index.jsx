import { useState } from "react";
import { Container, Content, Form } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function New() {
  const [tags, setTags] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>

        <div className="wrap">
          <h1>Novo Filme</h1>
          <Form>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota de (0 a 5)" />

            <TextArea placeholder="Observações" />

            <section>
              <h2>Marcadores</h2>
              <div>
                {tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <NoteItem
                  isNew
                  placeholder="Novo marcador"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </section>

            <Button title="Excluir filme" className="delete" />
            <Button title=" Salvar alterações" />
          </Form>
        </div>
      </Content>
    </Container>
  );
}

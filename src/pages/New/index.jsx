import { useState } from "react";
import { Container, Content, Form } from "./styles";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function New() {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = new useNavigate();

  function handleAddTag() {
    if (!newTag) {
      return alert("Você precisa preencher o marcador para adicionar.");
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (newTag) {
      return alert("Você esqueceu o marcador preenchido mas não adicionou.");
    }

    await api.post("/notes", {
      title,
      rating: grade,
      description,
      tags,
    });

    alert("Nota cadastrada com sucesso");
    navigate("/");
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
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota de (0 a 5)"
              onChange={(e) => setGrade(Number(e.target.value))}
            />
            <TextArea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />

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
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </section>

            <div className="buttonSave">
              <Button title=" Salvar Filme" onClick={handleNewMovie} />
            </div>
          </Form>
        </div>
      </Content>
    </Container>
  );
}

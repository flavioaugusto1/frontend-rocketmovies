import { useEffect, useState } from "react";
import { Container, Content, Form } from "./styles";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function Update() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const params = useParams();
  const navigate = new useNavigate();

  function handleAddTag() {
    if (!newTag) {
      return alert("Você precisa preencher o marcador para adicionar.");
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleReturnPage() {
    navigate(-1);
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleUpdateMovie() {
    if (newTag) {
      return alert("Você esqueceu o marcador preenchido mas não adicionou.");
    }

    await api.post(`/notes/update/${params.id}`, {
      title,
      rating,
      description,
      tags,
    });

    alert("Nota cadastrada com sucesso");
    navigate("/");
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/show/${params.id}`);
      const tags = response.data.tags.map((tag) => tag.name);
      setData(response.data);
      setTags(tags);
      setTitle(response.data.title);
      setRating(response.data.rating);
      setDescription(response.data.description);
    }

    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="Voltar" onClick={handleReturnPage} />

        {data && (
          <div className="wrap">
            <h1>Editar filme</h1>
            <Form>
              <Input
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <Input
                placeholder="Sua nota de (0 a 5)"
                onChange={(e) => setRating(Number(e.target.value))}
                value={rating}
              />
              <TextArea
                placeholder="Observações"
                value={description}
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
                    onChange={(e) => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                  />
                </div>
              </section>

              <div className="buttonSave">
                <Button title=" Salvar Filme" onClick={handleUpdateMovie} />
              </div>
            </Form>
          </div>
        )}
      </Content>
    </Container>
  );
}

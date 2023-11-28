import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

import { Container, Title, Content } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState(0);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/index?title=${search}`);
      const rating = response.data.map((note) => {
        return note.rating;
      });
      setNotes(response.data);
      setGrade(rating)
    }

    fetchNotes();
  }, [search]);

  console.log(grade);
  return (
    <Container>
      <Header search={setSearch} />

      <Title>
        <h1>Meus filmes</h1>
        <Link to="/new">
          <Button title="Adicionar filme" icon={FiPlus} />
        </Link>
      </Title>

      <Content>
        <main>
          {notes.map((note) => (
            <Note isFilled key={String(note.id)} data={note}></Note>
          ))}
        </main>
      </Content>
    </Container>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { MagicMotion } from "react-magic-motion";

import { Container, Title, Content } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/index?title=${search}`);

      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

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
          <MagicMotion>
            {notes.map((note) => (
              <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
            ))}
          </MagicMotion>
        </main>
      </Content>
    </Container>
  );
}

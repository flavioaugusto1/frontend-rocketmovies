import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { MagicMotion } from "react-magic-motion";

import { Container, Title, Content } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
      <Header search={setSearch} onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <div className="wrap-content">
        <Title>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button
              title="Adicionar filme"
              icon={FiPlus}
              className="newMovie"
            />
          </Link>

          <div className="search-film">
            <Input
              placeholder="Pesquisar pelo título"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Title>
        <Content>
          <main>
            <MagicMotion>
              {notes.map((note) => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))}
            </MagicMotion>
          </main>
        </Content>
      </div>
    </Container>
  );
}

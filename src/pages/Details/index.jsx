import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { FiClock } from "react-icons/fi";
import { Container, Content, Title, Tag } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tags } from "../../components/Tags";
import { Link } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const params = useParams();

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/show/${params.id}`);

      formatDate(response.data.created_at);
      setData(response.data);
    }

    function formatDate(fullDate) {
      const arrayDate = fullDate.split(" ");
      const date = arrayDate[0].split("-").reverse().join("/");
      const hours = arrayDate[1];

      setDate(date);
      setHours(hours);
    }

    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Content>
          <header>
            <Link to="/">
              <ButtonText title="Voltar" />
            </Link>

            <Title>
              <h1>{data.title}</h1>
            </Title>

            <footer>
              <span>
                <img src={avatarUrl} alt="imagem do usuário" />
                {user.name}
              </span>

              <span className="date">
                <FiClock />
                <span>{date}</span>
                <span>{hours}</span>
              </span>
            </footer>
          </header>

          {data.tags && (
            <Tag>
              {data.tags.map((tag) => (
                <Tags key={tag.id} title={tag.name} />
              ))}
            </Tag>
          )}

          <p>{data.description}</p>
        </Content>
      )}
    </Container>
  );
}

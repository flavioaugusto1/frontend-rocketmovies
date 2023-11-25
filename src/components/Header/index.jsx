import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <div className="wrap">
        <div className="user">
          <Profile to="/profile">
            <p>Flávio Augusto</p>
          </Profile>
          <a onClick={signOut}>Sair</a>
        </div>

        <Profile to="/profile">
          <img
            src="https://github.com/flavioaugusto1.png"
            alt="imagem do usuário"
          />
        </Profile>
      </div>
    </Container>
  );
}

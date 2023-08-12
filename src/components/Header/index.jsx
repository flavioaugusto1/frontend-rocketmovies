import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <p>Flávio Augusto</p>
          <a href="#">Sair</a>
        </div>
        <img
          src="https://github.com/flavioaugusto1.png"
          alt="imagem do usuário"
        />
      </Profile>
    </Container>
  );
}

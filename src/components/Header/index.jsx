import { Container, Profile, SideMenuIcon } from "./styles";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";
import { Input } from "../Input";

export function Header({ search, tag, onOpenMenu }) {
  const { signOut } = useAuth();
  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <SideMenuIcon onClick={onOpenMenu} />
      <h1>RocketMovies</h1>

      <div className="search-film">
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => search(e.target.value)}
        />
      </div>

      <div className="wrap-profile">
        <div className="user">
          <Profile to="/profile">
            <p>{user.name}</p>
          </Profile>
          <a onClick={signOut}>Sair</a>
        </div>

        <Profile to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Profile>
      </div>
    </Container>
  );
}

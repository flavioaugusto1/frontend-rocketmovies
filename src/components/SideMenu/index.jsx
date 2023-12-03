import { useNavigate } from "react-router-dom";
import { Container, Header, Profile, CloseIcon } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut } = useAuth();
  const { user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleNavigate() {
    navigate("/new");
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <div className="wrap-profile">
          <Profile to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Profile>
          <div className="user">
            <Profile to="/profile">
              <p>{user.name}</p>
            </Profile>
          </div>
        </div>
        <CloseIcon onClick={onCloseMenu} />
      </Header>

      <ul>
        <li onClick={handleNavigate}>Adicionar filme</li>
        <li>
          <a onClick={signOut} className="signOut">
            Sair
          </a>
        </li>
      </ul>
    </Container>
  );
}

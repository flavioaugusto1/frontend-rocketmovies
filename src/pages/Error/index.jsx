import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import Image404 from "../../assets/erro404.png";

export function Error() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <Container>
      <div className="message">
        <h1>Ooops...Aconteceu algo de errado</h1>
        <h2>404</h2>
        <p>A página que você está tentando acessar não está disponível</p>
        <Button
          title="Voltar para página principal"
          icon={FiArrowLeft}
          onClick={handleNavigate}
        />
      </div>

      <img
        src={Image404}
        alt="Imagem de um gato rosa junto a um computador apresentando problema"
      />
    </Container>
  );
}

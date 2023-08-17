import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function SignIn() {
  return (
    <Container>
      <Form>
        <header>
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompnhar tudo que assistir</p>
        </header>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} type="password" />

        <Button title="Entrar"/>

        <Link to="/register">
          Criar Conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}

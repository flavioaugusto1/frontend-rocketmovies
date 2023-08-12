import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>
        <header>
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompnhar tudo que assistir</p>
        </header>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="E-mail" icon={FiMail} type="email" />
        <Input placeholder="Senha" icon={FiLock} type="password" />

        <Button title="Cadastrar"/>

        <a href="#">
          <FiArrowLeft /> 
          Voltar para o login
        </a>
      </Form>

      <Background />
    </Container>
  );
}

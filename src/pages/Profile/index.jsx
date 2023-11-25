import { useState } from "react";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Avatar } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    console.log(passwordOld);
    console.log(passwordNew);
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    };

    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/flavioaugusto1.png"
            alt="Imagem do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}

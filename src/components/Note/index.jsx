import { Container, Image } from "./styles";

export function Note({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Image />

      {children}
      
    </Container>
  );
}

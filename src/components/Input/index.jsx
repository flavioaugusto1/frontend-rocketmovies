import { Container } from "./styles";
import InputMask from "react-input-mask";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <InputMask {...rest} maskPlaceholder={null} />
    </Container>
  );
}

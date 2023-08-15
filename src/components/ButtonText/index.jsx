import { FiArrowLeft } from "react-icons/fi"

import { Container } from "./styles";

export function ButtonText({ title, ...rest }) {
  return(
    <Container {...rest}>
      <FiArrowLeft />
      {title}
    </Container>
  )
}
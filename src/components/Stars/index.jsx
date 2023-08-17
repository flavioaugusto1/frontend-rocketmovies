import { Container } from "./styles";
import { FiStar } from "react-icons/fi"

export function Stars({ isFilled }){
  return(
    <Container isFilled={isFilled}>
      <FiStar />
    </Container>
  )
}
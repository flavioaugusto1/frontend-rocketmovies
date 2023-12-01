import { Container } from "./styles";

import Star from "../../assets/star.svg";

export function Rating({ data, ...rest }) {
  return (
    <Container {...rest}>
      <img src={Star} alt="imagem de uma estrela rosa" />
      <div className="wrap-rating">
        <span className="rating-user">{data}</span>
        <span className="rating-limit">/5</span>
      </div>
    </Container>
  );
}

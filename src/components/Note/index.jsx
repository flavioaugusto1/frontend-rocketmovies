/* eslint-disable react/prop-types */
import { FiStar } from "react-icons/fi";

import { Container, Image } from "./styles";

import { Tags } from "../Tags";

export function Note({ data, children, isFilled, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Image isFilled={isFilled}>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </Image>

      {children}

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tags key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}

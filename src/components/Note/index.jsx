/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Rating } from "../../components/Rating";
import { Tags } from "../Tags";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating data={data.rating} />
      <p>{data.description}</p>
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

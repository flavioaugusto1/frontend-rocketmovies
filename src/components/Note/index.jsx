/* eslint-disable react/prop-types */
import { Container, Image } from "./styles";

import { Tags } from "../Tags";

export function Note({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Image />

      {children}

      {
        data.tags &&
        <footer>
          {
          data.tags.map(tag => <Tags  key={tag.id} title={tag.name} />)
          }
        </footer>
      }
      
    </Container>
  );
}

import { styled } from "styled-components";
import Stars from "../../assets/stars.svg";

export const Container = styled.div`
  max-width: 112rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  background: rgba(111, 62, 71, 0.2);
  border-radius: 16px;

  > h1 {
    font-size: 2.4rem;
    margin-bottom: .8rem;
  }

`;

export const Image = styled.div`
  background: url(${Stars}) no-repeat;
  width: 8.4rem;
  height: 1.2rem;

  margin-bottom: 1.5rem;
`;

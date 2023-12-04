import { styled } from "styled-components";

export const Container = styled.a`
  width: fit-content;
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.8rem;

  cursor: pointer;
`;

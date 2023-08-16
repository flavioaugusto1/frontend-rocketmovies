import { styled } from "styled-components";

export const Container = styled.textarea`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 27.4rem;
  font-size: 1.6rem;

  border: none;
  border-radius: 1rem;
  outline: none;

  padding: 1.9rem;
  resize: none;
`;

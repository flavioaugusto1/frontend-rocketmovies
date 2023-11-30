import { styled } from "styled-components";

export const Container = styled.button`
  padding: 1.6rem;

  background: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-size: 1.6rem;
  font-weight: 500;

  cursor: pointer;
`;
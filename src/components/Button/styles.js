import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  
  margin-top: 2.4rem;

  background: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-size: 1.6rem;
  font-weight: 500;

  cursor: pointer;
`;
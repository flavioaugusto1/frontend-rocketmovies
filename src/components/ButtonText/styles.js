import { styled } from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  padding-left: 14.4rem;
  padding-top: 6.4rem;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;
`;
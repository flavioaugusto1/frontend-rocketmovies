import { styled } from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .5rem 1.6rem;
  margin-right: .8rem;

  border-radius: 8px;

  background: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:hover{
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
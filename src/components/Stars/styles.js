import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.2rem;
    margin-right: 0.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme, isFilled }) =>
      isFilled ? theme.COLORS.PINK : "transparent"};
  }
`;

import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  padding: 0 2rem;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.BACKGROUND_800}` : "none"};

  border-radius: 1rem;

  > button {
    border: none;
    background: none;
    cursor: pointer;

    >svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }

  > input {
    height: 5.6rem;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.6rem;
    }
  }
`;

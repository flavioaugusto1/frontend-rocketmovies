import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;
 
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
 
  padding: 0 1.6rem;

  border-radius: 1rem;
  margin-bottom: .6rem;

  > input {
    width: 100%;
    height: 5.6rem;

    border: none;
    background: transparent;
    outline: none;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder{
      font-size: 1.6rem;
    }
  }
`;

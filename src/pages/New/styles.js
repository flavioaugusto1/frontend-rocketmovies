import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 4.6rem;

  a {
    text-decoration: none;
  }

  .wrap {
    max-height: 78.3rem;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

    padding-right: 2.4rem;

    > button {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }

    > h1 {
      font-size: 3.6rem;
      margin: 2.4rem 0 4rem 0;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 53.6rem 53.6rem;
  grid-template-areas:
    "inputs inputs"
    "textarea textarea"
    "tags tags"
    "button button";
  gap: 4rem;

  > div {
    input {
      font-size: 1.6rem;
      grid-area: inputs;
    }
  }

  > textarea {
    grid-area: textarea;
  }

  > section {
    grid-area: tags;

    margin-bottom: 4rem;

    > h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-weight: 400;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      flex-wrap: wrap;

      margin-top: 2.4rem;
      padding: 1.6rem 0 1.6rem 3.6rem;

      border-radius: 1rem;

      background: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  .delete {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../Styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;

  .wrap-content {
    max-width: 113rem;
    margin: 4.6rem auto 0;
    padding: 0 2.4rem 2.4rem;
  }

  a {
    text-decoration: none;
  }

  .wrap {
    max-height: 74.3rem;
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

    > h1 {
      font-size: 3.6rem;
      margin: 2.4rem 0 4rem 0;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "inputs inputs"
    "textarea textarea"
    "tags tags"
    "button button";
  gap: 1.8rem;

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

  .buttonSave {
    grid-column: 2;
    justify-self: end;
    width: 100%;

    > button {
      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  > .message {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    h1,
    h2 {
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 3.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 2.6rem;
    }
    button {
      max-width: 30rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      > svg {
        animation: slide 1s linear infinite;
      }
    }

    @keyframes slide {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-0.5rem);
      }
    }
  }
`;

import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`

  max-width: 113.7rem;
  margin-top: 4rem;

  padding: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  > header {
    footer {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      > span {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.8rem;

        font-size: 1.5rem;

        img {
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
        }

        > svg{
          color: ${({ theme }) => theme.COLORS.PINK};
          font-size: 1.6rem;
        }
      }
    }
  }

  > p{
    font-size: 1.6rem;
    text-align: justify;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  > h1 {
    font-size: 3.6rem;
    margin-right: 2rem;
  }

  > div {
    svg {
      font-size: 2.2rem;
    }
  }
`;

export const Tag = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  align-self: flex-start;
`
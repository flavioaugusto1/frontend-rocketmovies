import { styled } from "styled-components";
import backgroundImg from "../../assets/background-movies.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: stretch;
`;

export const Form = styled.form`
  padding: 0 13.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > header {
    margin-bottom: 4.8rem;
    text-align: justify;

    h1 {
      font-size: 4.8rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    
    align-self: flex-start;

    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-decoration: none;

    font-size: 1.6rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

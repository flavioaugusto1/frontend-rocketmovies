import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    background: rgba(111, 62, 71, 0.2);

    width: 100%;
    height: 14.4rem;

    a {
      position: absolute;
      top: 2rem;
      left: 2rem;
      text-decoration: none;
    }

    button {
      padding-top: 6.4rem;
      margin-left: 14rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
    margin-bottom: 6.4rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;
    position: absolute;
    right: 1rem;
    bottom: 0.4rem;

    background: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: -9.3rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  :nth-child(4) {
    margin-top: 2rem;
  }

  > button {
    margin-top: 2.4rem;
    width: 100%;
  }
`;

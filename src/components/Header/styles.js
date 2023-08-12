import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;

  display: grid;
  grid-template-columns: auto 63rem auto;
  justify-content: space-evenly;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  }

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > div {
    text-align: right;

    p {
      font-size: 1.4rem;
      font-weight: bold;
    }

    a {
      font-size: 1.4rem;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};
    border-radius: 50%;
  }
`;

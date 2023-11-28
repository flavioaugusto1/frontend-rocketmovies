import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 13.3rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";
`;

export const Title = styled.div`
  grid-area: title;

  width: 113.7rem;
  margin: 0 auto;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    > button {
      width: 20rem;
      padding: 1.3rem auto;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;

  height: 71rem;
  width: 100%;
  margin: 0 auto;

  overflow-y: auto;

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

  > main {
    max-width: 113.7rem;
    margin: auto;
    
    a {
      text-decoration: none;
    }

    > div {
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
        transition: 0.4s ease;
      }
    }

    p {
      text-overflow: ellipsis;
      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};

      margin-bottom: 2rem;
    }
  }
`;

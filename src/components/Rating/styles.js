import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
  }

  .wrap-rating {
    font-size: 1.6rem;

    .rating-limit {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

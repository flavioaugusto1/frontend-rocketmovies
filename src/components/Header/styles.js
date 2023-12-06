import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../Styles/deviceBreakpoints";
import { FiMenu } from "react-icons/fi";

export const Container = styled.header`
  width: 100%;
  height: 8rem;

  grid-area: header;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  svg {
    display: none;
  }

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};

  .wrap-profile {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    .user {
      text-align: right;

      p {
        font-size: 1.4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      a {
        font-size: 1.4rem;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        cursor: pointer;
      }
    }
  }

  .search-film {
      width: 100%;
    }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .wrap-profile {
      display: none;
    }

    .search-film {
      display: none;
    }

    svg {
      display: inline;
    }
  }
`;

export const Profile = styled(Link)`
  > img {
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};
    border-radius: 50%;
  }
`;

export const SideMenuIcon = styled(FiMenu).attrs()`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

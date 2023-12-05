import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;

  position: absolute;
  top: 0;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  ul {
    list-style: none;

    li {
      font-size: 1.6rem;
      font-weight: bold;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.PINK};
      padding: 2rem;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }
    }

    .signOut {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  .wrap-profile {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user {
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
`;

export const Profile = styled(Link)`
  > img {
    width: 6.4rem;
    height: 6.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};
    border-radius: 50%;
  }
`;

export const CloseIcon = styled(FiX).attrs()`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

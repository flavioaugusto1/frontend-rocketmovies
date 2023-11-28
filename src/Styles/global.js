import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }
  
  :root{
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button:hover, a:hover{
    transition: .8s;
    filter: brightness(0.9);
  }

`;

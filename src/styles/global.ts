import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-100"]};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    overflow-x: hidden
  }
`;

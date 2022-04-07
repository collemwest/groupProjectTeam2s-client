import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");
  * {
    --bs-font-sans-serif: "Nunito Sans", sans-serif;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
 
  `;

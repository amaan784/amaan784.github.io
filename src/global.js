import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: block;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    transition: background 0.35s ease, color 0.35s ease;
  }
`;

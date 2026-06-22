import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";

const STORAGE_KEY = "amaan-portfolio-theme";

function getInitialMode() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  // Default to light: cleaner and more recruiter-friendly. Dark is one tap away.
  return "light";
}

function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      /* storage may be unavailable */
    }
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const isDark = mode === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Main theme={theme} isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./context/themeContext";
import { CounterContextProvider } from "./context/counterContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <CounterContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CounterContextProvider>
  </ThemeContextProvider>
);

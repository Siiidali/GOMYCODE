import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WorkoutContextProvider } from "./context/workoutContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <WorkoutContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WorkoutContextProvider>
);

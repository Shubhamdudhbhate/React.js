import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { getBackground } from "./utils/weatherUtils";

// Set initial background based on weather
document.body.className = getBackground(null); // Default background

// Render the main App component    

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

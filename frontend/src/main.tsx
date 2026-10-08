import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root element
const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

// Render the application
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
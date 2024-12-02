import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("roat")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

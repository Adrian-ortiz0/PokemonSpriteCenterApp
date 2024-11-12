import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MultipleCustomHook } from "./MultipleCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MultipleCustomHook />
  </StrictMode>
);

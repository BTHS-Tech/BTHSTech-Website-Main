import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { readScroll } from "/src/scroll-animation.js";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

readScroll();
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

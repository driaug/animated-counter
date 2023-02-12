import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GithubCorner from "react-github-corner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GithubCorner href="https://github.com/driaug/framer-animated-counter" />
    <App />
  </React.StrictMode>
);

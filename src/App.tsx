import React from "react";
import "./styles/index.css";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <section>
        <h2>
          <Counter value={100} direction="up" />
        </h2>
      </section>
      <section>
        <h2>
          <Counter value={1000} direction="down" />
        </h2>
      </section>
    </>
  );
}

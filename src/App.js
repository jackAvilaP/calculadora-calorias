import React from "react";
import "./App.css";
import FormsData from "./components/FormsData";
import Infom from "./components/Infom";
import NavBars from "./components/NavBars";

function App() {
  return (
    <div>
      <NavBars />
      <div className="App">
        <section className="d-flex justify-content-around w-100">
          <FormsData />
          <Infom />
        </section>
      </div>
    </div>
  );
}

export default App;

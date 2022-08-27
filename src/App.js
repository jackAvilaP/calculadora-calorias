import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import FormsData from "./components/FormsData";
import Infom from "./components/Infom";
import NavBars from "./components/NavBars";

function App() {
  return (
    <div>
      <NavBars />
      <div className="App">
        <section className="d-flex flex-direction-row justify-content-around w-100">
          {/* <FormsData /> */}
          <Cards />
          <Infom />
        </section>
      </div>
    </div>
  );
}

export default App;

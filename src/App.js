import React from "react";

//styles
import "./App.css";
import Footer from "./components/Footer";

//components
import NavBars from "./components/NavBars";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <NavBars />
      <div className="App">
         <Users/>  
      </div>
      <Footer/>
    </div>
  );
}

export default App;

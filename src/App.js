import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {



  

  return (
    <div className="App bg-black">
      <Navbar/>
      <Content/>
      <Cards/>
      <Footer/>
     


      
   
      
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CharactersState from "./CharactersState/CharactersState";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Characters from "./component/Lister page/Characters";
import Home from "./pages/Home/Home";

function App() {
  return (
    <CharactersState>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
        <Footer />
      </BrowserRouter>    
    </CharactersState>
  );
}

export default App;

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import Navbar from "../NavBar";
import CadastroPadre from "../../Pages/CadastroPadre";
import Footer from "../Footer";

function Rotas() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-padre" element={<CadastroPadre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Rotas;

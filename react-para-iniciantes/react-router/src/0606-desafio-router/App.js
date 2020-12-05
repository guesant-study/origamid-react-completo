import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Header from "./Header";
import Produtos from "./Produtos";
import Produto from "./Produto";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

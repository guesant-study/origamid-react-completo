import React from "react";
import Title from "./Title";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <p>CSS Import</p>
      <h1 className="title">
        Estilos podem ser herdados de outros componentes que possuam classes com
        o mesmo nome, mesmo que o componente não seja utilizado.
      </h1>
    </div>
  );
};

export default App;

import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu Título 1">
        Isso é o children
      </Titulo>
      <Titulo cor="blue" texto="Meu Título 2">
        <span>Isso é o children</span>
      </Titulo>
    </div>
  );
};

export default App;

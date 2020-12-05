import React from "react";
import Produto from "./Produto";
import "./App.css";

const produtos = [
  { id: "tablet", nome: "Tablet" },
  { id: "smartphone", nome: "Smartphone" },
  { id: "notebook", nome: "Notebook" },
];

const App = () => {
  const [dados, setProdutoDados] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);
  async function fetchProduct(id) {
    setCarregando(true);
    setProdutoDados(false);
    await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProdutoDados(product);
      });
    setCarregando(false);
  }
  return (
    <>
      <div>
        <nav>
          <div style={{ display: "flex", gap: "8px" }}>
            {produtos.map(({ nome, id }) => (
              <button onClick={() => fetchProduct(id)}>{nome}</button>
            ))}
          </div>
        </nav>
      </div>
      <div>
        {carregando && <p>Puxando dados sobre o produto...</p>}
        {!carregando && dados && <Produto produto={dados} />}
      </div>
    </>
  );
};

export default App;

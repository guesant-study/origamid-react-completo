import React from "react";
import Produto from "./Produto";

const produtos = [
  { id: "notebook", nome: "notebook" },
  { id: "smartphone", nome: "smartphone" },
];

const App = () => {
  const [id, setID] = React.useState(null);
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) {
      setID(produtoLocal);
    }
  }, []);
  React.useEffect(() => {
    id !== null && window.localStorage.setItem("produto", id);
  }, [id]);
  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        {produtos.map(({ id, nome }) => (
          <button key={id} onClick={() => setID(id)}>
            {nome}
          </button>
        ))}
      </div>
      {id && <Produto id={id} />}
    </div>
  );
};

export default App;

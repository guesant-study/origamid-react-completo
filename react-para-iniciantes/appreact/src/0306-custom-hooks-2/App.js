import React from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, erro } = useFetch();

  function handleClick(value) {
    setProduto(value);
  }

  React.useEffect(() => {
    (async () => {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
    })();
  }, [request]);

  if (erro) {
    return <p>Erro: {erro}</p>;
  }
  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
  if (data) {
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        {["notebook", "smartphone"].map((i, idx) => (
          <button key={idx} onClick={() => handleClick(i)}>
            {i}
          </button>
        ))}

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default App;

import React from "react";

function fetchAPIProduto(id) {
  return fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${id}`,
  ).then((res) => res.json());
}

const Produto = ({ id }) => {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      if (id !== null) {
        setDados(await fetchAPIProduto(id));
      }
    })();
  }, [id]);
  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>
        {Number(dados.preco).toLocaleString("pt-br", {
          style: "currency",
          currency: "brl",
        })}
      </p>
    </div>
  );
};

export default Produto;

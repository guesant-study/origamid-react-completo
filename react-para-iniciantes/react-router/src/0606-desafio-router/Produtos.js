import React from "react";
import styled from "styled-components";

const StyledListaProduto = styled.a`
  display: flex;
  flex-direction: column;
  gap: 24px;
  img {
    border-radius: 12px;
  }
  p {
    font-size: 24px;
    font-weight: bold;
  }
`;

const ListaProduto = ({ produto, children, ...props }) => (
  <StyledListaProduto {...props} href={`/produto/${produto.id}`}>
    <img src={produto.fotos[0].src} alt="" />
    <p>{produto.nome}</p>
  </StyledListaProduto>
);

const Produtos = () => {
  const [loading, setLoading] = React.useState(false);
  const [produtos, setProdutos] = React.useState([]);
  async function fetchProdutos() {
    setLoading(true);
    try {
      const produtosJSON = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto",
      ).then((res) => res.json());
      setProdutos(produtosJSON);
    } catch (_) {}
    setLoading(false);
  }
  React.useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className="container">
      <div className="animaLeft">
        {loading && <p>Carregando...</p>}
        {!loading && (
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              rowGap: 24,
            }}
          >
            {produtos.map((produto) => (
              <li key={produto.id}>
                <ListaProduto produto={produto} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Produtos;

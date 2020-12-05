import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledProductInfo = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 24px;
  img {
    border-radius: 8px;
    overflow: hidden;
  }
  .produto-preco {
    display: inline-block;
    color: green;
    background-color: rgba(0, 255, 0, 0.5);
    padding: 8px 10px;
    border-radius: 4px;
    margin: 12px 0;
  }
`;

const Produto = () => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const params = useParams();

  async function fetchProduto(id) {
    const productJSON = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${id}`,
    ).then((res) => res.json());
    return productJSON;
  }

  React.useEffect(() => {
    (async () => {
      const { id } = params;
      setLoading(true);
      try {
        await fetchProduto(id).then((product) => {
          setProduct(product);
        });
      } catch (_) {}
      setLoading(false);
    })();
  }, [params]);

  if (!product) return null;
  console.log(product);

  return (
    <div className="container">
      <div className="animaLeft">
        {loading && <p>Carregando...</p>}
        {!loading && (
          <StyledProductInfo>
            <div>
              {product.fotos.map((foto, idx) => (
                <React.Fragment key={idx}>
                  <img src={foto.src} alt="" />
                </React.Fragment>
              ))}
            </div>
            <div>
              <h2>{product.nome}</h2>
              <p className="produto-preco">R$ {product.preco}</p>
              <p>{product.descricao}</p>
            </div>
          </StyledProductInfo>
        )}
      </div>
    </div>
  );
};

export default Produto;

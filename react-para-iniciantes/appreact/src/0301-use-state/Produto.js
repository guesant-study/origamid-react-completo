import React from "react";

const parsePrecoProduto = (preco) =>
  Number(preco).toLocaleString("pt-br", {
    currency: "BRL",
    style: "currency",
  });

const Produto = ({ produto }) => {
  return (
    <section>
      <h1>{produto.nome}</h1>
      <p>
        <b>{parsePrecoProduto(produto.preco)}</b>
      </p>
      <p>{produto.descricao}</p>
      <ul style={{ display: "flex", gap: "16px", listStyle: "none" }}>
        {produto.fotos.map(({ titulo, src }, index) => (
          <li key={index}>
            <img
              style={{
                maxWidth: "100%",
                width: "126px",
                height: "126px",
                objectFit: "cover",
                flexShrink: 0,
              }}
              src={src}
              alt={titulo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Produto;

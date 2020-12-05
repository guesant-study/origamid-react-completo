import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <>
      <fieldset>
        <p>{nome} 10</p>
        <ul>
          {propriedades.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </fieldset>
    </>
  );
};

export default Produto;

import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <div>
      {dados.map(({ nome }, index) => (
        <p key={index}>Produto: {nome}</p>
      ))}
    </div>
  );
};

export default Produto;

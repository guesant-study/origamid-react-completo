import React from "react";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  function handleClick(value) {
    setProduto(value);
  }
  return (
    <div>
      <p>Produto preferido: {produto}</p>
      {["notebook", "smartphone"].map((i, idx) => (
        <button key={idx} onClick={() => handleClick(i)}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default App;

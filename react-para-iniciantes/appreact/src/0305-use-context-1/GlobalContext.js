import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  const adicionarUm = () => {
    setContar((contar) => contar + 12);
  };
  return (
    <GlobalContext.Provider
      value={{ contar, setContar, adicionarUm }}
      children={children}
    />
  );
};

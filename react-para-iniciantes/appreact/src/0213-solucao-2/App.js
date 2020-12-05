import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const pages = {
  "/": Home,
  "/produtos": Produtos,
};

function getComponentToRender() {
  const { pathname } = window.location;
  return pages[pathname];
}

const App = () => {
  const Component = getComponentToRender();
  return (
    <div>
      <Header />
      <Component />
    </div>
  );
};

export default App;

import React from "react";

const Titulo = ({ texto }) => <h1 style={{ color: "green" }}>{texto}</h1>;

const Home = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      <p>Essa é a Home do Site.</p>
    </section>
  );
};

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <section>
      <Titulo texto="Produtos" />
      <ul style={{ listStyle: "none" }}>
        {produtos.map((produto) => (
          <li key={produto.nome}>
            <fieldset>
              <p>{produto.nome}</p>
              <ul>
                {produto.propriedades.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </fieldset>
          </li>
        ))}
      </ul>
    </section>
  );
};

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
      <style>{"h1 {color: green}"}</style>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
        </ul>
      </nav>
      <div>{Component()}</div>
    </div>
  );
};

export default App;

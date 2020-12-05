// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

function limparPreco(preco) {
  return +preco.toUpperCase().replace(/R\$ ?/, "");
}

const App = () => {
  const dados = produtos.filter(({ preco }) => limparPreco(preco) > 1500);
  return (
    <section>
      <ul>
        {dados.map((produto) => (
          <li key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li
                  key={cor}
                  style={{
                    padding: "2px 4px",
                    backgroundColor: cor,
                  }}
                >
                  <span style={{ color: "white" }}>{cor}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;

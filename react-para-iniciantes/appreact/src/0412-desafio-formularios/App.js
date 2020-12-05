import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [indexPergunta, setIndexPergunta] = React.useState(0);
  const [respostas, setRespostas] = React.useState([]);

  function resetTest() {
    setRespostas(Array.from({ length: perguntas.length }).fill(""));
    setIndexPergunta(0);
  }

  React.useEffect(() => {
    resetTest();
  }, []);

  function responderPergunta(index, resposta) {
    const arrRespostas = [...respostas];
    arrRespostas[index] = resposta;
    setRespostas(arrRespostas);
  }

  function proximaPergunta() {
    if (indexPergunta + 1 === perguntas.length) {
      return setIndexPergunta(-1);
    }
    setIndexPergunta(indexPergunta + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (respostas[indexPergunta]) {
      proximaPergunta();
    }
  }

  function getRespostasValidas(reverse = 0) {
    return respostas.filter((resposta, index) =>
      Object.is(perguntas[index].resposta, resposta),
    );
  }

  return (
    <div>
      {indexPergunta !== -1 && (
        <form onSubmit={handleSubmit}>
          {perguntas.map((pergunta, index) => (
            <React.Fragment key={pergunta.id}>
              <div
                style={{
                  display: index === indexPergunta ? "initial" : "none",
                }}
              >
                <fieldset>
                  <legend>{pergunta.pergunta}</legend>
                  <Radio
                    options={pergunta.options}
                    value={respostas[index]}
                    setValue={(value) => {
                      responderPergunta(index, value);
                    }}
                  />
                </fieldset>
              </div>
            </React.Fragment>
          ))}
          <div style={{ height: "12px" }} />
          <button>Próxima Pergunta</button>
        </form>
      )}

      {indexPergunta === -1 && (
        <>
          <p>
            Você acertou {getRespostasValidas().length} de {perguntas.length}{" "}
            perguntas.
          </p>
          <button onClick={resetTest}>Refazer Teste</button>
        </>
      )}

      {/* <pre>{JSON.stringify(respostas)}</pre> */}
    </div>
  );
};

export default App;

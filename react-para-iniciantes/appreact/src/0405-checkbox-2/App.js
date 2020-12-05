import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
  const [cores, setCores] = React.useState(["azul", "vermelho"]);

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((i) => i !== target.value));
    }
  }

  return (
    <div>
      <form>
        {coresArray.map((cor, index) => (
          <label key={index} style={{ textTransform: "capitalize" }}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        ))}
        <ul>
          {cores.map((cor) => (
            <li key={cor}>{cor}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default App;

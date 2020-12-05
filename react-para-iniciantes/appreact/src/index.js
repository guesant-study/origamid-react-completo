import React from "react";
import ReactDOM from "react-dom";

async function start() {
  await import("./0505-animacoes-2/App.js")
    .then(({ default: App }) => {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById("root"),
      );
    })
    .catch((err) => {
      console.info("Não foi possível carregar o componente App.");
      console.error(err);
    });
}

start();

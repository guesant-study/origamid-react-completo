import React from "react";

const formFields = [
  ["nome", "Nome", "text"],
  ["email", "E-mail", "email"],
  ["senha", "Senha", "password"],
  ["cep", "CEP", "text"],
  ["rua", "Rua", "text"],
  ["numero", "Número", "number"],
  ["bairro", "Bairro", "text"],
  ["cidade", "Cidade", "text"],
  ["estado", "Estado", "text"],
];

const initialFormState = formFields.reduce(
  (acc, [id]) => ({ ...acc, [id]: "" }),
  {},
);

const App = () => {
  const [fetchStatus, setFetchStatus] = React.useState(null);
  const [form, setForm] = React.useState(initialFormState);
  function handleChange({ target }) {
    const { id, value } = target;
    setForm((form) => ({ ...form, [id]: value }));
  }
  async function submitForm(event) {
    event.preventDefault();
    setFetchStatus(null);
    await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        setFetchStatus(res.ok);
      })
      .catch(() => {
        setFetchStatus(false);
      });
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        {formFields.map(([name, label, type]) => (
          <React.Fragment key={name}>
            <label htmlFor={name} children={label} />
            <input
              id={name}
              name={name}
              type={type}
              value={form[name] || ""}
              onChange={handleChange}
            />
          </React.Fragment>
        ))}
        <pre>
          <code>{JSON.stringify(form, "\n", 2)}</code>
        </pre>
        {fetchStatus !== null && (
          <p>
            {fetchStatus
              ? "Enviado com sucesso."
              : "Não foi possível enviar o formulário."}
          </p>
        )}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default App;

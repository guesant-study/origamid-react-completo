import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);
  function handleSubmit(event) {
    event.preventDefault();
    if ([cep, email, nome, sobrenome].every((form) => form.validate())) {
      console.log("enviou");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input id="nome" type="text" label="Nome" {...nome} />
      <Input id="sobrenome" type="text" label="Sobrenome" {...sobrenome} />
      <Input
        id="cep"
        type="text"
        label="CEP"
        placeholder="00000-000"
        {...cep}
      />
      <Input id="email" type="email" label="E-mail" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;

import React, { Fragment } from "react";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from "./Header";

export const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <Fragment>
      <Teste />
      <Header />
      <p>App</p>
      <Form />
      <Footer />
    </Fragment>
  );
};

export default App;

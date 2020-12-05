import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="Essa é a descrição da home" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a descrição da home" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link>{" "}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;

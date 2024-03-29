import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav style={{ display: "flex", gap: "4px" }}>
        <NavLink to="" end>
          Descrição
        </NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;

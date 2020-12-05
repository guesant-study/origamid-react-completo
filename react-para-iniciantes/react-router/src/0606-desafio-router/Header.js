import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderLink = styled(NavLink)`
  color: #000;
  display: block;
  padding: 8px 16px;
  background-color: #ccc;
  text-decoration: none;
  border-radius: 4px;
`;

const Header = () => {
  return (
    <div className="container" style={{ paddingTop: 16, paddingBottom: 16 }}>
      <nav style={{ display: "flex", gap: 8 }}>
        <HeaderLink to="/" end>
          Produtos
        </HeaderLink>
        <HeaderLink to="/contato">Contato</HeaderLink>
      </nav>
    </div>
  );
};

export default Header;

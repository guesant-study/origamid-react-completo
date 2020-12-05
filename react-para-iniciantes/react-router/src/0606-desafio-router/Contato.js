import React from "react";
import styled from "styled-components";

const StyledContactInfo = styled.div`
  ul {
    margin-top: 12px;
    li {
      line-height: 1;
      display: flex;
      margin-bottom: 12px;
      &::before {
        content: "";
        display: block;
        width: 16px;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.2);
        align-self: flex-end;
        margin-right: 8px;
      }
    }
  }
`;

const Contato = () => {
  return (
    <div className="container">
      <div className="animaLeft">
        <div
          style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: 24 }}
        >
          <img src="https://picsum.photos/250/300" alt="" />
          <StyledContactInfo>
            <h2>Entre em contato.</h2>
            <ul>
              <li>andre@origamid.com</li>
              <li>99999-9999</li>
              <li>Rua Ali Perto, 999</li>
            </ul>
          </StyledContactInfo>
        </div>
      </div>
    </div>
  );
};

export default Contato;

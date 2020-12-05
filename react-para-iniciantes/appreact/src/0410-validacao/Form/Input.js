import React from "react";

const Input = ({ id, label, value, onChange, type = "text", ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} onChange={onChange} {...props} />
    </>
  );
};

export default Input;

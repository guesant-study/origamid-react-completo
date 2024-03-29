import React from "react";

const Input = ({ id, label, value, setValue, type = "text", ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        {...props}
      />
    </>
  );
};

export default Input;

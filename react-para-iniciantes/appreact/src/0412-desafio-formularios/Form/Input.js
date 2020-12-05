import React from "react";

const Input = ({
  id,
  label,
  value,
  error,
  setValue: _,
  validate: __,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;

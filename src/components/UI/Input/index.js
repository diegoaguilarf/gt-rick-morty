import React from "react";
import "./input.scss";

const Input = ({ ...props }) => {
  return <input className="input" {...props} />;
};

export default Input;

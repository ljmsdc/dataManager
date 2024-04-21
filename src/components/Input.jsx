import React from "react";

import classes from "../assets/sass/Input.module.sass";

const Input = ({ name, text = "", type, handler }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={name}>{text}</label>
      <input
        name={name}
        className={classes.input}
        type={type}
        onChange={(e) => {
          handler(e.target.value.toLowerCase());
        }}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;

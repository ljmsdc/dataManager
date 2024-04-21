import React from "react";
import classes from "../assets/sass/Button.module.sass";

const Button = ({ text, action }) => {
  return <button className={classes.button} onClick={action}>{text}</button>;
};

export default Button;

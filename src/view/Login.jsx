import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout, fetchUser } from "../store/user";

import Input from "../components/Input";
import Button from "../components/Button";

import classes from "../assets/sass/Login.module.sass";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const SetUser = (user) => {
    setUser(user);
  };

  const SetPassword = (password) => {
    setPassword(password);
  };

  const Login = () => {
    dispatch(fetchUser(user, password));
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Input name={"user"} text={"User"} type={"text"} handler={SetUser} />
        <Input
          name={"password"}
          text={"Password"}
          type={"password"}
          handler={SetPassword}
        />
        <Button text={"Login"} action={Login} />        
      </div>
    </div>
  );
};

export default Login;

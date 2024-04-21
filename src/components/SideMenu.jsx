import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user";
import { fetchSections } from "../store/section";

import classes from "../assets/sass/SideMenu.module.sass";

const SideMenu = ({ expandHandler }) => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.section.sections);

  const Sections = () => {
    dispatch(fetchSections());
  };

  const Logout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    Sections();
  }, []);

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={expandHandler}>Expand</button>
      {sections.map((sections) => (
        <button className={classes.button}>{sections.section}</button>
      ))}
      <button className={classes.button} onClick={Logout}>Logout</button>
    </div>
  );
};

export default SideMenu;

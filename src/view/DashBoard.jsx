import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import DataView from "../components/DataView";

import classes from "../assets/sass/DashBoard.module.sass";

const DashBoard = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  const ExpandMenu = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <div className={expandMenu ? classes.containerExpand : classes.container}>
      <SideMenu expandHandler={ExpandMenu} />
      <DataView />
    </div>
  );
};

export default DashBoard;

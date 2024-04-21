import Login from "./view/Login";
import DashBoard from "./view/DashBoard";

import { useSelector } from "react-redux";

const App = () => {
  const id = useSelector((state) => state.user.id);
  return (
    <>
      {id <= 0 && <Login />}
      {id > 0 && <DashBoard />}
    </>
  );
};

export default App;

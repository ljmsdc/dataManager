import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  id_role: 0,
  name: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.id_role = action.payload.id_role;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.id = 0;
      state.id_role = 0;
      state.name = "";
    },
  },
});

export const { login, logout } = user.actions;

export const fetchUser = (name, password) => async (dispatch) => {
  const request = await fetch("http://localhost:5173/json/user.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  /* 
    The if and else are of the BackEnd, that part I going to remove later
    in this case, is the simulation of the BackEnd work
  */
 
  if (name === response[0].name && password === response[0].password) {
    dispatch(
      login({
        id: response[0].id,
        id_role: response[0].id_role,
        name: response[0].name,
      })
    );
  } else {
    dispatch(logout());
  }
};

export default user.reducer;

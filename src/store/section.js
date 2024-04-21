import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [{ section: "" }],
};

const section = createSlice({
  name: "section",
  initialState,
  reducers: {
    sections: (state, action) => {
      state.sections = action.payload;
    },
  },
});

export const { sections } = section.actions;

export const fetchSections = () => async (dispatch) => {
  const request = await fetch("http://localhost:5173/json/sections.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  dispatch(sections(response));
};

export default section.reducer;

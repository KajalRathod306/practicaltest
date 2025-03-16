import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  direction: "Clockwise",
  interval: 10
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfig: (state, action) => {
      state.direction = action.payload.direction;
      state.interval = action.payload.interval;
    }
  }
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;

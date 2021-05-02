import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user:null
  },
  reducers: {
    login: (state, action) => {
      const {_id,username, password, age, admin} = action.payload;
      state.user = {...state.user, _id, username, password, age, admin};
    },
    logout: ( state ) => {
      state.user = null;
    },
    updatePassword: ( state, action ) => {
      state.user = {...state.user, password: action.payload.password};
    },
  },
});

export const { login, logout, updatePassword } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
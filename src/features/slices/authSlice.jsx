// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      authUser: false,
    },
    registeredUsers: JSON.parse(sessionStorage.getItem("registeredUsers")) || [],
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = state.registeredUsers.find(
        (user) => user.name === userId.name && user.password === userId.password
      );
      if (userValidation) {
        state.user = { ...userId, authUser: true };
        sessionStorage.setItem("authUser", JSON.stringify(state.user));
      } else {
        state.user.authUser = false;
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
    register(state, action) {
      const newUser = action.payload;
      state.registeredUsers.push(newUser);
      sessionStorage.setItem("registeredUsers", JSON.stringify(state.registeredUsers));
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;

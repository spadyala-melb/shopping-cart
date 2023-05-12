import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import jwt from "jwt-decode";

const initialState = {
  isLoggedin: false,
  _id: "",
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedin = true;
      const { _id, name, email } = jwt(action.payload);
      state._id = _id;
      state.name = name;
      state.email = email;
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isLoggedin", true);
    },
    setRegister: (state, action) => {
      state.isLoggedin = true;
      const { _id, name, email } = jwt(action.payload);
      state._id = _id;
      state.name = name;
      state.email = email;
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isLoggedin", true);
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedin");
      localStorage.removeItem("cartItems");
      state.isLoggedin = false;
      toast.error(`Logged out successfully`, {
        position: "bottom-left",
        autoClose: 1500,
        pauseOnHover: false,
      });
    },
  },
});

export const { setLogin, setRegister, logout } = authSlice.actions;
export default authSlice.reducer;

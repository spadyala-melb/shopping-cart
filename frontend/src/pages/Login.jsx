import React from "react";
import { useState } from "react";
import { useLoginMutation } from "../redux/features/authApiSlice";
import { setLogin } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const [login, { data, isLoading, isError, error, isSuccess }] =
  const [login, { data, isSuccess }] = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
    e.target.reset();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isSuccess) {
    dispatch(setLogin(data));
    navigate("/cart");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container login-form">
        <input
          className="input"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />
        <input
          className="input"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;

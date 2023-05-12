import React, { useState } from "react";
import { useRegisterUserMutation } from "../redux/features/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegister } from "../redux/features/authSlice";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [registerUser, { data, isLoading, isError, error, isSuccess }] =
  const [registerUser, { data, isSuccess }] = useRegisterUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(user);
    e.target.reset();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isSuccess) {
    dispatch(setRegister(data));
    navigate("/cart");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form container">
        <input
          className="input"
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Enter your name"
        />
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
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;

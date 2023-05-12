import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Cart,
  PageNotFound,
  Register,
  Login,
  Checkout,
  CheckoutSuccess,
} from "../pages";
import { SideNav, Summary, Products, Orders, Users } from "../pages/admin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" exact element={<Cart />} />
      <Route path="/checkout" exact element={<Checkout />} />
      <Route path="/checkout-success" exact element={<CheckoutSuccess />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/admin" exact element={<SideNav />}>
        <Route path="summary" element={<Summary />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;

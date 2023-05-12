import React from "react";
import StripePayment from "../components/StripePayment";
import { useSelector } from "react-redux";
import PaypalPayment from "../components/PaypalPayment";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div>
        <StripePayment cartItems={cart.cartItems} />
      </div>
      <br />
      <div>
        <PaypalPayment cartItems={cart.cartItems} />
      </div>
    </>
  );
};

export default Checkout;

import React from "react";
import { useSelector } from "react-redux";
import { useStripePaymentMutation } from "../redux/features/stripeApi";

const StripePayment = ({ cartItems }) => {
  const auth = useSelector((state) => state.auth);

  const [stripePayment, { data, isSuccess }] = useStripePaymentMutation();

  const handleStripePayment = () => {
    stripePayment({ cartItems, userId: auth.name });
    if (isSuccess) {
      window.location.assign(data.url);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <button className="btn btn-stripe" onClick={handleStripePayment}>
        Pay with Stripe
      </button>
    </div>
  );
};

export default StripePayment;

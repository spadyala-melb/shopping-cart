import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
// import { useSelector } from "react-redux";
// import {
//   useCreateOrderMutation,
//   useOnApproveMutation,
// } from "../redux/features/paypalApi";

const PaypalPayment = (data) => {
  const serverUrl = "http://localhost:4000/api/paypal";

  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`${serverUrl}/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        product: {
          description: "T-Shirt",
          price: "150",
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${serverUrl}/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => {
        // console.log("response: payment successful", response);
        return response.json();
      })
      .then((data) => console.log("data: ", data));
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PaypalPayment;

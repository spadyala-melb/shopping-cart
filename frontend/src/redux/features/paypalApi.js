import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paypalApi = createApi({
  reducerPath: "paypalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/api/paypal/create-paypal-order",
        method: "POST",
        body: payload,
        // responseHandler: "text",
      }),
    }),
    onApprove: builder.mutation({
      query: (payload) => ({
        url: "/api/paypal/capture-paypal-order",
        method: "POST",
        body: payload,
        // responseHandler: "text",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useOnApproveMutation } = paypalApi;

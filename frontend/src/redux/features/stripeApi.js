import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stripeApi = createApi({
  reducerPath: "stripeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    stripePayment: builder.mutation({
      query: (payload) => ({
        url: "/api/stripe/create-checkout-session",
        method: "POST",
        body: payload,
        // responseHandler: "text",
      }),
    }),
  }),
});

export const { useStripePaymentMutation } = stripeApi;

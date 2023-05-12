import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/api/login",
        method: "POST",
        body: payload,
        responseHandler: "text",
      }),
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/api/register",
        method: "POST",
        body: payload,
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApiSlice;

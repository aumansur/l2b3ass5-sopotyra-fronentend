import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl:'http://localhost:5000/api',
    // baseUrl:'https://facility-booking-platform.vercel.app/api',
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", ` Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["bookings", "facility"],

  endpoints: (builder) => ({}),
});

export default baseApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainSliderApi = createApi({
  reducerPath: "mainSliderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_DEV_URL,
    prepareHeaders: (headers) => {
      const token = process.env.NEXT_PUBLIC_TOKEN;
      //headers.set('ngrok-skip-browser-warning', false);
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSliderList: builder.query({
      query: () => `/contentdata/1`,
    }),
    getAdsSliderList: builder.query({
      query: () => `/contentdata/2`,
    }),
  }),
});

export const { useGetSliderListQuery, useGetAdsSliderListQuery } =
  mainSliderApi;

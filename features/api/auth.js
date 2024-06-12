import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_DEV_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("authToken");
      headers.set("authorization", `Bearer ${token}`);
      headers.set("accept", "*/*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (login_data) => ({
        url: `/token`,
        method: "POST",
        body: login_data,
        // credentials: "include",
      }),
    }),
    createUser: builder.mutation({
      query: (user_data) => ({
        url: `/register`,
        method: "POST",
        body: user_data,
      }),
    }),
    updateUser: builder.mutation({
      query: (user_data) => ({
        url: `/visitor_profile_change`,
        method: "POST",
        body: user_data,
      }),
    }),
    changePassword: builder.mutation({
      query: (user_data) => ({
        url: `/visitor_password_change`,
        method: "POST",
        body: user_data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (user_data) => ({
        url: `/forgot_password/reset`,
        method: "POST",
        body: user_data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (user_data) => ({
        url: `/forgot_password/otp`,
        method: "POST",
        body: user_data,
      }),
    }),
    addProductReview: builder.mutation({
      query: (review_data) => ({
        url: `/visitor_product_review`,
        method: "POST",
        body: review_data,
      }),
    }),
    addProductRating: builder.mutation({
      query: (rating_data) => ({
        url: `/visitor_product_rate`,
        method: "POST",
        body: rating_data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (verify_otp) => ({
        url: `/verify_otp`,
        method: "POST",
        body: verify_otp,
      }),
    }),
    fp_verifyOTP: builder.mutation({
      query: (verify_otp) => ({
        url: `/forgot_password/verify_otp`,
        method: "POST",
        body: verify_otp,
      }),
    }),
    resendOTP: builder.mutation({
      query: (resend_otp) => ({
        url: `/forgot_password/otp`,
        method: "POST",
        body: resend_otp,
      }),
    }),
    resendRegistrationOTP: builder.mutation({
      query: (resend_otp) => ({
        url: `/resend/otp`,
        method: "POST",
        body: resend_otp,
      }),
    }),
    verifyGToken: builder.query({
      query: ({ access_token }) => `/auth/google?token=${access_token}`,
    }),
    verifyFToken: builder.query({
      query: ({ access_token, user_email }) => `/auth/facebook?token=${access_token}&email=${user_email}`,
    }),
    getQuotationProduct: builder.query({
      query: ({ offset = 0, limit }) =>
        `/visitor_product_quotation/?offset_value=${offset}&limit_value=${limit}`,
    }),
    getSupplierInfo: builder.query({
      query: ({ s_id }) => `/supplier/${s_id}`,
    }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useAddProductRatingMutation,
  useAddProductReviewMutation,
  useChangePasswordMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useVerifyOTPMutation,
  useFp_verifyOTPMutation,
  useResendOTPMutation,
  useResendRegistrationOTPMutation,
  useVerifyGTokenQuery,
  useVerifyFTokenQuery,
  useGetQuotationProductQuery,
  useGetSupplierInfoQuery,
} = authApi;

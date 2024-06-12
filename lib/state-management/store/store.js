"use client";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../../../features/api/auth";
import { mainSliderApi } from "../../../features/api/main-slider";
import { pokemonApi } from "../../../features/api/pokemon";
import { productApi } from "../../../features/api/product";
import counterReducer from "../../../features/counter/counterSlice";
import favouriteReducer from "../../../features/favourite/favouriteSlice";
import filterParamsReducer from "../../../features/filterParams/filterParamsSlice";
import searchProductReducer from "../../../features/searchProduct/searchProductSlice";

// configure store
export const store = configureStore({
  reducer: {
    filterParams: filterParamsReducer,
    searchProduct: searchProductReducer,
    favourite: favouriteReducer,
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [mainSliderApi.reducerPath]: mainSliderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      pokemonApi.middleware,
      mainSliderApi.middleware,
      productApi.middleware,
      authApi.middleware
    ),
});

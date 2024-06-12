import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_DEV_URL,
    prepareHeaders: (headers) => {
      const token = process.env.NEXT_PUBLIC_TOKEN;
      headers.set("authorization", `Bearer ${token}`);
      headers.set("accept", "*/*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProductsByTypeId: builder.query({
      query: ({ type_id, offset = 0, limit }) =>
        `/get_product_impacttype_with_images/?impact_type_id=${type_id}&offset=${offset}&limit=${limit}`,
    }),

    getRelatedProductsBySupplierPId: builder.query({
      query: ({ supplier_product_id, offset = 0, limit }) =>
        `/get_related_product/?supplier_product_id=${supplier_product_id}&offset=${offset}&limit=${limit}`,
    }),

    getSimilerProductsBySupplierPId: builder.query({
      query: ({ supplier_product_id, offset = 0, limit }) =>
        `/get_similer_product/?supplier_product_id=${supplier_product_id}&offset=${offset}&limit=${limit}`,
    }),

    getContentDataById: builder.query({
      query: ({ content_data_id, offset = 0, limit }) =>
        `/contentdata/${content_data_id}?offset=${offset}&limit=${limit}`,
    }),

    getTopVisitedProduct: builder.query({
      query: (arg) => ({
        url: `/get_top_visited_product`,
        params: { ...arg },
      }),
    }),

    fetchDataByValues: builder.query({
      query: (values) =>
        `/products_filter/?offset_value=0&category=${values[0]}&brand=${values[1]}&model=${values[2]}&engine=${values[3]}&max_price=${values[4]}`,
    }),

    fetchProductsByFilter: builder.query({
      query: (arg) => ({
        url: `/products_filter_price_range`,
        params: { ...arg },
      }),
    }),

    fetchFooterInfo: builder.query({
      query: () => `/contentdata/11`,
    }),

    fetchDiscountCode: builder.query({
      query: () => `/discount/list`,
    }),

    getHorizontalItems: builder.query({
      query: () => `/product`,
      transformResponse: (response, meta, arg) => response.slice(0, 3),
    }),

    getProductCategories: builder.query({
      query: ({ offset = 0, limit }) =>
        `/category_with_subcategory/?offset=${offset}&limit=${limit}`,
    }),

    getAllCategories: builder.query({
      query: () => `/category`,
    }),

    getAllSubByCatId: builder.query({
      query: (category_id) =>
        `/load_subcat_brand_engine_model_for_category/${category_id}`,
    }),

    getBrandList: builder.query({
      query: () => `/categorybrand`,
      transformResponse: (response, meta, arg) => response,
    }),

    getModelList: builder.query({
      // query: (value) => `/model/find/${value.id}`,
      query: (value) => `/categorymodel`,
      transformResponse: (response, meta, arg) => response,
    }),

    getEngineList: builder.query({
      query: () => `/categoryengine`,
      transformResponse: (response, meta, arg) => response,
    }),

    getProductDetails: builder.query({
      query: ({ uuid }) => `/get_product_with_details/${uuid}`,
    }),

    getProductVisitorReview: builder.query({
      query: ({ supplier_product_id }) =>
        `/visitorproductreview/${supplier_product_id}`,
    }),

    textSearch: builder.mutation({
      query: (args) => {
        const queryParams = new URLSearchParams({
          offset: 1,
          limit: 20,
          text_file: args.text_file
        });

        return {
          url: '/text_search',
          method: 'POST',
          params: queryParams,
        };
      }
    }),

    imageSearchByUrl: builder.mutation({
      query: (args) => {
        const queryParams = new URLSearchParams({
          offset: 0,
          limit: 20,
          weblink: args.weblink
        });

        return {
          url: '/image_search_url',
          method: 'POST',
          params: queryParams,
        };
      }
    }),

    imageSearch: builder.mutation({
      query: ({ imageFile }) => {
        const formData = new FormData();
        formData.append('image_file', imageFile);

        const params = new URLSearchParams({
          offset: 1,
          limit: 20,
        });

        return {
          url: `image_search/?${params.toString()}`,
          method: 'POST',
          body: formData,
        };
      }
    }),
  }),
});

export const {
  useGetProductsByTypeIdQuery,
  useGetRelatedProductsBySupplierPIdQuery,
  useGetSimilerProductsBySupplierPIdQuery,
  useGetContentDataByIdQuery,
  useGetTopVisitedProductQuery,
  useFetchDataByValuesQuery,
  useFetchProductsByFilterQuery,
  useFetchFooterInfoQuery,
  useFetchDiscountCodeQuery,
  useGetHorizontalItemsQuery,
  useGetProductCategoriesQuery,
  useGetAllCategoriesQuery,
  useGetAllSubByCatIdQuery,
  useGetBrandListQuery,
  useGetModelListQuery,
  useGetEngineListQuery,
  useGetProductDetailsQuery,
  useGetProductVisitorReviewQuery,
  useTextSearchMutation,
  useImageSearchByUrlMutation,
  useImageSearchMutation
} = productApi;

import baseApi from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: ({ limit, page, sort }) => {
        return {
          url: "/facility",
          method: "GET",
          params: { limit, page, sort },
        };
      },
      providesTags: ["facility"],
    }),

    getSingleFacility: builder.query({
      query: (facilityId) => {
        return {
          url: `/facility/${facilityId}`,
          method: "GET",
        };
      },
    }),

    checkFacilityAvailability: builder.query({
      query: ({ date, facility }) => {
        return {
          url: "/check-availability",
          method: "GET",
          params: { date: date, facility: facility },
        };
      },
    }),

    createFacility: builder.mutation({
      query: (data) => {
        // data should be FormData
        return {
          url: `/facility`,
          method: "POST",
          body: data,
        };
      },
    }),

    updateFacility: builder.mutation({
      query: ({ id, data }) => {
        // data should be FormData in case of image upload
        return {
          url: `/facility/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["facility"],
    }),

    removeFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facility"],
    }),
  }),
});

export const {
  useLazyGetAllFacilityQuery,
  useGetAllFacilityQuery,
  useCheckFacilityAvailabilityQuery,
  useUpdateFacilityMutation,
  useRemoveFacilityMutation,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
} = facilityApi;

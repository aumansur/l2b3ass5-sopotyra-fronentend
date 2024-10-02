import baseApi from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: ({ searchTerm, limit, page, sort }) => ({
        url: "/facility",
        params: { searchTerm, limit, page, sort }, // This assumes your backend accepts these query parameters
      }),
      providesTags: ["facility"],
    }),

    getSingleFacility: builder.query({
      query: (facilityId) => ({
        url: `/facility/${facilityId}`,
        method: "GET",
      }),
    }),

    checkFacilityAvailability: builder.query({
      query: ({ date, facility }) => ({
        url: "/check-availability",
        method: "GET",
        params: { date, facility },
      }),
    }),

    createFacility: builder.mutation({
      query: (data) => ({
        url: `/facility`,
        method: "POST",
        body: data,
      }),
    }),

    updateFacility: builder.mutation({
      query: ({ id, data }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: data,
      }),
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

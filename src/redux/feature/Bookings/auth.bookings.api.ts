import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersBooking: builder.query({
      query: (userInfo) => ({
        url: "/bookings/user",
        method: "GET",
        body: userInfo,
      }),
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),

    removeBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useGetUsersBookingQuery,
  useGetAllBookingsQuery,
  useRemoveBookingMutation,
  useCreateBookingMutation,
} = authApi;

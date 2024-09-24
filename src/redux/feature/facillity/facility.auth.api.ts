import baseApi from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: ({searchTerm,limit,page,sort}) => {

        return {
          url: "/facility",
          method: "GET",
          params:{searchTerm,limit,page,sort}
        };
      },
      providesTags:['facility']
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
        query: ({date,facility}) => {
      
         
  
          return {
            url: "/check-availability",
            method: "GET",
            params: {date:date , facility:facility}
          };
        },
      }),

      createFacility: builder.mutation({
        query: (data) => {
        
         
  
          return {
            url: `/facility`,
            method: "POST",
            body:data
          };
        },
      }),

      updateFacility: builder.mutation({
        query: ({id,data}) => {
         console.log(id,data);
         
         
  
          return {
            url: `/facility/${id}`,
            method: "PUT",
            body:data
          };
        },

        invalidatesTags: ['facility']
      }),
      removeFacility:builder.mutation({
        query:(id)=>({
            url:`/facility/${id}`,
            method:'DELETE',
           
        }),
        invalidatesTags: ['facility']
    })
  }),
});

export const { useLazyGetAllFacilityQuery,useGetAllFacilityQuery,useCheckFacilityAvailabilityQuery,useUpdateFacilityMutation,useRemoveFacilityMutation ,useGetSingleFacilityQuery,useCreateFacilityMutation} = facilityApi;

import baseApi from "../../api/baseApi";


const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
    login:builder.mutation({
        query:(userInfo)=>({
            url:'/auth/login',
            method:'POST',
            body:userInfo
        })
    }),
    registerUser:builder.mutation({
        query:(userInfo)=>({
            url:'/auth/signup',
            method:'POST',
            body:userInfo
        })
    }),
    getUserByEmail:builder.query({
        query:(email)=>({
            url:'/get-user',
            method:'GET',
            params:{email}
        })
    })
    })
})


export const {useLoginMutation,useGetUserByEmailQuery,useRegisterUserMutation}=authApi
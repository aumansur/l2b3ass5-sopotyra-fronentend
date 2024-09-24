import baseApi from "../../api/baseApi"



const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
    createAdmin:builder.mutation({
        query:(userInfo)=>({
            url:'/create-admin',
            method:'POST',
            body:userInfo
        })
    })

    })
})


export const {useCreateAdminMutation}=authApi
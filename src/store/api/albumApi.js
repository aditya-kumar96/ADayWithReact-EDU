import { faker } from '@faker-js/faker'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const albumApi = createApi({
    reducerPath:'albums',
    baseQuery : fetchBaseQuery({
        baseUrl:'http://localhost:3005',

    }),
    endpoints(builder){
        return{
            fetchAlbums:builder.query({
                providesTags:(result , error , user)=>{
                    return [{type:'Album',id:user.id}]
                },
                query:(user)=>{
                    return{
                        url:'/albums',
                        params:{
                            userId:user.id
                        },
                        method:"GET"
                    }
                }
            }),
            addAlbum:builder.mutation({
                invalidatesTags:(result , error , user)=>{
                    return [{type:'Album',id:user.id}]
                },
                query:(user)=>{
                    return{
                        url:'/albums',
                        method:'POST',
                        body:{
                            userId:user.id,
                            title:faker.commerce.productName()
                        }
                    }
                }
            })

        }
    }

})

export const { useFetchAlbumsQuery , useAddAlbumMutation} = albumApi

export {albumApi}
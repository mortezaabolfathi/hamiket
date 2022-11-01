import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 1) => `/photos?_page=${page}&_limit=4`,
    }),
  }),
})

export const { useListPostsQuery } = api
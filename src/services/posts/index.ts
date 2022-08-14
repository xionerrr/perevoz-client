import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '../utils'

import { I_DirectionItems } from 'types/Destionation'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<I_DirectionItems[], void>({
      query: () => ({
        url: `/Trip/destinations/overview`,
      }),
      providesTags: ['Posts'],
    }),
  }),
})

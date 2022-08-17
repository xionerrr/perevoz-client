import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '../utils'

import { I_DirectionItem, I_DestinationItem } from 'types/Destionation'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<I_DirectionItem[], void>({
      query: () => ({
        url: `api/Trip/destinations/overview`,
      }),
      providesTags: ['Posts'],
    }),
    getTripDestinations: build.query<I_DestinationItem[], void>({
      query: () => ({
        url: `api/Trip/destinations`,
      }),
      providesTags: ['Posts'],
    }),
  }),
})

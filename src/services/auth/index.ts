import { createApi } from '@reduxjs/toolkit/query/react'

import { I_UserLoginRequest } from './interfaces'

import { baseQuery } from '../utils'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  endpoints: (build) => ({
    userLogin: build.mutation<{ token: string }, I_UserLoginRequest>({
      query: (body) => ({
        url: 'api/Admin/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

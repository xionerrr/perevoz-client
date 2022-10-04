import { createApi } from '@reduxjs/toolkit/query/react'

import { I_CallRequest } from './models'

import { baseQuery } from '../utils'

export const callAPI = createApi({
  reducerPath: 'callAPI',
  baseQuery,
  endpoints: (build) => ({
    orderCall: build.mutation<any, I_CallRequest>({
      query: (body) => ({
        url: `api/Order/call/request?name=${body.name}&phoneNumber=${body.phoneNumber}`,
        method: 'POST',
      }),
    }),
  }),
})

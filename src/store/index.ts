import { combineReducers, configureStore } from '@reduxjs/toolkit'

import AuthSlice from './auth'
import uiSlice from './ui'

import { authAPI } from 'services/auth'
import { tripAPI } from 'services/trip'

const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
  [AuthSlice.name]: AuthSlice.reducer,
  [tripAPI.reducerPath]: tripAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([tripAPI.middleware, authAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

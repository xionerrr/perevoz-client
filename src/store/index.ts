import { combineReducers, configureStore } from '@reduxjs/toolkit'

import AuthSlice from './auth'
import uiSlice from './ui'

import { postsAPI } from 'services/posts'

const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
  [AuthSlice.name]: AuthSlice.reducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([postsAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

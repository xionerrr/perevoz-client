import { createSlice } from '@reduxjs/toolkit'

import { LocalStorage } from 'utils/helpers/localStorage'

interface I_AuthState {
  isAuth: boolean
}

const initialState: I_AuthState = {
  isAuth: false,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuth = true
    },
    signOut: (state) => {
      state.isAuth = false
      LocalStorage.deleteAuthToken()
    },
  },
})

export const { signIn, signOut } = AuthSlice.actions

export default AuthSlice

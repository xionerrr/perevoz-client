/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Modals, I_Modal } from 'types/UI'

interface I_UIState {
  modal: I_Modal
}

const initialState: I_UIState = {
  modal: {
    isOpen: false,
    window: null,
    data: null,
  },
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ window: E_Modals; data: any }>) => {
      state.modal.isOpen = true
      state.modal.window = action.payload.window
      state.modal.data = action.payload.data
    },
    closeModal: (state) => {
      state.modal.isOpen = false
      state.modal.window = null
    },
  },
})

export const { openModal, closeModal } = uiSlice.actions

export default uiSlice

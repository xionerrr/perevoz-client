/* eslint-disable @typescript-eslint/no-explicit-any */
export interface I_Modal {
  isOpen: boolean
  window: E_Modals | null
  data: any | null
}

export enum E_Modals {
  feedback = 'feedback',
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface I_Modal {
  isOpen: boolean
  window: E_Modals | null
  data: any | null
}

export enum E_Modals {
  feedback = 'feedback',
  book = 'book',
  editTrip = 'editTrip',
  editCountry = 'editCountry',
  createTrip = 'createTrip',
  openPhoto = 'openPhoto',
}

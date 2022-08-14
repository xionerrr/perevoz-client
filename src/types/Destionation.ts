type T_Direction = {
  destination: string
  photoUrlPath: string
}

export interface I_DirectionItems {
  country: string
  directions: T_Direction[]
  countryUrlPath: string
}

type T_Direction = {
  destination: string
  photoUrlPath: string
}

export interface I_DirectionItem {
  country: string
  destinations: T_Direction[]
  countryUrlPath: string
}

export interface I_DestinationItem {
  startDestination: string
  finishDestination: string
}

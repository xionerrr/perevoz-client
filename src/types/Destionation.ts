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
  finishDestination: string[]
}

export interface I_Trip {
  id: string
  startDestination: string
  endDestination: string
  startCountry: string
  finishCountry: string
  startDestinationPlace: string
  adultTicketPrice: number
  childTicketPrice: number
  description: string
  travelDurationHours: number
  departureTimeHours: number
  departureTime: string
  arrivalTime: string
  road: string[]
  schedule: string[]
  finishCoordinates: string
  startCoordinates: string
  finishDestinationPlace: string
}

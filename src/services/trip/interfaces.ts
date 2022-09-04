export interface I_TripRequest {
  startDestination: string
  endDestination: string
  date: string
}

export interface I_TripPhotoCreateRequest {
  countryName: string
  photo: any
}

export interface I_TripCreateRequest {
  startDestination: string
  endDestination: string
  finishCountry: string
  startCountry: string
  startDestinationPlace: string
  adultTicketPrice: number
  childTicketPrice: number
  description: string
  travelDurationHours: number
  departureTimeHours: number
  finishCoordinates: string
  startCoordinates: string
  finishDestinationPlace: string
  road: string[]
  schedule: string[]
}

export interface I_TripUpdateRequest {
  id: string
  startDestination: string
  endDestination: string
  finishCountry: string
  startCountry: string
  startDestinationPlace: string
  adultTicketPrice: number
  childTicketPrice: number
  description: string
  travelDurationHours: number
  departureTimeHours: number
  finishCoordinates: string
  startCoordinates: string
  finishDestinationPlace: string
  road: string[]
  schedule: string[]
}

export interface I_PlaceOrderRequest {
  startDestination: string
  endDestination: string
  date: string
  name: string
  phoneNumber: string
  placeCounter: string
}

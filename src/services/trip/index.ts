import { createApi } from '@reduxjs/toolkit/query/react'

import {
  I_PlaceOrderRequest,
  I_TripCreateRequest,
  I_TripPhotoCreateRequest,
  I_TripRequest,
  I_TripUpdateRequest,
} from './interfaces'

import { baseQuery } from '../utils'

import { I_DirectionItem, I_DestinationItem, I_Trip } from 'types/Destionation'

export const tripAPI = createApi({
  reducerPath: 'tripAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getTripDestinations: build.query<I_DestinationItem[], void>({
      query: () => ({
        url: `api/Trip/destinations`,
      }),
      providesTags: ['Posts'],
    }),
    getTripDestinationsOverview: build.query<I_DirectionItem[], void>({
      query: () => ({
        url: `api/Trip/destinations/overview`,
      }),
      providesTags: ['Posts'],
    }),
    getTripInformation: build.query<I_Trip, I_TripRequest>({
      query: ({ startDestination, endDestination, date }) => ({
        url: `api/Trip/${startDestination}/${endDestination}/${date}`,
      }),
      providesTags: ['Posts'],
    }),
    getCountries: build.query<{ countries: string[] }, void>({
      query: () => ({
        url: `api/Admin/trip/countries`,
      }),
      providesTags: ['Posts'],
    }),
    getTripsInformation: build.query<I_Trip[], string>({
      query: (cityName) => ({
        url: `api/Admin/trips?cityName=${cityName}`,
      }),
      providesTags: ['Posts'],
    }),
    createTripPhoto: build.mutation<void, I_TripPhotoCreateRequest>({
      query: ({ photo, countryName }) => ({
        url: `api/Admin/trip/photo/replace?countryName=${countryName}`,
        method: 'POST',
        body: photo,
      }),
      invalidatesTags: ['Posts'],
    }),
    createTrip: build.mutation<void, I_TripCreateRequest>({
      query: (body) => ({
        url: `api/Admin/trip`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    updateTrip: build.mutation<void, I_TripUpdateRequest>({
      query: (body) => ({
        url: `api/Admin/trip`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    deleteTrip: build.mutation<void, string>({
      query: (id) => ({
        url: `api/Admin/trip?tripId=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    placeOrder: build.mutation<void, I_PlaceOrderRequest>({
      query: (body) => ({
        url: `api/Order/reservation/request?startDestination=${body.startDestination}&endDestination=${body.endDestination}&date=${body.date}&name=${body.name}&phoneNumber=${body.phoneNumber}&placeCounter=${body.placeCounter}`,
        method: 'POST',
      }),
    }),
  }),
})

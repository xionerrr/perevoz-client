import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useMediaQuery } from '@mui/material'
import { ChangeEvent, useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { tripAPI } from 'services/trip'
import { openModal } from 'store/ui'
import { I_Trip } from 'types/Destionation'
import { E_Modals } from 'types/UI'
import { E_BreakPoints } from 'utils/constants/breakpoints'
import { ROUTES } from 'utils/constants/routes'

export const Content = () => {
  const [trips, setTrips] = useState<I_Trip[]>([])
  const [value, setValue] = useState<string>('')
  const [debouncedValue] = useDebounce(value, 500)

  const dispatch = useStoreDispatch()

  const navigate = useNavigate()

  const isTablet = useMediaQuery(E_BreakPoints.table)

  const [
    getTrips,
    {
      data: getTripsInformationData,
      isLoading: getTripsInformationLoading,
      isSuccess: getTripsInformationSuccess,
    },
  ] = tripAPI.useLazyGetTripsInformationQuery()
  const [deleteTrip] = tripAPI.useDeleteTripMutation()

  const handleDeleteTrip = (tripId: string) => () => {
    const result = confirm('Видаляємо?')
    if (result) deleteTrip(tripId)
  }

  const handleEditTrip =
    (
      id: string,
      startDestination: string,
      endDestination: string,
      finishCountry: string,
      startCountry: string,
      startDestinationPlace: string,
      adultTicketPrice: number,
      childTicketPrice: number,
      description: string,
      travelDurationHours: number,
      departureTimeHours: number,
      road: string[],
      schedule: string[],
      finishCoordinates: string,
      startCoordinates: string,
      finishDestinationPlace: string,
    ) =>
    () => {
      dispatch(
        openModal({
          window: E_Modals.editTrip,
          data: {
            id: id,
            startDestination: startDestination,
            endDestination: endDestination,
            finishCountry: finishCountry,
            startCountry: startCountry,
            startDestinationPlace: startDestinationPlace,
            adultTicketPrice: adultTicketPrice,
            childTicketPrice: childTicketPrice,
            description: description,
            travelDurationHours: travelDurationHours,
            departureTimeHours: departureTimeHours,
            road: road,
            schedule: schedule,
            finishCoordinates: finishCoordinates,
            startCoordinates: startCoordinates,
            finishDestinationPlace: finishDestinationPlace,
          },
        }),
      )
    }

  const handleType = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleCreateTrip = () => {
    dispatch(openModal({ window: E_Modals.createTrip, data: null }))
  }

  const handleEditCountry = () => {
    dispatch(openModal({ window: E_Modals.editCountry, data: null }))
  }

  const handleSignOut = () => {
    navigate(ROUTES.home, { replace: true })
  }

  useEffect(() => {
    getTrips(debouncedValue)
  }, [debouncedValue])

  useLayoutEffect(() => {
    if (getTripsInformationData) {
      setTrips(getTripsInformationData)
    }
  }, [getTripsInformationData])

  if (trips && getTripsInformationSuccess)
    return (
      <S.Content>
        <S.ContentInner>
          <S.ContentInput
            type='text'
            placeholder='Введіть місто для пошуку'
            value={value}
            onChange={handleType}
          />
          <S.ContentNewTripBox>
            <S.ContentNewTrip onClick={handleEditCountry}>
              Добавити/змінити фото країни
            </S.ContentNewTrip>
            <S.ContentNewTrip onClick={handleCreateTrip}>Додати новий шлях</S.ContentNewTrip>
            {!isTablet && (
              <S.ContentNewTripToMain onClick={handleSignOut}>На головну</S.ContentNewTripToMain>
            )}
          </S.ContentNewTripBox>
          <S.ContentList>
            {trips.map((trip) => {
              return (
                <S.ContentListItem key={trip.id}>
                  <S.ContentListItemTop>
                    <S.ContentListItemBox>
                      <S.ContentListItemLabel>
                        {trip.startDestination} ({trip.startCountry}) - {trip.endDestination} (
                        {trip.finishCountry})
                      </S.ContentListItemLabel>
                      <S.ContentListItemTopButtonGroup>
                        <S.ContentListItemTopButton
                          onClick={handleEditTrip(
                            trip.id,
                            trip.startDestination,
                            trip.endDestination,
                            trip.finishCountry,
                            trip.startCountry,
                            trip.startDestinationPlace,
                            trip.adultTicketPrice,
                            trip.childTicketPrice,
                            trip.description,
                            trip.travelDurationHours,
                            trip.departureTimeHours,
                            trip.road,
                            trip.schedule,
                            trip.finishCoordinates,
                            trip.startCoordinates,
                            trip.finishDestinationPlace,
                          )}
                        >
                          <EditIcon />
                        </S.ContentListItemTopButton>
                        <S.ContentListItemTopButton onClick={handleDeleteTrip(trip.id)}>
                          <DeleteIcon />
                        </S.ContentListItemTopButton>
                      </S.ContentListItemTopButtonGroup>
                    </S.ContentListItemBox>
                  </S.ContentListItemTop>
                  <div>{trip.description}</div>
                </S.ContentListItem>
              )
            })}
          </S.ContentList>
        </S.ContentInner>
      </S.Content>
    )

  return null
}

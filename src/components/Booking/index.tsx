import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'
import { CircularProgress, useMediaQuery } from '@mui/material'
import { format } from 'date-fns'
import { useEffect, useLayoutEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { days, months, passengersCount } from './data'
import * as S from './styles'
import 'react-datepicker/dist/react-datepicker.css'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { tripAPI } from 'services/trip'
import { openModal } from 'store/ui'
import { I_DestinationItem } from 'types/Destionation'
import { E_Modals } from 'types/UI'
import { E_BreakPoints } from 'utils/constants/breakpoints'
import { regExps } from 'utils/constants/regExp'

type FormData = {
  userName: string
  phone: string
  departure: string
  arrival: string
  date: string
  passengersCount: string
}

registerLocale('uk', {
  localize: {
    day: (n) => days[n],
    month: (n) => months[n],
  },
  formatLong: {
    date: () => 'dd/MM/yyyy',
  },
  options: {
    weekStartsOn: 1,
  },
} as Locale)

export const Booking = () => {
  const [tripDestinations, setTripDestinations] = useState<I_DestinationItem[]>()
  const [calendarData, setCalendarData] = useState<Date>(new Date())

  const isMobile = useMediaQuery(E_BreakPoints.mobile)

  const location = useLocation()
  const dispatch = useStoreDispatch()

  const {
    data: getTripDestinationsData,
    isLoading: getTripDestinationsLoading,
    isSuccess: getTripDestinationsSuccess,
  } = tripAPI.useGetTripDestinationsQuery()

  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      userName: '',
      phone: '',
      departure: '',
      arrival: '',
      date: '',
      passengersCount: '1',
    },
  })

  const value = getValues()

  const Submit = () => {
    dispatch(
      openModal({
        window: E_Modals.book,
        data: {
          userName: getValues('userName'),
          phone: getValues('phone'),
          departure: getValues('departure'),
          arrival: getValues('arrival'),
          date: getValues('date'),
          passengersCount: getValues('passengersCount'),
        },
      }),
    )
  }

  useLayoutEffect(() => {
    if (getTripDestinationsData) setTripDestinations(getTripDestinationsData)
  }, [getTripDestinationsData])

  useEffect(() => {
    if (calendarData) setValue('date', format(new Date(calendarData), 'yyyy-MM-dd'))
  }, [calendarData])

  useEffect(() => {
    setValue('arrival', '')
  }, [value.departure])

  watch()

  if (getTripDestinationsLoading)
    return (
      <S.BookingLoader location={location.pathname}>
        <CircularProgress sx={{ color: '#999' }} disableShrink />
      </S.BookingLoader>
    )

  if (tripDestinations && getTripDestinationsSuccess)
    return (
      <S.Booking>
        <S.BookingForm location={location.pathname} onSubmit={handleSubmit(Submit)}>
          <S.BookingFormTitle>Бронювання поїздки</S.BookingFormTitle>
          <S.BookingFormInner>
            <S.BookingFormUserInfo>
              <S.BookingFormName>
                <S.BookingFromUserLabel>Ім'я</S.BookingFromUserLabel>
                <S.BookingFormInput
                  id='userNameField'
                  type='text'
                  placeholder="Ім'я"
                  autoComplete='off'
                  {...register('userName', { required: true, maxLength: 40 })}
                />
                {errors.userName && (
                  <S.BookingFormNameError>
                    <PriorityHighRoundedIcon fontSize='small' />
                  </S.BookingFormNameError>
                )}
              </S.BookingFormName>
              <S.BookingFormTel>
                <S.BookingFromUserLabel>Телефон</S.BookingFromUserLabel>
                <S.BookingFormInput
                  id='userTelField'
                  type='text'
                  placeholder='Телефон'
                  autoComplete='off'
                  {...register('phone', {
                    required: true,
                    minLength: 10,
                    maxLength: 16,
                    pattern: {
                      value: regExps.tel,
                      message: 'Please enter a number',
                    },
                  })}
                />
                {errors.phone && (
                  <S.BookingFormTelError>
                    <PriorityHighRoundedIcon fontSize='small' />
                  </S.BookingFormTelError>
                )}
              </S.BookingFormTel>
            </S.BookingFormUserInfo>
            <S.BookingFormUserDestination>
              <S.BookingFromUserDepartureCity>
                <S.BookingFromUserLabel>Місто виїзду</S.BookingFromUserLabel>
                <KeyboardArrowDownIcon />
                <S.BookingFromUserCitySelect {...register('departure', { required: true })}>
                  {!value.departure && (
                    <S.BookingFromUserCityOptionNotSelected value='' disabled>
                      Виберіть
                    </S.BookingFromUserCityOptionNotSelected>
                  )}
                  {tripDestinations.map((destination, index) => {
                    return (
                      <S.BookingFromUserCityOption key={index} value={destination.startDestination}>
                        {destination.startDestination}
                      </S.BookingFromUserCityOption>
                    )
                  })}
                </S.BookingFromUserCitySelect>
                {errors.departure && (
                  <S.BookingFormDepartureError>
                    <PriorityHighRoundedIcon fontSize='small' />
                  </S.BookingFormDepartureError>
                )}
              </S.BookingFromUserDepartureCity>
              {isMobile ? (
                <S.BookingFromUserArrivalCity>
                  <S.BookingFromUserLabel>Місто прибуття</S.BookingFromUserLabel>
                  <KeyboardArrowDownIcon />
                  <S.BookingFromUserCitySelect
                    {...register('arrival', { required: true })}
                    disabled={!value.departure}
                  >
                    {
                      <S.BookingFromUserCityOptionNotSelected value='' disabled>
                        Виберіть
                      </S.BookingFromUserCityOptionNotSelected>
                    }
                    {tripDestinations
                      .filter((filteredItem) => filteredItem.startDestination === value.departure)
                      .map((destination) =>
                        destination.finishDestination.map((item) => {
                          return (
                            <S.BookingFromUserCityOption key={item} value={item}>
                              {item}
                            </S.BookingFromUserCityOption>
                          )
                        }),
                      )}
                  </S.BookingFromUserCitySelect>
                  {value.departure
                    ? errors.arrival && (
                        <S.BookingFormDepartureError>
                          <PriorityHighRoundedIcon fontSize='small' />
                        </S.BookingFormDepartureError>
                      )
                    : null}
                </S.BookingFromUserArrivalCity>
              ) : (
                value.departure && (
                  <S.BookingFromUserArrivalCity>
                    <S.BookingFromUserLabel>Місто прибуття</S.BookingFromUserLabel>
                    <KeyboardArrowDownIcon />
                    <S.BookingFromUserCitySelect
                      {...register('arrival', { required: true })}
                      disabled={!value.departure}
                    >
                      {
                        <S.BookingFromUserCityOptionNotSelected value='' disabled>
                          Виберіть
                        </S.BookingFromUserCityOptionNotSelected>
                      }
                      {tripDestinations
                        .filter((filteredItem) => filteredItem.startDestination === value.departure)
                        .map((destination) =>
                          destination.finishDestination.map((item) => {
                            return (
                              <S.BookingFromUserCityOption key={item} value={item}>
                                {item}
                              </S.BookingFromUserCityOption>
                            )
                          }),
                        )}
                    </S.BookingFromUserCitySelect>
                    {value.departure
                      ? errors.arrival && (
                          <S.BookingFormDepartureError>
                            <PriorityHighRoundedIcon fontSize='small' />
                          </S.BookingFormDepartureError>
                        )
                      : null}
                  </S.BookingFromUserArrivalCity>
                )
              )}
            </S.BookingFormUserDestination>
            <S.BookingFormUserDetails>
              <S.BookingFromUserLabel>Дата прибуття</S.BookingFromUserLabel>
              <DatePicker
                locale='uk'
                dateFormat='dd.MM.yyyy'
                selected={calendarData}
                onChange={(date: Date) => setCalendarData(date)}
                minDate={new Date()}
              />
            </S.BookingFormUserDetails>
            <S.BookingFormSubmit>
              <S.BookingFormUserPassengersCount>
                <S.BookingFromUserLabel>Місць</S.BookingFromUserLabel>
                <KeyboardArrowDownIcon />
                <S.BookingFromUserCitySelect
                  value={value.passengersCount}
                  onChange={(e) => setValue('passengersCount', e.target.value)}
                >
                  {passengersCount.map((passenger) => {
                    return (
                      <S.BookingFromUserCityOption key={passenger} value={passenger}>
                        {passenger}
                      </S.BookingFromUserCityOption>
                    )
                  })}
                </S.BookingFromUserCitySelect>
              </S.BookingFormUserPassengersCount>
              <S.BookingFormSubmitButton type='submit'>Забронювати</S.BookingFormSubmitButton>
            </S.BookingFormSubmit>
          </S.BookingFormInner>
        </S.BookingForm>
      </S.Booking>
    )

  return (
    <S.BookingLoader location={location.pathname}>
      <CircularProgress sx={{ color: '#999' }} disableShrink />
    </S.BookingLoader>
  )
}

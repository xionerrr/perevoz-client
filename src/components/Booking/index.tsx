import { format } from 'date-fns'
import { useEffect, useLayoutEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useForm } from 'react-hook-form'

import { days, months } from './data'
import * as S from './styles'
import 'react-datepicker/dist/react-datepicker.css'

import { postsAPI } from 'services/posts'
import { I_DestinationItem } from 'types/Destionation'
import { regExps } from 'utils/constants/regExp'

type FormData = {
  userName: string
  phone: string
  departure: string
  arrival: string
  date: string
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

  const {
    data: getTripDestinationsData,
    isLoading: getTripDestinationsLoading,
    isSuccess: getTripDestinationsSuccess,
  } = postsAPI.useGetTripDestinationsQuery()

  useLayoutEffect(() => {
    if (getTripDestinationsData) setTripDestinations(getTripDestinationsData)
  }, [getTripDestinationsData])

  useEffect(() => {
    if (calendarData) setValue('date', format(new Date(calendarData), 'yyyy-MM-dd'))
  }, [calendarData])

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
    },
  })

  const value = getValues()

  const Submit = () => {
    console.log({
      userName: getValues('userName'),
      phone: getValues('phone'),
      departure: getValues('departure'),
      arrival: getValues('arrival'),
      date: getValues('date'),
    })
  }

  watch()

  if (getTripDestinationsLoading) return <div>Loading...</div>

  if (tripDestinations && getTripDestinationsSuccess)
    return (
      <S.Booking>
        <S.BookingForm onSubmit={handleSubmit(Submit)}>
          <S.BookingFormTitle>Бронювання поїздки</S.BookingFormTitle>
          <S.BookingFormInner>
            <S.BookingFormUserInfo>
              <S.BookingFormName>
                <S.BookingFormInput
                  id='userNameField'
                  type='text'
                  placeholder="Ім'я"
                  autoComplete='off'
                  {...register('userName', { required: true, maxLength: 40 })}
                ></S.BookingFormInput>
                {errors.userName && <div>Please enter a valid user</div>}
              </S.BookingFormName>
              <S.BookingFormTel>
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
                ></S.BookingFormInput>
                {errors.phone && <div>Please enter a valid phone</div>}
              </S.BookingFormTel>
            </S.BookingFormUserInfo>
            <S.BookingFormUserDestination>
              <S.BookingFromUserDepartureCity>
                <S.BookingFromUserCitySelect
                  value={value.departure}
                  onChange={(e) => setValue('departure', e.target.value)}
                >
                  {tripDestinations.map((destination, index) => {
                    return (
                      <S.BookingFromUserCityOption key={index} value={destination.startDestination}>
                        {destination.startDestination}
                      </S.BookingFromUserCityOption>
                    )
                  })}
                </S.BookingFromUserCitySelect>
              </S.BookingFromUserDepartureCity>
              <S.BookingFromUserArrivalCity>
                <S.BookingFromUserCitySelect
                  value={value.arrival}
                  onChange={(e) => setValue('arrival', e.target.value)}
                >
                  {tripDestinations.map((destination, index) => {
                    return (
                      <S.BookingFromUserCityOption
                        key={index}
                        value={destination.finishDestination}
                      >
                        {destination.finishDestination}
                      </S.BookingFromUserCityOption>
                    )
                  })}
                </S.BookingFromUserCitySelect>
              </S.BookingFromUserArrivalCity>
            </S.BookingFormUserDestination>
            <S.BookingFormUserDetails>
              <DatePicker
                locale='uk'
                dateFormat='dd.MM.yyyy'
                selected={calendarData}
                onChange={(date: Date) => setCalendarData(date)}
              />
            </S.BookingFormUserDetails>
            <S.BookingFormSubmit>
              <S.BookingFormSubmitButton type='submit'>Забронювати</S.BookingFormSubmitButton>
            </S.BookingFormSubmit>
          </S.BookingFormInner>
        </S.BookingForm>
      </S.Booking>
    )

  return <div>Error...</div>
}

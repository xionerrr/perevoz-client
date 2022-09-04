import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import { MouseEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { scheduleData } from 'components/Modal/data'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { tripAPI } from 'services/trip'
import { closeModal } from 'store/ui'

type FormData = {
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
  road: string[]
  schedule: string[]
  finishCoordinates: string
  startCoordinates: string
  finishDestinationPlace: string
}

export const EditTrip = () => {
  const modalData = useStoreSelector((state) => state.ui.modal)
  const dispatch = useStoreDispatch()

  const [newRoad, setNewRoad] = useState<string[]>([])
  const [newSchedule, setNewSchedule] = useState<string[]>([])
  const [roadValue, setRoadValue] = useState<string>('')

  const [updateTrip] = tripAPI.useUpdateTripMutation()

  const { register, getValues, handleSubmit } = useForm<FormData>({
    defaultValues: {
      ...modalData.data,
      road: newRoad,
      schedule: newSchedule,
    },
  })

  const Submit = () => {
    updateTrip({
      id: getValues('id'),
      startDestination: getValues('startDestination'),
      endDestination: getValues('endDestination'),
      finishCountry: getValues('finishCountry'),
      startCountry: getValues('startCountry'),
      startDestinationPlace: getValues('startDestinationPlace'),
      adultTicketPrice: +getValues('adultTicketPrice'),
      childTicketPrice: +getValues('childTicketPrice'),
      description: getValues('description'),
      travelDurationHours: +getValues('travelDurationHours'),
      departureTimeHours: +getValues('departureTimeHours'),
      road: newRoad,
      schedule: newSchedule,
      finishCoordinates: getValues('finishCoordinates'),
      startCoordinates: getValues('startCoordinates'),
      finishDestinationPlace: getValues('finishDestinationPlace'),
    })
    handleCloseModal()
  }

  const handleAddRoadItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!newRoad.includes(roadValue)) setNewRoad((prev) => [...prev, roadValue])
    setRoadValue('')
  }

  const handleDeleteRoadItem = (road: string) => () => {
    setNewRoad((prev) => prev.filter((item) => item !== road))
  }

  const handleAddScheduleItem = (schedule: string) => () => {
    setNewSchedule((prev) => [...prev, schedule])
  }

  const handleDeleteScheduleItem = (schedule: string) => () => {
    setNewSchedule((prev) => prev.filter((item) => item !== schedule))
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  useEffect(() => {
    if (modalData && modalData.data) {
      setNewRoad(modalData.data.road)
      setNewSchedule(modalData.data.schedule)
    }
  }, [modalData])

  if (modalData && modalData.data)
    return (
      <S.EditTripModal>
        <S.EditTripModalInner onSubmit={handleSubmit(Submit)}>
          <S.EditTripModalSection>
            <S.EditTripModalTitle>Редагування</S.EditTripModalTitle>
            <S.EditTripModalClose onClick={handleCloseModal}>
              <CloseIcon fontSize='large' />
            </S.EditTripModalClose>
          </S.EditTripModalSection>
          <S.EditTripModalList>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Ціна для квитка для дорослих</S.EditTripLabel>
              <S.EditTripInput
                placeholder='Ціна для квитка для дорослих'
                type='text'
                {...register('adultTicketPrice')}
              />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Ціна для квитка для дітей</S.EditTripLabel>
              <S.EditTripInput
                placeholder='Ціна для квитка для дітей'
                type='text'
                {...register('childTicketPrice')}
              />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Час подороджі ( в годинах )</S.EditTripLabel>
              <S.EditTripInput
                placeholder='Час подороджі'
                type='text'
                {...register('travelDurationHours')}
              />
            </S.EditTripModalListItem>
            {/*  */}
            <S.EditTripModalListItem>
              <S.EditTripLabel>Місце виїзду</S.EditTripLabel>
              <S.EditTripInput
                placeholder='Центральний вокзал'
                type='text'
                {...register('startDestinationPlace')}
              />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Місце прибуття</S.EditTripLabel>
              <S.EditTripInput
                placeholder='Центральний вокзал'
                type='text'
                {...register('finishDestinationPlace')}
              />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Координати місця виїзду</S.EditTripLabel>
              <S.EditTripInput
                placeholder='50.442745,30.493240'
                type='text'
                {...register('startCoordinates', { required: true })}
              />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Координати місця прибуття</S.EditTripLabel>
              <S.EditTripInput
                placeholder='50.442745,30.493240'
                type='text'
                {...register('finishCoordinates', { required: true })}
              />
            </S.EditTripModalListItem>
            {/*  */}
            <S.EditTripModalListItem>
              <S.EditTripLabel>У якій годині відправка</S.EditTripLabel>
              <S.EditTripInput
                placeholder='Час відправки'
                type='text'
                {...register('departureTimeHours', {
                  validate: (value) => value > 0 && value < 25,
                })}
              />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Опис</S.EditTripLabel>
              <S.EditTripTextArea placeholder='Опис' rows={9} {...register('description')} />
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Шлях</S.EditTripLabel>
              <S.EditTripRoadList>
                {newRoad.length > 0
                  ? newRoad.map((road) => {
                      return (
                        <S.EditTripRoadItem key={road}>
                          <S.EditTripRoadDelete onClick={handleDeleteRoadItem(road)}>
                            <CloseIcon fontSize='small' />
                          </S.EditTripRoadDelete>
                          {road}
                        </S.EditTripRoadItem>
                      )
                    })
                  : 'Здається тут порожньо :('}
                <S.EditTripRoadInputToAdd>
                  <S.EditTripInputRoad
                    placeholder='Додати місто'
                    type='text'
                    value={roadValue}
                    onChange={(e) => setRoadValue(e.target.value)}
                  />
                  <S.EditTripRoadAdd onClick={handleAddRoadItem}>
                    <SendIcon />
                  </S.EditTripRoadAdd>
                </S.EditTripRoadInputToAdd>
              </S.EditTripRoadList>
            </S.EditTripModalListItem>
            <S.EditTripModalListItem>
              <S.EditTripLabel>Розклад</S.EditTripLabel>
              <S.EditTripScheduleList>
                {newSchedule.length > 0
                  ? newSchedule.map((schedule) => {
                      return (
                        <S.EditTripScheduleItem key={schedule}>
                          <S.EditTripScheduleDelete onClick={handleDeleteScheduleItem(schedule)}>
                            <CloseIcon fontSize='small' />
                          </S.EditTripScheduleDelete>
                          {schedule}
                        </S.EditTripScheduleItem>
                      )
                    })
                  : 'Здається тут порожньо :('}
                <S.EditTripScheduleBox>
                  {scheduleData
                    .filter((data) => !newSchedule.includes(data))
                    .map((schedule) => {
                      return (
                        <S.EditTripScheduleItem key={schedule}>
                          <S.EditTripScheduleDelete onClick={handleAddScheduleItem(schedule)}>
                            <AddIcon fontSize='small' />
                          </S.EditTripScheduleDelete>
                          {schedule}
                        </S.EditTripScheduleItem>
                      )
                    })}
                </S.EditTripScheduleBox>
              </S.EditTripScheduleList>
            </S.EditTripModalListItem>
          </S.EditTripModalList>
          <S.EditTripModalSubmitBox>
            <S.EditTripModalSubmit type='submit'>Зберегти зміни</S.EditTripModalSubmit>
          </S.EditTripModalSubmitBox>
        </S.EditTripModalInner>
      </S.EditTripModal>
    )

  return null
}

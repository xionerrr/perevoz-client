import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { scheduleData } from 'components/Modal/data'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { tripAPI } from 'services/trip'
import { closeModal } from 'store/ui'

type FormData = {
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

export const CreateTrip = () => {
  const [newRoad, setNewRoad] = useState<string[]>([])
  const [newSchedule, setNewSchedule] = useState<string[]>([])
  const [roadValue, setRoadValue] = useState<string>('')

  const dispatch = useStoreDispatch()

  const [createTrip] = tripAPI.useCreateTripMutation()

  const { register, getValues, handleSubmit } = useForm<FormData>({
    defaultValues: {
      startDestination: '',
      endDestination: '',
      finishCountry: '',
      startCountry: '',
      startDestinationPlace: '',
      adultTicketPrice: 0,
      childTicketPrice: 0,
      description: '',
      travelDurationHours: 0,
      departureTimeHours: 0,
      finishCoordinates: '',
      startCoordinates: '',
      finishDestinationPlace: '',
      road: newRoad,
      schedule: newSchedule,
    },
  })

  const Submit = () => {
    createTrip({
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
      finishCoordinates: getValues('finishCoordinates'),
      startCoordinates: getValues('startCoordinates'),
      finishDestinationPlace: getValues('finishDestinationPlace'),
      road: newRoad,
      schedule: newSchedule,
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

  return (
    <S.CreateTrip>
      <S.CreateTripModalInner onSubmit={handleSubmit(Submit)}>
        <S.CreateTripModalSection>
          <S.CreateTripModalTitle>???????????? ????????</S.CreateTripModalTitle>
          <S.CreateTripModalClose onClick={handleCloseModal}>
            <CloseIcon fontSize='large' />
          </S.CreateTripModalClose>
        </S.CreateTripModalSection>
        <S.CreateTripModalList>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>?????????????? ???????????????? (??????????)</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='?????????????? ????????????????'
              type='text'
              {...register('startDestination')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>???????????? ???????????????? (??????????)</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='???????????? ????????????????'
              type='text'
              {...register('endDestination')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>?????????????? ???????????????? (????????????)</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='?????????????? ????????????????'
              type='text'
              {...register('startCountry')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>???????????? ???????????????? (????????????)</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='???????????? ????????????????'
              type='text'
              {...register('finishCountry')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>?????????? ????????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='?????????????????????? ????????????'
              type='text'
              {...register('startDestinationPlace')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>?????????? ????????????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='?????????????????????? ????????????'
              type='text'
              {...register('finishDestinationPlace')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>???????????????????? ?????????? ????????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='50.442745,30.493240'
              type='text'
              {...register('startCoordinates')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>???????????????????? ?????????? ????????????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='50.442745,30.493240'
              type='text'
              {...register('finishCoordinates')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>???????? ?????? ???????????? ?????? ????????????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='???????? ?????? ???????????? ?????? ????????????????'
              type='text'
              {...register('adultTicketPrice')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>???????? ?????? ???????????? ?????? ??????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='???????? ?????? ???????????? ?????? ??????????'
              type='text'
              {...register('childTicketPrice')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>?????? ?????????????????? ( ?? ?????????????? )</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='?????? ??????????????????'
              type='text'
              {...register('travelDurationHours')}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>?? ???????? ???????????? ??????????????????</S.CreateTripLabel>
            <S.CreateTripInput
              placeholder='?????? ??????????????????'
              type='text'
              {...register('departureTimeHours', {
                validate: (value) => value > 0 && value < 25,
              })}
            />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>????????</S.CreateTripLabel>
            <S.CreateTripTextArea placeholder='????????' rows={9} {...register('description')} />
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>????????</S.CreateTripLabel>
            <S.CreateTripRoadList>
              {newRoad.length > 0
                ? newRoad.map((road) => {
                    return (
                      <S.CreateTripRoadItem key={road}>
                        <S.CreateTripRoadDelete onClick={handleDeleteRoadItem(road)}>
                          <CloseIcon fontSize='small' />
                        </S.CreateTripRoadDelete>
                        {road}
                      </S.CreateTripRoadItem>
                    )
                  })
                : '???????????????? ?????? ???????????????? :('}
              <S.CreateTripRoadInputToAdd>
                <S.CreateTripInputRoad
                  placeholder='???????????? ??????????'
                  type='text'
                  value={roadValue}
                  onChange={(e) => setRoadValue(e.target.value)}
                />
                <S.CreateTripRoadAdd onClick={handleAddRoadItem}>
                  <SendIcon />
                </S.CreateTripRoadAdd>
              </S.CreateTripRoadInputToAdd>
            </S.CreateTripRoadList>
          </S.CreateTripModalListItem>
          <S.CreateTripModalListItem>
            <S.CreateTripLabel>??????????????</S.CreateTripLabel>
            <S.CreateTripScheduleList>
              {newSchedule.length > 0
                ? newSchedule.map((schedule) => {
                    return (
                      <S.CreateTripScheduleItem key={schedule}>
                        <S.CreateTripScheduleDelete onClick={handleDeleteScheduleItem(schedule)}>
                          <CloseIcon fontSize='small' />
                        </S.CreateTripScheduleDelete>
                        {schedule}
                      </S.CreateTripScheduleItem>
                    )
                  })
                : '???????????????? ?????? ???????????????? :('}
              <S.CreateTripScheduleBox>
                {scheduleData
                  .filter((data) => !newSchedule.includes(data))
                  .map((schedule) => {
                    return (
                      <S.CreateTripScheduleItem key={schedule}>
                        <S.CreateTripScheduleDelete onClick={handleAddScheduleItem(schedule)}>
                          <AddIcon fontSize='small' />
                        </S.CreateTripScheduleDelete>
                        {schedule}
                      </S.CreateTripScheduleItem>
                    )
                  })}
              </S.CreateTripScheduleBox>
            </S.CreateTripScheduleList>
          </S.CreateTripModalListItem>
        </S.CreateTripModalList>
        <S.CreateTripModalSubmitBox>
          <S.CreateTripModalSubmit type='submit'>???????????????? ??????????</S.CreateTripModalSubmit>
        </S.CreateTripModalSubmitBox>
      </S.CreateTripModalInner>
    </S.CreateTrip>
  )
}

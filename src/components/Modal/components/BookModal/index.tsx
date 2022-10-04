import CloseIcon from '@mui/icons-material/Close'
import { CircularProgress } from '@mui/material'
import { format } from 'date-fns'
import { useLayoutEffect, useState } from 'react'

import * as S from './styles'

import fourth from 'assets/images/4.png'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { tripAPI } from 'services/trip'
import { closeModal } from 'store/ui'
import { I_Trip } from 'types/Destionation'

export const BookModal = () => {
  const [tripInformation, setTripInformation] = useState<I_Trip>()
  const [activeTab, setActiveTab] = useState<boolean>(false)

  const modalData = useStoreSelector((state) => state.ui.modal)
  const dispatch = useStoreDispatch()

  const {
    data: getTripInformationData,
    isLoading: getTripInformationLoading,
    isSuccess: getTripInformationSuccess,
  } = tripAPI.useGetTripInformationQuery({
    startDestination: modalData.data.departure,
    endDestination: modalData.data.arrival,
    date: modalData.data.date,
  })

  const handleCloseModal = () => {
    dispatch(closeModal())
    setActiveTab(false)
  }

  const handlePlaceOrderConfirm = () => {
    setActiveTab(true)
  }

  useLayoutEffect(() => {
    if (getTripInformationData) setTripInformation(getTripInformationData)
  }, [getTripInformationData])

  if (getTripInformationLoading)
    return (
      <S.BookModalLoader>
        <CircularProgress sx={{ color: '#999' }} disableShrink />
      </S.BookModalLoader>
    )

  if (tripInformation && getTripInformationSuccess)
    return (
      <>
        {activeTab ? (
          <S.BookModalLoader>
            <S.BookModalError>
              Приєднуйтесь до спільноти у вайбер. <br /> Очікуйте дзвінок від менеджера.
              <S.BookModalErrorButton onClick={handleCloseModal}>
                повернутись назад
              </S.BookModalErrorButton>
              <S.JoinBox>
                <S.JoinLink href='https://invite.viber.com/?g2=AQAUhBjIwzODN0jzExsy1Oek37UiGD9XkMBGGUbfANinl5FkSQGJtKVPKA1IoUU7'>
                  <img src={fourth} alt='' />
                </S.JoinLink>
              </S.JoinBox>
              <S.BookModalError style={{ fontSize: '21px', fontWeight: '600' }}>
                Рейс успішно заброньовано.
              </S.BookModalError>
            </S.BookModalError>
          </S.BookModalLoader>
        ) : (
          <S.BookModal>
            <S.BookModalInner>
              <S.BookTopSection>
                <S.BookModalTitle>Підтвердження</S.BookModalTitle>
                <S.BookModalClose onClick={handleCloseModal}>
                  <CloseIcon fontSize='large' />
                </S.BookModalClose>
              </S.BookTopSection>
              <S.BookModalList>
                <S.BookModalListItem>
                  {tripInformation.startDestination} ({tripInformation.startCountry}) -{' '}
                  {tripInformation.endDestination} ({tripInformation.finishCountry})
                </S.BookModalListItem>
                <S.BookModalListItem>
                  Місце виїзду: {tripInformation.startDestinationPlace + ' '}
                  <S.BookDestLink
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://maps.google.com/?q=${tripInformation.startCoordinates}`}
                  >
                    (переглянути на карті)
                  </S.BookDestLink>
                </S.BookModalListItem>
                <S.BookModalListItem>
                  Місце прибуття: {tripInformation.finishDestinationPlace + ' '}
                  <S.BookDestLink
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://maps.google.com/?q=${tripInformation.finishCoordinates}`}
                  >
                    (переглянути на карті)
                  </S.BookDestLink>
                </S.BookModalListItem>
                <S.BookModalListItem>
                  Час у дорозі: орієнтовно {tripInformation.travelDurationHours} год.
                </S.BookModalListItem>
                <S.BookModalListItem>
                  Ціна дитячого квитка: {tripInformation.childTicketPrice} €
                </S.BookModalListItem>
                <S.BookModalListItem>
                  Ціна дорослого квитка: {tripInformation.adultTicketPrice} €
                </S.BookModalListItem>
                <S.BookModalListItem>
                  Дата виїзду: {format(new Date(tripInformation.departureTime), 'dd.MM.yyyy HH:mm')}{' '}
                  - Дата прибуття:{' '}
                  {format(new Date(tripInformation.arrivalTime), 'dd.MM.yyyy HH:mm')}
                </S.BookModalListItem>
                <S.BookModalItemDescriptionBox>
                  <S.BookModalItemDescriptionTitle>Опис</S.BookModalItemDescriptionTitle>
                  <S.BookModalDescriptionLabel>
                    {tripInformation.description}
                  </S.BookModalDescriptionLabel>
                </S.BookModalItemDescriptionBox>
                <S.BookModalRoadBox>
                  <S.BookModalRoadTitle>Шлях</S.BookModalRoadTitle>
                  <S.BookModalRoad>{tripInformation.road.join(' - ')}</S.BookModalRoad>
                </S.BookModalRoadBox>
              </S.BookModalList>
              <S.BookModalSubmitBox>
                <S.BookModalSubmit onClick={handlePlaceOrderConfirm}>Забронювати</S.BookModalSubmit>
              </S.BookModalSubmitBox>
            </S.BookModalInner>
          </S.BookModal>
        )}
      </>
    )

  return (
    <S.BookModalLoader>
      <S.BookModalError>
        Рейс не знайдено, спробуйте вибрати інший день поїздки.
        <S.BookModalErrorButton onClick={handleCloseModal}>
          повернутись назад
        </S.BookModalErrorButton>
      </S.BookModalError>
    </S.BookModalLoader>
  )
}

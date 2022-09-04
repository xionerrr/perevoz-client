/* eslint-disable @typescript-eslint/no-explicit-any */
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useMediaQuery } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { autoParkData } from './data'
import * as S from './styles'

import { Booking } from 'components/Booking'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { openModal } from 'store/ui'
import { E_Modals } from 'types/UI'
import { E_BreakPoints } from 'utils/constants/breakpoints'

enum E_SlideDirections {
  prev = 'prev',
  next = 'next',
}

export const AutoPark = () => {
  const [isBegin, setIsBegin] = useState<boolean>(false)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const sliderRef = useRef<any>(null)

  const dispatch = useStoreDispatch()

  const isDesktop = useMediaQuery(E_BreakPoints.desktopLarge)
  const isTablet = useMediaQuery(E_BreakPoints.table)

  const destinationsCount = isDesktop ? 3 : isTablet ? 2 : 1

  const handleChangeDirection = (direction: E_SlideDirections) => () => {
    if (!sliderRef.current) return
    direction === E_SlideDirections.next
      ? sliderRef.current.swiper.slideNext()
      : sliderRef.current.swiper.slidePrev()
    setIsBegin(sliderRef.current.swiper.isBeginning)
    setIsEnd(sliderRef.current.swiper.isEnd)
  }

  const handleOpenPhoto = (item: string) => () => {
    dispatch(
      openModal({
        window: E_Modals.openPhoto,
        data: item,
      }),
    )
  }

  useEffect(() => {
    if (sliderRef.current) {
      setIsBegin(sliderRef.current.swiper.isBeginning)
      setIsEnd(sliderRef.current.swiper.isEnd)
    }
  }, [sliderRef])

  return (
    <>
      <S.AutoPark>
        <S.AutoParkInner>
          <S.AvtoParkTitle>Наш Автопарк</S.AvtoParkTitle>
          <S.AvtoParkList>
            <Swiper
              onInit={(core) => {
                sliderRef.current = core.el
              }}
              slidesPerView={autoParkData.length >= 3 ? destinationsCount : 'auto'}
              spaceBetween={24}
              allowTouchMove={false}
            >
              {autoParkData.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <S.DirectionListItem>
                      <S.DirectionListItemTopSection onClick={handleOpenPhoto(item)}>
                        <S.DirectionListItemTopImage src={item} />
                      </S.DirectionListItemTopSection>
                    </S.DirectionListItem>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {autoParkData.length > destinationsCount && (
              <>
                <S.SwiperPrev
                  onClick={handleChangeDirection(E_SlideDirections.prev)}
                  $isBegin={isBegin}
                >
                  <KeyboardArrowLeftIcon />
                </S.SwiperPrev>
                <S.SwiperNext
                  onClick={handleChangeDirection(E_SlideDirections.next)}
                  $isEnd={isEnd}
                >
                  <KeyboardArrowRightIcon />
                </S.SwiperNext>
              </>
            )}
          </S.AvtoParkList>
        </S.AutoParkInner>
      </S.AutoPark>
      <S.Book>
        <S.BookingInner>
          <Booking />
        </S.BookingInner>
      </S.Book>
    </>
  )
}

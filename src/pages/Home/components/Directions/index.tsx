/* eslint-disable @typescript-eslint/no-explicit-any */
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { CircularProgress, useMediaQuery } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

import { I_DirectionItem } from 'types/Destionation'
import { E_BreakPoints } from 'utils/constants/breakpoints'

enum E_SlideDirections {
  prev = 'prev',
  next = 'next',
}

interface I_DirectionsProps {
  postDirections: I_DirectionItem[]
  getPostDirectionsSuccess: boolean
  getPostDirectionsLoading: boolean
}

export const Directions = ({
  postDirections,
  getPostDirectionsSuccess,
  getPostDirectionsLoading,
}: I_DirectionsProps) => {
  const [isBegin, setIsBegin] = useState<boolean>(false)
  const [isEnd, setIsEnd] = useState<boolean>(false)

  const sliderRef = useRef<any>(null)

  const isDesktop = useMediaQuery(E_BreakPoints.desktopLarge)
  const isTablet = useMediaQuery(E_BreakPoints.table)

  const destinationsCount = isDesktop ? 4 : isTablet ? 2 : 1

  SwiperCore.use([Autoplay])

  const handleChangeDirection = (direction: E_SlideDirections) => () => {
    if (!sliderRef.current) return
    direction === E_SlideDirections.next
      ? sliderRef.current.swiper.slideNext()
      : sliderRef.current.swiper.slidePrev()
    setIsBegin(sliderRef.current.swiper.isBeginning)
    setIsEnd(sliderRef.current.swiper.isEnd)
  }

  useEffect(() => {
    if (sliderRef.current) {
      setIsBegin(sliderRef.current.swiper.isBeginning)
      setIsEnd(sliderRef.current.swiper.isEnd)
    }
  }, [sliderRef])

  if (getPostDirectionsLoading) {
    return (
      <S.DirectionsLoader>
        <CircularProgress sx={{ color: '#999' }} disableShrink />
      </S.DirectionsLoader>
    )
  }

  if (!getPostDirectionsSuccess) {
    return (
      <S.DirectionsLoader>
        <CircularProgress sx={{ color: '#999' }} disableShrink />
      </S.DirectionsLoader>
    )
  }

  return (
    <S.Directions>
      <S.DirectionsInner>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <S.DirectionsTitle>?????????????? ????????????????</S.DirectionsTitle>
        </div>
        <S.DirectionsList>
          <Swiper
            onInit={(core) => {
              sliderRef.current = core.el
            }}
            autoplay={{ delay: 2000 }}
            slidesPerView={postDirections.length >= 4 ? destinationsCount : 'auto'}
            spaceBetween={24}
            allowTouchMove
          >
            {postDirections.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <S.DirectionListItem>
                    <S.DirectionListItemTopSection>
                      <S.DirectionListItemTopImage
                        src={import.meta.env.VITE_BACKEND_LINK + item.countryUrlPath}
                      />
                      <S.DirectionListItemTitle>{item.country}</S.DirectionListItemTitle>
                    </S.DirectionListItemTopSection>
                    <S.DirectionListItemDetails>
                      {item.destinations.map((direction, index) => {
                        return (
                          <S.DirectionListItemDirection key={index}>
                            {direction.destination}
                          </S.DirectionListItemDirection>
                        )
                      })}
                    </S.DirectionListItemDetails>
                  </S.DirectionListItem>
                </SwiperSlide>
              )
            })}
          </Swiper>
          {!isDesktop
            ? null
            : postDirections.length > destinationsCount && (
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
        </S.DirectionsList>
      </S.DirectionsInner>
    </S.Directions>
  )
}

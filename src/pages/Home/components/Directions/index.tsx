/* eslint-disable @typescript-eslint/no-explicit-any */
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

import { I_DirectionItem } from 'types/Destionation'

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

  const destinationsCount = 4

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

  return (
    <S.Directions>
      <S.DirectionsInner>
        <S.DirectionsTitle>Основні напрямки</S.DirectionsTitle>
        <S.DirectionsList>
          <Swiper
            onInit={(core) => {
              sliderRef.current = core.el
            }}
            slidesPerView={postDirections.length >= 4 ? destinationsCount : 'auto'}
            spaceBetween={24}
            allowTouchMove={false}
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
          {postDirections.length > destinationsCount && (
            <>
              <S.SwiperPrev
                onClick={handleChangeDirection(E_SlideDirections.prev)}
                $isBegin={isBegin}
              >
                <KeyboardArrowLeftIcon />
              </S.SwiperPrev>
              <S.SwiperNext onClick={handleChangeDirection(E_SlideDirections.next)} $isEnd={isEnd}>
                <KeyboardArrowRightIcon />
              </S.SwiperNext>
            </>
          )}
        </S.DirectionsList>
      </S.DirectionsInner>
    </S.Directions>
  )
}

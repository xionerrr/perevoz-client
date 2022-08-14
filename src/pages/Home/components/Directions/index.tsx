/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { directionItems } from './data'
import * as S from './styles'

import { I_DirectionItems } from 'types/Destionation'

enum E_SlideDirections {
  prev = 'prev',
  next = 'next',
}

interface I_DirectionsProps {
  postDirections: I_DirectionItems[]
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
            slidesPerView={4}
            spaceBetween={24}
            allowTouchMove={false}
          >
            {directionItems.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <S.DirectionListItem>
                    <S.DirectionListItemTopSection>
                      <S.DirectionListItemTopImage src={item.image} />
                      <S.DirectionListItemTitle>{item.label}</S.DirectionListItemTitle>
                    </S.DirectionListItemTopSection>
                    <S.DirectionListItemDetails>
                      {item.directions.map((direction, index) => {
                        return (
                          <S.DirectionListItemDirection key={index}>
                            {direction}
                          </S.DirectionListItemDirection>
                        )
                      })}
                    </S.DirectionListItemDetails>
                  </S.DirectionListItem>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <S.SwiperPrev onClick={handleChangeDirection(E_SlideDirections.prev)} $isBegin={isBegin}>
            ‹
          </S.SwiperPrev>
          <S.SwiperNext onClick={handleChangeDirection(E_SlideDirections.next)} $isEnd={isEnd}>
            ›
          </S.SwiperNext>
        </S.DirectionsList>
      </S.DirectionsInner>
    </S.Directions>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { directionItems } from './data'
import * as S from './styles'

enum E_SlideDirections {
  prev = 'prev',
  next = 'next',
}

export const Directions = () => {
  const sliderRef = useRef<any>(null)

  const handleChangeDirection = (direction: E_SlideDirections) => () => {
    if (!sliderRef.current) return
    direction === E_SlideDirections.next
      ? sliderRef.current.swiper.slideNext()
      : sliderRef.current.swiper.slidePrev()
  }

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
          <S.SwiperPrev onClick={handleChangeDirection(E_SlideDirections.prev)}>‹</S.SwiperPrev>
          <S.SwiperNext onClick={handleChangeDirection(E_SlideDirections.next)}>›</S.SwiperNext>
        </S.DirectionsList>
      </S.DirectionsInner>
    </S.Directions>
  )
}

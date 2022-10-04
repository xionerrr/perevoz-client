import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const AutoPark = styled.div`
  position: relative;

  padding: 72px 0 172px;

  &::before {
    pointer-events: none;
    content: '';

    position: absolute;
    z-index: 0;
    top: 355px;
    right: 0;
    bottom: 0;
    left: 0;

    background: #f6f5f5;
  }
`

export const Book = styled.div`
  padding: 72px 0;

  background: url(${bookingBg}) no-repeat 0 25%;
  background-size: cover;
`

export const BookingInner = styled.div`
  width: 100%;
  width: 90%;
  min-width: 320px;
  max-width: 525px;
  margin: 0 auto;
`

export const AutoParkInner = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
`

export const AvtoParkTitle = styled.h3`
  position: relative;

  margin-bottom: 40px;
  padding: 18px;

  font-size: 64px;
  color: #149708;
  text-align: center;

  background-color: #f7f5f5;
  border: none;

  @media (max-width: 625px) {
    font-size: 48px;
  }
`
export const AvtoParkEmblems = styled.div`
  user-select: none;

  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(0%, -37.5%);

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  height: 48px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1600px) {
    position: relative;
    left: 0;

    width: 156px;
    margin: 16px auto 0;
  }
`

export const AvtoParkList = styled.div`
  cursor: pointer;

  position: relative;

  display: flex;
  gap: 16px;
  justify-content: center;

  width: 100%;

  .swiper {
    cursor: default;

    overflow: hidden;

    width: 100%;

    .swiper-wrapper {
      display: flex;

      width: 100%;
    }

    .swiper-slide {
      display: flex;

      width: 100%;
    }
  }
`

interface I_SwiperPrevProps {
  $isBegin: boolean
}

export const SwiperPrev = styled.button<I_SwiperPrevProps>`
  cursor: pointer;
  user-select: none;

  position: absolute;
  top: 50%;
  left: -48px;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  font-size: 32px;
  color: #fff;

  background-color: #000;
  border: 0;

  @media (max-width: 1268px) {
    bottom: 0;
    left: 0;
  }
`

interface I_SwiperNextProps {
  $isEnd: boolean
}

export const SwiperNext = styled.button<I_SwiperNextProps>`
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: -48px;
  transform: translate(50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  font-size: 32px;
  color: #fff;

  background-color: #000;
  border: 0;

  @media (max-width: 1268px) {
    right: 0;
    bottom: 0;
  }
`

export const DirectionListItem = styled.div`
  width: inherit;
  height: fit-content;

  box-shadow: 0 0 4px 0 rgb(0 0 0 / 9%);
`

export const DirectionListItemTopSection = styled.div`
  cursor: pointer;

  position: relative;
`

export const DirectionListItemTopImage = styled.img`
  user-select: none;

  width: 100%;
  height: 328px;

  object-fit: cover;
`

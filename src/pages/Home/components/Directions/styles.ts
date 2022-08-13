import styled from 'styled-components'

export const Directions = styled.div`
  position: relative;

  padding: 72px 0;

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

export const DirectionsInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

export const DirectionsTitle = styled.h3`
  margin-bottom: 40px;

  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
`

export const DirectionsList = styled.div`
  cursor: pointer;

  position: relative;

  display: flex;
  gap: 16px;
  justify-content: center;

  width: 100%;

  .swiper {
    overflow: hidden;

    width: 100%;

    .swiper-wrapper {
      display: flex;

      width: 100%;
    }

    .swiper-slide {
      display: flex;

      width: 100%;
      padding: 6px;
    }
  }
`

export const SwiperPrev = styled.button`
  cursor: pointer;
  user-select: none;

  position: absolute;
  top: 50%;
  left: -48px;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;

  width: 48px;
  height: 48px;

  font-size: 32px;
  color: #fff;

  background-color: #000;
`

export const SwiperNext = styled.button`
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: -48px;
  transform: translate(50%, -50%);

  display: flex;
  justify-content: center;

  width: 48px;
  height: 48px;

  font-size: 32px;
  color: #fff;

  background-color: #000;
`

export const DirectionListItem = styled.div`
  width: inherit;
  height: fit-content;

  box-shadow: 0 0 4px 0 rgb(0 0 0 / 9%);
`

export const DirectionListItemTopSection = styled.div`
  position: relative;
`

export const DirectionListItemTopImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const DirectionListItemTitle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  margin-bottom: 0;
  padding: 0 0 10px 20px;

  font-size: 1.875rem;
  font-weight: 700;
  color: #fff;

  background-image: linear-gradient(to top, #000, transparent);
`

export const DirectionListItemDetails = styled.div`
  overflow-y: auto;

  height: 200px;
  padding: 18px;

  background-color: #fff;
`

export const DirectionListItemDirection = styled.div`
  position: relative;

  &::before {
    content: '-';

    margin-right: 6px;
  }
`
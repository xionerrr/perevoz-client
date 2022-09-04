import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const Services = styled.div`
  position: relative;

  padding: 72px 0;
`

export const ServicesInner = styled.div`
  width: 90%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
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

export const ServicesTitle = styled.h3`
  margin-bottom: 40px;

  font-size: 64px;
  color: #149708;

  @media (max-width: 625px) {
    font-size: 48px;
  }
`
export const ServicesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: 968px;
  margin-bottom: 40px;

  font-size: 21px;
`

export const ServicesSubTitle = styled.h4``

export const ServicesDescription = styled.p`
  @media (max-width: 625px) {
    font-size: 16px;
  }
`

export const Adventages = styled.div``

export const AdventagesTitle = styled.div`
  margin-bottom: 12px;

  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 625px) {
    font-size: 24px;
  }
`

export const AdventagesList = styled.ul`
  margin-bottom: 72px;
`

export const AdventageItem = styled.li`
  margin-bottom: 6px;

  font-size: 18px;

  &::before {
    content: '-';

    margin-right: 6px;
  }

  @media (max-width: 625px) {
    font-size: 16px;
  }
`

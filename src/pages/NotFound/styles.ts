import { Link } from 'react-router-dom'
import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const NotFound = styled.div`
  min-height: 625px;
  padding: 72px 0;
`

export const NotFoundInner = styled.div`
  width: 100%;
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

export const NotFoundTitle = styled.h1`
  margin-bottom: 32px;

  font-size: 64px;
  font-weight: 700;
  color: #149708;

  @media (max-width: 625px) {
    font-size: 48px;
  }
`

export const NotFoundSubTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`

export const NotFoundLink = styled(Link)`
  color: #000;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

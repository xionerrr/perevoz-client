import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const Faq = styled.div`
  padding: 72px 0;
`

export const Book = styled.div`
  padding: 72px 0;

  background: url(${bookingBg}) no-repeat 0 25%;
  background-size: cover;
`

export const FaqInner = styled.div`
  width: 100%;
  width: 90%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`

export const BookingInner = styled.div`
  width: 100%;
  width: 90%;
  min-width: 320px;
  max-width: 525px;
  margin: 0 auto;
`

export const FaqTitle = styled.h3`
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

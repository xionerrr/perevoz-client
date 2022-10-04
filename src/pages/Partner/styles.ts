import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const Partner = styled.div`
  position: relative;

  padding: 72px 0;
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

export const PartnerInner = styled.div`
  width: 90%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`

export const PartnerTitle = styled.h3`
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

export const PartnerSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: 968px;
  margin-bottom: 40px;

  font-size: 21px;
`

export const PartnerParagraph = styled.p`
  @media (max-width: 625px) {
    font-size: 16px;
  }
`

export const PartnerPhones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  width: 100%;
  max-width: 968px;
`

export const PartnerPhoneLink = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  color: #000;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`

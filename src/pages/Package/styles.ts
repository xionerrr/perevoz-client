import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const Package = styled.div`
  position: relative;

  padding: 72px 0;
`

export const PackageInner = styled.div`
  width: 100%;
  width: 90%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`

export const PackageTitle = styled.h3`
  margin-bottom: 40px;

  font-size: 64px;
  color: #149708;

  @media (max-width: 625px) {
    font-size: 48px;
  }
`

export const PackageSubTitle = styled.h4`
  margin-bottom: 40px;

  font-size: 32px;

  @media (max-width: 625px) {
    font-size: 18px;
  }
`

export const PackageInfo = styled.div`
  margin-bottom: 72px;
`

export const PackageList = styled.ul``

export const PackageItem = styled.li`
  margin-bottom: 12px;

  font-size: 21px;

  &::before {
    content: '-';

    margin-right: 6px;
  }

  @media (max-width: 625px) {
    font-size: 16px;
  }
`

export const PackageDescription = styled.p``

export const PackageWarningInner = styled.div``

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

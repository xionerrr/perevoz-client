import styled from 'styled-components'

import bookingBg from 'assets/images/map-bg.jpg'

export const Introduce = styled.div`
  position: relative;

  padding: 72px 0;

  background: url(${bookingBg}) no-repeat 0 50%;
  background-size: cover;
`

export const IntroduceTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0 24px;

  font-size: 21px;
  font-weight: 700;
  color: #232329;
  text-transform: uppercase;
`

export const IntroduceInner = styled.div`
  width: 90%;
  max-width: 525px;
  margin: 0 auto;
`

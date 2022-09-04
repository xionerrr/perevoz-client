import { useMediaQuery } from '@mui/material'

import * as S from './styles'

import { Links } from '../Links'

import { Booking } from 'components/Booking'
import { E_BreakPoints } from 'utils/constants/breakpoints'

export const Introduce = () => {
  const isDesktop = useMediaQuery(E_BreakPoints.desktopLarge)

  return (
    <S.Introduce>
      <Links />
      {!isDesktop && <S.IntroduceTitle>BALTIC BUSTRANS 24/7</S.IntroduceTitle>}
      <S.IntroduceInner>
        <Booking />
      </S.IntroduceInner>
    </S.Introduce>
  )
}

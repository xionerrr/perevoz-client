import * as S from './styles'

import { Booking } from 'components/Booking'

export const Introduce = () => {
  return (
    <S.Introduce>
      <S.IntroduceInner>
        <Booking />
      </S.IntroduceInner>
    </S.Introduce>
  )
}

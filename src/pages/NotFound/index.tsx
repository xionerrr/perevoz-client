import * as S from './styles'

import { Booking } from 'components/Booking'
import { ROUTES } from 'utils/constants/routes'

export const NotFound = () => {
  return (
    <>
      <S.NotFound>
        <S.NotFoundInner>
          <S.NotFoundTitle>Сторінка не знайдена</S.NotFoundTitle>
          <S.NotFoundSubTitle>
            <S.NotFoundLink to={ROUTES.home}>На головну?</S.NotFoundLink>
          </S.NotFoundSubTitle>
        </S.NotFoundInner>
      </S.NotFound>
      <S.Book>
        <S.BookingInner>
          <Booking />
        </S.BookingInner>
      </S.Book>
    </>
  )
}

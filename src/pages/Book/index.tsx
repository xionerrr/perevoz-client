import * as S from './styles'

import { Booking } from 'components/Booking'
import { ROUTES } from 'utils/constants/routes'

export const Book = () => {
  return (
    <S.Book>
      <S.BookInfoBox>
        <S.BookTitle>Онлайн бронювання</S.BookTitle>
        <S.BookSubTitle>
          Забронювати поїздку можна за допомогою цьої простої форми. Вона суттєво зекономить Ваш
          час, так як після відправки Вам залишається лише підтвердити бронювання по телефону.
        </S.BookSubTitle>
        <S.BookWarning>
          Увага! Перед заповненням форми пропонуємо ознайомитись з{' '}
          <S.BookRedirect to={ROUTES.faq}>розділом інформація</S.BookRedirect> з відповідями на на
          часто запитувані питання.
        </S.BookWarning>
      </S.BookInfoBox>
      <S.BookInner>
        <Booking />
      </S.BookInner>
    </S.Book>
  )
}

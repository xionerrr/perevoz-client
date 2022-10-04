import { Form } from './components/Form'
import { adventagesList } from './data'
import * as S from './styles'

import { Booking } from 'components/Booking'

export const Services = () => {
  return (
    <>
      <S.Services>
        <S.ServicesInner>
          <S.ServicesTitle>Послуги трансферу</S.ServicesTitle>
          <S.ServicesInfo>
            <S.ServicesSubTitle>
              Оренда мікроавтобуса з України в любу точку Європи та в зворотньому напрямку.
            </S.ServicesSubTitle>
            <S.ServicesDescription>
              Компанія BALTIC BUSTANS здійснює пасажирські перевезення понад 20 років. За цей час ми
              напрацювали колосальний досвід і готові запропонувати кращі транспортні послуги.
            </S.ServicesDescription>
          </S.ServicesInfo>
          <S.Adventages>
            <S.AdventagesTitle>ЗАМОВЛЯЮЧИ ТРАНСФЕР У НАС ВИ ОТРИМУЄТЕ:</S.AdventagesTitle>
            <S.AdventagesList>
              {adventagesList.map((adventage, index) => {
                return <S.AdventageItem key={index}>{adventage};</S.AdventageItem>
              })}
            </S.AdventagesList>
          </S.Adventages>
        </S.ServicesInner>
      </S.Services>
      <Form />
      <S.Book>
        <S.BookingInner>
          <Booking />
        </S.BookingInner>
      </S.Book>
    </>
  )
}

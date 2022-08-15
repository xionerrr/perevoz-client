import * as S from './styles'

import { FaqList } from 'components/FaqList'

export const Faq = () => {
  return (
    <S.Faq>
      <S.FaqInner>
        <S.FaqTitle>Популярні запитання клієнтів</S.FaqTitle>
        <FaqList />
      </S.FaqInner>
    </S.Faq>
  )
}

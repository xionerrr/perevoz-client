import * as S from './styles'

import { FaqList } from 'components/FaqList'

export const HomeFaq = () => {
  return (
    <S.HomeFaq>
      <S.HomeFaqInner>
        <S.HomeFaqTitle>ПОПУЛЯРНІ ЗАПИТАННЯ І ВІДПОВІДІ</S.HomeFaqTitle>
        <FaqList />
      </S.HomeFaqInner>
    </S.HomeFaq>
  )
}

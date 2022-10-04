import * as S from './styles'

import { FaqList } from 'components/FaqList'

export const HomeFaq = () => {
  return (
    <S.HomeFaq>
      <S.HomeFaqInner>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <S.HomeFaqTitle>ПОПУЛЯРНІ ЗАПИТАННЯ І ВІДПОВІДІ</S.HomeFaqTitle>
        </div>
        <FaqList />
      </S.HomeFaqInner>
    </S.HomeFaq>
  )
}

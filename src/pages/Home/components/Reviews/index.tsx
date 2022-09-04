import { useState } from 'react'

import { reviewsPosts } from './data'
import * as S from './styles'

export const Reviews = () => {
  const [isMore, setIsMore] = useState<boolean>(false)

  const handleToggleMore = () => {
    setIsMore((prev) => !prev)
  }

  return (
    <S.Reviews>
      <S.ReviewsInner>
        <S.ReviewsTitle>МИ ЦІНУЄМО НАШИХ ПАСАЖИРІВ</S.ReviewsTitle>
        <S.ReviewsBox isMore={isMore}>
          {reviewsPosts.map((posts, index) => {
            return (
              <S.ReviewsList key={index}>
                {posts.map((post, index) => {
                  return (
                    <S.ReviewsItem key={index}>
                      <S.ReviewImage src={post} alt={'image' + post} />
                    </S.ReviewsItem>
                  )
                })}
              </S.ReviewsList>
            )
          })}
        </S.ReviewsBox>
        <S.ReviewsMore>
          <S.ReviewsButton onClick={handleToggleMore}>
            {isMore ? 'Добре, зрозуміло' : 'Показати більше...'}
          </S.ReviewsButton>
        </S.ReviewsMore>
      </S.ReviewsInner>
    </S.Reviews>
  )
}

import { useLayoutEffect, useState } from 'react'

import { Directions, HomeFaq, Features, Introduce } from './components'
import * as S from './styles'

import { postsAPI } from 'services/posts'
import { I_DirectionItem } from 'types/Destionation'

export const Home = () => {
  const [postDirections, setPostDirections] = useState<I_DirectionItem[]>([])

  const {
    data: getPostDirections,
    isSuccess: getPostDirectionsSuccess,
    isLoading: getPostDirectionsLoading,
  } = postsAPI.useGetPostsQuery()

  useLayoutEffect(() => {
    if (getPostDirections) setPostDirections(getPostDirections)
  }, [getPostDirections])

  return (
    <S.Home>
      <S.HomeInner>
        <Introduce />
        <Features />
        <Directions
          postDirections={postDirections}
          getPostDirectionsSuccess={getPostDirectionsSuccess}
          getPostDirectionsLoading={getPostDirectionsLoading}
        />
        <HomeFaq />
      </S.HomeInner>
    </S.Home>
  )
}

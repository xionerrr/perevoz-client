import { useLayoutEffect, useState } from 'react'

import { Directions, HomeFaq, Features, Introduce, Reviews } from './components'
import * as S from './styles'

import { tripAPI } from 'services/trip'
import { I_DirectionItem } from 'types/Destionation'

export const Home = () => {
  const [postDirections, setPostDirections] = useState<I_DirectionItem[]>([])

  const {
    data: getPostDirections,
    isSuccess: getPostDirectionsSuccess,
    isLoading: getPostDirectionsLoading,
  } = tripAPI.useGetTripDestinationsOverviewQuery()

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
        <Reviews />
      </S.HomeInner>
    </S.Home>
  )
}

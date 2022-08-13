import { Directions, Features, Introduce } from './components'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Home>
      <Introduce />
      <Features />
      <Directions />
    </S.Home>
  )
}

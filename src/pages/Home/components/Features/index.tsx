import { featuresItems } from './data'
import * as S from './styles'

export const Features = () => {
  return (
    <S.Features>
      <S.FeaturesInner>
        <S.FeaturesTitle>Чому варто бронювати білети саме в нас?</S.FeaturesTitle>
        <S.FeaturesContent>
          {featuresItems.map((item, index) => {
            return (
              <S.FeaturesItem key={index}>
                <S.FeaturesItemIcon>{item.icon}</S.FeaturesItemIcon>
                <S.FeaturesItemLabel>{item.label}</S.FeaturesItemLabel>
                <S.FeaturesItemDescription>{item.description}</S.FeaturesItemDescription>
              </S.FeaturesItem>
            )
          })}
        </S.FeaturesContent>
      </S.FeaturesInner>
    </S.Features>
  )
}

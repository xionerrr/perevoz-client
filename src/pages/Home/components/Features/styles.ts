import styled from 'styled-components'

export const Features = styled.div`
  padding: 72px 0;
`

export const FeaturesInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

export const FeaturesTitle = styled.h3`
  margin-bottom: 4.0625rem;
  padding: 0 24px;

  font-size: 30px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 625px) {
    font-size: 28px;
  }
`

export const FeaturesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;

  padding: 0 48px;
`

export const FeaturesItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  max-width: 375px;

  text-align: center;
`

export const FeaturesItemIcon = styled.div`
  color: #149708;
`

export const FeaturesItemLabel = styled.div`
  font-weight: 700;
  text-transform: uppercase;
`

export const FeaturesItemDescription = styled.div``

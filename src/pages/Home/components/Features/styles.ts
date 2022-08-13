import styled from 'styled-components'

export const Features = styled.div``

export const FeaturesInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 60px;
`

export const FeaturesTitle = styled.h3`
  margin-bottom: 4.0625rem;
  padding: 0;

  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
`

export const FeaturesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;

  padding: 0 48px;
`

export const FeaturesItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

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

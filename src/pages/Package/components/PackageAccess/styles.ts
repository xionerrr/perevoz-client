import styled from 'styled-components'

export const PackageAccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin: 172px 0 72px;
`

export const PackageAccessTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: 96px;

  background: linear-gradient(90deg, #149708 0%, #000 100%);
`

export const PackageAccessTitle = styled.div`
  padding: 24px 12px;

  font-size: 32px;
  font-weight: 800;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 1268px) {
    font-size: 28px;
  }
`

export const PackageAccessInner = styled.div`
  width: 100%;
  width: 90%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`

export const PackageAccessMainTransportations = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 172px;

  margin-bottom: 72px;

  @media (max-width: 1268px) {
    grid-template-columns: 1fr;
    gap: 96px;

    margin-bottom: 48px;
  }
`

export const PackageAccessTransportationBox = styled.div``

export const PackageAccessTransportationBoxTitle = styled.div`
  position: relative;

  margin-bottom: 96px;

  font-size: 21px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;

  &::after {
    content: '';

    position: absolute;
    bottom: -12px;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: #149708;
  }

  @media (max-width: 1268px) {
    font-size: 18px;
  }
`

export const PackageAccessTransportationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: 0 0 0 42px;

  list-style-position: outside;
  list-style-type: square;
`

export const PackageAccessTransportationListItem = styled.li`
  font-size: 18px;

  @media (max-width: 1268px) {
    font-size: 16px;
  }
`

export const PackageAccessDescription = styled.div`
  font-size: 18px;

  @media (max-width: 1268px) {
    font-size: 16px;
  }
`

export const PackageAccessMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px 0;
`

export const PackageAccessMainLabel = styled.div``

export const PackageAccessMainSub = styled.div``

export const PackageAccessSecondary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const PackageAccessListItem = styled.li`
  &::before {
    content: '-';

    margin-right: 6px;
  }
`

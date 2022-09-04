import { allowedTransportation, disallowedTransportation, transportationDescription } from './data'
import * as S from './styles'

export const PackageAccess = () => {
  return (
    <S.PackageAccess>
      <S.PackageAccessTitleBox>
        <S.PackageAccessTitle>
          ЩО ДОЗВОЛЕНО/ЗАБОРОНЕНО ПЕРЕВОЗИТИ ЧЕРЕЗ КОРДОН УКРАЇНИ ТА ПОЛЬЩІ.
        </S.PackageAccessTitle>
      </S.PackageAccessTitleBox>
      <S.PackageAccessInner>
        <S.PackageAccessMainTransportations>
          <S.PackageAccessTransportationBox>
            <S.PackageAccessTransportationBoxTitle>
              Дозволено перевозити
            </S.PackageAccessTransportationBoxTitle>
            <S.PackageAccessTransportationList>
              {allowedTransportation.map((item) => {
                return (
                  <S.PackageAccessTransportationListItem key={item}>
                    {item}
                  </S.PackageAccessTransportationListItem>
                )
              })}
            </S.PackageAccessTransportationList>
          </S.PackageAccessTransportationBox>
          <S.PackageAccessTransportationBox>
            <S.PackageAccessTransportationBoxTitle>
              Заборонено перевозити
            </S.PackageAccessTransportationBoxTitle>
            <S.PackageAccessTransportationList>
              {disallowedTransportation.map((item) => {
                return (
                  <S.PackageAccessTransportationListItem key={item}>
                    {item}
                  </S.PackageAccessTransportationListItem>
                )
              })}
            </S.PackageAccessTransportationList>
          </S.PackageAccessTransportationBox>
        </S.PackageAccessMainTransportations>
        <S.PackageAccessDescription>
          <S.PackageAccessMain>
            <S.PackageAccessMainLabel>
              {transportationDescription.main.mainLabel}
            </S.PackageAccessMainLabel>
            <S.PackageAccessMainSub>
              {transportationDescription.main.mainSub}
            </S.PackageAccessMainSub>
          </S.PackageAccessMain>
          <S.PackageAccessSecondary>
            {transportationDescription.secondary.map((item) => {
              return (
                <div key={item.secondaryLabel}>
                  <div>{item.secondaryLabel}</div>
                  <ul>
                    {item.secondarySub?.map((sub) => {
                      return <S.PackageAccessListItem key={sub}>{sub}</S.PackageAccessListItem>
                    })}
                  </ul>
                </div>
              )
            })}
          </S.PackageAccessSecondary>
        </S.PackageAccessDescription>
      </S.PackageAccessInner>
    </S.PackageAccess>
  )
}

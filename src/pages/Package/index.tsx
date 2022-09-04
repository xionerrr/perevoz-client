import { PackageAccess } from './components/PackageAccess'
import { packagesList } from './data'
import * as S from './styles'

import { Booking } from 'components/Booking'
import { PackageCalculator } from 'components/PackageCalculator'

export const Package = () => {
  return (
    <>
      <S.Package>
        <S.PackageInner>
          <S.PackageTitle>Передача посилок</S.PackageTitle>
          <S.PackageSubTitle>УКРАЇНА - ЛИТВА - ЛАТВІЯ - ЕСТОНІЯ</S.PackageSubTitle>
          <S.PackageInfo>
            <S.PackageList>
              {packagesList.map((item, index) => {
                return <S.PackageItem key={index}>{item}</S.PackageItem>
              })}
            </S.PackageList>
          </S.PackageInfo>
          <PackageCalculator />
        </S.PackageInner>
        <PackageAccess />
      </S.Package>
      <S.Book>
        <S.BookingInner>
          <Booking />
        </S.BookingInner>
      </S.Book>
    </>
  )
}

import CallIcon from '@mui/icons-material/Call'
import { useLocation } from 'react-router-dom'

import { headerItems, numbers } from './data'
import * as S from './styles'

import { ROUTES } from 'utils/constants/routes'

export const Header = () => {
  const location = useLocation()

  return (
    <S.Header>
      <S.HeaderInner>
        <S.HeaderBox>
          <S.HeaderLogo>
            <S.HeaderLogoLink to={ROUTES.home}>BALTIC BUSTRANS 24/7</S.HeaderLogoLink>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderUl>
              {headerItems.map((item, index) => {
                return (
                  <S.HeaderLi key={index} $isActive={location.pathname === item.to}>
                    <S.HeaderLink to={item.to} $isActive={location.pathname === item.to}>
                      {item.label}
                    </S.HeaderLink>
                  </S.HeaderLi>
                )
              })}
            </S.HeaderUl>
          </S.HeaderNav>
          <S.HeaderBook>
            <S.HeaderBookBox>
              <S.HeaderBookPhone href={'tel:' + numbers.first}>
                <CallIcon fontSize='small' />
                {numbers.first}
              </S.HeaderBookPhone>
              <S.HeaderBookAdditionalPhone href={'tel:' + numbers.second}>
                <CallIcon fontSize='small' />
                {numbers.second}
              </S.HeaderBookAdditionalPhone>
            </S.HeaderBookBox>
            <S.HeaderBookLink to={ROUTES.book}>Забронювати</S.HeaderBookLink>
          </S.HeaderBook>
        </S.HeaderBox>
      </S.HeaderInner>
    </S.Header>
  )
}

import CallIcon from '@mui/icons-material/Call'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'

import { headerItems, numbers } from './data'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { toggleSidebar } from 'store/ui'
import { E_BreakPoints } from 'utils/constants/breakpoints'
import { ROUTES } from 'utils/constants/routes'

export const Header = () => {
  const dispatch = useStoreDispatch()

  const location = useLocation()

  const isDesktop = useMediaQuery(E_BreakPoints.desktopLarge)

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    <>
      {isDesktop ? (
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
      ) : (
        <S.HeaderMobile>
          <S.HeaderMobileInner>
            <S.HeaderSidebarToggle onClick={handleToggleSidebar}>
              <MenuIcon />
            </S.HeaderSidebarToggle>
            <S.HeaderBookBox>
              <S.HeaderBookAdditionalPhone href={'tel:' + numbers.first}>
                <CallIcon fontSize='small' />
                +38-066-658-49-38
              </S.HeaderBookAdditionalPhone>
            </S.HeaderBookBox>
          </S.HeaderMobileInner>
        </S.HeaderMobile>
      )}
    </>
  )
}

import CallIcon from '@mui/icons-material/Call'
import CloseIcon from '@mui/icons-material/Close'
import { useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'

import { numbers, sidebarItems } from './data'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { toggleSidebar } from 'store/ui'
import { E_BreakPoints } from 'utils/constants/breakpoints'
import { ROUTES } from 'utils/constants/routes'

export const Sidebar = () => {
  const dispatch = useStoreDispatch()
  const isSidebarOpened = useStoreSelector((state) => state.ui.isSidebarOpened)

  const location = useLocation()

  const isDesktop = useMediaQuery(E_BreakPoints.desktopLarge)

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    <>
      {isSidebarOpened && !isDesktop && <S.SidebarOverlay onClick={handleToggleSidebar} />}
      <S.SidebarInner isSidebarOpened={isSidebarOpened}>
        <S.SidebarCloseBox>
          <S.SidebarClose onClick={handleToggleSidebar}>
            <CloseIcon />
          </S.SidebarClose>
        </S.SidebarCloseBox>
        <S.SidebarContent>
          <S.SidebarNav>
            <S.SidebarUl>
              {sidebarItems.map((item, index) => {
                return (
                  <S.SidebarLi key={index} onClick={handleToggleSidebar}>
                    <S.SidebarLink to={item.to} $isActive={location.pathname === item.to}>
                      {item.label}
                    </S.SidebarLink>
                  </S.SidebarLi>
                )
              })}
            </S.SidebarUl>
          </S.SidebarNav>
          <S.SidebarBook>
            <S.SidebarBookBox>
              <S.SidebarBookPhone href={'tel:' + numbers.first}>
                <CallIcon fontSize='small' />
                {numbers.first}
              </S.SidebarBookPhone>
              <S.SidebarBookAdditionalPhone href={'tel:' + numbers.second}>
                <CallIcon fontSize='small' />
                {numbers.second}
              </S.SidebarBookAdditionalPhone>
            </S.SidebarBookBox>
            <S.SidebarBookLink onClick={handleToggleSidebar} to={ROUTES.book}>
              Забронювати
            </S.SidebarBookLink>
          </S.SidebarBook>
        </S.SidebarContent>
      </S.SidebarInner>
    </>
  )
}

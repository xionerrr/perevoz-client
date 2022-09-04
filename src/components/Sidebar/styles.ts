import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarOverlay = styled.div`
  touch-action: none;

  position: fixed;
  z-index: 996;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

interface I_SidebarInnerProps {
  isSidebarOpened: boolean
}

export const SidebarInner = styled.div<I_SidebarInnerProps>`
  touch-action: none;

  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  flex-shrink: 0;

  width: 100%;
  height: 100%;
  margin-left: ${({ isSidebarOpened }) => (isSidebarOpened ? '0px' : '-1672px')};

  background-color: #fff;
  box-shadow: 8px 0 15px -3px rgb(0 0 0 / 10%);

  transition: margin 525ms cubic-bezier(0.2, 0, 0.5, 1) 0s;
`

export const SidebarCloseBox = styled.div`
  position: absolute;
  right: 0;
`

export const SidebarClose = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding: 9px 16px;

  color: #000;

  background-color: transparent;
  border: 0;

  transition: all 0.3s;

  &:hover {
    color: #149708;
  }
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 325px;
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 48px;
`

export const SidebarLogo = styled.div`
  width: 100%;
  padding: 24px 0;
`

export const SidebarLogoLink = styled(Link)`
  padding: 18px 2px;

  font-size: 24px;
  font-weight: 500;
  color: #3f5573;
  text-transform: uppercase;
`

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 0;
`

export const SidebarUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
  padding: 24px 0;
`

export const SidebarLi = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

interface I_SidebarLinkProps {
  $isActive: boolean
}

export const SidebarLink = styled(Link)<I_SidebarLinkProps>`
  width: 100%;
  padding: 18px 2px;

  font-size: 16px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? '#149708' : '#000')};
  text-transform: uppercase;
`

export const SidebarBook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
`

export const SidebarBookBox = styled.div`
  display: flex;
  gap: 32px;

  margin: 24px 0;

  @media (max-width: 525px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const SidebarBookPhone = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #000;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`

export const SidebarBookAdditionalPhone = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #000;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`

export const SidebarBookLink = styled(Link)`
  cursor: pointer;

  min-width: 197px;
  padding: 16px 18px;

  font-size: 14px;
  line-height: 1.43;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  background-color: #149708;
  border-radius: 4px;
  box-shadow: 0 9px 13px 0 rgb(0 0 0 / 34%);

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #5f5573;
  }
`

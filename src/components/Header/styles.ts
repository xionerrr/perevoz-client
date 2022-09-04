import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;

  background-color: #232329;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 12%);
`

export const HeaderInner = styled.div`
  height: 81px;
  padding: 13px 45px;

  border-bottom: 1px solid #333;
`

export const HeaderBox = styled.div`
  display: flex;
  gap: 72px;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 24px;
`

export const HeaderLogo = styled.div``

export const HeaderLogoLink = styled(Link)`
  padding: 18px 2px;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;

  height: 100%;
`

export const HeaderUl = styled.ul`
  display: flex;
  gap: 48px;
  align-items: center;

  height: 100%;
`

interface I_HeaderLiProps {
  $isActive: boolean
}

export const HeaderLi = styled.li<I_HeaderLiProps>`
  position: relative;

  display: flex;
  align-items: center;

  height: 100%;

  &::after {
    content: '';

    position: absolute;
    right: -15px;
    bottom: -15px;
    left: -15px;

    height: 4px;

    background-color: ${({ $isActive }) => ($isActive ? '#149708' : 'transparent')};

    transition: background-color 0.3s;
  }

  &:hover {
    &::after {
      background-color: #149708;
    }
  }
`

interface I_HeaderLinkProps {
  $isActive: boolean
}

export const HeaderLink = styled(Link)<I_HeaderLinkProps>`
  padding: 18px 2px;

  font-size: 14px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? '#149708' : '#fff')};
  text-transform: uppercase;
`

export const HeaderBook = styled.div`
  display: flex;
  gap: 24px;

  margin-left: auto;
`

export const HeaderBookBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`

export const HeaderBookPhone = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #fff;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`

export const HeaderBookAdditionalPhone = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #fff;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`

export const HeaderBookLink = styled(Link)`
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

export const HeaderMobile = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;

  background-color: #232329;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 12%);
`

export const HeaderMobileInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 45px;
  padding: 9px 32px;

  border-bottom: 1px solid #333;
`

export const HeaderSidebarToggle = styled.button`
  cursor: pointer;

  width: auto;
  height: auto;

  color: #fff;

  background-color: transparent;
  border: 0;
`

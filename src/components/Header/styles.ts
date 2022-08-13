import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;

  background-color: #fff;
`

export const HeaderInner = styled.div`
  height: 81px;
  padding: 13px 45px;

  border-bottom: 1px solid #fff;
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

  font-size: 1.05rem;
  font-weight: 500;
  color: #3f5573;
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

    background-color: ${({ $isActive }) => ($isActive ? '#3F5573' : 'transparent')};

    transition: background-color 0.3s;
  }

  &:hover {
    &::after {
      background-color: #3f5573;
    }
  }
`

interface I_HeaderLinkProps {
  $isActive: boolean
}

export const HeaderLink = styled(Link)<I_HeaderLinkProps>`
  padding: 18px 2px;

  font-size: 14px;
  font-weight: 500;
  color: ${({ $isActive }) => ($isActive ? '#3F5573' : '#000')};
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
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #000;

  &:hover {
    color: #777;
  }
`

export const HeaderBookAdditionalPhone = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #000;

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

  background-color: #3f5573;
  border-radius: 4px;
  box-shadow: 0 9px 13px 0 rgb(0 0 0 / 34%);

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #5f5573;
  }
`

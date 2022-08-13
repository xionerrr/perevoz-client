import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #fff;
`

export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 32px;
`

export const FooterLogo = styled.div``

export const FooterLogoButton = styled.button`
  cursor: pointer;

  padding: 18px 2px;

  font-size: 16px;
  font-weight: 500;
  color: #3f5573;
  text-transform: uppercase;

  background-color: transparent;
  border: 0;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 32px;
`

export const FooterLink = styled.a`
  color: #000;

  transition: color 0.3s;

  &:hover {
    color: #149708;
  }
`

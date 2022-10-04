import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #232329;
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

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const FooterLogo = styled.div``

export const FooterLogoButton = styled.button`
  cursor: pointer;

  padding: 18px 2px;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;

  background-color: transparent;
  border: 0;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 32px;
`

export const FooterLink = styled.a`
  color: #fff;

  transition: color 0.3s;

  &:hover {
    color: #149708;
  }
`

export const FooterJoinBox = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  margin: 24px 0;
`

export const FooterJoinLink = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: underline;

  img {
    width: 128px;
  }
`

export const FooterBookBox = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`

export const FooterBookBookPhone = styled.a`
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

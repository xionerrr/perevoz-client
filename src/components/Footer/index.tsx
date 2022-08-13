import { footerSocialLinks } from './data'
import * as S from './styles'

export const Footer = () => {
  const handleClickLogo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <S.Footer>
      <S.FooterInner>
        <S.FooterLogo>
          <S.FooterLogoButton onClick={handleClickLogo}>BALTIC BUSTRANS 24/7</S.FooterLogoButton>
        </S.FooterLogo>
        <S.FooterLinks>
          {footerSocialLinks.map((link, index) => {
            return (
              <S.FooterLink key={index} href={link.to}>
                {link.icon}
              </S.FooterLink>
            )
          })}
        </S.FooterLinks>
      </S.FooterInner>
    </S.Footer>
  )
}

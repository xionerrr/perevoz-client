import CallIcon from '@mui/icons-material/Call'
import { useMediaQuery } from '@mui/material'

import { footerSocialLinks } from './data'
import * as S from './styles'

import fourth from 'assets/images/4.png'
import { E_BreakPoints } from 'utils/constants/breakpoints'

export const Footer = () => {
  const isTablet = useMediaQuery(E_BreakPoints.table)

  const handleClickLogo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <S.Footer>
      <S.FooterInner>
        <S.FooterJoinBox>
          <S.FooterJoinLink href='https://invite.viber.com/?g2=AQAUhBjIwzODN0jzExsy1Oek37UiGD9XkMBGGUbfANinl5FkSQGJtKVPKA1IoUU7'>
            <img src={fourth} alt='' />
          </S.FooterJoinLink>
        </S.FooterJoinBox>
        {!isTablet && (
          <S.FooterBookBox>
            <S.FooterBookBookPhone href={'tel:' + '+380666584938'}>
              <CallIcon fontSize='small' />
              +380666584938
            </S.FooterBookBookPhone>
            <S.FooterBookBookPhone href={'tel:' + '+380978263533'}>
              <CallIcon fontSize='small' />
              +380978263533
            </S.FooterBookBookPhone>
          </S.FooterBookBox>
        )}
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

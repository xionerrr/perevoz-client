import CallIcon from '@mui/icons-material/Call'

import * as S from './styles'

export const Partner = () => {
  return (
    <S.Partner>
      <S.PartnerInner>
        <S.PartnerTitle>Партнерам</S.PartnerTitle>
        <S.PartnerSubTitle>
          <S.PartnerParagraph>
            Запрошуємо до співпраці диспетчерів, кураторів та трудових агентів.
          </S.PartnerParagraph>
          <S.PartnerParagraph>
            Компанія «BALTIC BUSTRANS» – надійний партнер у сфері пасажирських перевезень пропонує
            диспетчерам різних напрямків співробітництво на взаємовигідних умовах.
          </S.PartnerParagraph>
          <S.PartnerParagraph>
            Якщо ви здатні займатися ефективним пошуком пасажирів і хочете отримувати за цю
            конкурентну винагороду, дзвоніть!
          </S.PartnerParagraph>
        </S.PartnerSubTitle>
        <S.PartnerPhones>
          <S.PartnerPhoneLink href={'tel:+38-066-658-49-38'}>
            <CallIcon fontSize='small' />
            +38-066-658-49-38 (Vodafone)
          </S.PartnerPhoneLink>
          <S.PartnerPhoneLink href={'tel:+38-097-826-35-33'}>
            <CallIcon fontSize='small' />
            +38-097-826-35-33 (Київстар)
          </S.PartnerPhoneLink>
        </S.PartnerPhones>
      </S.PartnerInner>
    </S.Partner>
  )
}

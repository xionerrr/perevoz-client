import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import { ReactNode } from 'react'

enum E_FooterSocialLinks {
  telegram = 'tg://resolve?domain=Korobks',
  viber = 'viber://chat?number=%2B380666584938',
  whatsapp = 'https://api.whatsapp.com/send?phone=380666584938',
}

interface I_FooterSocialLinks {
  icon: ReactNode
  to: E_FooterSocialLinks
}

export const footerSocialLinks: I_FooterSocialLinks[] = [
  {
    icon: <TelegramIcon />,
    to: E_FooterSocialLinks.telegram,
  },
  {
    icon: <LocalPhoneIcon />,
    to: E_FooterSocialLinks.viber,
  },
  {
    icon: <WhatsAppIcon />,
    to: E_FooterSocialLinks.whatsapp,
  },
]

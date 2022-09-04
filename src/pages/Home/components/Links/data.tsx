import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import { ReactNode } from 'react'

enum E_LinksData {
  telegram = 'tg://resolve?domain=Korobks',
  viber = 'viber://chat?number=%2B380666584938',
  whatsapp = 'https://api.whatsapp.com/send?phone=380666584938',
}

interface I_LinksData {
  icon: ReactNode
  to: E_LinksData
  color: string
}

export const linksData: I_LinksData[] = [
  {
    icon: <TelegramIcon />,
    to: E_LinksData.telegram,
    color: '#0FC2E2',
  },
  {
    icon: <LocalPhoneIcon />,
    to: E_LinksData.viber,
    color: '#6950DC',
  },
  {
    icon: <WhatsAppIcon />,
    to: E_LinksData.whatsapp,
    color: '#4ED979',
  },
]

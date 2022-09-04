import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import PaymentIcon from '@mui/icons-material/Payment'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import WifiIcon from '@mui/icons-material/Wifi'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import { ReactNode } from 'react'

interface I_FeatureItems {
  icon: ReactNode
  label: string
  description: string
}

export const featuresItems: I_FeatureItems[] = [
  {
    label: 'Сучасні автомобілі',
    icon: <TimeToLeaveIcon fontSize='large' />,
    description:
      'Комфорт і безпека - понад усе. Для наших клієнтів найкращі автомобілі преміум класу.',
  },
  {
    label: 'Досвідчені водії',
    icon: <EmojiPeopleIcon fontSize='large' />,
    description:
      'Ми зібрали команду справжніх професіоналів, які дотримуються високих стандартів транспортних послуг.',
  },
  {
    label: 'Wi-Fi',
    icon: <WifiIcon fontSize='large' />,
    description: `Упродовж усієї подорожі ви зможете залишатися на зв'язку зі своїми рідними.`,
  },
  {
    label: 'Зручне онлайн-бронювання',
    icon: <PaymentIcon fontSize='large' />,
    description: 'Замовляй онлайн - сплачуй при посадці.',
  },
  {
    label: 'Довгий період на ринку',
    icon: <WorkHistoryIcon fontSize='large' />,
    description:
      'У нас є колосальний досвід пасажирських перевезень, і ми готові запропонувати найкращий сервіс.',
  },
]

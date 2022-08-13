import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ChairIcon from '@mui/icons-material/Chair'
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
    icon: <ChairIcon fontSize='large' />,
    description: 'Комфорт і безпека – вище за все. До Ваших послуг кращі автомобілі преміум класу.',
  },
  {
    label: 'Досвідчені водії',
    icon: <TimeToLeaveIcon fontSize='large' />,
    description:
      'Ми зібрали команду справжніх професіоналів, які дотримуються високих стандартів транспортних послуг.',
  },
  {
    label: 'Wi-Fi',
    icon: <WifiIcon fontSize='large' />,
    description: 'Всі машини: сучасні та в ідеальному стані. Наші клієнти заслуговують найкращого.',
  },
  {
    label: 'Пунктуальність',
    icon: <AccessTimeIcon fontSize='large' />,
    description:
      'Ми цінуємо Ваш час, тому можете бути впевнені – Ви приїдете до місця призначення вчасно!',
  },
  {
    label: 'Супровід по маршруту',
    icon: <ChairIcon fontSize='large' />,
    description: 'Комфорт і безпека – вище за все. До Ваших послуг кращі автомобілі преміум класу.',
  },
  {
    label: 'Довгий період на ринку',
    icon: <WorkHistoryIcon fontSize='large' />,
    description:
      'У нас є колосальний досвід пасажирських перевезень і ми готові запропонувати найкращий сервіс!',
  },
]

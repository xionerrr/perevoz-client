import { ReactNode } from 'react'

import * as S from './styles'

interface I_AdminLayout {
  children: ReactNode
}
export const AdminLayout = ({ children }: I_AdminLayout) => {
  return <S.AdminLayout>{children}</S.AdminLayout>
}

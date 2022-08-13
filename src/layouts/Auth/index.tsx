import { ReactNode } from 'react'

import * as S from './styles'

interface I_AuthLayout {
  children: ReactNode
}

export const AuthLayout = ({ children }: I_AuthLayout) => {
  return <S.AuthLayout>{children}</S.AuthLayout>
}

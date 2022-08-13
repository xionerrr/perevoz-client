import { ReactNode } from 'react'

import * as S from './styles'

import { Header } from 'components/Header'

interface I_MainLayout {
  children: ReactNode
}
export const MainLayout = ({ children }: I_MainLayout) => {
  return (
    <S.MainLayout>
      <Header />
      <S.MainLayoutInner>{children}</S.MainLayoutInner>
    </S.MainLayout>
  )
}

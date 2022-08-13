import { ReactNode } from 'react'

import * as S from './styles'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

interface I_MainLayout {
  children: ReactNode
}
export const MainLayout = ({ children }: I_MainLayout) => {
  return (
    <S.MainLayout>
      <Header />
      <S.MainLayoutInner>{children}</S.MainLayoutInner>
      <Footer />
    </S.MainLayout>
  )
}

import { useMediaQuery } from '@mui/material'
import { ReactNode, useEffect, useState } from 'react'

import * as S from './styles'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Spoiler } from 'components/Spoiler'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_BreakPoints } from 'utils/constants/breakpoints'

interface I_MainLayout {
  children: ReactNode
}
export const MainLayout = ({ children }: I_MainLayout) => {
  const [isSpoilerVisible, setIsSpoilerVisible] = useState<boolean>(false)

  const isSidebarOpened = useStoreSelector((state) => state.ui.isSidebarOpened)
  const isModalOpened = useStoreSelector((state) => state.ui.modal.isOpen)

  const isDesktop = useMediaQuery(E_BreakPoints.desktopLarge)

  useEffect(() => {
    const timeout = setTimeout(() => setIsSpoilerVisible(true), 2500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <S.MainLayout>
      <Header />
      {!isDesktop && <Sidebar />}
      <S.MainLayoutInner
        isSidebarOpened={isSidebarOpened}
        isModalOpened={isModalOpened}
        isDesktop={isDesktop}
      >
        {isSpoilerVisible && <Spoiler />}
        {children}
        <Footer />
      </S.MainLayoutInner>
    </S.MainLayout>
  )
}

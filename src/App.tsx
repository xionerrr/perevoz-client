import { useEffect } from 'react'

import { Modal } from 'components/Modal'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { AppRoutes } from 'routes'
import * as S from 'styles/App'
import { GlobalStyles } from 'styles/global'

const App = () => {
  const isModalOpen = useStoreSelector((state) => state.ui.modal.isOpen)
  const isSidebarOpened = useStoreSelector((state) => state.ui.isSidebarOpened)

  useEffect(() => {
    if (isModalOpen || isSidebarOpened) return document.body.classList.add('locked')
    return document.body.classList.remove('locked')
  }, [isModalOpen, isSidebarOpened])

  function test(d: any, w: any, s: any) {
    const widgetHash = 'ns7sxempfdw2wgx1pfz8',
      gcw = d.createElement(s)
    gcw.type = 'text/javascript'
    gcw.async = true
    gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
    const sn = d.getElementsByTagName(s)[0]
    sn.parentNode.insertBefore(gcw, sn)
  }

  test(document, window, 'script')

  return (
    <S.App>
      <AppRoutes />
      <GlobalStyles isModalOpen={isModalOpen} isSidebarOpened={isSidebarOpened} />
      <Modal />
    </S.App>
  )
}

export default App

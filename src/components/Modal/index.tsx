import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect } from 'react'

import { ModalComponents } from './components'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { closeModal } from 'store/ui'

export const Modal = () => {
  const modal = useStoreSelector((state) => state.ui.modal)
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  const ModalWindow = modal.window && modal.isOpen ? ModalComponents[modal.window] : () => <></>

  return (
    <AnimatePresence>
      {modal.isOpen && (
        <S.Modal
          className='modal'
          transition={{ duration: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <S.ModalOverlay className='modal-overlay' onClick={handleClose} />
          <ModalWindow />
        </S.Modal>
      )}
    </AnimatePresence>
  )
}

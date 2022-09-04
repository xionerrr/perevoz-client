import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { closeModal } from 'store/ui'

export const OpenPhoto = () => {
  const modalData = useStoreSelector((state) => state.ui.modal.data)
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <>
      <S.CloseBox>
        <S.CloseButton onClick={handleClose}>Закрити</S.CloseButton>
      </S.CloseBox>
      <S.OpenPhoto>
        <S.OpenPhotoInner>
          <S.Photo src={modalData} alt='userMedia' onClick={handleClose} />
        </S.OpenPhotoInner>
      </S.OpenPhoto>
    </>
  )
}

import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

import * as S from './styles'

import { LocalStorage } from 'utils/helpers/localStorage'

export const Spoiler = () => {
  const [storage, setStorage] = useState(LocalStorage.getSpoiler())

  const handleSetStorage = () => {
    LocalStorage.setSpoiler(String(Date.now()))
    setStorage(LocalStorage.getSpoiler())
  }

  if (!storage)
    return (
      <S.Spoiler
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <S.SpoilerInner>
          <S.SpoilerTitle>Військовий час</S.SpoilerTitle>
          <S.SpoilerSubTitle>
            У зв'язку із тривалими перевірками прикордонними та митними службами, автобуси до країн
            ЄС прибувають із затримкою!
          </S.SpoilerSubTitle>
          <S.SpoilerClose onClick={handleSetStorage}>
            <CloseIcon />
          </S.SpoilerClose>
        </S.SpoilerInner>
      </S.Spoiler>
    )

  return null
}

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

interface I_AuthLayout {
  children: ReactNode
}

export const AuthLayout = ({ children }: I_AuthLayout) => {
  const navigate = useNavigate()

  const handleNavigateToHomePage = () => {
    navigate('/')
  }

  return (
    <S.AuthLayout>
      <S.GoBack onClick={handleNavigateToHomePage}>
        <ArrowBackIcon fontSize='large' />
      </S.GoBack>
      <S.AuthLayoutInner>
        <S.FormBox>{children}</S.FormBox>
      </S.AuthLayoutInner>
    </S.AuthLayout>
  )
}

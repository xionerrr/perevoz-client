import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

import { Content } from './components/Content'

import * as S from './styles'

import { ROUTES } from 'utils/constants/routes'

export const Edit = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    navigate(ROUTES.home, { replace: true })
  }

  return (
    <S.Edit>
      <S.LogoutBox>
        <S.Logout onClick={handleSignOut}>
          <ArrowBackIcon fontSize='large' />
        </S.Logout>
      </S.LogoutBox>
      <Content />
    </S.Edit>
  )
}

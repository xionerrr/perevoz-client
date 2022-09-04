import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { authAPI } from 'services/auth'
import { ROUTES } from 'utils/constants/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

type FormData = {
  username: string
  password: string
}

export const SignIn = () => {
  const navigate = useNavigate()

  const [
    userLogin,
    { data: userLoginData, isSuccess: userLoginSuccess, isLoading: userLoginLoading },
  ] = authAPI.useUserLoginMutation()

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormData>()

  const handleLogin = () => {
    userLogin({ username: getValues('username'), password: getValues('password') })
  }

  useEffect(() => {
    if (userLoginData && userLoginData.token && userLoginSuccess) {
      LocalStorage.setAuthToken(userLoginData.token)
      navigate(ROUTES.admin, { replace: true })
    }
  }, [userLoginData, userLoginSuccess])

  return (
    <S.SignIn>
      <S.UpperLabelBox>
        <S.MainLabel>Адмін панель</S.MainLabel>
      </S.UpperLabelBox>
      <S.Form autoComplete='off' onSubmit={handleSubmit(handleLogin)}>
        <S.InputBox>
          <S.UserInput
            type='text'
            placeholder='Логін'
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
            loginError={Boolean(errors.username)}
            {...register('username', { required: true })}
          />
          {errors.username && <S.InputErrorText>Невірні дані юзера</S.InputErrorText>}
        </S.InputBox>
        <S.InputBox>
          <S.PassInput
            type='password'
            placeholder='Пароль'
            autoComplete='off'
            passError={Boolean(errors.password)}
            {...register('password', { required: true, minLength: 3 })}
          />
          {errors.password && <S.InputErrorText>Невірні дані</S.InputErrorText>}
        </S.InputBox>
        <S.LoginButton
          disabled={userLoginLoading}
          userLoginLoading={userLoginLoading}
          type='submit'
        >
          Вхід
        </S.LoginButton>
      </S.Form>
    </S.SignIn>
  )
}
